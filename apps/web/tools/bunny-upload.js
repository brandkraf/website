#!/usr/bin/env node
/**
 * Upload the client portfolio videos to Bunny Stream and emit a manifest.
 *
 *   node tools/bunny-upload.js "C:/Users/muham/Downloads/portfolio video"
 *   node tools/bunny-upload.js "<folder>" --dry-run     # list what would happen, upload nothing
 *
 * Expects one subfolder per client, named exactly as it should appear on the site:
 *
 *   portfolio video/
 *   ├── Farm Fresh/          -> collection "Farm Fresh"
 *   │   ├── ramadan-tvc.mp4
 *   │   └── review-01.mov
 *   └── Nestle Malaysia/
 *
 * Originals are uploaded untouched — Bunny transcodes to multiple resolutions and
 * serves adaptive HLS, so local re-encoding would only cost quality and time. Bunny
 * also auto-generates each poster frame, exposed as <cdn>/<guid>/thumbnail.jpg.
 *
 * Writes src/data/portfolioVideos.js (a plain data module the site imports) and is
 * resumable: videos already present in the library, matched by collection + title,
 * are skipped, so re-running after a failure only uploads what is missing.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const API = 'https://video.bunnycdn.com';
const VIDEO_EXT = new Set(['.mp4', '.mov', '.m4v', '.webm', '.avi', '.mkv']);

function loadEnv() {
  const envPath = path.join(process.cwd(), '..', '..', '.env.bunny.local');
  if (!fs.existsSync(envPath)) {
    throw new Error(`Missing ${envPath} — it holds BUNNY_LIBRARY_ID / BUNNY_STREAM_API_KEY / BUNNY_CDN_HOSTNAME`);
  }
  const env = {};
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  for (const k of ['BUNNY_LIBRARY_ID', 'BUNNY_STREAM_API_KEY', 'BUNNY_CDN_HOSTNAME']) {
    if (!env[k]) throw new Error(`${k} missing from .env.bunny.local`);
  }
  return env;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(env, method, endpoint, { body, raw, retries = 3 } = {}) {
  const url = `${API}/library/${env.BUNNY_LIBRARY_ID}${endpoint}`;
  const headers = { AccessKey: env.BUNNY_STREAM_API_KEY, accept: 'application/json' };
  if (body && !raw) headers['content-type'] = 'application/json';
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { method, headers, body: raw || (body ? JSON.stringify(body) : undefined) });
      if (!res.ok) throw new Error(`${method} ${endpoint} -> HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
      const text = await res.text();
      return text ? JSON.parse(text) : {};
    } catch (err) {
      if (attempt > retries) throw err;
      const wait = 2000 * attempt;
      console.warn(`  ! ${err.message} — retry ${attempt}/${retries} in ${wait / 1000}s`);
      await sleep(wait);
    }
  }
}

// Human-readable title from a filename: "ramadan-tvc_final.mp4" -> "Ramadan Tvc Final"
function titleFromFile(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const slugify = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function main() {
  const root = process.argv[2];
  const dryRun = process.argv.includes('--dry-run');
  if (!root) {
    console.error('Usage: node tools/bunny-upload.js "<master folder>" [--dry-run]');
    process.exit(1);
  }
  if (!fs.existsSync(root)) throw new Error(`Folder not found: ${root}`);
  const env = loadEnv();

  // Discover clients + their videos.
  const clients = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const dir = path.join(root, d.name);
      const files = fs
        .readdirSync(dir)
        .filter((f) => VIDEO_EXT.has(path.extname(f).toLowerCase()))
        .sort();
      return { name: d.name, dir, files };
    })
    .filter((c) => c.files.length > 0);

  if (!clients.length) throw new Error(`No client subfolders with videos found in ${root}`);

  const totalFiles = clients.reduce((n, c) => n + c.files.length, 0);
  const totalBytes = clients.reduce(
    (n, c) => n + c.files.reduce((m, f) => m + fs.statSync(path.join(c.dir, f)).size, 0),
    0
  );
  console.log(`Found ${clients.length} clients, ${totalFiles} videos, ${(totalBytes / 1e9).toFixed(2)} GB total`);
  for (const c of clients) console.log(`  ${c.name}: ${c.files.length}`);
  if (dryRun) {
    console.log('\n--dry-run: nothing uploaded.');
    return;
  }

  // Existing collections + videos, so a re-run resumes instead of duplicating.
  const existingCollections = (await api(env, 'GET', '/collections?page=1&itemsPerPage=1000')).items || [];
  const existingVideos = (await api(env, 'GET', '/videos?page=1&itemsPerPage=1000')).items || [];
  const seen = new Set(existingVideos.map((v) => `${v.collectionId}::${v.title}`));

  const manifest = [];
  let uploaded = 0;
  let skipped = 0;

  for (const client of clients) {
    let collection = existingCollections.find((c) => c.name === client.name);
    if (!collection) {
      collection = await api(env, 'POST', '/collections', { body: { name: client.name } });
      console.log(`+ collection "${client.name}"`);
    }
    const collectionId = collection.guid || collection.id;

    const videos = [];
    for (const file of client.files) {
      const title = titleFromFile(file);
      const filePath = path.join(client.dir, file);
      const sizeMb = (fs.statSync(filePath).size / 1e6).toFixed(1);

      const already = existingVideos.find((v) => v.collectionId === collectionId && v.title === title);
      if (already || seen.has(`${collectionId}::${title}`)) {
        console.log(`= skip "${title}" (already uploaded)`);
        if (already) videos.push({ guid: already.guid, title, slug: slugify(title) });
        skipped++;
        continue;
      }

      const created = await api(env, 'POST', '/videos', { body: { title, collectionId } });
      process.stdout.write(`↑ ${client.name} / ${title} (${sizeMb} MB) ... `);
      await api(env, 'PUT', `/videos/${created.guid}`, { raw: fs.createReadStream(filePath), retries: 2 });
      console.log('done');
      videos.push({ guid: created.guid, title, slug: slugify(title) });
      uploaded++;
    }

    manifest.push({ client: client.name, slug: slugify(client.name), collectionId, videos });
  }

  const outPath = path.join(process.cwd(), 'src', 'data', 'portfolioVideos.js');
  const banner = `// GENERATED by tools/bunny-upload.js — do not edit by hand.\n// Re-run the uploader to refresh. Videos are hosted on Bunny Stream;\n// poster = https://<cdn>/<guid>/thumbnail.jpg, player = iframe embed on click.\n`;
  const body =
    `${banner}\nexport const BUNNY_LIBRARY_ID = '${env.BUNNY_LIBRARY_ID}';\n` +
    `export const BUNNY_CDN = '${env.BUNNY_CDN_HOSTNAME}';\n\n` +
    `export const portfolioClients = ${JSON.stringify(manifest, null, 2)};\n`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body, 'utf8');

  console.log(`\nUploaded ${uploaded}, skipped ${skipped}.`);
  console.log(`Manifest: ${outPath}`);
  console.log('Bunny is transcoding in the background; playback works once each video finishes.');
}

main().catch((err) => {
  console.error('\n[bunny-upload] FAILED:', err.message);
  process.exit(1);
});
