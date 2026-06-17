import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function UGCPortfolioPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: 'Fashion E-commerce',
      objective: 'Increase brand awareness and drive online sales',
      category: 'UGC Videos',
      results: [
        { type: 'views', value: '250K+', label: 'Views' },
        { type: 'leads', value: '1,847', label: 'Leads' },
        { type: 'sales', value: '45%', label: 'Sales Growth' }
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1675682897447-999b32747150',
      clientType: 'Fitness Studio',
      objective: 'UGC content strategy for member acquisition',
      category: 'UGC Videos',
      results: [
        { type: 'views', value: '320K', label: 'Views' },
        { type: 'leads', value: '847', label: 'Sign-ups' },
        { type: 'sales', value: '41%', label: 'Retention' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>UGC Videos Portfolio - BrandKraf</title>
        <meta name="description" content="Explore our successful User-Generated Content (UGC) campaigns that drive authentic engagement and conversions." />
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
            <h1 className="mb-4">UGC Videos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Authentic, user-generated content that builds trust and drives real conversions. See how our UGC campaigns perform.
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