import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { clusters, clustersMs } from '@/data/clusters.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SITE = 'https://www.brandkraf.com';

export default function GuidesIndexPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  const isMs = lang === 'ms';

  const enUrl = `${SITE}/guides`;
  const msUrl = `${SITE}/ms/guides`;
  const url = isMs ? msUrl : enUrl;
  const cTitle = (c) => (isMs ? clustersMs[c.slug]?.title || c.title : c.title);
  const cTagline = (c) => (isMs ? clustersMs[c.slug]?.tagline || c.tagline : c.tagline);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: T('Digital Marketing Guides', 'Panduan Pemasaran Digital'),
    url,
    inLanguage: isMs ? 'ms-MY' : 'en-MY',
    hasPart: clusters.map((c) => ({
      '@type': 'WebPage',
      name: cTitle(c),
      url: `${SITE}${isMs ? '/ms' : ''}/guides/${c.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('Digital Marketing Guides for Malaysian Businesses | BrandKraf', 'Panduan Pemasaran Digital untuk Perniagaan Malaysia | BrandKraf')}</title>
        <meta name="description" content={T('Free, in-depth digital marketing guides for Malaysian businesses — TikTok, social media, paid ads, SEO, UGC, AI marketing, and the fundamentals. Organized by topic.', 'Panduan pemasaran digital yang mendalam dan percuma untuk perniagaan Malaysia — TikTok, media sosial, iklan berbayar, SEO, UGC, pemasaran AI, dan asasnya. Disusun mengikut topik.')} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="ms" href={msUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
        <meta property="og:locale" content={isMs ? 'ms_MY' : 'en_MY'} />
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
              <BookOpen className="h-4 w-4" /> {T('Free Guides', 'Panduan Percuma')}
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {isMs ? 'Panduan ' : 'Digital Marketing '}
              <span className="text-gradient">{isMs ? 'Pemasaran Digital' : 'Guides'}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {T('Everything we know about growing a Malaysian business online — organized by topic, free to read, no fluff.', 'Segala yang kami tahu tentang mengembangkan perniagaan Malaysia dalam talian — disusun mengikut topik, percuma dibaca, tanpa bahan pengisi.')}
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
                  to={lp(`/guides/${c.slug}`)}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-brandkraf-teal/40 hover:shadow-xl"
                >
                  <h2 className="text-xl font-bold leading-tight transition-colors group-hover:text-brandkraf-teal">
                    {cTitle(c)}
                  </h2>
                  <p className="mt-2 flex-grow text-sm text-muted-foreground">{cTagline(c)}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brandkraf-teal">
                    {c.articleSlugs.length} {T('guides', 'panduan')}
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
