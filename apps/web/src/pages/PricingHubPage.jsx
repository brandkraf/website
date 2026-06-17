import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Video, 
  Target, 
  Globe, 
  Palette, 
  Users, 
  Radio, 
  BrainCircuit, 
  MessageSquare 
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingServiceCard from '@/components/PricingServiceCard.jsx';

const SERVICES = [
  {
    title: "Social Media Management",
    description: "Comprehensive management of your social channels to build community and drive engagement.",
    icon: Share2,
    link: "/pricing/social-media-management"
  },
  {
    title: "UGC Content Creation",
    description: "Authentic user-generated content that builds trust and converts viewers into customers.",
    icon: Video,
    link: "/pricing/ugc-content-creation"
  },
  {
    title: "Paid Advertising",
    description: "Data-driven ad campaigns across Meta, TikTok, and Google to maximize your ROI.",
    icon: Target,
    link: "/pricing/paid-advertising"
  },
  {
    title: "Website Development",
    description: "High-performance, conversion-optimized websites tailored to your brand.",
    icon: Globe,
    link: "/pricing/website-development"
  },
  {
    title: "Branding & Creative",
    description: "Strategic brand identity design and creative assets that make you stand out.",
    icon: Palette,
    link: "/pricing/branding-creative"
  },
  {
    title: "KOC & KOL Service",
    description: "Strategic influencer partnerships to amplify your brand's reach and credibility.",
    icon: Users,
    link: "/pricing/koc-kol-service"
  },
  {
    title: "TikTok Live Service",
    description: "Professional live streaming management to drive real-time sales and engagement.",
    icon: Radio,
    link: "/pricing/tiktok-live-service"
  },
  {
    title: "AI-Driven Marketing",
    description: "Cutting-edge AI solutions to automate and optimize your marketing efforts.",
    icon: BrainCircuit,
    link: "/pricing/ai-driven-marketing"
  },
  {
    title: "Chatbot Development",
    description: "Intelligent conversational agents to handle customer service and lead generation 24/7.",
    icon: MessageSquare,
    link: "/pricing/chatbot-development"
  }
];

export default function PricingHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Pricing & Services | BrandKraf</title>
        <meta name="description" content="Explore our comprehensive digital marketing services and transparent pricing packages tailored for your business growth." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="mb-6">Transparent Pricing for Every Stage of Growth</h1>
            <p className="text-xl text-muted-foreground">
              Select a service below to view detailed pricing tiers, features, and deliverables tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <PricingServiceCard 
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}