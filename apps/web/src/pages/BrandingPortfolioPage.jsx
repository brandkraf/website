import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function BrandingPortfolioPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f',
      clientType: 'Restaurant Chain',
      objective: 'Complete brand refresh and social media presence',
      category: 'Branding',
      results: [
        { type: 'views', value: '150K', label: 'Reach' },
        { type: 'leads', value: '3,200', label: 'New Followers' },
        { type: 'sales', value: '52%', label: 'Foot Traffic' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Branding & Creative Portfolio - BrandKraf</title>
        <meta name="description" content="Discover our complete brand identity and creative design transformations." />
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
            <h1 className="mb-4">Branding & Creative</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Memorable brand identities and striking visual designs that help you stand out in a crowded market.
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