#!/usr/bin/env node
/**
 * Generate a rich, structured llms.txt (llmstxt.org standard) so AI engines —
 * Google AI Overviews, ChatGPT, Perplexity, Claude — can understand and cite the site.
 * Pulls guides and locations from their data files; the rest is curated for high signal.
 * Self-guarding: any error logs and exits 0 so it never breaks the build.
 */
import fs from 'fs';
import path from 'path';
import { locations } from '../src/data/locations.js';
import { clusters } from '../src/data/clusters.js';

const SITE = 'https://www.brandkraf.com';

const SERVICES = [
  ['Social Media Management', '/portfolio/social-media-management', 'Full-service social media content, posting, and growth across Instagram, TikTok, Facebook, and more.'],
  ['Paid Advertising', '/portfolio/paid-advertising', 'Profitable Meta, Google, and marketplace (Shopee/Lazada) ad campaigns managed end-to-end.'],
  ['UGC Content Creation', '/portfolio/ugc-content-creation', 'Authentic, ad-ready user-generated content across every industry.'],
  ['TikTok Live Selling', '/portfolio/tiktok-live-service', 'TikTok live commerce and selling for Malaysian brands.'],
  ['KOC / Influencer Marketing', '/portfolio/koc-kol-service', 'KOC and influencer campaigns that drive measurable sales, not vanity reach.'],
  ['AI-Driven Marketing', '/portfolio/ai-driven-marketing', 'AI-powered marketing strategy, content, and automation.'],
  ['Branding & Creative', '/portfolio/branding-creative', 'Brand identity, design, and creative direction.'],
  ['Website Development', '/portfolio/website-development', 'Fast, conversion-focused websites.'],
  ['Chatbot Development', '/portfolio/chatbot-development', 'WhatsApp and web chatbots that qualify leads and answer customers 24/7.'],
];

const TOOLS = [
  ['Free Marketing Tools', '/tools', 'Hub of free, no-sign-up marketing calculators.'],
  ['Marketing Cost Calculator', '/marketing-cost-calculator', 'Estimate digital marketing costs in Malaysia by service.'],
  ['ROAS Calculator', '/roas-calculator', 'Calculate return on ad spend, ROI, and profit.'],
  ['Engagement Rate Calculator', '/engagement-rate-calculator', 'Measure social engagement rate vs industry benchmarks.'],
  ['Ad Budget Calculator', '/ad-budget-calculator', 'Work backwards from a sales goal to the ad budget you need.'],
];

const COMPANY = [
  ['Blog', '/blog', '30+ in-depth digital marketing guides for Malaysian businesses.'],
  ['Pricing', '/pricing', 'Transparent pricing for every service.'],
  ['About Us', '/about-us', 'Who we are, our team, and our story.'],
  ['Contact', '/contact', 'Book a free strategy call or request a quote.'],
];

const section = (title, rows) =>
  `## ${title}\n${rows.map(([name, url, desc]) => `- [${name}](${SITE}${url}): ${desc}`).join('\n')}`;

function build() {
  const header = `# BrandKraf — Digital Marketing Agency in Malaysia

> BrandKraf is a Kuala Lumpur-based digital marketing agency that helps Malaysian businesses grow with user-generated content (UGC), TikTok marketing, Meta and Google ads, social media management, KOC/influencer campaigns, and AI-driven automation.

BrandKraf is an SSM-registered, full-service agency based in Cheras, Kuala Lumpur, serving SMEs and brands across Malaysia and Southeast Asia — with strategy, content, advertising, and automation under one roof. Contact: admin@brandkraf.com, +60 3-9134 3603.`;

  const guideRows = [
    ['Digital Marketing Guides', '/guides', 'Hub of in-depth guides organized by topic.'],
    ...clusters.map((c) => [c.title, `/guides/${c.slug}`, c.tagline]),
  ];
  const locationRows = locations.map((l) => [
    `Digital Marketing Agency in ${l.city}`,
    `/digital-marketing-agency/${l.slug}`,
    `Digital marketing services for businesses in ${l.city}, ${l.state}.`,
  ]);

  return [
    header,
    section('Services', SERVICES),
    section('Free tools', TOOLS),
    section('Guides', guideRows),
    section('Locations', locationRows),
    section('Company', COMPANY),
  ].join('\n\n') + '\n';
}

try {
  const out = path.join(process.cwd(), 'public', 'llms.txt');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, build(), 'utf8');
  console.log('[llms] wrote structured llms.txt');
} catch (err) {
  console.error('[llms] non-fatal error:', err && err.message);
}
process.exit(0);
