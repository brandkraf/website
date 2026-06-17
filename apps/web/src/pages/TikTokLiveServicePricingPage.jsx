import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbNav from '@/components/BreadcrumbNav.jsx';
import PricingTierCard from '@/components/PricingTierCard.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';

const TIERS = [
  {
    name: "Pilot Stream",
    price: "RM 2,500",
    numericPrice: 2500,
    description: "Test the waters with a professionally managed live session.",
    features: [
      "1 Live Session (2 Hours)",
      "Professional Host/Talent",
      "Basic Studio Setup",
      "Script & Run-of-Show Planning",
      "Live Moderation & Chat Support",
      "Post-Stream Analytics"
    ],
    isPopular: false
  },
  {
    name: "Monthly Retainer",
    price: "RM 8,000/mo",
    numericPrice: 8000,
    description: "Consistent live presence to build audience and drive sales.",
    features: [
      "4 Live Sessions per month",
      "Dedicated Host Rotation",
      "Premium Studio & Lighting",
      "Interactive Overlays & Graphics",
      "Giveaway & Promo Management",
      "Live Ad Boosting Strategy",
      "Weekly Performance Reviews"
    ],
    isPopular: true
  },
  {
    name: "Mega Event",
    price: "RM 15,000+",
    numericPrice: 15000,
    description: "High-production value streams for major launches or sales.",
    features: [
      "Multi-camera Production Setup",
      "Celebrity/KOL Host Integration",
      "Custom Set Design",
      "Advanced OBS Broadcasting",
      "Pre-event Hype Campaign",
      "Real-time Inventory Sync",
      "Full Technical Crew On-site"
    ],
    isPopular: false
  }
];

const FAQS = [
  {
    q: "Do you provide the studio and equipment?",
    a: "Yes, our packages include access to our fully equipped live streaming studios, complete with professional lighting, cameras, and audio gear."
  },
  {
    q: "Who hosts the live streams?",
    a: "We have a roster of trained, energetic live stream hosts who are experienced in driving engagement and sales. You can also use your own team members if preferred."
  },
  {
    q: "Do you handle the TikTok Shop backend?",
    a: "Yes, we assist with pinning products, managing flash sales, and monitoring inventory during the live session."
  }
];

export default function TikTokLiveServicePricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>TikTok Live Service Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for professional TikTok Live streaming and commerce management." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="TikTok Live Service" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">TikTok Live Service Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Turn viewers into buyers in real-time. We handle the talent, production, and strategy for high-converting TikTok Live sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="TikTok Live Service"
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing"><ArrowLeft className="mr-2 w-4 h-4" /> Back to All Services</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}