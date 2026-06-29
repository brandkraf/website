-- BrandKraf — Phase 2: add Bahasa Melayu columns to blog_posts. Run once in Supabase SQL Editor.
-- Safe to re-run (IF NOT EXISTS). Existing RLS (public read of published rows) already covers
-- these columns, so no policy changes are needed. A post is treated as "translated" once
-- content_ms is filled — the site then serves /ms/blog/<slug> in Malay and lets it be indexed.

alter table public.blog_posts
  add column if not exists title_ms   text,
  add column if not exists excerpt_ms text,
  add column if not exists content_ms text;
