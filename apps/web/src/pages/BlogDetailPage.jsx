import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, ArrowRight, Calendar, User, AlertCircle, RefreshCw, List } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { supabase } from '@/lib/supabaseClient.js';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang, lp } = useLanguage();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch post by slug
      const { data, error: sbError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();
      if (sbError) throw sbError;
      setPost(data);

      // Related posts: same category first, then fill with most-recent (internal linking + dwell time).
      let rel = [];
      if (data.category) {
        const { data: sameCat } = await supabase
          .from('blog_posts')
          .select('slug,title,title_ms,featured_image,category')
          .eq('published', true)
          .eq('category', data.category)
          .neq('slug', slug)
          .order('published_date', { ascending: false })
          .limit(3);
        rel = sameCat || [];
      }
      if (rel.length < 3) {
        const exclude = [slug, ...rel.map((r) => r.slug)];
        const { data: recent } = await supabase
          .from('blog_posts')
          .select('slug,title,title_ms,featured_image,category')
          .eq('published', true)
          .not('slug', 'in', `(${exclude.join(',')})`)
          .order('published_date', { ascending: false })
          .limit(3 - rel.length);
        rel = [...rel, ...(recent || [])];
      }
      setRelated(rel);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      // If 404 from PocketBase, the generic message is fine
      setError("We couldn't find the article you're looking for.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const imageUrl = post?.featured_image || null;

  // Bilingual content: show BM fields on /ms when a translation exists, else fall back to EN.
  const hasMs = lang === 'ms' && !!post?.content_ms;
  const dTitle = post ? (hasMs && post.title_ms ? post.title_ms : post.title) : null;
  const dExcerpt = post ? (hasMs && post.excerpt_ms ? post.excerpt_ms : post.excerpt) : null;
  const dContent = post ? (hasMs ? post.content_ms : post.content) : null;

  // SEO URLs. Each language self-canonicalises; hreflang links them when a translation exists.
  const postUrlEn = post ? `https://www.brandkraf.com/blog/${post.slug}` : null;
  const postUrlMs = post ? `https://www.brandkraf.com/ms/blog/${post.slug}` : null;
  const currentUrl = lang === 'ms' ? postUrlMs : postUrlEn;
  const hasTranslation = !!post?.content_ms; // a BM version exists at all
  const noindex = lang === 'ms' && !post?.content_ms; // BM page not yet translated → don't index

  // Google Rich Results wants a full ISO 8601 datetime WITH a timezone offset, not a
  // bare date. published_date is a Postgres DATE ("2026-06-16"); updated_at is timestamptz.
  const toIsoDateTime = (value) => {
    if (!value) return undefined;
    if (/\d{2}:\d{2}.*(Z|[+-]\d{2}:?\d{2})$/.test(value)) return value; // already datetime + offset
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return `${value}T08:00:00+08:00`; // date-only → Malaysia time
    return value;
  };
  const publishedIso = post ? toIsoDateTime(post.published_date) : undefined;
  const modifiedIso = post ? toIsoDateTime(post.updated_at || post.published_date) : undefined;

  // BlogPosting + BreadcrumbList structured data (rich results + AI citation).
  const articleSchema = post && {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: dTitle,
        description: dExcerpt || undefined,
        inLanguage: lang === 'ms' ? 'ms-MY' : 'en-MY',
        image: imageUrl || undefined,
        datePublished: publishedIso,
        dateModified: modifiedIso,
        author: { '@type': 'Organization', name: post.author || 'BrandKraf', url: 'https://www.brandkraf.com' },
        publisher: {
          '@type': 'Organization',
          name: 'BrandKraf',
          logo: {
            '@type': 'ImageObject',
            url: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png',
          },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: lang === 'ms' ? 'https://www.brandkraf.com/ms' : 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: lang === 'ms' ? 'https://www.brandkraf.com/ms/blog' : 'https://www.brandkraf.com/blog' },
          { '@type': 'ListItem', position: 3, name: dTitle, item: currentUrl },
        ],
      },
    ],
  };

  // Build a table of contents from the article's <h2> headings, injecting ids for anchor links.
  const { contentHtml, toc } = useMemo(() => {
    if (!dContent) return { contentHtml: '', toc: [] };
    const items = [];
    const used = {};
    const html = dContent.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (m, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      let id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 60) || 'section';
      used[id] = (used[id] || 0) + 1;
      if (used[id] > 1) id = `${id}-${used[id]}`;
      items.push({ id, text });
      return `<h2 id="${id}"${attrs || ''}>${inner}</h2>`;
    });
    return { contentHtml: html, toc: items };
  }, [dContent]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{post ? `${dTitle} | BrandKraf Blog` : 'Blog Article | BrandKraf'}</title>
        {dExcerpt && <meta name="description" content={dExcerpt} />}
        {currentUrl && <link rel="canonical" href={currentUrl} />}
        {noindex && <meta name="robots" content="noindex,follow" />}
        {post && hasTranslation && <link rel="alternate" hrefLang="en" href={postUrlEn} />}
        {post && hasTranslation && <link rel="alternate" hrefLang="ms" href={postUrlMs} />}
        {post && hasTranslation && <link rel="alternate" hrefLang="x-default" href={postUrlEn} />}
        {post && <meta property="og:type" content="article" />}
        {post && <meta property="og:locale" content={lang === 'ms' ? 'ms_MY' : 'en_MY'} />}
        {post && <meta property="og:title" content={dTitle} />}
        {dExcerpt && <meta property="og:description" content={dExcerpt} />}
        {currentUrl && <meta property="og:url" content={currentUrl} />}
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        {post && <meta name="twitter:card" content="summary_large_image" />}
        {post && <meta name="twitter:title" content={dTitle} />}
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        {post && <meta property="article:published_time" content={publishedIso} />}
        {post && <meta property="article:modified_time" content={modifiedIso} />}
        {post && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom max-w-3xl">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to={lp('/blog')} className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground truncate max-w-[200px] sm:max-w-xs md:max-w-sm">
              {loading ? <Skeleton className="h-4 w-32 inline-block" /> : dTitle || 'Article Not Found'}
            </span>
          </nav>

          {loading ? (
            <div className="space-y-8">
              <Skeleton className="h-12 w-full md:w-3/4 rounded-lg" />
              <div className="flex gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <div className="space-y-4 pt-8">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full mt-4" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ) : error || !post ? (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-card rounded-3xl border border-border">
              <AlertCircle className="h-16 w-16 text-destructive mb-6" />
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                {error}
              </p>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => navigate('/blog')}>
                  Back to Blog
                </Button>
                <Button onClick={fetchPost} className="gap-2">
                  <RefreshCw className="h-4 w-4" /> Retry
                </Button>
              </div>
            </div>
          ) : (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <header className="mb-10 text-center md:text-left">
                {post.category && (
                  <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none text-sm px-3 py-1">
                    {post.category}
                  </Badge>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15] text-balance">
                  {dTitle}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary/70" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary/70" />
                    <time dateTime={post.published_date}>
                      {format(new Date(post.published_date), 'MMMM dd, yyyy')}
                    </time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {imageUrl && (
                <figure className="mb-12 overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-muted/20">
                  <img
                    src={imageUrl}
                    alt={dTitle}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </figure>
              )}

              {/* Table of contents */}
              {toc.length >= 3 && (
                <nav aria-label="Table of contents" className="mb-10 rounded-2xl border border-border bg-muted/30 p-6">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    <List className="h-4 w-4" /> In this article
                  </p>
                  <ul className="space-y-2">
                    {toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="text-brandkraf-teal underline-offset-2 hover:underline">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-img:rounded-xl prose-img:shadow-md first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.85] first-letter:text-brandkraf-teal"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* End-of-article CTA */}
              <div className="mt-14 rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-[1.5px]">
                <div className="rounded-2xl bg-white px-7 py-8 text-center sm:px-10">
                  <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
                    {lang === 'ms' ? 'Sedia untuk kembangkan jenama anda?' : 'Ready to grow your brand?'}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                    {lang === 'ms'
                      ? 'BrandKraf membantu perniagaan Malaysia berkembang dengan kandungan, iklan, dan pemasaran dipacu AI.'
                      : 'BrandKraf helps Malaysian businesses scale with content, ads, and AI-driven marketing.'}
                  </p>
                  <Button asChild className="mt-5 h-12 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to={lp('/contact')}>{lang === 'ms' ? 'Tempah Sesi Strategi Percuma' : 'Book a Free Strategy Call'}</Link>
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                <Button
                  variant="ghost"
                  asChild
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Link to={lp('/blog')}>
                    <ArrowLeft className="w-4 h-4" />
                    {lang === 'ms' ? 'Kembali ke semua artikel' : 'Back to all articles'}
                  </Link>
                </Button>
              </footer>

              {/* Related articles — internal linking + dwell time */}
              {related.length > 0 && (
                <section className="mt-16 border-t border-border pt-10">
                  <h2 className="mb-6 text-2xl font-extrabold tracking-tight">
                    {lang === 'ms' ? 'Artikel berkaitan' : 'Related articles'}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {related.map((r) => {
                      const rTitle = lang === 'ms' && r.title_ms ? r.title_ms : r.title;
                      return (
                      <Link
                        key={r.slug}
                        to={lp(`/blog/${r.slug}`)}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                      >
                        {r.featured_image && (
                          <img
                            src={r.featured_image}
                            alt={rTitle}
                            loading="lazy"
                            decoding="async"
                            className="aspect-video w-full object-cover"
                          />
                        )}
                        <div className="flex flex-1 flex-col p-4">
                          {r.category && (
                            <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-brandkraf-teal">
                              {r.category}
                            </span>
                          )}
                          <h3 className="font-bold leading-tight text-foreground line-clamp-2 group-hover:text-brandkraf-teal">
                            {rTitle}
                          </h3>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brandkraf-teal">
                            {lang === 'ms' ? 'Baca lagi' : 'Read more'} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}