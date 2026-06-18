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
const TITLE_RE = /<title[^>]*?>\s*(.*?)\s*<\/title>/i;
const DESC_RE = /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i;
// path + element component from a <Route path="..." element={<Comp .../>} />
const ROUTE_RE = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)[^>]*\/>\}/g;

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
  // Skip dynamic values (contain JSX expressions / template literals)
  const title = titleM && !/[{}`]/.test(titleM[1]) ? cleanText(titleM[1]) : null;
  const desc = descM && !/[{}`]/.test(descM[1]) ? cleanText(descM[1]) : null;
  return { title, desc };
}

function buildHtml(template, { title, desc, url }) {
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
  if (commentRe.test(html)) html = html.replace(commentRe, canonicalTag);
  else if (!/rel="canonical"/.test(html)) html = html.replace('</head>', `\t\t${canonicalTag}\n\t</head>`);
  return html;
}

function main() {
  const cwd = process.cwd();
  const distDir = path.join(cwd, '..', '..', 'dist', 'apps', 'web');
  const indexPath = path.join(distDir, 'index.html');
  const appJsx = path.join(cwd, 'src', 'App.jsx');
  const pagesDir = path.join(cwd, 'src', 'pages');

  if (!fs.existsSync(indexPath)) { console.warn('[prerender] dist/index.html not found, skipping'); return; }
  if (!fs.existsSync(appJsx)) { console.warn('[prerender] App.jsx not found, skipping'); return; }

  const template = fs.readFileSync(indexPath, 'utf8');
  const appSrc = fs.readFileSync(appJsx, 'utf8');
  const components = mapComponents(pagesDir, {});

  const seen = new Set();
  let written = 0;
  let m;
  while ((m = ROUTE_RE.exec(appSrc)) !== null) {
    const routePath = m[1];
    const component = m[2];
    if (!isPublicStatic(routePath) || seen.has(routePath)) continue;
    seen.add(routePath);

    const file = components[component];
    if (!file) continue;
    const { title, desc } = extractMeta(file);
    if (!title && !desc && routePath !== '/') continue; // nothing to specialise

    const url = SITE + (routePath === '/' ? '' : routePath);
    const html = buildHtml(template, { title, desc, url });

    const outPath = routePath === '/'
      ? indexPath
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');
    written++;
  }
  console.log(`[prerender] wrote ${written} per-route HTML files`);
}

try {
  main();
} catch (err) {
  console.error('[prerender] non-fatal error:', err && err.message);
}
process.exit(0);
