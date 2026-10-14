#!/usr/bin/env node
/**
 * Head prerender (no headless browser).
 *
 * After `vite build`, this writes a per-route `index.html` for every public,
 * static route with that page's own <title>, meta description, Open Graph tags,
 * Twitter tags, and a per-route <link rel="canonical">. The body stays the SPA
 * shell (#root) — only the <head> is specialised — so all crawlers (Google,
 * Bing, social, AI) get correct per-page metadata without executing JS.
 *
 * Self-guarding: any error is logged and the process exits 0, so a prerender
 * problem can never break the production build/deploy.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { OFFICE, OFFICE_POSTAL_ADDRESS, OFFICE_GEO } from '../src/data/office.js';

const SITE = 'https://www.brandkraf.com';
const PRIVATE_PREFIXES = ['/admin', '/admin-login', '/checkout', '/payment', '/media-upload'];

// Reused from generate-llms.js so extraction stays consistent.
const CLEAN = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
};
const HELMET_RE = /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i;
const TITLE_RE = /<title[^>]*?>\s*([\s\S]*?)\s*<\/title>/i;
const DESC_RE = /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i;
// Bilingual pages wrap head strings in T('en', 'ms') — extract the English arg
// (the prerendered file lives at the EN URL; /ms is handled client-side).
const T_CALL_RE = /^\{?\s*T\(\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*,/;
const DESC_T_RE = /<meta\s+name=["']description["']\s+content=\{\s*T\(\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\s*,/i;

function unescapeJs(s) {
  return s.replace(/\\(['"\\])/g, '$1');
}
// path + element component from a routes.jsx entry: { path: '/x', element: <Comp /> }
const ROUTE_RE = /path:\s*'([^']+)',\s*element:\s*<(\w+)\s*\/>/g;

function cleanText(t) {
  if (!t) return t;
  return t
    .replace(CLEAN.jsxExpressions, '')
    .replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&apos;/g, "'")
    .trim();
}
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Recursively map componentBasename -> absolute file path under src/pages
function mapComponents(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) mapComponents(full, acc);
    else if (entry.name.endsWith('.jsx')) acc[entry.name.replace(/\.jsx$/, '')] = full;
  }
  return acc;
}

function isPublicStatic(p) {
  if (p === '*' || p.includes(':')) return false;
  if (PRIVATE_PREFIXES.some((b) => p === b || p.startsWith(b))) return false;
  return true;
}

function extractMeta(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const helmet = raw.match(HELMET_RE);
  if (!helmet) return {};
  const titleM = helmet[1].match(TITLE_RE);
  const descM = helmet[1].match(DESC_RE);

  let title = null;
  if (titleM) {
    const inner = titleM[1].trim();
    const tCall = inner.match(T_CALL_RE);
    if (tCall) title = unescapeJs(tCall[1] ?? tCall[2]);
    else if (!/[{}`]/.test(inner)) title = cleanText(inner);
  }

  let desc = null;
  if (descM && !/[{}`]/.test(descM[1])) {
    desc = cleanText(descM[1]);
  } else {
    const descT = helmet[1].match(DESC_T_RE);
    if (descT) desc = unescapeJs(descT[1] ?? descT[2]);
  }
  return { title, desc };
}

function buildHtml(template, { title, desc, url, bodyHtml, schema }) {
  let html = template;
  if (title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`);
    html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escAttr(title)}" />`);
    html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escAttr(title)}" />`);
  }
  if (desc) {
    html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escAttr(desc)}" />`);
    html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escAttr(desc)}" />`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escAttr(desc)}" />`);
  }
  // Per-route og:url + canonical
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${escAttr(url)}" />`);
  const canonicalTag = `<link rel="canonical" href="${escAttr(url)}" />`;
  const commentRe = /<!--\s*No hard-coded canonical[\s\S]*?-->/;
  const existingCanonicalRe = /<link rel="canonical" href="[^"]*"\s*\/>/;
  if (commentRe.test(html)) html = html.replace(commentRe, canonicalTag);
  // Replace (not skip) an existing canonical so reruns over an already-processed
  // template stay correct instead of stamping the home canonical on every page.
  else if (existingCanonicalRe.test(html)) html = html.replace(existingCanonicalRe, canonicalTag);
  else html = html.replace('</head>', `\t\t${canonicalTag}\n\t</head>`);

  // Per-route structured data. index.html carries only the site-wide
  // ProfessionalService node, so without this a crawler sees no Service,
  // BreadcrumbList, FAQPage or BlogPosting markup for the actual page.
  if (schema) {
    const ld = '<script type="application/ld+json" data-prerendered="1">' + JSON.stringify(schema).replace(/</g, '\\u003c') + '</script>';
    html = html.replace('</head>', '\t\t' + ld + '\n\t</head>');
  }

  // Real body content for crawlers. Until now every page shipped
  // <div id="root"></div> with zero text, so Google ranked these pages on their
  // title tag alone — visible in Search Console as a 25-35 position gap between
  // queries matching the title and queries matching only body copy.
  //
  // Safe because main.jsx uses ReactDOM.createRoot (NOT hydrateRoot): React
  // discards the container's children on mount, so there is no hydration
  // mismatch. This markup serves crawlers and first paint only.
  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', '<div id="root">' + bodyHtml + '</div>');
  }
  return html;
}


// ---------- crawler-visible body builders ----------
// Plain semantic HTML (no Tailwind classes): React throws this away on mount, so
// it only needs to be correct for crawlers and readable for a split-second first
// paint. Keeping it class-free also keeps the flat files small.
const para = (t) => (t ? '<p>' + escText(t) + '</p>' : '');

function faqBlock(faqs) {
  if (!faqs || !faqs.length) return '';
  return '<section><h2>Frequently asked questions</h2>' +
    faqs.map((f) => '<h3>' + escText(f.question) + '</h3>' + para(f.answer)).join('') +
    '</section>';
}

function locationBody(loc) {
  const sections = (loc.sections || [])
    .map((sec) => '<section><h2>' + escText(sec.heading) + '</h2>' +
      (sec.paragraphs || []).map(para).join('') + '</section>')
    .join('');
  return '<main><article>' +
    '<h1>Digital Marketing Agency in ' + escText(loc.city) + '</h1>' +
    '<p><strong>' + escText(loc.city) + ', ' + escText(loc.state || 'Malaysia') + '</strong></p>' +
    para(loc.intro) +
    '<section><h2>Marketing built for ' + escText(loc.city) + '</h2>' + para(loc.localContext) + '</section>' +
    sections +
    faqBlock(loc.faqs) +
    '</article></main>';
}

function locationSchema(loc, url) {
  const main = loc.hq
    ? {
        '@type': 'ProfessionalService',
        name: 'BrandKraf',
        description: loc.metaDescription,
        url,
        telephone: '+60-3-9134-3603',
        email: 'admin@brandkraf.com',
        priceRange: 'RM1,500 - RM15,000',
        address: OFFICE_POSTAL_ADDRESS,
        geo: OFFICE_GEO,
        hasMap: OFFICE.mapsUrl,
      }
    : {
        '@type': 'Service',
        serviceType: 'Digital Marketing',
        name: 'Digital Marketing Agency in ' + loc.city,
        url,
        areaServed: { '@type': 'City', name: loc.city },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: SITE, telephone: '+60-3-9134-3603' },
      };
  const graph = [main, {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Digital Marketing in ' + loc.city, item: url },
    ],
  }];
  if (loc.faqs && loc.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function guideBody(c) {
  const list = (c.articleSlugs || []).length
    ? '<section><h2>In this guide</h2><ul>' +
      c.articleSlugs.map((s) => '<li><a href="/blog/' + s + '">' + escText(s.replace(/-/g, ' ')) + '</a></li>').join('') +
      '</ul></section>'
    : '';
  return '<main><article><h1>' + escText(c.title) + '</h1>' +
    para(c.tagline) + para(c.overview) + list + '</article></main>';
}

function blogBody(post) {
  // post.content is HTML authored for this site.
  return '<main><article><h1>' + escText(post.title) + '</h1>' +
    para(post.excerpt) + (post.content || '') + '</article></main>';
}

function blogSchema(post, url) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt || undefined,
        datePublished: post.published_date || undefined,
        inLanguage: 'en-MY',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: 'BrandKraf', url: SITE },
        publisher: { '@type': 'Organization', name: 'BrandKraf', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

async function main() {
  const cwd = process.cwd();
  const distDir = path.join(cwd, '..', '..', 'dist', 'apps', 'web');
  const indexPath = path.join(distDir, 'index.html');
  const routesFile = path.join(cwd, 'src', 'routes.jsx');
  const pagesDir = path.join(cwd, 'src', 'pages');

  if (!fs.existsSync(indexPath)) { console.warn('[prerender] dist/index.html not found, skipping'); return; }
  if (!fs.existsSync(routesFile)) { console.warn('[prerender] routes.jsx not found, skipping'); return; }

  const template = fs.readFileSync(indexPath, 'utf8');
  // Strip line comments so a route-shaped doc example can't produce a phantom page.
  const appSrc = fs.readFileSync(routesFile, 'utf8').replace(/^\s*\/\/.*$/gm, '');
  const components = mapComponents(pagesDir, {});

  // SPA fallback shell (spa.html): served for routes with no flat file (/ms/*,
  // client-only paths). It must carry NO canonical — index.html gets the home
  // canonical baked in, and serving that for every fallback route put two
  // conflicting canonicals on each /ms page (static home + Helmet's own).
  const spaHtml = template
    .replace(/<!--\s*No hard-coded canonical[\s\S]*?-->/, '')
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, ''); // rerun-safety: template may already be processed
  fs.writeFileSync(path.join(distDir, 'spa.html'), spaHtml, 'utf8');

  const seen = new Set();
  let written = 0;
  let m;
  while ((m = ROUTE_RE.exec(appSrc)) !== null) {
    const routePath = m[1];
    const component = m[2];
    if (!isPublicStatic(routePath) || seen.has(routePath)) continue;
    seen.add(routePath);

    const file = components[component];
    // ALWAYS write a per-route file — even with no title/desc, it carries the
    // correct canonical/og:url, and it guarantees every route directory has an
    // index.html (a directory without one returns 403 on LiteSpeed/Apache).
    const { title, desc } = file ? extractMeta(file) : {};

    const url = SITE + (routePath === '/' ? '' : routePath);
    const html = buildHtml(template, { title, desc, url });

    // Flat files (`contact.html`), NOT directories (`contact/index.html`): a real
    // directory makes the server 301 to a trailing-slash URL, contradicting our
    // non-slash canonicals and splitting signals in Search Console. The .htaccess
    // serves `/$1.html` for extensionless URLs, so /contact returns 200 directly.
    const outPath = routePath === '/'
      ? indexPath
      : path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');
    written++;
  }

  // Dynamic routes (locations, guides, blog) are invisible to the routes.jsx loop
  // above, but their head data is reachable at build time — pure data modules for
  // locations/guides, Supabase REST for blog posts. Prerendering real titles/
  // descriptions/canonicals means crawlers index these without rendering JS.
  const writeFlat = (routePath, title, desc, bodyHtml, schema) => {
    const url = SITE + routePath;
    const html = buildHtml(template, { title, desc, url, bodyHtml, schema });
    const outPath = path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');
    written++;
  };

  try {
    const dataUrl = pathToFileURL(path.join(cwd, 'src', 'data', 'locations.js')).href;
    const { locations } = await import(dataUrl);
    for (const loc of locations) {
      const lp = `/digital-marketing-agency/${loc.slug}`;
      writeFlat(lp, loc.metaTitle, loc.metaDescription, locationBody(loc), locationSchema(loc, SITE + lp));
    }
  } catch (err) {
    console.warn('[prerender] location pages skipped:', err && err.message);
  }

  try {
    const dataUrl = pathToFileURL(path.join(cwd, 'src', 'data', 'clusters.js')).href;
    const { clusters } = await import(dataUrl);
    for (const c of clusters) {
      writeFlat(`/guides/${c.slug}`, c.metaTitle, c.metaDescription, guideBody(c));
    }
  } catch (err) {
    console.warn('[prerender] guide pages skipped:', err && err.message);
  }

  // Blog posts: same Supabase REST fetch as generate-sitemap.js. Title format
  // mirrors BlogDetailPage's Helmet (`${title} | BrandKraf Blog`), excerpt = description.
  try {
    const SUPABASE_URL = 'https://xweoognqlpvafyxhzvgz.supabase.co';
    const ANON =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3ZW9vZ25xbHB2YWZ5eGh6dmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NDE0NjcsImV4cCI6MjA5NzQxNzQ2N30.SgeHayMBuaBraN2BjYmXr475AVFpnvSOLyYlRgm-2Rc';
    const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?select=slug,title,excerpt,content,published_date&published=eq.true`, {
      headers: { apikey: ANON, Authorization: `Bearer ${ANON}` },
    });
    if (res.ok) {
      const posts = await res.json();
      for (const post of posts) {
        if (!post.slug) continue;
        const bp = `/blog/${post.slug}`;
        writeFlat(bp, post.title, post.excerpt || null, blogBody(post), blogSchema(post, SITE + bp));
      }
      console.log(`[prerender] blog posts prerendered: ${posts.length}`);
    } else {
      console.warn(`[prerender] blog fetch returned ${res.status}; skipped`);
    }
  } catch (err) {
    console.warn('[prerender] blog pages skipped:', err && err.message);
  }

  console.log(`[prerender] wrote ${written} per-route HTML files`);
}

main()
  .catch((err) => console.error('[prerender] non-fatal error:', err && err.message))
  .finally(() => process.exit(0));
