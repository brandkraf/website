import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Real 404. Previously the wildcard route rendered HomePage, so every typo'd or
// stale URL served a full copy of the home page at HTTP 200 — Google indexed
// those as duplicates ("Alternate page with proper canonical tag" / "Soft 404").
// This page is explicitly noindex so unknown URLs never enter the index.
export default function NotFoundPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const LINKS = [
    { href: '/', label: T('Home', 'Utama') },
    { href: '/portfolio', label: T('Services', 'Perkhidmatan') },
    { href: '/pricing', label: T('Pricing', 'Harga') },
    { href: '/blog', label: T('Blog', 'Blog') },
    { href: '/contact', label: T('Contact', 'Hubungi') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('Page Not Found (404) | BrandKraf', 'Halaman Tidak Dijumpai (404) | BrandKraf')}</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />
          <div className="container-custom relative max-w-2xl text-center">
            <span className="chip-brand mb-5 inline-flex items-center gap-2">
              <Compass className="h-4 w-4" /> {T('404', '404')}
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              {T('We could not find that page', 'Kami tidak menjumpai halaman itu')}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {T(
                'The link may be out of date, or the page may have moved. Here is where most people go next.',
                'Pautan itu mungkin sudah lapuk, atau halaman itu telah dipindahkan. Ini destinasi yang kebanyakan orang tuju seterusnya.'
              )}
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={lp(l.href)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-brandkraf-teal/50 hover:text-brandkraf-teal"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform"
            >
              <Link to={lp('/contact')} className="flex items-center gap-2">
                {T('Talk to us', 'Hubungi kami')} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
