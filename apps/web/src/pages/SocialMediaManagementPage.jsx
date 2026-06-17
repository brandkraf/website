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
import { Share2, TrendingUp, Users, Calendar } from 'lucide-react';

function SocialMediaManagementPage() {
  const serviceData = {
    hero: {
      title: "Social Media Management",
      subtitle: "Elevate your brand's presence with strategic content, community engagement, and data-driven growth across all major platforms.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0"
    },
    overview: {
      description: "We don't just post content; we build communities. Our comprehensive social media management service covers everything from strategy and content creation to daily engagement and performance analytics. We ensure your brand's voice is consistent, engaging, and aligned with your business objectives.",
      differentiators: [
        "Data-driven content strategy tailored to your niche",
        "Proactive community management and engagement",
        "High-quality visual asset creation",
        "Monthly comprehensive performance reporting"
      ]
    },
    benefits: [
      { icon: TrendingUp, title: "Increased Engagement", description: "Spark meaningful conversations and build a loyal following." },
      { icon: Users, title: "Audience Growth", description: "Expand your reach and attract highly targeted potential customers." },
      { icon: Share2, title: "Brand Awareness", description: "Keep your brand top-of-mind with consistent, quality visibility." },
      { icon: Calendar, title: "Consistent Posting", description: "Never miss a beat with our carefully planned content calendars." }
    ],
    timeline: {
      duration: "4-6 weeks setup, ongoing monthly",
      phases: [
        { title: "Audit & Strategy", description: "Deep dive into your current presence and competitor analysis to craft a tailored strategy." },
        { title: "Content Creation", description: "Developing visual assets, copywriting, and planning the initial content calendar." },
        { title: "Launch & Management", description: "Executing the strategy, posting content, and actively engaging with your audience." },
        { title: "Review & Optimize", description: "Analyzing monthly performance data to refine and improve the ongoing strategy." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        clientType: 'Retail Brand',
        objective: 'Increase brand awareness and daily engagement',
        category: 'Social Media',
        results: [
          { type: 'views', value: '1.2M', label: 'Monthly Reach' },
          { type: 'leads', value: '45K', label: 'New Followers' }
        ]
      }
    ],
    faqs: [
      { question: "Which platforms do you manage?", answer: "We manage all major platforms including Instagram, TikTok, Facebook, LinkedIn, and X (Twitter), tailored to where your audience lives." },
      { question: "Do you create the content?", answer: "Yes, our team handles full-service content creation including graphics, short-form video editing, and copywriting." },
      { question: "How do you measure success?", answer: "We track KPIs aligned with your goals, such as engagement rate, follower growth, reach, and website click-throughs." },
      { question: "Do I have to approve content before it goes live?", answer: "Absolutely. We provide a monthly content calendar for your review and approval before anything is published." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Social Media Management - BrandKraf</title>
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

export default SocialMediaManagementPage;