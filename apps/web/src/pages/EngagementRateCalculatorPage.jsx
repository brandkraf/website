import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, Info } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SITE = 'https://www.brandkraf.com';

const pct = (n) => `${n.toFixed(2)}%`;

const TONE = { bad: 'text-red-600', ok: 'text-amber-600', good: 'text-brandkraf-teal', great: 'text-brandkraf-teal' };

export default function EngagementRateCalculatorPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  const isMs = lang === 'ms';

  const FAQS = [
    { question: T('What is a good engagement rate?', 'Apa kadar penglibatan yang baik?'), answer: T('It varies by platform and follower count, but on Instagram 1–3.5% is average, 3.5–6% is strong, and above 6% is excellent. Smaller accounts usually see higher rates than large ones.', 'Ia berbeza mengikut platform dan jumlah pengikut, tetapi di Instagram 1–3.5% ialah purata, 3.5–6% kukuh, dan melebihi 6% cemerlang. Akaun lebih kecil biasanya melihat kadar lebih tinggi daripada yang besar.') },
    { question: T('How is engagement rate calculated?', 'Bagaimana kadar penglibatan dikira?'), answer: T('The most common formula is (likes + comments) ÷ followers × 100. You can also include saves and shares, which are strong signals of valuable content.', 'Formula paling biasa ialah (suka + komen) ÷ pengikut × 100. Anda juga boleh memasukkan simpanan dan perkongsian, yang merupakan isyarat kuat kandungan bernilai.') },
    { question: T('Why is my engagement rate low?', 'Mengapa kadar penglibatan saya rendah?'), answer: T('Common causes are buying followers, posting inconsistent or low-value content, weak hooks, or a mismatch between your audience and content. Quality and consistency lift it over time.', 'Punca biasa ialah membeli pengikut, menyiarkan kandungan tidak konsisten atau bernilai rendah, kail lemah, atau ketidakpadanan antara penonton dan kandungan anda. Kualiti dan kekonsistenan menaikkannya dari masa ke masa.') },
    { question: T('Does a high follower count mean high engagement?', 'Adakah jumlah pengikut tinggi bermakna penglibatan tinggi?'), answer: T('No — they often move in opposite directions. A smaller, highly engaged audience is far more valuable than a large, passive one, especially for driving sales.', 'Tidak — ia sering bergerak ke arah bertentangan. Penonton yang lebih kecil dan sangat terlibat jauh lebih bernilai daripada yang besar dan pasif, terutamanya untuk memacu jualan.') },
  ];

  const verdict = (rate) => {
    if (rate <= 0) return null;
    if (rate < 1) return { tone: 'bad', label: T('Below average', 'Bawah purata'), note: T('Likely worth reviewing your content and audience fit.', 'Mungkin berbaloi menyemak kesesuaian kandungan dan penonton anda.') };
    if (rate < 3.5) return { tone: 'ok', label: T('Average', 'Purata'), note: T('A healthy, normal range for most accounts.', 'Julat sihat dan normal untuk kebanyakan akaun.') };
    if (rate < 6) return { tone: 'good', label: T('Strong', 'Kukuh'), note: T('Your audience is genuinely engaged — keep it up.', 'Penonton anda benar-benar terlibat — teruskan.') };
    return { tone: 'great', label: T('Excellent', 'Cemerlang'), note: T('Outstanding engagement — your content is resonating.', 'Penglibatan luar biasa — kandungan anda beresonansi.') };
  };

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

  const path = '/engagement-rate-calculator';
  const url = `${SITE}${isMs ? '/ms' : ''}${path}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: T('Engagement Rate Calculator', 'Kalkulator Kadar Penglibatan'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'MYR' },
        provider: { '@type': 'Organization', name: 'BrandKraf', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: T('Home', 'Utama'), item: isMs ? `${SITE}/ms` : SITE },
          { '@type': 'ListItem', position: 2, name: T('Free Tools', 'Alat Percuma'), item: `${SITE}${isMs ? '/ms' : ''}/tools` },
          { '@type': 'ListItem', position: 3, name: T('Engagement Rate Calculator', 'Kalkulator Kadar Penglibatan'), item: url },
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
      <Helmet defer={false}>
        <title>{T('Engagement Rate Calculator (Free) — Instagram & Social | BrandKraf', 'Kalkulator Kadar Penglibatan (Percuma) — Instagram & Sosial | BrandKraf')}</title>
        <meta name="description" content={T(
          'Free engagement rate calculator. Enter your followers, likes, and comments to instantly see your engagement rate and how it compares to industry benchmarks.',
          'Kalkulator kadar penglibatan percuma. Masukkan pengikut, suka, dan komen anda untuk melihat serta-merta kadar penglibatan anda dan bagaimana ia berbanding penanda aras industri.',
        )} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-2xl text-center">
            <span className="chip-brand mb-4 inline-flex items-center gap-2"><Heart className="h-4 w-4" /> {T('Free Tool', 'Alat Percuma')}</span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {isMs ? (
                <><span className="text-gradient">Kalkulator</span> Kadar Penglibatan</>
              ) : (
                <>Engagement Rate <span className="text-gradient">Calculator</span></>
              )}
            </h1>
            <p className="text-lg text-muted-foreground">{T(
              'See your social media engagement rate instantly and how it stacks up against industry benchmarks.',
              'Lihat kadar penglibatan media sosial anda serta-merta dan bagaimana ia berbanding penanda aras industri.',
            )}</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              {field(T('Followers', 'Pengikut'), followers, setFollowers, T('Total followers on the account.', 'Jumlah pengikut pada akaun.'))}
              {field(T('Average likes per post', 'Purata suka sesiaran'), likes, setLikes, T('Average across your recent posts.', 'Purata merentasi siaran terkini anda.'))}
              {field(T('Average comments per post', 'Purata komen sesiaran'), comments, setComments, T('Average across your recent posts.', 'Purata merentasi siaran terkini anda.'))}
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="lg:sticky lg:top-28 rounded-3xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-[1.5px] shadow-xl">
                <div className="rounded-3xl bg-card p-7">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{T('Engagement rate', 'Kadar penglibatan')}</p>
                  {!r.hasInput ? (
                    <p className="mt-6 text-muted-foreground">{T('Enter your followers to see your rate.', 'Masukkan pengikut anda untuk melihat kadar anda.')}</p>
                  ) : (
                    <>
                      <div className="mt-2"><span className="text-5xl font-extrabold tracking-tight text-foreground">{pct(r.rate)}</span></div>
                      {v && <p className={`mt-1 font-semibold ${TONE[v.tone]}`}>{v.label}</p>}
                      {v && <p className="mt-1 text-sm text-muted-foreground">{v.note}</p>}
                      <p className="mt-5 flex gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                        <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                        {T(
                          'Based on (likes + comments) ÷ followers. Add saves & shares for an even fuller picture.',
                          'Berdasarkan (suka + komen) ÷ pengikut. Tambah simpanan & perkongsian untuk gambaran lebih penuh.',
                        )}
                      </p>
                    </>
                  )}
                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to={lp('/contact')} className="flex items-center justify-center gap-2">{T('Grow my engagement', 'Kembangkan penglibatan saya')} <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to={lp('/portfolio/social-media-management')}>{T('See our social media service', 'Lihat perkhidmatan media sosial kami')}</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>{T('What is engagement rate — and why it matters', 'Apa itu kadar penglibatan — dan mengapa ia penting')}</h2>
            <p>
              {T(
                'Engagement rate measures how actively your audience interacts with your content, relative to your following. It is a far better health signal than follower count: a smaller, engaged audience drives more sales than a large, passive one. Brands and creators with strong engagement also reach more people, because the algorithm rewards content people interact with.',
                'Kadar penglibatan mengukur betapa aktif penonton anda berinteraksi dengan kandungan anda, relatif kepada pengikut anda. Ia isyarat kesihatan yang jauh lebih baik daripada jumlah pengikut: penonton yang lebih kecil dan terlibat memacu lebih banyak jualan daripada yang besar dan pasif. Jenama dan pencipta dengan penglibatan kukuh juga mencapai lebih ramai orang, kerana algoritma memberi ganjaran kepada kandungan yang orang berinteraksi dengannya.',
              )}
            </p>
            <p>
              {T('Want to lift the number? Our', 'Mahu menaikkan nombor itu?')}{' '}
              <Link to={lp('/guides/social-media-marketing')}>{T('social media marketing guide', 'Panduan pemasaran media sosial')}</Link>{' '}
              {T('covers the content strategy behind it — or', 'kami meliputi strategi kandungan di sebaliknya — atau')}{' '}
              <Link to={lp('/portfolio/social-media-management')}>{T('let us manage it for you', 'biarkan kami menguruskannya untuk anda')}</Link>.
            </p>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
