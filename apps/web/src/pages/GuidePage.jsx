import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/lib/supabaseClient.js';
import { clusters } from '@/data/clusters.js';

export default function GuidePage() {
  const { topic } = useParams();
  const cluster = clusters.find((c) => c.slug === topic);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    if (!cluster) return;
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt,featured_image,category,published_date')
      .in('slug', cluster.articleSlugs)
      .eq('published', true);
    // Preserve the cluster's curated order.
    const order = cluster.articleSlugs;
    const sorted = (data || []).slice().sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
    setArticles(sorted);
    setLoading(false);
  }, [cluster]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (!cluster) return <Navigate to="/blog" replace />;

  const url = `https://www.brandkraf.com/guides/${cluster.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: cluster.metaTitle,
        description: cluster.metaDescription,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.brandkraf.com/guides' },
          { '@type': 'ListItem', position: 3, name: cluster.title, item: url },
        ],
      },
    ],
  };

  const others = clusters.filter((c) => c.slug !== cluster.slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{cluster.metaTitle}</title>
        <meta name="description" content={cluster.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={cluster.metaTitle} />
        <meta property="og:description" content={cluster.metaDescription} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
          <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />
          <div className="container-custom relative max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="chip-brand mb-5 inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Guide
              </span>
              <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                {cluster.title}
              </h1>
              <p className="mb-6 text-xl font-medium text-brandkraf-teal">{cluster.tagline}</p>
              {cluster.overview.map((para, i) => (
                <p key={i} className="mb-4 text-lg leading-relaxed text-muted-foreground">{para}</p>
              ))}
              <Button asChild className="mt-3 h-12 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                <Link to={cluster.serviceHref} className="flex items-center gap-2">{cluster.serviceLabel} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Cluster articles */}
        <section className="section-padding bg-muted/20 border-y border-border">
          <div className="container-custom">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight">Guides in this series</h2>
            {loading ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-video w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((post, idx) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    image={post.featured_image}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.published_date ? format(new Date(post.published_date), 'MMM dd, yyyy') : 'Recent'}
                    category={post.category || 'Guide'}
                    delay={idx * 0.05}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Explore other guides — pillar-to-pillar internal links */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight">Explore other guides</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to={`/guides/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brandkraf-teal/40 hover:shadow-lg"
                >
                  <span className="font-semibold leading-tight">{c.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-brandkraf-teal transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
