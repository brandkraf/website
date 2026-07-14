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

function UGCPortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: T('Fashion E-commerce', 'E-dagang Fesyen'),
      objective: T('Increase brand awareness and drive online sales', 'Meningkatkan kesedaran jenama dan memacu jualan dalam talian'),
      category: T('UGC Videos', 'Video UGC'),
      results: [
        { type: 'views', value: '250K+', label: T('Views', 'Tontonan') },
        { type: 'leads', value: '1,847', label: T('Leads', 'Petunjuk') },
        { type: 'sales', value: '45%', label: T('Sales Growth', 'Pertumbuhan Jualan') }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: T('Fitness Studio', 'Studio Kecergasan'),
      objective: T('UGC content strategy for member acquisition', 'Strategi kandungan UGC untuk pemerolehan ahli'),
      category: T('UGC Videos', 'Video UGC'),
      results: [
        { type: 'views', value: '320K', label: T('Views', 'Tontonan') },
        { type: 'leads', value: '847', label: T('Sign-ups', 'Pendaftaran') },
        { type: 'sales', value: '41%', label: T('Retention', 'Pengekalan') }
      ]
    }
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T('UGC Videos Portfolio - BrandKraf', 'Portfolio Video UGC - BrandKraf')}</title>
        <meta name="description" content={T('Explore our successful User-Generated Content (UGC) campaigns that drive authentic engagement and conversions.', 'Terokai kempen Kandungan Jana Pengguna (UGC) kami yang berjaya memacu penglibatan dan penukaran autentik.')} />
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
            <h1 className="mb-4">{T('UGC Videos', 'Video UGC')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {T(
                'Authentic, user-generated content that builds trust and drives real conversions. See how our UGC campaigns perform.',
                'Kandungan jana pengguna yang autentik yang membina kepercayaan dan memacu penukaran sebenar. Lihat prestasi kempen UGC kami.',
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

export default UGCPortfolioPage;