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
import { Radio, Flame, MessageCircle, ShoppingBag } from 'lucide-react';

function TikTokLiveServicePage() {
  const serviceData = {
    hero: {
      title: "TikTok Live Service",
      subtitle: "Capitalize on real-time engagement to drive instant sales and massive brand visibility through strategic live streaming.",
      image: "https://images.unsplash.com/photo-1603962099857-f9319d3a8478"
    },
    overview: {
      description: "TikTok Live is revolutionizing eCommerce. We provide end-to-end live streaming solutions, from professional studio setups and trained hosts to run-of-show scripting and real-time moderation. We turn your TikTok channel into a highly profitable 24/7 shopping network.",
      differentiators: [
        "Professional live stream hosts trained for sales",
        "High-quality studio equipment and lighting",
        "Strategic live-exclusive promotions",
        "Real-time technical support and chat moderation"
      ]
    },
    benefits: [
      { icon: MessageCircle, title: "Real-time Interaction", description: "Answer customer questions instantly to overcome buying objections." },
      { icon: Flame, title: "Viral Reach", description: "TikTok heavily pushes live streams to the For You page." },
      { icon: Radio, title: "Authentic Engagement", description: "Showcase your products unedited and unfiltered." },
      { icon: ShoppingBag, title: "Instant Sales", description: "Drive massive conversion spikes with time-sensitive live offers." }
    ],
    timeline: {
      duration: "1-2 weeks planning, ongoing sessions",
      phases: [
        { title: "Strategy & Setup", description: "Defining the live schedule, offers, and setting up the TikTok Shop integration." },
        { title: "Host Training", description: "Training our professional hosts on your brand voice and product details." },
        { title: "Tech Rehearsal", description: "Testing lighting, audio, connection, and product display angles." },
        { title: "Going Live", description: "Executing the scheduled live sessions with real-time moderation and analytics tracking." }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162618758-2a29a995354b',
        clientType: 'Apparel Brand',
        objective: 'Clearance sale via 4-hour live stream event',
        category: 'TikTok Live',
        results: [
          { type: 'sales', value: '$45K', label: 'Live Revenue' },
          { type: 'views', value: '120K', label: 'Concurrent Viewers' }
        ]
      }
    ],
    faqs: [
      { question: "Do you provide the hosts?", answer: "Yes, we have a roster of energetic, sales-driven hosts experienced in TikTok live selling." },
      { question: "Do we need TikTok Shop set up?", answer: "Yes, having TikTok Shop enabled is required for seamless in-app purchasing during the live stream." },
      { question: "How long should a live stream be?", answer: "We recommend a minimum of 2 hours per session to give the algorithm time to push your stream to a wider audience." },
      { question: "Can we stream from our own office?", answer: "We can set up a professional streaming environment at your location, or we can broadcast from our dedicated studios." }
    ]
  };

  return (
    <>
      <Helmet>
        <title>TikTok Live Service - BrandKraf</title>
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

export default TikTokLiveServicePage;