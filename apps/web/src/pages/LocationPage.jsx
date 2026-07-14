import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Megaphone, Target, Video, Radio, Users, Sparkles, Palette, Globe, Search,
  MapPin, ArrowRight, CheckCircle2, ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';
import { locations, locationsMs } from '@/data/locations.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SITE = 'https://www.brandkraf.com';

const SERVICES = [
  { label: 'SEO & AEO Services', label_ms: 'Perkhidmatan SEO & AEO', href: '/portfolio/seo-services', icon: Search },
  { label: 'Social Media Management', label_ms: 'Pengurusan Media Sosial', href: '/portfolio/social-media-management', icon: Megaphone },
  { label: 'Paid Advertising', label_ms: 'Pengiklanan Berbayar', href: '/portfolio/paid-advertising', icon: Target },
  { label: 'UGC Content Creation', label_ms: 'Penciptaan Kandungan UGC', href: '/portfolio/ugc-content-creation', icon: Video },
  { label: 'TikTok Live Selling', label_ms: 'Jualan Langsung TikTok', href: '/portfolio/tiktok-live-service', icon: Radio },
  { label: 'KOC / Influencer Marketing', label_ms: 'Pemasaran KOC / Pempengaruh', href: '/portfolio/koc-kol-service', icon: Users },
  { label: 'AI-Driven Marketing', label_ms: 'Pemasaran Dipacu AI', href: '/portfolio/ai-driven-marketing', icon: Sparkles },
  { label: 'Branding & Creative', label_ms: 'Penjenamaan & Kreatif', href: '/portfolio/branding-creative', icon: Palette },
  { label: 'Website Development', label_ms: 'Pembangunan Laman Web', href: '/portfolio/website-development', icon: Globe },
];

const WHY_EN = [
  '200+ brands grown across Malaysia and SEA',
  'SSM-registered, transparent reporting — no hidden fees',
  'Full-service: content, ads, UGC, and AI under one roof',
  'Data-driven creative built to convert, not just look good',
];
const WHY_MS = [
  '200+ jenama dikembangkan di seluruh Malaysia dan Asia Tenggara',
  'Berdaftar SSM, pelaporan telus — tiada yuran tersembunyi',
  'Perkhidmatan penuh: kandungan, iklan, UGC, dan AI di bawah satu bumbung',
  'Kreatif dipacu data yang dibina untuk menukar, bukan sekadar kelihatan cantik',
];

export default function LocationPage() {
  const { city: slug } = useParams();
  const { lang, lp } = useLanguage();
  const data = locations.find((l) => l.slug === slug);

  if (!data) return <Navigate to={lp('/contact')} replace />;

  const isMs = lang === 'ms';
  const T = (en, ms) => (isMs ? ms : en);
  const msData = isMs ? locationsMs[slug] : null;
  const v = msData ? { ...data, ...msData } : data;
  const hasMs = !!msData;
  const WHY = isMs ? WHY_MS : WHY_EN;

  const path = `/digital-marketing-agency/${data.slug}`;
  const enUrl = `${SITE}${path}`;
  const msUrl = `${SITE}/ms${path}`;
  const url = isMs ? msUrl : enUrl;
  const noindex = isMs && !hasMs;
  const homeUrl = isMs ? `${SITE}/ms` : SITE;

  // The HQ page (Cheras — our physical address) carries full LocalBusiness data;
  // service-area pages describe the service with BrandKraf as provider.
  const mainEntity = data.hq
    ? {
        '@type': 'ProfessionalService',
        name: 'BrandKraf',
        description: v.metaDescription,
        url,
        image: 'https://www.brandkraf.com/android-chrome-512x512.png',
        telephone: '+60-3-9134-3603',
        email: 'admin@brandkraf.com',
        priceRange: 'RM1,500 - RM15,000',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '28-02-02, Jalan 2/101c, Cheras Business Centre',
          addressLocality: 'Cheras',
          addressRegion: 'Kuala Lumpur',
          postalCode: '56100',
          addressCountry: 'MY',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 3.0925, longitude: 101.7345 },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
        ],
        areaServed: [
          { '@type': 'City', name: 'Cheras' },
          { '@type': 'City', name: 'Kuala Lumpur' },
          { '@type': 'State', name: 'Selangor' },
        ],
      }
    : {
        '@type': 'Service',
        serviceType: 'Digital Marketing',
        name: T(`Digital Marketing Agency in ${v.city}`, `Agensi Pemasaran Digital di ${v.city}`),
        url,
        areaServed: { '@type': 'City', name: v.city },
        provider: {
          '@type': 'Organization',
          name: 'BrandKraf',
          url: 'https://www.brandkraf.com',
          telephone: '+60-3-9134-3603',
        },
      };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      mainEntity,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: T('Home', 'Utama'), item: homeUrl },
          { '@type': 'ListItem', position: 2, name: T(`Digital Marketing in ${v.city}`, `Pemasaran Digital di ${v.city}`), item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{v.metaTitle}</title>
        <meta name="description" content={v.metaDescription} />
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex,follow" />}
        {hasMs && <link rel="alternate" hrefLang="en" href={enUrl} />}
        {hasMs && <link rel="alternate" hrefLang="ms" href={msUrl} />}
        {hasMs && <link rel="alternate" hrefLang="x-default" href={enUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={v.metaTitle} />
        <meta property="og:description" content={v.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={isMs ? 'ms_MY' : 'en_MY'} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="chip-brand mb-5 inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {v.city}, {v.state}
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {T('Digital Marketing Agency in ', 'Agensi Pemasaran Digital di ')}<span className="text-gradient">{v.city}</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">{v.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                  <Link to={lp('/contact')} className="flex items-center gap-2">{T('Get a free quote', 'Dapatkan sebut harga percuma')} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-xl px-7 font-semibold">
                  <Link to={lp('/pricing')}>{T('See pricing', 'Lihat harga')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-muted/20 border-y border-border">
          <div className="container-custom">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight">
              {T('Our services in ', 'Perkhidmatan kami di ')}{v.city}
            </h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              {T('A full digital marketing team under one roof — pick one service or let us run the whole mix.', 'Pasukan pemasaran digital penuh di bawah satu bumbung — pilih satu perkhidmatan atau biarkan kami menjalankan keseluruhan campuran.')}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    to={lp(s.href)}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brandkraf-teal/40 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brandkraf-teal/10 text-brandkraf-teal transition-colors group-hover:bg-brandkraf-teal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold leading-tight">{isMs ? s.label_ms : s.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why + local context */}
        <section className="section-padding">
          <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight">
                {T(`Why ${v.city} businesses choose BrandKraf`, `Mengapa perniagaan ${v.city} memilih BrandKraf`)}
              </h2>
              <ul className="space-y-4">
                {WHY.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brandkraf-teal" />
                    <span className="text-muted-foreground">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-brandkraf-teal" /> {T('SSM-registered Malaysian agency', 'Agensi Malaysia berdaftar SSM')}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-8 md:p-10">
              <h3 className="mb-4 text-xl font-bold">{T(`Marketing built for ${v.city}`, `Pemasaran yang dibina untuk ${v.city}`)}</h3>
              <p className="leading-relaxed text-muted-foreground">{v.localContext}</p>
            </div>
          </div>
        </section>

        {/* Optional deep-dive sections (unique per-city content for competitive markets) */}
        {v.sections && v.sections.length > 0 && (
          <section className="section-padding bg-muted/20 border-t border-border">
            <div className="container-custom max-w-3xl space-y-12">
              {v.sections.map((s) => (
                <motion.div
                  key={s.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">{s.heading}</h2>
                  {s.paragraphs.map((para, i) => (
                    <p key={i} className="mb-4 text-lg leading-relaxed text-muted-foreground">{para}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <FAQSection faqs={v.faqs} />

        {/* Hub-and-spoke interlinks: every location page links to every other, so
            link equity flows through the whole Klang Valley + Malaysia cluster. */}
        <section className="section-padding border-t border-border">
          <div className="container-custom">
            <h2 className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              {T('Other areas we serve', 'Kawasan lain yang kami layani')}
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground">
              {T(
                `From our Cheras HQ we work with businesses across the Klang Valley and all of Malaysia — remotely or in person.`,
                `Dari ibu pejabat kami di Cheras, kami bekerja dengan perniagaan di seluruh Lembah Klang dan seluruh Malaysia — secara jarak jauh atau bersemuka.`
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              {locations
                .filter((l) => l.slug !== data.slug)
                .map((l) => (
                  <Link
                    key={l.slug}
                    to={lp(`/digital-marketing-agency/${l.slug}`)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-brandkraf-teal/50 hover:text-brandkraf-teal"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brandkraf-teal" />
                    {T(`Digital marketing in ${l.city}`, `Pemasaran digital di ${l.city}`)}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple" />
          <div className="container-custom relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              {T(`Ready to grow your ${v.city} business?`, `Bersedia untuk mengembangkan perniagaan ${v.city} anda?`)}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/90">
              {T('Book a free strategy call and we’ll show you exactly how we’d grow your brand.', 'Tempah panggilan strategi percuma dan kami akan tunjukkan dengan tepat cara kami akan mengembangkan jenama anda.')}
            </p>
            <Button asChild size="lg" className="h-13 rounded-xl bg-white px-8 font-bold text-brandkraf-teal hover:-translate-y-0.5 transition-transform">
              <Link to={lp('/contact')}>{T('Book a free strategy call', 'Tempah panggilan strategi percuma')}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
