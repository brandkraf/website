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
import { Sparkles, LineChart, Brain, Clock } from 'lucide-react';

function AIDrivenMarketingPage() {
  const serviceData = {
    hero: {
      title: "AI Driven Marketing",
      subtitle: "Leverage cutting-edge artificial intelligence to predict trends, automate tasks, and optimize campaigns with superhuman precision.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    overview: {
      description: "Step into the future of digital marketing. We integrate advanced AI tools into your marketing stack to uncover hidden audience insights, generate dynamic personalized content at scale, and automate repetitive tasks. This isn't just a buzzword—it's a massive competitive advantage.",
      differentiators: [
        "Predictive analytics for customer behavior",
        "AI-generated dynamic creative optimization",
        "Automated bidding and budget allocation",
        "Hyper-personalized email and SMS sequencing"
      ]
    },
    benefits: [
      { icon: LineChart, title: "Data-Driven Decisions", description: "Eliminate guesswork with AI algorithms that analyze millions of data points." },
      { icon: Brain, title: "Predictive Analytics", description: "Anticipate customer needs and trends before your competitors do." },
      { icon: Sparkles, title: "Automation", description: "Streamline workflows by letting AI handle repetitive marketing tasks." },
      { icon: Clock, title: "Cost Savings", description: "Reduce manual labor hours and significantly improve ad spend efficiency." }
    ],
    timeline: {
      duration: "2-3 weeks implementation",
      phases: [
        { title: "Infrastructure Audit", description: "Assessing your current data flow and identifying AI integration opportunities." },
        { title: "Model Setup", description: "Configuring predictive models and connecting AI tools to your ad accounts/CRM." },
        { title: "Pilot Campaigns", description: "Running controlled AI-driven campaigns against traditional baselines." },
        { title: "Full Deployment", description: "Scaling the successful AI workflows across your entire marketing ecosystem." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        clientType: 'Online Retailer',
        objective: 'Optimize ad spend using predictive AI models',
        category: 'AI Marketing',
        results: [
          { type: 'sales', value: '-40%', label: 'CPA Reduction' },
          { type: 'leads', value: '3.5x', label: 'LTV Increase' }
        ]
      }
    ],
    faqs: [
      { question: "Is AI going to replace my marketing team?", answer: "No, AI acts as a powerful co-pilot. It handles data processing and automation, freeing your team to focus on high-level strategy and creativity." },
      { question: "What tools do you use?", answer: "We utilize a proprietary stack involving advanced LLMs, machine learning bidding algorithms, and specialized predictive analytics software." },
      { question: "Is my customer data safe?", answer: "Absolutely. All AI integrations strictly comply with GDPR and local data protection regulations, keeping your proprietary data secure." },
      { question: "How fast will we see a difference?", answer: "While automation saves time immediately, predictive models typically take a few weeks to learn your audience before delivering optimal ROI." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Driven Marketing - BrandKraf</title>
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

export default AIDrivenMarketingPage;