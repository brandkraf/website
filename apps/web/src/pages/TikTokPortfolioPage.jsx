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

function TikTokPortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: T('Beauty Brand', 'Jenama Kecantikan'),
      objective: T('Viral TikTok campaign for new product launch', 'Kempen TikTok viral untuk pelancaran produk baharu'),
      category: T('TikTok Campaigns', 'Kempen TikTok'),
      results: [
        { type: 'views', value: '500K+', label: T('Views', 'Tontonan') },
        { type: 'leads', value: '2,400', label: T('Followers Gained', 'Pengikut Diperoleh') },
        { type: 'sales', value: '67%', label: T('Engagement Rate', 'Kadar Penglibatan') }
      ]
    }
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T('TikTok Campaigns Portfolio - BrandKraf', 'Portfolio Kempen TikTok - BrandKraf')}</title>
        <meta name="description" content={T('Explore our successful TikTok campaigns and live streaming events that maximize engagement and brand visibility.', 'Terokai kempen TikTok kami yang berjaya dan acara penstriman langsung yang memaksimumkan penglibatan dan keterlihatan jenama.')} />
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
            <h1 className="mb-4">{T('TikTok Campaigns', 'Kempen TikTok')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {T(
                'High-impact TikTok strategies and live events designed to capture attention and boost real-time sales.',
                'Strategi TikTok berimpak tinggi dan acara langsung yang direka untuk menarik perhatian dan meningkatkan jualan masa nyata.',
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

export default TikTokPortfolioPage;