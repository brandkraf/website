import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
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
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SITE = 'https://www.brandkraf.com';

const rm = (n) => 'RM ' + (Math.round(n / 100) * 100).toLocaleString('en-US');

export default function MarketingCostCalculatorPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  const isMs = lang === 'ms';

  // Estimate model built from live 2026 Malaysian market research (RM / month unless one-off).
  const SIZE = {
    micro: { label: T('Micro', 'Mikro'), sub: T('Solo / startup', 'Solo / syarikat baharu'), mult: 0.8 },
    small: { label: T('Small', 'Kecil'), sub: T('2–20 staff', '2–20 kakitangan'), mult: 1.0 },
    medium: { label: T('Medium', 'Sederhana'), sub: T('20+ staff', '20+ kakitangan'), mult: 1.4 },
  };
  const PROVIDER = {
    freelancer: { label: T('Freelancer', 'Pekerja bebas'), sub: T('Lowest cost', 'Kos terendah'), mult: 0.6 },
    boutique: { label: T('Boutique agency', 'Agensi butik'), sub: T('Best for SMEs', 'Terbaik untuk PKS'), mult: 1.0 },
    agency: { label: T('Full-service', 'Perkhidmatan penuh'), sub: T('Maximum scope', 'Skop maksimum'), mult: 1.6 },
  };
  const SERVICES = [
    { key: 'social', label: T('Social Media Management', 'Pengurusan Media Sosial'), type: 'monthly', min: 2500, max: 5000, href: '/portfolio/social-media-management', icon: Megaphone },
    { key: 'ads', label: T('Paid Ads Management', 'Pengurusan Iklan Berbayar'), type: 'monthly', min: 800, max: 1500, href: '/portfolio/paid-advertising', icon: Search, note: T('ad spend separate', 'perbelanjaan iklan berasingan') },
    { key: 'seo', label: 'SEO', type: 'monthly', min: 1500, max: 3000, href: '/blog/local-seo-malaysia-guide', icon: Search },
    { key: 'ugc', label: T('UGC Content', 'Kandungan UGC'), type: 'monthly', min: 1500, max: 3500, href: '/portfolio/ugc-content-creation', icon: Video },
    { key: 'tiktoklive', label: 'TikTok Live', type: 'monthly', min: 2000, max: 5000, href: '/portfolio/tiktok-live-service', icon: Radio },
    { key: 'koc', label: T('KOC / Influencer', 'KOC / Pempengaruh'), type: 'monthly', min: 1500, max: 6000, href: '/portfolio/koc-kol-service', icon: Users },
    { key: 'ai', label: T('AI & Chatbots', 'AI & Chatbot'), type: 'monthly', min: 1000, max: 3000, href: '/portfolio/ai-driven-marketing', icon: Bot },
    { key: 'web', label: T('Website Development', 'Pembangunan Laman Web'), type: 'oneoff', min: 3000, max: 12000, href: '/portfolio/website-development', icon: Globe },
    { key: 'branding', label: T('Branding & Creative', 'Penjenamaan & Kreatif'), type: 'oneoff', min: 2000, max: 8000, href: '/portfolio/branding-creative', icon: Palette },
  ];

  const FAQS = [
    { question: T('How accurate is this calculator?', 'Sejauh mana tepat kalkulator ini?'), answer: T('It gives a realistic range based on 2026 Malaysian market rates, but every business is different. For an exact, no-obligation quote tailored to your goals, just get in touch.', 'Ia memberikan julat realistik berdasarkan kadar pasaran Malaysia 2026, tetapi setiap perniagaan berbeza. Untuk sebut harga tepat tanpa obligasi yang disesuaikan dengan matlamat anda, hubungi kami sahaja.') },
    { question: T('Is ad spend included in the estimate?', 'Adakah perbelanjaan iklan termasuk dalam anggaran?'), answer: T('No. The figures cover management and content fees. The actual budget you pay to Google, Meta, or TikTok is separate and fully controlled by you.', 'Tidak. Angka ini meliputi yuran pengurusan dan kandungan. Bajet sebenar yang anda bayar kepada Google, Meta, atau TikTok adalah berasingan dan dikawal sepenuhnya oleh anda.') },
    { question: T('Can the SME Digitalisation Grant reduce this cost?', 'Bolehkah Geran Pendigitalan PKS mengurangkan kos ini?'), answer: T('Eligible Malaysian SMEs can claim 50% of qualifying digitalisation costs, up to RM5,000, which can offset part of your setup. See our SME Digitalisation Grant guide for details.', 'PKS Malaysia yang layak boleh menuntut 50% kos pendigitalan yang layak, sehingga RM5,000, yang boleh mengimbangi sebahagian persediaan anda. Lihat panduan Geran Pendigitalan PKS kami untuk butiran.') },
    { question: T('Why is there a range instead of one price?', 'Mengapa ada julat dan bukannya satu harga?'), answer: T('Cost depends on your business size, how much content is produced, how competitive your industry is, and the level of service you choose. The range reflects that reality.', 'Kos bergantung pada saiz perniagaan anda, berapa banyak kandungan dihasilkan, betapa kompetitif industri anda, dan tahap perkhidmatan yang anda pilih. Julat itu mencerminkan realiti tersebut.') },
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, provider, selected, lang]);

  const path = '/marketing-cost-calculator';
  const url = `${SITE}${isMs ? '/ms' : ''}${path}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: T('Malaysia Digital Marketing Cost Calculator', 'Kalkulator Kos Pemasaran Digital Malaysia'),
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
          { '@type': 'ListItem', position: 2, name: T('Marketing Cost Calculator', 'Kalkulator Kos Pemasaran'), item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('Digital Marketing Cost Calculator Malaysia (2026) | BrandKraf', 'Kalkulator Kos Pemasaran Digital Malaysia (2026) | BrandKraf')}</title>
        <meta name="description" content={T(
          'Free calculator: estimate what digital marketing costs in Malaysia in 2026. Pick your services, business size, and provider type to get an instant monthly price range.',
          'Kalkulator percuma: anggarkan kos pemasaran digital di Malaysia pada 2026. Pilih perkhidmatan, saiz perniagaan, dan jenis penyedia untuk mendapat julat harga bulanan segera.',
        )} />
        <link rel="canonical" href={url} />
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
              <Calculator className="h-4 w-4" /> {T('Free Tool', 'Alat Percuma')}
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {isMs ? (
                <><span className="text-gradient">Kalkulator</span> Kos Pemasaran Digital</>
              ) : (
                <>Digital Marketing Cost <span className="text-gradient">Calculator</span></>
              )}
            </h1>
            <p className="text-lg text-muted-foreground">
              {T(
                'See what digital marketing realistically costs in Malaysia in 2026. Pick your services and get an instant monthly estimate — no email required.',
                'Lihat kos realistik pemasaran digital di Malaysia pada 2026. Pilih perkhidmatan anda dan dapatkan anggaran bulanan segera — tanpa e-mel diperlukan.',
              )}
            </p>
          </motion.div>

          {/* Calculator */}
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Inputs */}
            <div className="space-y-8 lg:col-span-3">
              {/* Services */}
              <section>
                <h2 className="mb-4 text-lg font-bold">{T('1. Choose your services', '1. Pilih perkhidmatan anda')}</h2>
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
                            {s.type === 'oneoff' ? T('one-time', 'sekali sahaja') : `${rm(s.min)}–${rm(s.max)}${T('/mo', '/bln')}`}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Business size */}
              <section>
                <h2 className="mb-4 text-lg font-bold">{T('2. Your business size', '2. Saiz perniagaan anda')}</h2>
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
                <h2 className="mb-4 text-lg font-bold">{T('3. Who delivers it', '3. Siapa yang menyampaikannya')}</h2>
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
                    {T('Estimated cost', 'Anggaran kos')}
                  </p>

                  {result.count === 0 ? (
                    <p className="mt-6 text-muted-foreground">
                      {T('Select one or more services to see your estimate.', 'Pilih satu atau lebih perkhidmatan untuk melihat anggaran anda.')}
                    </p>
                  ) : (
                    <>
                      {result.hasMonthly && (
                        <div className="mt-2">
                          <span className="text-4xl font-extrabold tracking-tight text-foreground">
                            {rm(result.monthlyMin)}
                          </span>
                          <span className="text-2xl font-bold text-muted-foreground"> – {rm(result.monthlyMax)}</span>
                          <span className="block text-sm text-muted-foreground">{T('per month', 'sebulan')}</span>
                        </div>
                      )}
                      {result.hasOneoff && (
                        <div className="mt-4 border-t border-border pt-4">
                          <span className="text-2xl font-bold text-foreground">
                            {rm(result.oneMin)} – {rm(result.oneMax)}
                          </span>
                          <span className="block text-sm text-muted-foreground">{T('one-time setup', 'persediaan sekali sahaja')}</span>
                        </div>
                      )}

                      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                        {result.hasAds && (
                          <li className="flex gap-2">
                            <Info className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                            {T('Ad spend (paid to Google/Meta/TikTok) is separate.', 'Perbelanjaan iklan (dibayar kepada Google/Meta/TikTok) adalah berasingan.')}
                          </li>
                        )}
                        <li className="flex gap-2">
                          <Sparkles className="h-4 w-4 shrink-0 text-brandkraf-teal" />
                          {T('Eligible SMEs can claim 50% (up to RM5,000) via the', 'PKS yang layak boleh menuntut 50% (sehingga RM5,000) melalui')}{' '}
                          <Link to={lp('/blog/sme-digitalisation-grant-2026')} className="font-medium text-brandkraf-teal underline-offset-2 hover:underline">
                            {T('SME Digitalisation Grant', 'Geran Pendigitalan PKS')}
                          </Link>.
                        </li>
                      </ul>
                    </>
                  )}

                  <Button asChild className="mt-7 h-12 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                    <Link to={lp('/contact')} className="flex items-center justify-center gap-2">
                      {T('Get an exact quote', 'Dapatkan sebut harga tepat')} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="mt-2 w-full text-muted-foreground hover:text-foreground">
                    <Link to={lp('/pricing')}>{T('See detailed pricing', 'Lihat harga terperinci')}</Link>
                  </Button>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    {T('Estimate only — based on 2026 Malaysian market rates.', 'Anggaran sahaja — berdasarkan kadar pasaran Malaysia 2026.')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Supporting content (SEO + internal links) */}
          <div className="mx-auto mt-20 max-w-3xl prose prose-lg prose-headings:scroll-mt-28">
            <h2>{T('How much does digital marketing cost in Malaysia?', 'Berapa kos pemasaran digital di Malaysia?')}</h2>
            <p>
              {T(
                'Most Malaysian SMEs invest between RM1,500 and RM8,000 a month on digital marketing before ad spend, depending on the services they need and the level of support. A freelancer is cheaper but limited in capacity; a full-service agency costs more but brings a whole team and accountability across channels.',
                'Kebanyakan PKS Malaysia melabur antara RM1,500 dan RM8,000 sebulan untuk pemasaran digital sebelum perbelanjaan iklan, bergantung pada perkhidmatan yang diperlukan dan tahap sokongan. Pekerja bebas lebih murah tetapi terhad kapasitinya; agensi perkhidmatan penuh kos lebih tetapi membawa satu pasukan penuh dan akauntabiliti merentasi saluran.',
              )}
            </p>
            <p>
              {T('This calculator turns those market rates into a quick estimate. For the full breakdown of what drives the price — and how to budget smartly — read our', 'Kalkulator ini menukar kadar pasaran itu menjadi anggaran pantas. Untuk pecahan penuh apa yang memacu harga — dan cara membelanjakan dengan bijak — baca')}{' '}
              <Link to={lp('/blog/digital-marketing-cost-malaysia')}>{T('digital marketing cost guide', 'panduan kos pemasaran digital')}</Link>
              {T(', or compare specific packages on our', ' kami, atau bandingkan pakej khusus di')}{' '}
              <Link to={lp('/pricing')}>{T('pricing page', 'halaman harga')}</Link>{T('.', ' kami.')}
            </p>
            <h2>{T('What affects your cost the most', 'Apa yang paling mempengaruhi kos anda')}</h2>
            <ul>
              <li><strong>{T('Services', 'Perkhidmatan')}</strong> — {T('more channels (and video-heavy ones) cost more.', 'lebih banyak saluran (dan yang berat video) kos lebih.')}</li>
              <li><strong>{T('Business size', 'Saiz perniagaan')}</strong> — {T('larger operations need more content and scope.', 'operasi lebih besar memerlukan lebih banyak kandungan dan skop.')}</li>
              <li><strong>{T('Provider', 'Penyedia')}</strong> — {T('freelancer, boutique, or full-service agency.', 'pekerja bebas, butik, atau agensi perkhidmatan penuh.')}</li>
              <li><strong>{T('Industry competitiveness', 'Daya saing industri')}</strong> — {T('tougher markets need more investment.', 'pasaran lebih sukar memerlukan lebih pelaburan.')}</li>
            </ul>
          </div>
        </div>
      </main>

      <FAQSection faqs={FAQS} />
      <Footer />
    </div>
  );
}
