#!/usr/bin/env node
/**
 * Build-time sitemap generator (bilingual).
 * Base paths come from src/routes.jsx; locations + cluster guides from their data
 * files; blog posts live from Supabase. Each page is emitted twice — English (root)
 * and Bahasa Melayu (/ms) — with hreflang alternates so Google ranks both.
 * Self-guarding: any failure logs and never breaks the build.
 */
import fs from 'fs';
import path from 'path';
import { locationSlugs } from '../src/data/locations.js';
import { clusterSlugs } from '../src/data/clusters.js';

const SITE = 'https://www.brandkraf.com';
const SUPABASE_URL = 'https://xweoognqlpvafyxhzvgz.supabase.co';
const ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3ZW9vZ25xbHB2YWZ5eGh6dmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NDE0NjcsImV4cCI6MjA5NzQxNzQ2N30.SgeHayMBuaBraN2BjYmXr475AVFpnvSOLyYlRgm-2Rc';
const PRIVATE = ['/admin', '/admin-login', '/checkout', '/payment', '/media-upload'];
// Keep in sync with BM_LIVE in src/components/Hreflang.jsx. While false, the sitemap
// lists English URLs only (BM pages are noindex until their content is translated).
const BM_SITEMAP = false;

function priorityFor(p) {
  if (p === '/') return '1.0';
  return p.split('/').filter(Boolean).length <= 1 ? '0.8' : '0.7';
}

const enUrl = (base) => SITE + (base === '/' ? '' : base);
const msUrl = (base) => SITE + (base === '/' ? '/ms' : `/ms${base}`);

// One <url> block. Includes hreflang alternates when bilingual is true (i.e. a BM
// version of this page exists and is indexable).
function urlBlock(loc, base, lastmod, priority, bilingual) {
  const hreflang = bilingual
    ? `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl(base)}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl(base)}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl(base)}"/>\n`
    : '';
  return (
    `  <url>\n    <loc>${loc}</loc>\n${hreflang}` +
    `    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  );
}

async function main() {
  const cwd = process.cwd();
  const today = new Date().toISOString().slice(0, 10);
  const routesSrc = fs.readFileSync(path.join(cwd, 'src', 'routes.jsx'), 'utf8');

  // Base (English) paths from the shared route config — drop dynamic + private.
  const routePaths = [...routesSrc.matchAll(/path:\s*'([^']+)'/g)]
    .map((m) => m[1])
    .filter((p) => p.startsWith('/') && !p.includes(':') && !PRIVATE.some((b) => p === b || p.startsWith(b)));

  const bases = [...new Set(routePaths)].map((p) => ({ path: p, lastmod: today, priority: priorityFor(p) }));

  // Location landing pages + topic cluster guides (dynamic routes, added explicitly).
  for (const slug of locationSlugs) bases.push({ path: `/digital-marketing-agency/${slug}`, lastmod: today, priority: '0.8' });
  for (const slug of clusterSlugs) bases.push({ path: `/guides/${slug}`, lastmod: today, priority: '0.7' });

  // Live published blog posts (title_ms tells us which have a BM translation).
  let blogPosts = [];
  try {
    const headers = { apikey: ANON, Authorization: `Bearer ${ANON}` };
    let res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_date,title_ms&published=eq.true`, { headers });
    if (!res.ok) {
      // title_ms column may not exist yet (migration not run) — retry without it so blog URLs still ship.
      res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_date&published=eq.true`, { headers });
    }
    if (res.ok) {
      blogPosts = await res.json();
      const translated = blogPosts.filter((p) => p.title_ms).length;
      console.log(`[sitemap] added ${blogPosts.length} blog posts (${translated} translated to BM)`);
    } else {
      console.warn(`[sitemap] blog fetch returned ${res.status}; routes only`);
    }
  } catch (e) {
    console.warn('[sitemap] blog fetch skipped:', e && e.message);
  }

  const blocks = [];
  // Routes/data pages: EN always; BM only when the global bilingual flag is on.
  for (const b of bases) {
    blocks.push(urlBlock(enUrl(b.path), b.path, b.lastmod, b.priority, BM_SITEMAP));
    if (BM_SITEMAP) blocks.push(urlBlock(msUrl(b.path), b.path, b.lastmod, b.priority, true));
  }
  // Blog posts: EN always; BM per-post once that post is translated (title_ms present).
  for (const post of blogPosts) {
    const base = `/blog/${post.slug}`;
    const lastmod = post.published_date || today;
    const hasMs = !!post.title_ms;
    blocks.push(urlBlock(enUrl(base), base, lastmod, '0.7', hasMs));
    if (hasMs) blocks.push(urlBlock(msUrl(base), base, lastmod, '0.7', true));
  }

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    blocks.join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(cwd, 'public', 'sitemap.xml'), xml);
  console.log(`[sitemap] wrote ${blocks.length} URLs`);
}

main().catch((e) => {
  console.error('[sitemap] non-fatal error:', e && e.message);
  process.exit(0);
});
