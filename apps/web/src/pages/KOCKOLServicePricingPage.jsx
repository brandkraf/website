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
    name: "REACH MAX",
    price: "RM 4,000",
    numericPrice: 4000,
    description: "High engagement rates from niche community leaders.",
    features: [
      "20 KOC (Key Opinion Consumers)",
      "Follower 5K and below",
      "Creator Sourcing & Vetting",
      "Brief Development",
      "Product Seeding Management",
      "Content Review & Approval",
      "Campaign Performance Report"
    ],
    isPopular: false
  },
  {
    name: "AWARENESS MAX",
    price: "RM 10,000",
    numericPrice: 10000,
    description: "Mix of micro and macro influencers for broad reach.",
    features: [
      "20 KOC less than 5K follower + 10 KOC more than 10K follower",
      "Comprehensive Campaign Strategy",
      "Creator Sourcing & Vetting",
      "Brief Development",
      "Product Seeding Management",
      "Content Review & Approval",
      "Detailed ROI Reporting"
    ],
    isPopular: true
  },
  {
    name: "MEGA CAMPAIGN",
    price: "Custom",
    description: "High-impact campaigns with top-tier celebrities.",
    features: [
      "Top-tier KOLs / Celebrities",
      "Custom Event/Activation Integration",
      "Long-term Ambassador Contracts",
      "Cross-platform Syndication",
      "PR & Media Outreach",
      "Full Legal & Compliance Handling",
      "Real-time Dashboard Access"
    ],
    isPopular: false,
    isCustom: true
  }
];

const FAQS = [
  {
    q: "Are the influencer fees included in these prices?",
    a: "The pricing covers our agency management fee. The actual payout to the influencers (if required beyond product seeding) is a separate budget."
  },
  {
    q: "What is the difference between KOC and KOL?",
    a: "KOCs (Key Opinion Consumers) are everyday consumers with smaller but highly engaged followings. KOLs (Key Opinion Leaders) are established influencers or celebrities with massive reach."
  },
  {
    q: "Do we own the content they create?",
    a: "We negotiate standard usage rights (usually 3-6 months for digital ads). Perpetual or broadcast rights require additional negotiation and fees."
  }
];

export default function KOCKOLServicePricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>KOC & KOL Service Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for influencer marketing and KOC/KOL campaigns." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="KOC & KOL Service" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">KOC & KOL Service Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Amplify your brand's reach and credibility through strategic partnerships with Key Opinion Consumers and Leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="KOC & KOL Service"
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