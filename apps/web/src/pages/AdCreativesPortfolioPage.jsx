import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function AdCreativesPortfolioPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: 'Tech Startup',
      objective: 'Generate qualified B2B leads through LinkedIn ads',
      category: 'Ad Creatives',
      results: [
        { type: 'leads', value: '1,200+', label: 'Qualified Leads' },
        { type: 'sales', value: '38%', label: 'Conversion Rate' },
        { type: 'views', value: '180K', label: 'Impressions' }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: 'SaaS Platform',
      objective: 'Performance marketing campaign across Meta and Google',
      category: 'Ad Creatives',
      results: [
        { type: 'leads', value: '2,100', label: 'Trials' },
        { type: 'sales', value: '28%', label: 'Conversion' },
        { type: 'views', value: '420K', label: 'Impressions' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ad Creatives & Paid Advertising Portfolio - BrandKraf</title>
        <meta name="description" content="See how our performance-focused ad creatives generate qualified leads and maximize ROI." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20 min-h-screen relative">
        <div className="container-custom">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="mb-4">Ad Creatives & Paid Ads</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Data-driven ad campaigns that prioritize ROI. We design creatives that stop the scroll and drive action.
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