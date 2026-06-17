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
    name: "Brand Refresh",
    price: "RM 3,500",
    numericPrice: 3500,
    description: "Modernize your existing brand identity.",
    features: [
      "Logo Modernization",
      "Color Palette Update",
      "Typography Selection",
      "Basic Brand Guidelines (PDF)",
      "Social Media Profile Assets",
      "2 Rounds of Revisions"
    ],
    isPopular: false
  },
  {
    name: "Full Identity",
    price: "RM 8,000",
    numericPrice: 8000,
    description: "Complete brand creation from scratch.",
    features: [
      "Primary & Secondary Logos",
      "Comprehensive Color System",
      "Typography Hierarchy",
      "Extensive Brand Book",
      "Business Card & Letterhead Design",
      "Social Media Templates (5)",
      "3 Rounds of Revisions"
    ],
    isPopular: true
  },
  {
    name: "Creative Retainer",
    price: "RM 4,000/mo",
    numericPrice: 4000,
    description: "Ongoing design support for your marketing needs.",
    features: [
      "Dedicated Graphic Designer",
      "Up to 20 Design Requests/mo",
      "Social Media Graphics",
      "Ad Creatives & Banners",
      "Email Newsletter Designs",
      "Presentation Decks",
      "Priority Turnaround (48hrs)"
    ],
    isPopular: false
  }
];

const FAQS = [
  {
    q: "Do I get the source files?",
    a: "Yes, upon final payment, you receive full ownership and all source files (AI, PSD, EPS) along with standard export formats (PNG, JPG, SVG)."
  },
  {
    q: "How does the creative retainer work?",
    a: "The retainer gives you a set amount of design bandwidth per month. You submit requests via our portal, and we deliver them within 48 hours."
  },
  {
    q: "Can you help with naming my company?",
    a: "Yes, brand naming and strategy workshops can be added to the Full Identity package for an additional fee."
  }
];

export default function BrandingCreativePricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Branding & Creative Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for brand identity design and creative retainers." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="Branding & Creative" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">Branding & Creative Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Stand out in a crowded market with a cohesive, memorable brand identity that resonates with your target audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="Branding & Creative"
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