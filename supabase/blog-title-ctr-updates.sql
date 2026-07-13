-- BrandKraf — CTR title/excerpt rewrites for striking-distance pages (GSC 2026-07-13 data).
-- Run in Supabase SQL Editor. Safe to re-run.
--
-- Why: these pages already rank on page 1-2 but earn almost no clicks:
--   best-time-to-post…    pos 8.2, 341 impressions, 0.29% CTR
--   digital-marketing-cost… pos 20, 200 impressions ("price" query variants unserved)
--   sme-digitalisation-grant… query at pos 11.5 (official BM programme name missing)

-- 1. Best time to post — put the promise (and year) in the SERP title, the answer in the snippet.
update public.blog_posts set
  title = 'Best Time to Post on Social Media in Malaysia (2026): The Exact Hours That Work',
  excerpt = 'The short answer: 7-9am, 12-2pm, and the 7-10pm peak. Here is the full breakdown of the best times to post in Malaysia in 2026 — and how to find your own best windows in minutes.'
where slug = 'best-time-to-post-social-media-malaysia';

-- 2. Cost guide — match the "price" query variants and put real RM numbers in the snippet.
update public.blog_posts set
  title = 'Digital Marketing Price in Malaysia (2026): Full Cost Breakdown by Service',
  excerpt = 'Real 2026 prices: social media management RM2,500-RM5,000/mo, SEO from RM1,500/mo, ads management RM800-RM1,500/mo. What each service should include, and how to budget without overpaying.'
where slug = 'digital-marketing-cost-malaysia';

-- 3. Grant guide — add the official programme name searchers and AI engines use.
update public.blog_posts set
  title = 'SME Digitalisation Grant 2026 (Geran Digital PMKS MADANI): Claim Up to RM5,000',
  excerpt = 'The Geran Digital PMKS MADANI covers 50% of your digitalisation cost, up to RM5,000. Who qualifies in 2026, what it covers, and how to apply step by step.'
where slug = 'sme-digitalisation-grant-2026';
