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

// One <url> block. When bilingual is live, includes hreflang alternates for EN/BM.
function urlBlock(loc, base, lastmod, priority) {
  const hreflang = BM_SITEMAP
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

  // Live published blog posts.
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_date&published=eq.true`,
      { headers: { apikey: ANON, Authorization: `Bearer ${ANON}` } }
    );
    if (res.ok) {
      const posts = await res.json();
      for (const post of posts) bases.push({ path: `/blog/${post.slug}`, lastmod: post.published_date || today, priority: '0.7' });
      console.log(`[sitemap] added ${posts.length} blog posts`);
    } else {
      console.warn(`[sitemap] blog fetch returned ${res.status}; routes only`);
    }
  } catch (e) {
    console.warn('[sitemap] blog fetch skipped:', e && e.message);
  }

  // Emit EN + BM entries for every base path.
  const blocks = [];
  for (const b of bases) {
    blocks.push(urlBlock(enUrl(b.path), b.path, b.lastmod, b.priority));
    if (BM_SITEMAP) blocks.push(urlBlock(msUrl(b.path), b.path, b.lastmod, b.priority));
  }

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    blocks.join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(cwd, 'public', 'sitemap.xml'), xml);
  console.log(`[sitemap] wrote ${blocks.length} URLs (${bases.length} pages x EN+BM)`);
}

main().catch((e) => {
  console.error('[sitemap] non-fatal error:', e && e.message);
  process.exit(0);
});
