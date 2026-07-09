import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Calculator, TrendingUp, Heart, Wallet, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SITE = 'https://www.brandkraf.com';

export default function ToolsIndexPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  const isMs = lang === 'ms';

  const TOOLS = [
    { href: '/marketing-cost-calculator', icon: Calculator, name: T('Marketing Cost Calculator', 'Kalkulator Kos Pemasaran'), desc: T('Estimate what digital marketing costs in Malaysia based on the services you need.', 'Anggarkan kos pemasaran digital di Malaysia berdasarkan perkhidmatan yang anda perlukan.') },
    { href: '/roas-calculator', icon: TrendingUp, name: T('ROAS Calculator', 'Kalkulator ROAS'), desc: T('Find your return on ad spend, ROI, and profit — and what the number means.', 'Ketahui pulangan atas perbelanjaan iklan, ROI, dan keuntungan anda — dan apa maksud nombor itu.') },
    { href: '/engagement-rate-calculator', icon: Heart, name: T('Engagement Rate Calculator', 'Kalkulator Kadar Penglibatan'), desc: T('Measure your social engagement rate and compare it to industry benchmarks.', 'Ukur kadar penglibatan sosial anda dan bandingkan dengan penanda aras industri.') },
    { href: '/ad-budget-calculator', icon: Wallet, name: T('Ad Budget Calculator', 'Kalkulator Bajet Iklan'), desc: T('Work backwards from a sales goal to the monthly ad budget you actually need.', 'Kira ke belakang daripada matlamat jualan kepada bajet iklan bulanan yang anda benar-benar perlukan.') },
  ];

  const enUrl = `${SITE}/tools`;
  const msUrl = `${SITE}/ms/tools`;
  const url = isMs ? msUrl : enUrl;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: T('Free Marketing Tools', 'Alat Pemasaran Percuma'),
    url,
    inLanguage: isMs ? 'ms-MY' : 'en-MY',
    hasPart: TOOLS.map((t) => ({ '@type': 'WebApplication', name: t.name, url: `${SITE}${isMs ? '/ms' : ''}${t.href}` })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('Free Marketing Tools & Calculators | BrandKraf', 'Alat & Kalkulator Pemasaran Percuma | BrandKraf')}</title>
        <meta name="description" content={T(
          'Free marketing tools for Malaysian businesses — calculate digital marketing costs, ROAS, social engagement rate, and ad budgets. No sign-up required.',
          'Alat pemasaran percuma untuk perniagaan Malaysia — kira kos pemasaran digital, ROAS, kadar penglibatan sosial, dan bajet iklan. Tanpa pendaftaran.',
        )} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-14 max-w-2xl text-center">
            <span className="chip-brand mb-4 inline-flex items-center gap-2"><Wrench className="h-4 w-4" /> {T('Free Tools', 'Alat Percuma')}</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {isMs ? (
                <><span className="text-gradient">Alat</span> Pemasaran Percuma</>
              ) : (
                <>Free Marketing <span className="text-gradient">Tools</span></>
              )}
            </h1>
            <p className="text-lg text-muted-foreground">{T(
              'Quick, no-sign-up calculators to plan and measure your marketing — built for the Malaysian market.',
              'Kalkulator pantas tanpa pendaftaran untuk merancang dan mengukur pemasaran anda — dibina untuk pasaran Malaysia.',
            )}</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {TOOLS.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div key={t.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                  <Link to={lp(t.href)} className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-brandkraf-teal/40 hover:shadow-xl">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brandkraf-teal/10 text-brandkraf-teal transition-colors group-hover:bg-brandkraf-teal group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-lg font-bold leading-tight transition-colors group-hover:text-brandkraf-teal">
                        {t.name} <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </span>
                      <span className="mt-1.5 block text-sm text-muted-foreground">{t.desc}</span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
