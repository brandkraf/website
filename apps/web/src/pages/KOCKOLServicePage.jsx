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
import KOCKOLVideoGrid from '@/components/KOCKOLVideoGrid.jsx';
import { Users, Mic, Rocket, ShieldCheck } from 'lucide-react';

function KOCKOLServicePage() {
  const serviceData = {
    hero: {
      title: "KOC/KOL Service",
      subtitle: "Amplify your brand reach with strategic partnerships using Key Opinion Consumers and Key Opinion Leaders.",
      image: "https://images.unsplash.com/photo-1677695960480-5a3ff97a13b1"
    },
    overview: {
      description: "Leverage the influence of established creators to supercharge your brand awareness. We manage end-to-end influencer campaigns, matching your brand with the perfect KOLs (Key Opinion Leaders) for massive reach and KOCs (Key Opinion Consumers) for hyper-authentic, localized engagement.",
      differentiators: [
        "Curated database of vetted influencers",
        "Negotiation and contract management",
        "Performance tracking and affiliate structures",
        "Mix of macro-reach and micro-authenticity"
      ]
    },
    benefits: [
      { icon: Mic, title: "Authentic Promotion", description: "Endorsements from voices your target audience already trusts." },
      { icon: Users, title: "Targeted Audience", description: "Reach specific demographics precisely aligned with your buyer persona." },
      { icon: ShieldCheck, title: "Credibility Boost", description: "Transfer the influencer's authority directly to your brand." },
      { icon: Rocket, title: "Viral Potential", description: "High chance of organic algorithm pushes through established creator accounts." }
    ],
    timeline: {
      duration: "2-4 weeks per campaign",
      phases: [
        { title: "Strategy & Scouting", description: "Defining campaign goals and identifying the ideal influencers for your brand." },
        { title: "Outreach & Negotiation", description: "Contacting creators, negotiating deliverables, and handling contracts." },
        { title: "Content Briefing", description: "Providing clear creative guidelines while allowing creators creative freedom." },
        { title: "Go-Live & Reporting", description: "Monitoring the posts going live and compiling comprehensive performance reports." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868',
        clientType: 'F&B Franchise',
        objective: 'Launch awareness campaign via local food reviewers',
        category: 'KOL Campaign',
        results: [
          { type: 'views', value: '3.8M', label: 'Total Reach' },
          { type: 'sales', value: '85+', label: 'Creators Activated' }
        ]
      }
    ],
    faqs: [
      { question: "What is the difference between KOC and KOL?", answer: "KOLs (Leaders) have large followings and provide massive reach. KOCs (Consumers) are everyday users with smaller, highly engaged, and highly trusting audiences." },
      { question: "How do you track sales from influencers?", answer: "We use a combination of unique promo codes, custom tracking links, and affiliate platforms to attribute sales accurately." },
      { question: "Do we have to pay the influencers separately?", answer: "We can handle all creator payouts through our agency, providing you with a single, simple invoice." },
      { question: "Can we approve the influencers first?", answer: "Always. We provide a roster of proposed creators for you to approve before any outreach begins." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>KOC/KOL Service - BrandKraf</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero {...serviceData.hero} />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
        
        {/* New 18-video Featured Work Grid */}
        <KOCKOLVideoGrid />

        {/* Existing Portfolio Examples Section */}
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

export default KOCKOLServicePage;