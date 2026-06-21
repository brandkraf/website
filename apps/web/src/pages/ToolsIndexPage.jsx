import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrench, Calculator, TrendingUp, Heart, Wallet, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TOOLS = [
  { href: '/marketing-cost-calculator', icon: Calculator, name: 'Marketing Cost Calculator', desc: 'Estimate what digital marketing costs in Malaysia based on the services you need.' },
  { href: '/roas-calculator', icon: TrendingUp, name: 'ROAS Calculator', desc: 'Find your return on ad spend, ROI, and profit — and what the number means.' },
  { href: '/engagement-rate-calculator', icon: Heart, name: 'Engagement Rate Calculator', desc: 'Measure your social engagement rate and compare it to industry benchmarks.' },
  { href: '/ad-budget-calculator', icon: Wallet, name: 'Ad Budget Calculator', desc: 'Work backwards from a sales goal to the monthly ad budget you actually need.' },
];

export default function ToolsIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Marketing Tools',
    url: 'https://www.brandkraf.com/tools',
    hasPart: TOOLS.map((t) => ({ '@type': 'WebApplication', name: t.name, url: `https://www.brandkraf.com${t.href}` })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Free Marketing Tools & Calculators | BrandKraf</title>
        <meta name="description" content="Free marketing tools for Malaysian businesses — calculate digital marketing costs, ROAS, social engagement rate, and ad budgets. No sign-up required." />
        <link rel="canonical" href="https://www.brandkraf.com/tools" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-14 max-w-2xl text-center">
            <span className="chip-brand mb-4 inline-flex items-center gap-2"><Wrench className="h-4 w-4" /> Free Tools</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Free Marketing <span className="text-gradient">Tools</span></h1>
            <p className="text-lg text-muted-foreground">Quick, no-sign-up calculators to plan and measure your marketing — built for the Malaysian market.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {TOOLS.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div key={t.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                  <Link to={t.href} className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-brandkraf-teal/40 hover:shadow-xl">
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
