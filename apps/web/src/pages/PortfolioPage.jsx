import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Video, 
  Target, 
  Globe, 
  Palette, 
  Users, 
  Radio, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function PortfolioPage() {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic content planning and community management across all platforms.',
      slug: 'social-media-management'
    },
    {
      icon: Video,
      title: 'UGC Content Creation',
      description: 'Authentic user-generated content that drives engagement and conversions.',
      slug: 'ugc-content-creation'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Data-driven ad campaigns on Meta, TikTok, and Google maximizing ROI.',
      slug: 'paid-advertising'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'High-converting websites built for performance and user experience.',
      slug: 'website-development'
    },
    {
      icon: Palette,
      title: 'Branding & Creative',
      description: 'Complete brand identity, logo design, and creative marketing collateral.',
      slug: 'branding-creative'
    },
    {
      icon: Users,
      title: 'KOC/KOL Service',
      description: 'Strategic collaborations with Key Opinion Creators to amplify brand reach.',
      slug: 'koc-kol-service'
    },
    {
      icon: Radio,
      title: 'TikTok Live Service',
      description: 'Engaging live streaming sessions designed to boost real-time sales.',
      slug: 'tiktok-live-service'
    },
    {
      icon: Sparkles,
      title: 'AI Driven Marketing',
      description: 'Leverage artificial intelligence to predict trends and optimize campaigns.',
      slug: 'ai-driven-marketing'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Development',
      description: 'Intelligent conversational agents to automate support and qualify leads.',
      slug: 'chatbot-development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Explore BrandKraf's Work</title>
        <meta
          name="description"
          content="Explore BrandKraf's portfolio. Discover our expertise in UGC, TikTok campaigns, Paid Ads, Branding, and AI marketing."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-screen bg-muted/10 relative">
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="mb-6">Explore Our Work</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              BrandKraf's expertise lies in creating high-quality digital content and data-driven campaigns. We build solutions that scale brands and deliver measurable growth.
            </p>
            <p className="text-lg font-medium text-foreground">
              Select a service below to view details and case studies
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link 
                    to={`/portfolio/${service.slug}`}
                    className="portfolio-card flex flex-col h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                      View Service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PortfolioPage;