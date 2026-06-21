import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Info } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';

const FAQS = [
  { question: 'What is a good ROAS?', answer: 'It depends on your profit margins, but many businesses aim for a ROAS of 3–4x or higher. A ROAS below 1x means you are spending more on ads than you earn back.' },
  { question: 'What is the difference between ROAS and ROI?', answer: 'ROAS (Return on Ad Spend) is simply revenue divided by ad spend. ROI (Return on Investment) factors in profit — (revenue minus cost) divided by cost — and is usually shown as a percentage.' },
  { question: 'Does ROAS include product and shipping costs?', answer: 'No. ROAS only compares revenue to ad spend. For true profitability, also subtract your product, shipping, and overhead costs from revenue.' },
  { question: 'How can I improve my ROAS?', answer: 'Tighten your targeting, improve your ad creative and landing pages, add negative keywords to cut wasted spend, and shift budget toward your best-performing campaigns. Our guide on improving ROAS covers this in detail.' },
];

const rm = (n) => 'RM ' + Math.round(n).toLocaleString('en-US');

function verdict(roas) {
  if (roas <= 0) return null;
  if (roas < 1) return { tone: 'bad', label: 'Losing money', note: 'You are spending more on ads than you earn back.' };
  if (roas < 3) return { tone: 'ok', label: 'Profitable on ad spend', note: 'Positive, but likely thin once product costs are counted.' };
  if (roas < 4) return { tone: 'good', label: 'Healthy return', note: 'A solid return for most businesses.' };
  return { tone: 'great', label: 'Strong & scalable', note: 'A strong return — a good signal to scale carefully.' };
}

const TONE = {
  bad: 'text-red-600',
  ok: 'text-amber-600',
  good: 'text-brandkraf-teal',
  great: 'text-brandkraf-teal',
};

export default function RoasCalculatorPage() {
  const [spend, setSpend] = useState('1000');
  const [revenue, setRevenue] = useState('4000');
  const [conversions, setConversions] = useState('');

  const r = useMemo(() => {
    const s = parseFloat(spend) || 0;
    const rev = parseFloat(revenue) || 0;
    const c = parseFloat(conversions) || 0;
    return {
      hasInput: s > 0 && rev > 0,
      roas: s > 0 ? rev / s : 0,
      roi: s > 0 ? ((rev - s) / s) * 100 : 0,
      profit: rev - s,
      cpa: c > 0 ? s / c : null,
    };
  }, [spend, revenue, conversions]);

  const v = verdict(r.roas);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'ROAS Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.brandkraf.com/roas-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: 'https://www.brandkraf.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'ROAS Calculator', item: 'https://www.brandkraf.com/roas-calculator' },
        ],
      },
    ],
  };

  const field = (label, value, setter, prefix, placeholder, hint) => (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      <div className="flex items-center rounded-xl border border-border bg-card focus-within:border-brandkraf-teal focus-within:ring-1 focus-within:ring-brandkraf-teal/40">
        {prefix && <span className="pl-4 pr-1 text-muted-foreground">{prefix}</span>}
        <input
          type="number"
          min="0"
          inputMode="decimal"
          value={value}
          onChange={(e) => setter(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-3 text-lg font-semibold text-foreground outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>ROAS Calculator (Free) — Return on Ad Spend | BrandKraf</title>
        <meta name="description" content="Free ROAS calculator: enter your ad spend and revenue to instantly see your Return on Ad Spend, ROI, profit, and cost per acquisition — plus what the number means." />
        <link rel="canonical" href="https://www.brandkraf.com/roas-calculator" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="chip-brand mb-4 inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4" /> Free Tool
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              ROAS <span className="text-gradient">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter your ad spend and the revenue it generated to instantly see your Return on Ad
              Spend, ROI, and profit — and what the number actually means.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Inputs */}
            <div className="space-y-6 lg:col-span-3">
              {field('Ad spend', spend, setSpend, 'RM', '1000', 'Total budget paid to Google, Meta, TikTok, etc.')}
              {field('Revenue generated', revenue, setRevenue, 'RM', '4000', 'Total sales revenue attributed to those ads.')}
              {field('Conversions (optional)', conversions, setConversions, '#', 'e.g. 40', 'Number of sales/leads — adds cost per acquisition (CPA).')}
            </div>

            {/* Result */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:sticky lg:top-28 rounded-3xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-[1.5px] shadow-xl"
              >
                <div className="rounded-3xl bg-card p-7">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Return on ad spend
                  </p>

                  {!r.hasInput ? (
                    <p className="mt-6 text-muted-foreground">
                      Enter your ad spend and revenue to see your ROAS.
                    </p>
                  ) : (
                    <>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold tracking-tight text-foreground">
                          {r.roas.toFixed(2)}x
                        </span>
                      </div>
                      {v && (
                        <p className={`mt-1 font-semibold ${TONE[v.tone]}`}>
                          {v.label}
                        </p>
                      )}
                      {v && <p className="mt-1 text-sm text-muted-foreground">{v.note}</p>}

                      <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">ROI</dt>
                          <dd className="font-semibold text-foreground">{r.roi.toFixed(0)}%</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Gross profit (over ad spend)</dt>
                          <dd className={`font-semibold ${r.profit >= 0 ? 'text-foreground' : 'text-red-600'}`}>
                            {rm(r.profit)}
                          </dd>
                        </div>
                        {r.cpa !== null && (
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Cost per acquisition</dt>
                            <dd className="font-semibold text-foreground">{rm(r.cpa)}</dd>
                          </div>
                        )}
                      </dl>

                      <p className="mt-5 flex gap-2 text-xs text-muted-foreground">
                        <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                        ROAS counts revenue vs ad spend only — subtract product and overhead costs for true profit.
                      </p>
                    </>
                  )}

                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Improve my ROAS <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to="/portfolio/paid-advertising">See our paid ads service</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting content */}
          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>What is ROAS?</h2>
            <p>
              ROAS — Return on Ad Spend — is the revenue you earn for every ringgit spent on
              advertising. A ROAS of 4x means RM4 back for every RM1 spent. It is the fastest way to
              judge whether a campaign is working, though it does not account for product or
              fulfilment costs.
            </p>
            <h2>What is a good ROAS in Malaysia?</h2>
            <p>
              There is no universal number — it depends on your margins. As a rule of thumb, below 1x
              you are losing money, 1–3x is profitable but often thin, and 4x or higher is strong and
              usually worth scaling. For a full breakdown of how to lift the number, read our guide on{' '}
              <Link to="/blog/how-to-improve-roas">how to improve your ROAS</Link>.
            </p>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
