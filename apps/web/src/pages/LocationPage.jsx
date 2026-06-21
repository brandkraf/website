import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Megaphone, Target, Video, Radio, Users, Sparkles, Palette, Globe,
  MapPin, ArrowRight, CheckCircle2, ShieldCheck,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import { Button } from '@/components/ui/button';
import { locations } from '@/data/locations.js';

const SERVICES = [
  { label: 'Social Media Management', href: '/portfolio/social-media-management', icon: Megaphone },
  { label: 'Paid Advertising', href: '/portfolio/paid-advertising', icon: Target },
  { label: 'UGC Content Creation', href: '/portfolio/ugc-content-creation', icon: Video },
  { label: 'TikTok Live Selling', href: '/portfolio/tiktok-live-service', icon: Radio },
  { label: 'KOC / Influencer Marketing', href: '/portfolio/koc-kol-service', icon: Users },
  { label: 'AI-Driven Marketing', href: '/portfolio/ai-driven-marketing', icon: Sparkles },
  { label: 'Branding & Creative', href: '/portfolio/branding-creative', icon: Palette },
  { label: 'Website Development', href: '/portfolio/website-development', icon: Globe },
];

const WHY = [
  '200+ brands grown across Malaysia and SEA',
  'SSM-registered, transparent reporting — no hidden fees',
  'Full-service: content, ads, UGC, and AI under one roof',
  'Data-driven creative built to convert, not just look good',
];

export default function LocationPage() {
  const { city: slug } = useParams();
  const data = locations.find((l) => l.slug === slug);

  if (!data) return <Navigate to="/contact" replace />;

  const url = `https://www.brandkraf.com/digital-marketing-agency/${data.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Digital Marketing',
        name: `Digital Marketing Agency in ${data.city}`,
        url,
        areaServed: { '@type': 'City', name: data.city },
        provider: {
          '@type': 'Organization',
          name: 'BrandKraf',
          url: 'https://www.brandkraf.com',
          telephone: '+60-3-9134-3603',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandkraf.com' },
          { '@type': 'ListItem', position: 2, name: `Digital Marketing in ${data.city}`, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={url} />
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
                <MapPin className="h-4 w-4" /> {data.city}, {data.state}
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Digital Marketing Agency in <span className="text-gradient">{data.city}</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">{data.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform">
                  <Link to="/contact" className="flex items-center gap-2">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-xl px-7 font-semibold">
                  <Link to="/pricing">See pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-muted/20 border-y border-border">
          <div className="container-custom">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight">
              Our services in {data.city}
            </h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              A full digital marketing team under one roof — pick one service or let us run the whole mix.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brandkraf-teal/40 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brandkraf-teal/10 text-brandkraf-teal transition-colors group-hover:bg-brandkraf-teal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold leading-tight">{s.label}</span>
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
                Why {data.city} businesses choose BrandKraf
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
                <ShieldCheck className="h-4 w-4 text-brandkraf-teal" /> SSM-registered Malaysian agency
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-8 md:p-10">
              <h3 className="mb-4 text-xl font-bold">Marketing built for {data.city}</h3>
              <p className="leading-relaxed text-muted-foreground">{data.localContext}</p>
            </div>
          </div>
        </section>

        <FAQSection faqs={data.faqs} />

        {/* CTA */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple" />
          <div className="container-custom relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Ready to grow your {data.city} business?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/90">
              Book a free strategy call and we’ll show you exactly how we’d grow your brand.
            </p>
            <Button asChild size="lg" className="h-13 rounded-xl bg-white px-8 font-bold text-brandkraf-teal hover:-translate-y-0.5 transition-transform">
              <Link to="/contact">Book a free strategy call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
