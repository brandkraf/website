import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Info } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';

const FAQS = [
  { question: 'What is a good engagement rate?', answer: 'It varies by platform and follower count, but on Instagram 1–3.5% is average, 3.5–6% is strong, and above 6% is excellent. Smaller accounts usually see higher rates than large ones.' },
  { question: 'How is engagement rate calculated?', answer: 'The most common formula is (likes + comments) ÷ followers × 100. You can also include saves and shares, which are strong signals of valuable content.' },
  { question: 'Why is my engagement rate low?', answer: 'Common causes are buying followers, posting inconsistent or low-value content, weak hooks, or a mismatch between your audience and content. Quality and consistency lift it over time.' },
  { question: 'Does a high follower count mean high engagement?', answer: 'No — they often move in opposite directions. A smaller, highly engaged audience is far more valuable than a large, passive one, especially for driving sales.' },
];

const pct = (n) => `${n.toFixed(2)}%`;

function verdict(rate) {
  if (rate <= 0) return null;
  if (rate < 1) return { tone: 'bad', label: 'Below average', note: 'Likely worth reviewing your content and audience fit.' };
  if (rate < 3.5) return { tone: 'ok', label: 'Average', note: 'A healthy, normal range for most accounts.' };
  if (rate < 6) return { tone: 'good', label: 'Strong', note: 'Your audience is genuinely engaged — keep it up.' };
  return { tone: 'great', label: 'Excellent', note: 'Outstanding engagement — your content is resonating.' };
}

const TONE = { bad: 'text-red-600', ok: 'text-amber-600', good: 'text-brandkraf-teal', great: 'text-brandkraf-teal' };

export default function EngagementRateCalculatorPage() {
  const [followers, setFollowers] = useState('5000');
  const [likes, setLikes] = useState('250');
  const [comments, setComments] = useState('30');

  const r = useMemo(() => {
    const f = parseFloat(followers) || 0;
    const l = parseFloat(likes) || 0;
    const c = parseFloat(comments) || 0;
    return { hasInput: f > 0, rate: f > 0 ? ((l + c) / f) * 100 : 0, interactions: l + c };
  }, [followers, likes, comments]);

  const v = verdict(r.rate);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Engagement Rate Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.brandkraf.com/engagement-rate-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: 'https://www.brandkraf.com' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.brandkraf.com/tools' },
          { '@type': 'ListItem', position: 3, name: 'Engagement Rate Calculator', item: 'https://www.brandkraf.com/engagement-rate-calculator' },
        ],
      },
    ],
  };

  const field = (label, value, setter, hint) => (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      <input
        type="number"
        min="0"
        inputMode="decimal"
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-lg font-semibold text-foreground outline-none focus:border-brandkraf-teal focus:ring-1 focus:ring-brandkraf-teal/40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
      />
      {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Engagement Rate Calculator (Free) — Instagram & Social | BrandKraf</title>
        <meta name="description" content="Free engagement rate calculator. Enter your followers, likes, and comments to instantly see your engagement rate and how it compares to industry benchmarks." />
        <link rel="canonical" href="https://www.brandkraf.com/engagement-rate-calculator" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-2xl text-center">
            <span className="chip-brand mb-4 inline-flex items-center gap-2"><Heart className="h-4 w-4" /> Free Tool</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Engagement Rate <span className="text-gradient">Calculator</span></h1>
            <p className="text-lg text-muted-foreground">See your social media engagement rate instantly and how it stacks up against industry benchmarks.</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              {field('Followers', followers, setFollowers, 'Total followers on the account.')}
              {field('Average likes per post', likes, setLikes, 'Average across your recent posts.')}
              {field('Average comments per post', comments, setComments, 'Average across your recent posts.')}
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="lg:sticky lg:top-28 rounded-3xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-[1.5px] shadow-xl">
                <div className="rounded-3xl bg-card p-7">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Engagement rate</p>
                  {!r.hasInput ? (
                    <p className="mt-6 text-muted-foreground">Enter your followers to see your rate.</p>
                  ) : (
                    <>
                      <div className="mt-2"><span className="text-5xl font-extrabold tracking-tight text-foreground">{pct(r.rate)}</span></div>
                      {v && <p className={`mt-1 font-semibold ${TONE[v.tone]}`}>{v.label}</p>}
                      {v && <p className="mt-1 text-sm text-muted-foreground">{v.note}</p>}
                      <p className="mt-5 flex gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                        <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                        Based on (likes + comments) ÷ followers. Add saves & shares for an even fuller picture.
                      </p>
                    </>
                  )}
                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to="/contact" className="flex items-center justify-center gap-2">Grow my engagement <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to="/portfolio/social-media-management">See our social media service</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>What is engagement rate — and why it matters</h2>
            <p>
              Engagement rate measures how actively your audience interacts with your content, relative
              to your following. It is a far better health signal than follower count: a smaller, engaged
              audience drives more sales than a large, passive one. Brands and creators with strong
              engagement also reach more people, because the algorithm rewards content people interact with.
            </p>
            <p>
              Want to lift the number? Our <Link to="/guides/social-media-marketing">social media marketing guide</Link> covers
              the content strategy behind it — or <Link to="/portfolio/social-media-management">let us manage it for you</Link>.
            </p>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
