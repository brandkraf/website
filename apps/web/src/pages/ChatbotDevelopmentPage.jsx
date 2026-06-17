import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceOverview from '@/components/ServiceOverview.jsx';
import BenefitsSection from '@/components/BenefitsSection.jsx';
import TimelineSection from '@/components/TimelineSection.jsx';
import PortfolioExamplesSection from '@/components/PortfolioExamplesSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ContactCTASection from '@/components/ContactCTASection.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { MessageSquare, Clock, Coins, Smile } from 'lucide-react';

function ChatbotDevelopmentPage() {
  const serviceData = {
    hero: {
      title: "Chatbot Development",
      subtitle: "Automate customer support and qualify leads 24/7 with intelligent, natural-language conversational AI agents.",
      image: "https://images.unsplash.com/photo-1675023035272-3426884896f8"
    },
    overview: {
      description: "Don't leave your customers waiting. We build custom AI chatbots trained specifically on your business data. These aren't clunky old menu bots; they are advanced conversational agents capable of answering complex questions, booking appointments, and guiding users through the sales funnel instantly.",
      differentiators: [
        "Powered by advanced LLMs (like GPT-4) for natural conversation",
        "Custom-trained on your specific FAQs, manuals, and brand voice",
        "Seamless integration with WhatsApp, Website, and Messenger",
        "Smooth human-handoff protocols for complex issues"
      ]
    },
    benefits: [
      { icon: Clock, title: "24/7 Support", description: "Provide instant answers to customers, even outside business hours." },
      { icon: MessageSquare, title: "Instant Responses", description: "Zero wait time means higher engagement and lower drop-off rates." },
      { icon: Coins, title: "Cost Reduction", description: "Dramatically lower support costs by automating up to 80% of routine queries." },
      { icon: Smile, title: "Customer Satisfaction", description: "Frictionless, helpful experiences that make customers love your brand." }
    ],
    timeline: {
      duration: "3-6 weeks development",
      phases: [
        { title: "Knowledge Gathering", description: "Collecting your FAQs, website content, and past support tickets." },
        { title: "Bot Training", description: "Feeding the data into the AI model and fine-tuning its personality and responses." },
        { title: "Integration & Testing", description: "Connecting the bot to your desired platforms (WhatsApp, Web) and rigorous testing." },
        { title: "Launch & Optimization", description: "Going live and continuously improving responses based on real user interactions." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
        clientType: 'Healthcare Clinic',
        objective: 'Automate appointment bookings via WhatsApp',
        category: 'AI Chatbot',
        results: [
          { type: 'leads', value: '75%', label: 'Automation Rate' },
          { type: 'sales', value: '2.5x', label: 'More Bookings' }
        ]
      }
    ],
    faqs: [
      { question: "Will the bot sound like a robot?", answer: "No, we use advanced Large Language Models that understand context and converse in natural, human-like language." },
      { question: "Can it integrate with my CRM?", answer: "Yes, our custom bots can connect with Hubspot, Salesforce, and other major CRMs to log leads and support tickets." },
      { question: "What happens if the bot doesn't know the answer?", answer: "We program strict 'human handoff' protocols. If the bot is unsure, it elegantly transfers the chat to a live human agent." },
      { question: "Can it speak multiple languages?", answer: "Yes, our AI chatbots can automatically detect the user's language and converse fluently in over 50 languages." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Chatbot Development - BrandKraf</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero {...serviceData.hero} />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
        <PortfolioExamplesSection projects={serviceData.projects} />
        <FAQSection faqs={serviceData.faqs} />
        <ContactCTASection />

        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ChatbotDevelopmentPage;