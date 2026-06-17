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
    name: "Landing Page",
    price: "RM 4,500",
    numericPrice: 4500,
    description: "High-converting single page for campaigns or lead gen.",
    features: [
      "Custom Single Page Design",
      "Mobile Responsive",
      "Lead Capture Form Integration",
      "Basic SEO Setup",
      "Fast Loading Speed",
      "1 Month Post-Launch Support"
    ],
    isPopular: false
  },
  {
    name: "Corporate Site",
    price: "RM 8,500",
    numericPrice: 8500,
    description: "Professional multi-page website for established businesses.",
    features: [
      "Up to 8 Custom Pages",
      "CMS Integration (WordPress/Webflow)",
      "Advanced SEO Optimization",
      "Blog/News Section Setup",
      "Analytics & Tracking Integration",
      "Custom Animations & Interactions",
      "3 Months Post-Launch Support"
    ],
    isPopular: true
  },
  {
    name: "E-Commerce",
    price: "RM 15,000+",
    numericPrice: 15000,
    description: "Full-scale online store optimized for sales.",
    features: [
      "Shopify or WooCommerce Setup",
      "Custom Theme Development",
      "Payment Gateway Integration",
      "Up to 50 Initial Products Uploaded",
      "Abandoned Cart Recovery Setup",
      "Inventory Management Training",
      "6 Months Post-Launch Support"
    ],
    isPopular: false
  }
];

const FAQS = [
  {
    q: "Do you provide hosting and domain registration?",
    a: "We can assist with the setup, but the costs for hosting and domain registration are billed directly to you by the providers to ensure you retain full ownership."
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes, we build on user-friendly Content Management Systems (CMS) and provide training so your team can easily update text, images, and products."
  },
  {
    q: "How long does it take to build a website?",
    a: "A landing page typically takes 2-3 weeks, a corporate site 4-6 weeks, and an e-commerce store 6-8 weeks, depending on the complexity and how quickly feedback is provided."
  }
];

export default function WebsiteDevelopmentPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Website Development Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for custom website and e-commerce development." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="Website Development" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">Website Development Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Your website is your digital storefront. We build fast, secure, and conversion-optimized websites that turn visitors into customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="Website Development"
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