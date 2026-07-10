import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function AdCreativesPortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: T('Tech Startup', 'Syarikat Baharu Teknologi'),
      objective: T('Generate qualified B2B leads through LinkedIn ads', 'Menjana petunjuk B2B berkelayakan melalui iklan LinkedIn'),
      category: T('Ad Creatives', 'Kreatif Iklan'),
      results: [
        { type: 'leads', value: '1,200+', label: T('Qualified Leads', 'Petunjuk Berkelayakan') },
        { type: 'sales', value: '38%', label: T('Conversion Rate', 'Kadar Penukaran') },
        { type: 'views', value: '180K', label: T('Impressions', 'Tera') }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: T('SaaS Platform', 'Platform SaaS'),
      objective: T('Performance marketing campaign across Meta and Google', 'Kempen pemasaran prestasi merentasi Meta dan Google'),
      category: T('Ad Creatives', 'Kreatif Iklan'),
      results: [
        { type: 'leads', value: '2,100', label: T('Trials', 'Percubaan') },
        { type: 'sales', value: '28%', label: T('Conversion', 'Penukaran') },
        { type: 'views', value: '420K', label: T('Impressions', 'Tera') }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{T('Ad Creatives & Paid Advertising Portfolio - BrandKraf', 'Portfolio Kreatif Iklan & Pengiklanan Berbayar - BrandKraf')}</title>
        <meta name="description" content={T('See how our performance-focused ad creatives generate qualified leads and maximize ROI.', 'Lihat cara kreatif iklan kami yang berfokuskan prestasi menjana petunjuk berkelayakan dan memaksimumkan ROI.')} />
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
            className="mb-16"
          >
            <h1 className="mb-4">{T('Ad Creatives & Paid Ads', 'Kreatif Iklan & Iklan Berbayar')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {T(
                'Data-driven ad campaigns that prioritize ROI. We design creatives that stop the scroll and drive action.',
                'Kempen iklan dipacu data yang mengutamakan ROI. Kami mereka bentuk kreatif yang menghentikan susur dan memacu tindakan.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AdCreativesPortfolioPage;