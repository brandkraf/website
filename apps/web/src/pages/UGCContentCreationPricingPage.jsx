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
    name: "Starter Pack",
    originalPrice: "RM 4,000",
    discountPrice: "RM 2,999",
    numericPrice: 2999,
    savings: "Save RM1,000",
    showTimer: true,
    description: "Test the waters with high-converting UGC for your ads.",
    features: [
      "40 simple UGC Videos",
      "1 Professional Creator/Talent",
      "Scriptwriting & Storyboarding",
      "Basic Editing & Captions",
      "Usage Rights Included",
      "1 Round of Revisions"
    ],
    isPopular: false,
    isCustom: false,
    ctaText: "Ask a Question"
  },
  {
    name: "Growth Pack",
    originalPrice: "RM 12,000",
    discountPrice: "RM 7,999",
    numericPrice: 7999,
    savings: "Save RM4,000",
    showTimer: true,
    description: "Scale your ad testing with diverse creator content.",
    features: [
      "120 simple UGC Videos",
      "1 Professional Creator/Talent",
      "Scriptwriting & Storyboarding",
      "Basic Editing & Captions",
      "Usage Rights Included",
      "2 Rounds of Revisions"
    ],
    isPopular: true,
    isCustom: false,
    ctaText: "Ask a Question"
  },
  {
    name: "Custom Pack",
    price: "Custom",
    description: "Tailored solutions for unique business needs.",
    features: [
      "Custom Video Volume",
      "Multiple Creator Profiles",
      "Extensive Hook & CTA Variations",
      "Premium Editing & Motion Graphics",
      "Perpetual Usage Rights",
      "Unlimited Revisions",
      "Dedicated Creative Director"
    ],
    isPopular: false,
    isCustom: true,
    ctaText: "Contact Sales Team"
  }
];

const FAQS = [
  {
    q: "Do I get to choose the creators?",
    a: "Yes, we provide a roster of vetted creators that match your brand demographic for you to approve before shooting begins."
  },
  {
    q: "How long does it take to get the videos?",
    a: "Typically, the turnaround time is 14-21 days from the moment the creators receive your product."
  },
  {
    q: "Do I need to send free products?",
    a: "Yes, you will need to provide the product to the creators. The cost of the product and shipping is not included in the package price."
  },
  {
    q: "Is transport charge included?",
    a: "No, transport charge is not included."
  }
];

export default function UGCContentCreationPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>UGC Content Creation Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for authentic User-Generated Content creation. Limited time offers available." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="UGC Content Creation" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wide mb-6">
              Limited Time Offer
            </div>
            <h1 className="mb-6">UGC Content Creation Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Stop scrolling with authentic, high-converting User-Generated Content. We handle sourcing, scripting, shooting, and editing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="UGC Content Creation"
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