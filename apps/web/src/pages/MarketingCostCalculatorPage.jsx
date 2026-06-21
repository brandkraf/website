import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator, ArrowRight, Check, Info, Sparkles,
  Megaphone, Video, Search, Globe, Palette, Radio, Users, Bot,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';

// Estimate model built from live 2026 Malaysian market research (RM / month unless one-off).
const SIZE = {
  micro: { label: 'Micro', sub: 'Solo / startup', mult: 0.8 },
  small: { label: 'Small', sub: '2–20 staff', mult: 1.0 },
  medium: { label: 'Medium', sub: '20+ staff', mult: 1.4 },
};
const PROVIDER = {
  freelancer: { label: 'Freelancer', sub: 'Lowest cost', mult: 0.6 },
  boutique: { label: 'Boutique agency', sub: 'Best for SMEs', mult: 1.0 },
  agency: { label: 'Full-service', sub: 'Maximum scope', mult: 1.6 },
};
const SERVICES = [
  { key: 'social', label: 'Social Media Management', type: 'monthly', min: 2500, max: 5000, href: '/portfolio/social-media-management', icon: Megaphone },
  { key: 'ads', label: 'Paid Ads Management', type: 'monthly', min: 800, max: 1500, href: '/portfolio/paid-advertising', icon: Search, note: 'ad spend separate' },
  { key: 'seo', label: 'SEO', type: 'monthly', min: 1500, max: 3000, href: '/blog/local-seo-malaysia-guide', icon: Search },
  { key: 'ugc', label: 'UGC Content', type: 'monthly', min: 1500, max: 3500, href: '/portfolio/ugc-content-creation', icon: Video },
  { key: 'tiktoklive', label: 'TikTok Live', type: 'monthly', min: 2000, max: 5000, href: '/portfolio/tiktok-live-service', icon: Radio },
  { key: 'koc', label: 'KOC / Influencer', type: 'monthly', min: 1500, max: 6000, href: '/portfolio/koc-kol-service', icon: Users },
  { key: 'ai', label: 'AI & Chatbots', type: 'monthly', min: 1000, max: 3000, href: '/portfolio/ai-driven-marketing', icon: Bot },
  { key: 'web', label: 'Website Development', type: 'oneoff', min: 3000, max: 12000, href: '/portfolio/website-development', icon: Globe },
  { key: 'branding', label: 'Branding & Creative', type: 'oneoff', min: 2000, max: 8000, href: '/portfolio/branding-creative', icon: Palette },
];

const FAQS = [
  { question: 'How accurate is this calculator?', answer: 'It gives a realistic range based on 2026 Malaysian market rates, but every business is different. For an exact, no-obligation quote tailored to your goals, just get in touch.' },
  { question: 'Is ad spend included in the estimate?', answer: 'No. The figures cover management and content fees. The actual budget you pay to Google, Meta, or TikTok is separate and fully controlled by you.' },
  { question: 'Can the SME Digitalisation Grant reduce this cost?', answer: 'Eligible Malaysian SMEs can claim 50% of qualifying digitalisation costs, up to RM5,000, which can offset part of your setup. See our SME Digitalisation Grant guide for details.' },
  { question: 'Why is there a range instead of one price?', answer: 'Cost depends on your business size, how much content is produced, how competitive your industry is, and the level of service you choose. The range reflects that reality.' },
];

const rm = (n) => 'RM ' + (Math.round(n / 100) * 100).toLocaleString('en-US');

export default function MarketingCostCalculatorPage() {
  const [size, setSize] = useState('small');
  const [provider, setProvider] = useState('boutique');
  const [selected, setSelected] = useState({ social: true, ads: true });

  const toggle = (key) => setSelected((s) => ({ ...s, [key]: !s[key] }));

  const result = useMemo(() => {
    const chosen = SERVICES.filter((s) => selected[s.key]);
    const factor = SIZE[size].mult * PROVIDER[provider].mult;
    const sum = (type, field) =>
      chosen.filter((s) => s.type === type).reduce((a, s) => a + s[field], 0);
    return {
      count: chosen.length,
      monthlyMin: sum('monthly', 'min') * factor,
      monthlyMax: sum('monthly', 'max') * factor,
      oneMin: sum('oneoff', 'min') * factor,
      oneMax: sum('oneoff', 'max') * factor,
      hasMonthly: chosen.some((s) => s.type === 'monthly'),
      hasOneoff: chosen.some((s) => s.type === 'oneoff'),
      hasAds: !!selected.ads,
    };
  }, [size, provider, selected]);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Malaysia Digital Marketing Cost Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.brandkraf.com/marketing-cost-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: 'https://www.brandkraf.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'Marketing Cost Calculator', item: 'https://www.brandkraf.com/marketing-cost-calculator' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Digital Marketing Cost Calculator Malaysia (2026) | BrandKraf</title>
        <meta name="description" content="Free calculator: estimate what digital marketing costs in Malaysia in 2026. Pick your services, business size, and provider type to get an instant monthly price range." />
        <link rel="canonical" href="https://www.brandkraf.com/marketing-cost-calculator" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="chip-brand mb-4 inline-flex items-center gap-2">
              <Calculator className="h-4 w-4" /> Free Tool
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Digital Marketing Cost <span className="text-gradient">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See what digital marketing realistically costs in Malaysia in 2026. Pick your
              services and get an instant monthly estimate — no email required.
            </p>
          </motion.div>

          {/* Calculator */}
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Inputs */}
            <div className="space-y-8 lg:col-span-3">
              {/* Services */}
              <section>
                <h2 className="mb-4 text-lg font-bold">1. Choose your services</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => {
                    const on = !!selected[s.key];
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => toggle(s.key)}
                        aria-pressed={on}
                        className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                          on
                            ? 'border-brandkraf-teal bg-brandkraf-teal/5 ring-1 ring-brandkraf-teal/40 shadow-sm'
                            : 'border-border bg-card hover:border-brandkraf-teal/40 hover:bg-muted/40'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            on ? 'bg-brandkraf-teal text-white' : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {on ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold leading-tight">{s.label}</span>
                          <span className="block text-sm text-muted-foreground">
                            {s.type === 'oneoff' ? 'one-time' : `${rm(s.min)}–${rm(s.max)}/mo`}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Business size */}
              <section>
                <h2 className="mb-4 text-lg font-bold">2. Your business size</h2>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(SIZE).map(([key, v]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSize(key)}
                      aria-pressed={size === key}
                      className={`rounded-2xl border p-4 text-center transition-all duration-200 ${
                        size === key
                          ? 'border-brandkraf-purple bg-brandkraf-purple/5 ring-1 ring-brandkraf-purple/40'
                          : 'border-border bg-card hover:border-brandkraf-purple/40'
                      }`}
                    >
                      <span className="block font-semibold">{v.label}</span>
                      <span className="block text-xs text-muted-foreground">{v.sub}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Provider type */}
              <section>
                <h2 className="mb-4 text-lg font-bold">3. Who delivers it</h2>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(PROVIDER).map(([key, v]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProvider(key)}
                      aria-pressed={provider === key}
                      className={`rounded-2xl border p-4 text-center transition-all duration-200 ${
                        provider === key
                          ? 'border-brandkraf-purple bg-brandkraf-purple/5 ring-1 ring-brandkraf-purple/40'
                          : 'border-border bg-card hover:border-brandkraf-purple/40'
                      }`}
                    >
                      <span className="block font-semibold">{v.label}</span>
                      <span className="block text-xs text-muted-foreground">{v.sub}</span>
                    </button>
                  ))}
                </div>
              </section>
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
                    Estimated cost
                  </p>

                  {result.count === 0 ? (
                    <p className="mt-6 text-muted-foreground">
                      Select one or more services to see your estimate.
                    </p>
                  ) : (
                    <>
                      {result.hasMonthly && (
                        <div className="mt-2">
                          <span className="text-4xl font-extrabold tracking-tight text-foreground">
                            {rm(result.monthlyMin)}
                          </span>
                          <span className="text-2xl font-bold text-muted-foreground"> – {rm(result.monthlyMax)}</span>
                          <span className="block text-sm text-muted-foreground">per month</span>
                        </div>
                      )}
                      {result.hasOneoff && (
                        <div className="mt-4 border-t border-border pt-4">
                          <span className="text-2xl font-bold text-foreground">
                            {rm(result.oneMin)} – {rm(result.oneMax)}
                          </span>
                          <span className="block text-sm text-muted-foreground">one-time setup</span>
                        </div>
                      )}

                      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                        {result.hasAds && (
                          <li className="flex gap-2">
                            <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                            Ad spend (paid to Google/Meta/TikTok) is separate.
                          </li>
                        )}
                        <li className="flex gap-2">
                          <Sparkles className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                          Eligible SMEs can claim 50% (up to RM5,000) via the{' '}
                          <Link to="/blog/sme-digitalisation-grant-2026" className="font-medium text-brandkraf-teal underline-offset-2 hover:underline">
                            SME Digitalisation Grant
                          </Link>.
                        </li>
                      </ul>
                    </>
                  )}

                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Get an exact quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to="/pricing">See detailed pricing</Link>
                  </Button>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Estimate only — based on 2026 Malaysian market rates.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting content (SEO + internal links) */}
          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>How much does digital marketing cost in Malaysia?</h2>
            <p>
              Most Malaysian SMEs invest between RM1,500 and RM8,000 a month on digital marketing
              before ad spend, depending on the services they need and the level of support. A
              freelancer is cheaper but limited in capacity; a full-service agency costs more but
              brings a whole team and accountability across channels.
            </p>
            <p>
              This calculator turns those market rates into a quick estimate. For the full breakdown
              of what drives the price — and how to budget smartly — read our{' '}
              <Link to="/blog/digital-marketing-cost-malaysia">digital marketing cost guide</Link>,
              or compare specific packages on our{' '}
              <Link to="/pricing">pricing page</Link>.
            </p>
            <h2>What affects your cost the most</h2>
            <ul>
              <li><strong>Services</strong> — more channels (and video-heavy ones) cost more.</li>
              <li><strong>Business size</strong> — larger operations need more content and scope.</li>
              <li><strong>Provider</strong> — freelancer, boutique, or full-service agency.</li>
              <li><strong>Industry competitiveness</strong> — tougher markets need more investment.</li>
            </ul>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
