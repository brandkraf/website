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
import { Target, BarChart2, Zap, Settings } from 'lucide-react';

function PaidAdvertisingPage() {
  const serviceData = {
    hero: {
      title: "Paid Advertising",
      subtitle: "Maximize your ROI with precision-targeted, multi-platform ad campaigns designed to scale your revenue predictably.",
      image: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5"
    },
    overview: {
      description: "Stop guessing with your ad spend. We create data-driven paid advertising campaigns across Meta, Google, and TikTok. By combining compelling ad creatives with rigorous media buying strategies, we ensure every dollar spent works hard to acquire new customers and generate profitable returns.",
      differentiators: [
        "Focus on measurable ROI and ROAS",
        "Continuous A/B testing of creatives and audiences",
        "Expertise across Meta, Google Ads, and TikTok",
        "Transparent, real-time reporting dashboards"
      ]
    },
    benefits: [
      { icon: Target, title: "Targeted Reach", description: "Get your brand in front of high-intent users ready to buy." },
      { icon: BarChart2, title: "Measurable ROI", description: "Track every conversion to ensure your campaigns are profitable." },
      { icon: Zap, title: "Quick Results", description: "Drive immediate traffic and sales unlike slow organic methods." },
      { icon: Settings, title: "Budget Control", description: "Scale up winners and cut losers efficiently to optimize spend." }
    ],
    timeline: {
      duration: "1-2 weeks setup, ongoing optimization",
      phases: [
        { title: "Account Audit & Strategy", description: "Reviewing past data, setting up tracking pixels, and planning campaign structures." },
        { title: "Creative & Copy", description: "Developing ad creatives, writing copy, and setting up landing pages if needed." },
        { title: "Campaign Launch", description: "Deploying initial campaigns with broad and targeted testing structures." },
        { title: "Scale & Optimize", description: "Daily monitoring, killing underperforming ads, and scaling profitable ad sets." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        clientType: 'E-Commerce Store',
        objective: 'Scale daily sales while maintaining 3x ROAS',
        category: 'Paid Ads',
        results: [
          { type: 'sales', value: '4.2x', label: 'Average ROAS' },
          { type: 'leads', value: '215%', label: 'Revenue Increase' }
        ]
      }
    ],
    faqs: [
      { question: "What is the minimum ad budget?", answer: "We recommend a minimum starting ad spend of $1,500/month to allow sufficient data collection for optimization." },
      { question: "Do you design the ad creatives?", answer: "Yes, our team designs image and video creatives tailored for performance marketing." },
      { question: "How long until we see results?", answer: "While initial data comes in immediately, it typically takes 2-4 weeks to optimize the campaigns and stabilize CPA." },
      { question: "What platforms do you advertise on?", answer: "We specialize in Meta (Facebook/Instagram), Google Search/Max, and TikTok Ads." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Paid Advertising - BrandKraf</title>
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

export default PaidAdvertisingPage;