-- BrandKraf — Supabase schema (fresh start)
-- Run this in your Supabase project: SQL Editor → New query → paste → Run.
-- Safe to re-run (uses IF NOT EXISTS / drop-and-recreate policies).

-- ─────────────────────────────────────────────────────────────
-- Tables
-- ─────────────────────────────────────────────────────────────

-- Blog posts (public read, admin write)
create table if not exists public.blog_posts (
  id             uuid primary key default gen_random_uuid(),
  slug           text not null unique,
  title          text not null,
  excerpt        text,
  content        text not null,
  featured_image text,                       -- image URL (Supabase Storage or external)
  author         text not null,
  category       text,
  published_date date not null default current_date,
  published      boolean not null default true,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
create index if not exists blog_posts_published_idx on public.blog_posts (published, published_date desc);

-- UGC videos shown in industry grids (public read, admin write)
create table if not exists public.ugc_videos (
  id          uuid primary key default gen_random_uuid(),
  video_url   text not null,                 -- Google Drive / Storage URL
  industry    text not null,
  title       text,
  description text,
  published   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists ugc_videos_industry_idx on public.ugc_videos (industry, published);

-- Contact form submissions (public insert, admin read)
create table if not exists public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text,
  business_type text,
  message       text not null,
  page_source   text,
  consent_given boolean not null default false,
  ip_address    text,
  created_at    timestamptz not null default now()
);
create index if not exists contact_submissions_created_idx on public.contact_submissions (created_at desc);

-- WhatsApp / service inquiries (public insert, admin read)
create table if not exists public.inquiries (
  id                 uuid primary key default gen_random_uuid(),
  full_name          text not null,
  email              text not null,
  phone_number       text not null,
  service_interested text not null,
  message            text not null,
  created_at         timestamptz not null default now()
);
create index if not exists inquiries_created_idx on public.inquiries (created_at desc);

-- ─────────────────────────────────────────────────────────────
-- Row Level Security
-- Anyone (anon) can read published blog/videos and submit forms.
-- Only authenticated users (your admin, logged in via Supabase Auth)
-- can read leads and write blog/video content.
-- ─────────────────────────────────────────────────────────────

alter table public.blog_posts          enable row level security;
alter table public.ugc_videos          enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.inquiries           enable row level security;

-- blog_posts
drop policy if exists "blog public read published" on public.blog_posts;
create policy "blog public read published" on public.blog_posts
  for select to anon, authenticated using (published = true or auth.role() = 'authenticated');

drop policy if exists "blog admin write" on public.blog_posts;
create policy "blog admin write" on public.blog_posts
  for all to authenticated using (true) with check (true);

-- ugc_videos
drop policy if exists "videos public read published" on public.ugc_videos;
create policy "videos public read published" on public.ugc_videos
  for select to anon, authenticated using (published = true or auth.role() = 'authenticated');

drop policy if exists "videos admin write" on public.ugc_videos;
create policy "videos admin write" on public.ugc_videos
  for all to authenticated using (true) with check (true);

-- contact_submissions: anyone can insert; only admin can read
drop policy if exists "contact public insert" on public.contact_submissions;
create policy "contact public insert" on public.contact_submissions
  for insert to anon, authenticated with check (true);

drop policy if exists "contact admin read" on public.contact_submissions;
create policy "contact admin read" on public.contact_submissions
  for select to authenticated using (true);

-- inquiries: anyone can insert; only admin can read
drop policy if exists "inquiries public insert" on public.inquiries;
create policy "inquiries public insert" on public.inquiries
  for insert to anon, authenticated with check (true);

drop policy if exists "inquiries admin read" on public.inquiries;
create policy "inquiries admin read" on public.inquiries
  for select to authenticated using (true);

-- updated_at auto-touch for blog_posts / ugc_videos
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists blog_posts_touch on public.blog_posts;
create trigger blog_posts_touch before update on public.blog_posts
  for each row execute function public.touch_updated_at();

drop trigger if exists ugc_videos_touch on public.ugc_videos;
create trigger ugc_videos_touch before update on public.ugc_videos
  for each row execute function public.touch_updated_at();
