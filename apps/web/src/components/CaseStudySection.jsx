import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function CaseStudySection() {
  const isMobile = useIsMobile();

  const metrics = [
    { icon: Eye, value: 250, suffix: 'K+', label: 'Total Views' },
    { icon: Users, value: 1200, suffix: '+', label: 'Units Sold' },
    { icon: TrendingUp, value: 45, suffix: '%', label: 'Sales Growth' }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white border-y border-gray-100">
      <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip-brand mb-5">Featured case study</span>
            <h2 className="mb-6 text-foreground">
              How we helped an e-commerce brand scale to <span className="text-gradient">6 figures</span>
            </h2>

            <div className="space-y-5 mb-8">
              <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                <h4 className="font-semibold text-foreground mb-1.5">The Challenge</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A local supplement brand was struggling with low engagement and minimal online sales despite having quality products.
                </p>
              </div>

              <div className="rounded-xl border border-brandkraf-teal/20 bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-4">
                <h4 className="font-semibold text-foreground mb-1.5">Our Solution</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We implemented a comprehensive UGC content strategy combined with targeted TikTok and Meta ads, focusing on authentic storytelling and social proof.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">The Results</h4>
                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: isMobile ? 0 : index * 0.1 }}
                        className="group rounded-2xl glass-card p-4 text-center hover-lift"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white mb-2.5 shadow-md shadow-brandkraf-teal/25">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-2xl font-extrabold bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-clip-text text-transparent">
                          <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                        </div>
                        <div className="text-xs font-medium text-gray-600 mt-1">{metric.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <WhatsAppButton size="lg" className="bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white hover:shadow-lg hover:shadow-brandkraf-purple/30 hover:-translate-y-0.5 smooth-transition rounded-xl">
              Get Consultation Now
              <MessageCircle className="ml-2 h-4 w-4" />
            </WhatsAppButton>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 gradient-teal-purple rounded-[2rem] opacity-20 blur-2xl" />
            <div className="glass-card relative z-10 overflow-hidden rounded-[1.5rem] p-3">
              <img
                src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/0114238bfa8769d5e052b8edd90d1d6f.png"
                alt="Moringa Caffé - Moringa coffee product packaging"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
