import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Info } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';

const FAQS = [
  { question: 'How much should I budget for ads?', answer: 'Work backwards from a goal: decide how many sales or leads you want, then factor in your conversion rate and cost per click. This calculator does that maths for you to estimate a realistic monthly budget.' },
  { question: 'What is a good cost per click in Malaysia?', answer: 'It varies widely by platform and industry — often RM0.30–RM2.00 on Meta and more on competitive Google search terms. Use your own account data where possible for the most accurate estimate.' },
  { question: 'Why does conversion rate matter so much?', answer: 'It is the biggest lever on your budget. Doubling your landing-page conversion rate roughly halves the ad spend needed for the same number of sales — often cheaper than buying more clicks.' },
  { question: 'Is the management fee included?', answer: 'No. This estimates the ad spend paid to the platform. Agency management fees (and creative) are separate — see our pricing page for those.' },
];

const rm = (n) => 'RM ' + Math.round(n).toLocaleString('en-US');

export default function AdBudgetCalculatorPage() {
  const [goal, setGoal] = useState('50');
  const [cr, setCr] = useState('2');
  const [cpc, setCpc] = useState('1.50');
  const [aov, setAov] = useState('150');

  const r = useMemo(() => {
    const g = parseFloat(goal) || 0;
    const conv = (parseFloat(cr) || 0) / 100;
    const c = parseFloat(cpc) || 0;
    const a = parseFloat(aov) || 0;
    const clicks = conv > 0 ? g / conv : 0;
    const budget = clicks * c;
    return {
      hasInput: g > 0 && conv > 0 && c > 0,
      clicks,
      budget,
      cpa: g > 0 ? budget / g : 0,
      revenue: g * a,
      roas: budget > 0 ? (g * a) / budget : 0,
      hasAov: a > 0,
    };
  }, [goal, cr, cpc, aov]);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Ad Budget Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.brandkraf.com/ad-budget-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: 'https://www.brandkraf.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.brandkraf.com/tools' },
          { '@type': 'ListItem', position: 3, name: 'Ad Budget Calculator', item: 'https://www.brandkraf.com/ad-budget-calculator' },
        ],
      },
    ],
  };

  const field = (label, value, setter, prefix, hint) => (
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
          className="w-full bg-transparent px-3 py-3 text-lg font-semibold text-foreground outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Ad Budget Calculator (Free) — Plan Your Ad Spend | BrandKraf</title>
        <meta name="description" content="Free ad budget calculator. Enter your sales goal, conversion rate, and cost per click to estimate the monthly ad budget you need — plus projected ROAS." />
        <link rel="canonical" href="https://www.brandkraf.com/ad-budget-calculator" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-2xl text-center">
            <span className="chip-brand mb-4 inline-flex items-center gap-2"><Wallet className="h-4 w-4" /> Free Tool</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Ad Budget <span className="text-gradient">Calculator</span></h1>
            <p className="text-lg text-muted-foreground">Work backwards from your sales goal to the ad budget you actually need — no guesswork.</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              {field('Monthly sales / leads goal', goal, setGoal, '#', 'How many conversions you want per month.')}
              {field('Landing page conversion rate', cr, setCr, '%', 'Of visitors who convert. 1–3% is typical.')}
              {field('Average cost per click', cpc, setCpc, 'RM', 'From your ad platform, or an estimate.')}
              {field('Average order value (optional)', aov, setAov, 'RM', 'Adds projected revenue and ROAS.')}
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="lg:sticky lg:top-28 rounded-3xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-[1.5px] shadow-xl">
                <div className="rounded-3xl bg-card p-7">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Estimated monthly ad budget</p>
                  {!r.hasInput ? (
                    <p className="mt-6 text-muted-foreground">Fill in your goal, conversion rate, and CPC.</p>
                  ) : (
                    <>
                      <div className="mt-2"><span className="text-4xl font-extrabold tracking-tight text-foreground">{rm(r.budget)}</span><span className="block text-sm text-muted-foreground">per month</span></div>
                      <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                        <div className="flex justify-between"><dt className="text-muted-foreground">Clicks needed</dt><dd className="font-semibold text-foreground">{Math.round(r.clicks).toLocaleString('en-US')}</dd></div>
                        <div className="flex justify-between"><dt className="text-muted-foreground">Cost per acquisition</dt><dd className="font-semibold text-foreground">{rm(r.cpa)}</dd></div>
                        {r.hasAov && <div className="flex justify-between"><dt className="text-muted-foreground">Projected revenue</dt><dd className="font-semibold text-foreground">{rm(r.revenue)}</dd></div>}
                        {r.hasAov && <div className="flex justify-between"><dt className="text-muted-foreground">Projected ROAS</dt><dd className="font-semibold text-brandkraf-teal">{r.roas.toFixed(2)}x</dd></div>}
                      </dl>
                      <p className="mt-5 flex gap-2 text-xs text-muted-foreground">
                        <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                        An estimate — real costs vary by platform, audience, and creative.
                      </p>
                    </>
                  )}
                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to="/contact" className="flex items-center justify-center gap-2">Plan my campaign <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to="/roas-calculator">Check your ROAS</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>How to budget for ads the smart way</h2>
            <p>
              The biggest mistake businesses make is picking an ad budget out of thin air. Instead, start
              from a goal and work backwards: how many sales do you want, how well does your page convert,
              and what does a click cost? That tells you the realistic spend — and shows that improving your
              conversion rate is often cheaper than buying more traffic.
            </p>
            <p>
              Once you are spending, watch your return closely with our <Link to="/roas-calculator">ROAS calculator</Link>,
              and see <Link to="/guides/paid-advertising">our paid advertising guide</Link> for the full playbook.
            </p>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
