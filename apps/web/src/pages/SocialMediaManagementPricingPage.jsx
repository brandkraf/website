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
    name: "Starter",
    price: "RM 2,500",
    numericPrice: 2500,
    description: "Perfect for small businesses establishing their social presence.",
    features: [
      "2 Social Media Platforms (e.g., IG & FB)",
      "12 Posts per month",
      "Basic Community Management",
      "Monthly Content Calendar",
      "Standard Monthly Reporting",
      "Email Support"
    ],
    isPopular: false
  },
  {
    name: "Professional",
    price: "RM 4,800",
    numericPrice: 4800,
    description: "Ideal for growing brands needing consistent, high-quality engagement.",
    features: [
      "3 Social Media Platforms",
      "20 Posts per month",
      "4 Short-form Videos (Reels/TikToks)",
      "Proactive Community Management",
      "Competitor Analysis",
      "Bi-weekly Strategy Calls",
      "Priority Support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale social media dominance for established brands.",
    features: [
      "Unlimited Platforms",
      "Daily Posting Schedule",
      "Custom Video Production",
      "Influencer Outreach Management",
      "Crisis Management Protocol",
      "Dedicated Account Manager",
      "24/7 Priority Support"
    ],
    isPopular: false,
    isCustom: true
  }
];

const FAQS = [
  {
    q: "Do I need to provide the content?",
    a: "We handle the content creation! While we welcome any assets you have, our team will design graphics, write copy, and plan the strategy."
  },
  {
    q: "Can I review posts before they go live?",
    a: "Absolutely. We provide a monthly content calendar for your approval before anything is published."
  },
  {
    q: "Is ad spend included in these packages?",
    a: "No, these packages cover organic social media management. Paid advertising is a separate service with its own dedicated budget."
  }
];

export default function SocialMediaManagementPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Social Media Management Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for professional social media management services." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="Social Media Management" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">Social Media Management Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Build a loyal community and drive organic growth with our strategic social media management packages. We handle everything from content creation to community engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="Social Media Management"
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