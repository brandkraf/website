import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientVideoGallery from '@/components/ClientVideoGallery.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { portfolioClients } from '@/data/portfolioVideos.js';

// The portfolio is organised BY CLIENT so the sales team can pull up one brand's
// work in a couple of taps. Every client section has its own anchor, e.g.
// /portfolio/ugc-videos#goren-goren — shareable straight into a chat with a lead.
function UGCPortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const clientCount = (portfolioClients || []).filter((c) => c.videos?.length).length;
  const videoCount = (portfolioClients || []).reduce((n, c) => n + (c.videos?.length || 0), 0);

  const title = T('UGC Video Portfolio by Client | BrandKraf', 'Portfolio Video UGC Mengikut Pelanggan | BrandKraf');
  const description = T(
    `Real UGC videos we produced for ${clientCount}+ Malaysian brands — skincare, clinics, F&B, property, retail and more. Browse the work client by client.`,
    `Video UGC sebenar yang kami hasilkan untuk ${clientCount}+ jenama Malaysia — penjagaan kulit, klinik, F&B, hartanah, runcit dan banyak lagi. Layari kerja kami pelanggan demi pelanggan.`
  );

  return (
    <>
      <Helmet defer={false}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20 min-h-screen relative">
        <div className="container-custom">
          <Link
            to={lp('/portfolio')}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {T('Back to All Services', 'Kembali ke Semua Perkhidmatan')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <h1 className="mb-4">{T('Our work, client by client', 'Kerja kami, pelanggan demi pelanggan')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                `Real UGC and short-form video we produced for ${clientCount} Malaysian brands — ${videoCount} videos in total. Pick a client to see exactly what we delivered.`,
                `UGC dan video bentuk pendek sebenar yang kami hasilkan untuk ${clientCount} jenama Malaysia — ${videoCount} video kesemuanya. Pilih pelanggan untuk melihat dengan tepat apa yang kami hasilkan.`
              )}
            </p>
          </motion.div>

          <ClientVideoGallery />

          <section className="mt-20 rounded-3xl bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              {T('Want work like this for your brand?', 'Mahukan kerja seperti ini untuk jenama anda?')}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              {T(
                'Tell us your product and audience — we will show you exactly what we would shoot, and what it costs.',
                'Beritahu kami produk dan penonton anda — kami akan tunjukkan dengan tepat apa yang akan kami rakam, dan berapa kosnya.'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform"
              >
                <Link to={lp('/contact')} className="flex items-center gap-2">
                  {T('Get a free quote', 'Dapatkan sebut harga percuma')} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-xl px-7 font-semibold">
                <Link to={lp('/pricing/ugc-content-creation')}>{T('See UGC pricing', 'Lihat harga UGC')}</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UGCPortfolioPage;
