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
import { Globe, Smartphone, Gauge, Search } from 'lucide-react';

function WebsiteDevelopmentPage() {
  const serviceData = {
    hero: {
      title: "Website Development",
      subtitle: "Custom, high-performing websites built to convert visitors into customers while perfectly reflecting your brand identity.",
      image: "https://images.unsplash.com/photo-1613395752352-292cf623d389"
    },
    overview: {
      description: "Your website is your digital storefront. We don't just build sites that look good; we build sites engineered for performance. From custom React applications to robust eCommerce platforms, we deliver responsive, lightning-fast digital experiences.",
      differentiators: [
        "Custom UI/UX design focused on conversion rate optimization",
        "Modern tech stacks (React, Next.js, Tailwind)",
        "Technical SEO best practices built-in",
        "Scalable architectures that grow with your business"
      ]
    },
    benefits: [
      { icon: Gauge, title: "Fast Loading", description: "Optimized performance to keep users engaged and reduce bounce rates." },
      { icon: Smartphone, title: "Mobile-Friendly", description: "Flawless responsive design across all devices and screen sizes." },
      { icon: Search, title: "SEO Optimized", description: "Built with technical SEO standards to help you rank higher on Google." },
      { icon: Globe, title: "Conversion-Focused", description: "Strategic user journeys designed to guide visitors to take action." }
    ],
    timeline: {
      duration: "6-12 weeks depending on complexity",
      phases: [
        { title: "Discovery & UX", description: "Mapping out site architecture, user journeys, and wireframing core pages." },
        { title: "UI Design", description: "Creating high-fidelity mockups reflecting your brand's visual identity." },
        { title: "Development", description: "Coding the frontend and backend, integrating CMS, and adding interactions." },
        { title: "Testing & Launch", description: "Rigorous QA testing, performance optimization, and seamless deployment." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        clientType: 'Tech SaaS',
        objective: 'Redesign marketing site for better lead generation',
        category: 'Web Development',
        results: [
          { type: 'leads', value: '145%', label: 'Conversion Lift' },
          { type: 'views', value: '0.8s', label: 'Load Time' }
        ]
      }
    ],
    faqs: [
      { question: "What platforms do you use?", answer: "We build custom React/Next.js applications, as well as Shopify and WordPress depending on your specific needs." },
      { question: "Will I be able to update the site myself?", answer: "Yes, we integrate user-friendly Content Management Systems (CMS) so your team can easily update content." },
      { question: "Do you provide hosting and maintenance?", answer: "Yes, we offer ongoing maintenance and premium hosting packages to keep your site secure and fast." },
      { question: "Is SEO included?", answer: "Technical on-page SEO (meta tags, schema, fast load speeds, semantic HTML) is included in all our builds." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Website Development - BrandKraf</title>
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

export default WebsiteDevelopmentPage;