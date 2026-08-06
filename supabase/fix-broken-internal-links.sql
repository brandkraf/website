-- Fix broken internal links found by a full audit of all 100 published posts
-- (882 internal links checked; these were the only 4 broken targets).
--
-- 1. /blog/engagement-rate-calculator -> /engagement-rate-calculator
--    The calculator is a top-level tool route, not a blog post. The wrong /blog
--    prefix made Google crawl a non-existent page (reported as "Soft 404" /
--    "Alternate page with proper canonical tag").
-- 2. /blog/seo-sitemap -> /blog/seo-basics-rank-on-google
--    This target was never created. Pointed at the closest existing article
--    (SEO fundamentals, which covers sitemaps under crawlability).
--
-- Safe to re-run: replace() is a no-op once the bad paths are gone.

UPDATE blog_posts
SET
  content    = replace(content,    '"/blog/engagement-rate-calculator"', '"/engagement-rate-calculator"'),
  content_ms = replace(content_ms, '"/ms/blog/engagement-rate-calculator"', '"/ms/engagement-rate-calculator"')
WHERE slug IN ('how-to-increase-social-media-engagement', 'social-media-metrics-that-matter');

UPDATE blog_posts
SET
  content    = replace(content,    '"/blog/seo-sitemap"', '"/blog/seo-basics-rank-on-google"'),
  content_ms = replace(content_ms, '"/ms/blog/seo-sitemap"', '"/ms/blog/seo-basics-rank-on-google"')
WHERE slug = 'google-search-console-guide';

-- Catch-all in case a link used the other locale prefix than expected.
UPDATE blog_posts
SET
  content    = replace(replace(content,    '"/ms/blog/engagement-rate-calculator"', '"/ms/engagement-rate-calculator"'), '"/ms/blog/seo-sitemap"', '"/ms/blog/seo-basics-rank-on-google"'),
  content_ms = replace(replace(content_ms, '"/blog/engagement-rate-calculator"',    '"/engagement-rate-calculator"'),    '"/blog/seo-sitemap"',    '"/blog/seo-basics-rank-on-google"')
WHERE content LIKE '%/blog/engagement-rate-calculator%'
   OR content LIKE '%/blog/seo-sitemap%'
   OR content_ms LIKE '%/blog/engagement-rate-calculator%'
   OR content_ms LIKE '%/blog/seo-sitemap%';

-- Verification: both should return 0 rows.
SELECT slug, 'engagement-rate-calculator' AS bad_link FROM blog_posts
WHERE content LIKE '%/blog/engagement-rate-calculator%' OR content_ms LIKE '%blog/engagement-rate-calculator%';

SELECT slug, 'seo-sitemap' AS bad_link FROM blog_posts
WHERE content LIKE '%/blog/seo-sitemap%' OR content_ms LIKE '%blog/seo-sitemap%';
