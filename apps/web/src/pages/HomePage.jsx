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

        {/* Services */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
          <div className="blob bg-brandkraf-teal/10 h-72 w-72 top-20 -left-20" />
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="chip-brand mb-4">
                <Sparkles className="h-4 w-4" /> What we do
              </span>
              <h2 className="mb-4">
                Everything you need to <span className="text-gradient">scale</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Full-service marketing solutions to help your brand grow and scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-muted/30">
          <div className="container-custom relative">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/0 via-gray-200/50 to-white/0 hover:from-brandkraf-teal/60 hover:to-brandkraf-purple/60 transition-all duration-500"
                  >
                    <div className="relative h-full rounded-2xl glass-card p-7 hover-lift overflow-hidden">
                      <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-brandkraf-teal/5 group-hover:text-brandkraf-teal/10 transition-colors">
                        0{index + 1}
                      </span>
                      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="relative text-lg font-bold mb-2">{item.title}</h3>
                      <p className="relative text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
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
