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
    name: "Lead Gen Bot",
    price: "RM 3,500",
    numericPrice: 3500,
    description: "Rule-based chatbot to capture leads and answer basic FAQs.",
    features: [
      "Website or WhatsApp Integration",
      "Up to 5 Conversational Flows",
      "Basic FAQ Training (Up to 20 Q&As)",
      "Lead Capture & Email Notification",
      "Human Handoff Protocol",
      "1 Month Maintenance"
    ],
    isPopular: false
  },
  {
    name: "AI Assistant",
    price: "RM 8,000",
    numericPrice: 8000,
    description: "NLP-powered bot trained on your company data.",
    features: [
      "Multi-channel (Web, WA, FB Messenger)",
      "Trained on your Website/PDFs",
      "Natural Language Processing (NLP)",
      "CRM Integration (HubSpot/Salesforce)",
      "Appointment Booking Integration",
      "Sentiment Analysis",
      "3 Months Maintenance & Retraining"
    ],
    isPopular: true
  },
  {
    name: "E-Commerce Bot",
    price: "RM 15,000+",
    numericPrice: 15000,
    description: "Advanced bot capable of handling transactions and support.",
    features: [
      "Shopify/WooCommerce Deep Integration",
      "Product Recommendations via AI",
      "Order Tracking & Status Updates",
      "Abandoned Cart Recovery Flows",
      "Payment Gateway Integration",
      "Custom API Connections",
      "Dedicated Support SLA"
    ],
    isPopular: false
  }
];

const FAQS = [
  {
    q: "Are there ongoing monthly fees?",
    a: "Yes, depending on the platform used (e.g., ManyChat, Voiceflow, custom LLM hosting), there will be software subscription costs and API usage fees billed separately."
  },
  {
    q: "Can the bot speak multiple languages?",
    a: "Yes, our AI-powered bots can automatically detect and respond in multiple languages, including English, Malay, and Mandarin."
  },
  {
    q: "What happens if the bot doesn't know the answer?",
    a: "We always implement a 'Human Handoff' protocol. If the bot is confused or the user requests a human, the chat is seamlessly routed to your live support team."
  }
];

export default function ChatbotDevelopmentPricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Chatbot Development Pricing | BrandKraf</title>
        <meta name="description" content="Transparent pricing for custom AI chatbots and conversational marketing." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService="Chatbot Development" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">Chatbot Development Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Provide 24/7 customer support and automate lead generation with intelligent, conversational chatbots tailored to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard 
                key={idx} 
                {...tier} 
                delay={idx * 0.1} 
                serviceCategory="Chatbot Development"
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