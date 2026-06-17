import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ClientLogosSlider from '@/components/ClientLogosSlider.jsx';
import TrustSection from '@/components/TrustSection.jsx';
import CaseStudySection from '@/components/CaseStudySection.jsx';
import ProcessSection from '@/components/ProcessSection.jsx';
import ClosingCTASection from '@/components/ClosingCTASection.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { motion } from 'framer-motion';
import { Share2, Video, Target, Globe, Palette, Zap, Shield, TrendingUp, Users, Radio, Sparkles, MessageSquare as MessageSquareCode } from 'lucide-react';

function HomePage() {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic content planning and community management across all platforms',
      features: [
        'Content calendar planning',
        'Daily posting and engagement',
        'Analytics and reporting',
        'Community management'
      ]
    },
    {
      icon: Video,
      title: 'UGC Content Creation',
      description: 'Authentic user-generated content that drives engagement and conversions',
      features: [
        'Professional UGC videos',
        'Product photography',
        'Testimonial content',
        'Influencer collaborations'
      ]
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Data-driven ad campaigns on Meta, TikTok, and Google',
      features: [
        'Campaign strategy and setup',
        'A/B testing and optimization',
        'Audience targeting',
        'Performance tracking'
      ]
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'High-converting websites built for performance and user experience',
      features: [
        'Custom website design',
        'E-commerce integration',
        'Mobile optimization',
        'SEO foundation'
      ]
    },
    {
      icon: Palette,
      title: 'Branding & Creative',
      description: 'Complete brand identity and creative design services',
      features: [
        'Logo and brand identity',
        'Marketing collateral',
        'Social media graphics',
        'Brand guidelines'
      ]
    },
    {
      icon: Users,
      title: 'KOC/KOL Service',
      description: 'Strategic collaborations with Key Opinion Creators and Leaders to amplify your brand reach and credibility.',
      features: [
        'Influencer matching & outreach',
        'Campaign strategy & management',
        'Content rights negotiation',
        'Performance & ROI tracking'
      ]
    },
    {
      icon: Radio,
      title: 'TikTok Live Service',
      description: 'Engaging live streaming sessions designed to boost real-time sales, launch products, and build community.',
      features: [
        'Live stream strategy & planning',
        'Host & talent management',
        'Technical setup & broadcasting',
        'Real-time audience engagement'
      ]
    },
    {
      icon: Sparkles,
      title: 'AI Driven Marketing Solution',
      description: 'Leverage advanced artificial intelligence to optimize your marketing strategies, predict trends, and maximize ROI.',
      features: [
        'Predictive analytics & modeling',
        'Automated campaign optimization',
        'AI-generated content strategy',
        'Personalized customer journeys'
      ]
    },
    {
      icon: MessageSquareCode,
      title: 'Chatbot Development',
      description: 'Intelligent conversational agents designed to qualify leads, automate support, and engage customers 24/7.',
      features: [
        'Custom AI chatbot architecture',
        'WhatsApp & Meta integration',
        'Automated lead qualification',
        'Seamless human handoff'
      ]
    }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: 'Data-driven approach',
      description: 'Every decision backed by analytics and performance metrics'
    },
    {
      icon: Target,
      title: 'Content that converts',
      description: 'We create content designed to drive leads and sales, not just likes'
    },
    {
      icon: Shield,
      title: 'In-house team',
      description: 'No outsourcing - your project is handled by our experienced team'
    },
    {
      icon: TrendingUp,
      title: 'Performance-focused',
      description: 'We optimize for ROI, not vanity metrics'
    }
  ];

  return (
    <>
      <Helmet>
        <title>BrandKraf - Scale Your Brand with Content, Ads & AI Marketing</title>
        <meta
          name="description"
          content="We help businesses grow with social media management, UGC content, paid ads, and AI-driven marketing. Based in Malaysia, trusted by 50+ brands."
        />
      </Helmet>

      <Header />

      <main className="relative">
        <HeroSection
          backgroundImage="https://images.unsplash.com/photo-1689028294160-e78a88abcb19"
          headline="We don't just market. We scale brands."
          subheadline="Helping businesses grow with content, ads, and AI-driven marketing"
          ctaText="Get Free Strategy Call"
          ctaLink="/contact"
        />

        <ClientLogosSlider />

        <TrustSection />

        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="chip-brand mb-4">What we do</span>
              <h2 className="mb-4">
                Our <span className="text-gradient">services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Full-service marketing solutions to help your brand grow and scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="chip-brand mb-4">Why BrandKraf</span>
              <h2 className="mb-4">
                Built to be your <span className="text-gradient">growth partner</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re not just another marketing agency - we&apos;re invested in your results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative bg-card rounded-2xl border border-border p-7 text-center sm:text-left soft-shadow transition-all duration-300 hover:-translate-y-1 hover:elevated-shadow hover:border-primary/30"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 text-brandkraf-teal mb-5 transition-colors duration-300 group-hover:from-brandkraf-teal group-hover:to-brandkraf-purple group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CaseStudySection />

        <ProcessSection />

        <ClosingCTASection />

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;