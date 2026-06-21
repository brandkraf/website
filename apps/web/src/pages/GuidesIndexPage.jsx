import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { clusters } from '@/data/clusters.js';

export default function GuidesIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digital Marketing Guides',
    url: 'https://www.brandkraf.com/guides',
    hasPart: clusters.map((c) => ({
      '@type': 'WebPage',
      name: c.title,
      url: `https://www.brandkraf.com/guides/${c.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Digital Marketing Guides for Malaysian Businesses | BrandKraf</title>
        <meta name="description" content="Free, in-depth digital marketing guides for Malaysian businesses — TikTok, social media, paid ads, SEO, UGC, AI marketing, and the fundamentals. Organized by topic." />
        <link rel="canonical" href="https://www.brandkraf.com/guides" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="chip-brand mb-4 inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Free Guides
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Digital Marketing <span className="text-gradient">Guides</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything we know about growing a Malaysian business online — organized by topic,
              free to read, no fluff.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clusters.map((c, idx) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/guides/${c.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-brandkraf-teal/40 hover:shadow-xl"
                >
                  <h2 className="text-xl font-bold leading-tight transition-colors group-hover:text-brandkraf-teal">
                    {c.title}
                  </h2>
                  <p className="mt-2 flex-grow text-sm text-muted-foreground">{c.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brandkraf-teal">
                    {c.articleSlugs.length} guides
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
