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
import { Palette, Diamond, Layers, Star } from 'lucide-react';

function BrandingCreativePage() {
  const serviceData = {
    hero: {
      title: "Branding & Creative",
      subtitle: "Craft a memorable brand identity that stands out in the market, builds trust, and perfectly communicates your values.",
      image: "https://images.unsplash.com/photo-1495224814653-94f36c0a31ea"
    },
    overview: {
      description: "A strong brand is more than just a logo. It's the entire ecosystem of how your business looks, feels, and communicates. We dive deep into your company's DNA to create cohesive, striking visual identities and creative assets that leave a lasting impression on your audience.",
      differentiators: [
        "Comprehensive brand strategy and positioning",
        "Unique, bespoke logo design and typography",
        "Extensive brand guidelines for consistency",
        "Production of marketing collateral and assets"
      ]
    },
    benefits: [
      { icon: Star, title: "Memorable Brand", description: "Create an instantly recognizable identity that sticks in customers' minds." },
      { icon: Diamond, title: "Professional Image", description: "Elevate your perceived value and command premium pricing." },
      { icon: Layers, title: "Visual Consistency", description: "Maintain a unified look across all touchpoints and platforms." },
      { icon: Palette, title: "Market Differentiation", description: "Stand out vividly from competitors in crowded markets." }
    ],
    timeline: {
      duration: "4-8 weeks for complete branding",
      phases: [
        { title: "Discovery Session", description: "In-depth workshop to understand your vision, target audience, and market positioning." },
        { title: "Concepts & Identity", description: "Presenting initial mood boards, logo concepts, and color palettes." },
        { title: "Refinement", description: "Iterating on the chosen concept to perfect the primary logo and visual assets." },
        { title: "Guidelines & Handoff", description: "Delivering the final brand book and all necessary file formats." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
        clientType: 'Boutique Coffee Roaster',
        objective: 'Complete brand refresh and packaging design',
        category: 'Branding',
        results: [
          { type: 'views', value: '100%', label: 'New Identity' },
          { type: 'sales', value: '42%', label: 'Retail Growth' }
        ]
      }
    ],
    faqs: [
      { question: "What is included in a branding package?", answer: "Our standard package includes logo design (primary/secondary), color palette, typography selection, and a comprehensive brand guideline document." },
      { question: "Do you design packaging?", answer: "Yes, we can extend the brand identity to physical packaging, digital assets, and print collateral." },
      { question: "How many revisions do we get?", answer: "We typically include 2-3 rounds of strategic revisions during the refinement phase to ensure you love the final result." },
      { question: "Can we trademark the logo?", answer: "Yes, all original designs we create are unique and transferred fully to you, allowing you to seek trademark protection." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Branding & Creative - BrandKraf</title>
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

export default BrandingCreativePage;