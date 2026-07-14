import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function BrandingPortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: T('Restaurant Chain', 'Rangkaian Restoran'),
      objective: T('Complete brand refresh and social media presence', 'Penyegaran jenama lengkap dan kehadiran media sosial'),
      category: T('Branding', 'Penjenamaan'),
      results: [
        { type: 'views', value: '150K', label: T('Reach', 'Jangkauan') },
        { type: 'leads', value: '3,200', label: T('New Followers', 'Pengikut Baharu') },
        { type: 'sales', value: '52%', label: T('Foot Traffic', 'Trafik Pejalan Kaki') }
      ]
    }
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T('Branding & Creative Portfolio - BrandKraf', 'Portfolio Penjenamaan & Kreatif - BrandKraf')}</title>
        <meta name="description" content={T('Discover our complete brand identity and creative design transformations.', 'Temui transformasi identiti jenama dan reka bentuk kreatif lengkap kami.')} />
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
            <h1 className="mb-4">{T('Branding & Creative', 'Penjenamaan & Kreatif')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {T(
                'Memorable brand identities and striking visual designs that help you stand out in a crowded market.',
                'Identiti jenama yang mudah diingati dan reka bentuk visual yang menarik yang membantu anda menonjol dalam pasaran yang sesak.',
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

export default BrandingPortfolioPage;