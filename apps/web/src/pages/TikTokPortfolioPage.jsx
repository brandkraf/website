import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function TikTokPortfolioPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: 'Beauty Brand',
      objective: 'Viral TikTok campaign for new product launch',
      category: 'TikTok Campaigns',
      results: [
        { type: 'views', value: '500K+', label: 'Views' },
        { type: 'leads', value: '2,400', label: 'Followers Gained' },
        { type: 'sales', value: '67%', label: 'Engagement Rate' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>TikTok Campaigns Portfolio - BrandKraf</title>
        <meta name="description" content="Explore our successful TikTok campaigns and live streaming events that maximize engagement and brand visibility." />
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
            <h1 className="mb-4">TikTok Campaigns</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              High-impact TikTok strategies and live events designed to capture attention and boost real-time sales.
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