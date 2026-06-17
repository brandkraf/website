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
    name: "Growth",
    price: "RM 3,500",
    numericPrice: 3500,
    description: "For businesses spending up to RM 10,000/mo on ads.",
    features: [
      "1 Ad Platform (Meta or TikTok)",
      "Campaign Setup & Strategy",
      "Audience Research & Targeting",
      "A/B Testing (Basic)",
      "Monthly Performance Report",
      "Pixel/Tag Installation"
    ],
    isPopular: false
  },
  {
    name: "Scale",
    price: "RM 6,000",
    numericPrice: 6000,
    description: "For businesses spending up to RM 30,000/mo on ads.",
    features: [
      "2 Ad Platforms (e.g., Meta + TikTok)",
      "Advanced Retargeting Funnels",
      "Continuous A/B Testing",
      "Custom Audience Creation",
      "Bi-weekly Performance Calls",
      "Creative Direction Consultation",
      "Conversion Rate Optimization"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume spenders requiring complex funnels.",
    features: [
      "Omnichannel Strategy (Meta, TikTok, Google)",
      "Advanced Attribution Modeling",
      "Dynamic Product Ads",
      "Custom Dashboard Access",
      "Weekly Strategy Meetings",
      "Dedicated Media Buyer",
      "Priority Support"
    ],
    isPopular: false,
    isCustom: true
  }
];

const FAQS = [
  {
    q: "Is the ad spend included in your fee?",
    a: "No, the pricing listed is our management fee. The actual ad spend is paid directly to the platforms (Meta, TikTok, Google) by you."
  },
  {
    q: "Do you create the ad creatives?",
    a: "Basic graphic design is included, but high-end video production or UGC is billed separately or bundled in our comprehensive packages."
  },
  {
    q: "How long does it take to see results?",
    a: "While some campaigns see immediate traction, we recommend a 3-month commitment to properly test, learn, and optimize the algorithms for sustainable ROI."
  }
];

export default function PaidAdvertisingPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Paid Advertising Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for Meta, TikTok, and Google Ads management." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="Paid Advertising" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">Paid Advertising Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Maximize your return on ad spend with data-driven campaigns across Meta, TikTok, and Google. We focus on conversions, not just clicks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="Paid Advertising"
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