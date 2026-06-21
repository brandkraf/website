#!/usr/bin/env node
/**
 * Build-time sitemap generator.
 * Combines static public routes (parsed from App.jsx) with the live published
 * blog posts (fetched from Supabase) so the sitemap stays current automatically.
 * Self-guarding: any failure falls back to static routes and never breaks the build.
 */
import fs from 'fs';
import path from 'path';
import { locationSlugs } from '../src/data/locations.js';

const SITE = 'https://www.brandkraf.com';
const SUPABASE_URL = 'https://xweoognqlpvafyxhzvgz.supabase.co';
const ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3ZW9vZ25xbHB2YWZ5eGh6dmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NDE0NjcsImV4cCI6MjA5NzQxNzQ2N30.SgeHayMBuaBraN2BjYmXr475AVFpnvSOLyYlRgm-2Rc';
const PRIVATE = ['/admin', '/admin-login', '/checkout', '/payment', '/media-upload'];

function priorityFor(p) {
  if (p === '/') return '1.0';
  return p.split('/').filter(Boolean).length <= 1 ? '0.8' : '0.7';
}

async function main() {
  const cwd = process.cwd();
  const today = new Date().toISOString().slice(0, 10);
  const app = fs.readFileSync(path.join(cwd, 'src', 'App.jsx'), 'utf8');

  const routes = [...app.matchAll(/path="(\/[^"]*)"/g)]
    .map((m) => m[1])
    .filter((p) => p !== '*' && !p.includes(':') && !PRIVATE.some((b) => p === b || p.startsWith(b)));

  const urls = [...new Set(routes)].map((p) => ({
    loc: SITE + (p === '/' ? '' : p),
    lastmod: today,
    priority: priorityFor(p),
  }));

  // Location landing pages (dynamic :city route is excluded above; add the real URLs here).
  for (const slug of locationSlugs) {
    urls.push({ loc: `${SITE}/digital-marketing-agency/${slug}`, lastmod: today, priority: '0.8' });
  }

  // Pull live published blog posts from Supabase (anon key + RLS = published only).
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_date&published=eq.true`,
      { headers: { apikey: ANON, Authorization: `Bearer ${ANON}` } }
    );
    if (res.ok) {
      const posts = await res.json();
      for (const post of posts) {
        urls.push({
          loc: `${SITE}/blog/${post.slug}`,
          lastmod: post.published_date || today,
          priority: '0.7',
        });
      }
      console.log(`[sitemap] added ${posts.length} blog posts`);
    } else {
      console.warn(`[sitemap] blog fetch returned ${res.status}; static routes only`);
    }
  } catch (e) {
    console.warn('[sitemap] blog fetch skipped:', e && e.message);
  }

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(cwd, 'public', 'sitemap.xml'), xml);
  console.log(`[sitemap] wrote ${urls.length} URLs total`);
}

main().catch((e) => {
  console.error('[sitemap] non-fatal error:', e && e.message);
  process.exit(0);
});
