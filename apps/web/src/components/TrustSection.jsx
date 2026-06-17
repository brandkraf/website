import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';
import TestimonialCard from './TestimonialCard.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function TrustSection() {
  const isMobile = useIsMobile();

  const stats = [
    { icon: Users, value: 200, decimals: 0, suffix: '+', label: 'Brands Served' },
    { icon: Star, value: 4.95, decimals: 2, suffix: '/5', label: 'Client Rating' },
    { icon: Award, value: 1000000, decimals: 0, suffix: '+', label: 'Total Views Generated' }
  ];

  const testimonials = [
    {
      quote: 'BrandKraf transformed our social media presence. We went from 2K to 47K followers in 6 months, and our sales increased by 38%.',
      name: 'Prof Yus Aniza',
      company: 'Moryga',
      initials: 'PYA',
      avatar: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/f2b7c73feea1da3d1c655871f05bec36.jpg',
      altText: 'Woman in red hijab smiling at camera, professional headshot'
    },
    {
      quote: 'Their UGC content strategy helped us generate over 1,200 qualified leads. The ROI has been exceptional.',
      name: 'Mr. Sushil',
      company: 'Nachi Toddy',
      initials: 'MS',
      avatar: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/e5234ee8c7b285268b1b789df9819738.png',
      altText: 'Man in red Nachi Toddy branded shirt with red umbrella background, professional photo'
    },
    {
      quote: 'Working with BrandKraf feels like having an in-house marketing team. They understand our brand and deliver consistently.',
      name: 'Dr Sonia',
      company: 'Klinik Dr Sonia Qualitas',
      initials: 'DS',
      avatar: 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/e362b970cd0fbf92dc2efe52ba6cb62f.png',
      altText: 'Female doctor in white coat with stethoscope, professional portrait with turquoise background'
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white border-t border-gray-100">
      <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
      <div className="container-custom relative">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="chip-brand mb-4">Proven results</span>
          <h2 className="mb-4 text-foreground">
            Trusted by <span className="text-gradient">growing brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve helped businesses across Malaysia scale their marketing and drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: isMobile ? 0 : index * 0.1 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-brandkraf-teal/20 via-gray-200/50 to-brandkraf-purple/20 transition-all duration-500 hover:from-brandkraf-teal hover:to-brandkraf-purple hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,184,166,0.45)]"
              >
                <div className="relative h-full rounded-2xl bg-white p-8 text-center overflow-hidden">
                  <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-brandkraf-teal/20 to-brandkraf-purple/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="relative text-4xl font-extrabold mb-2 bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </div>
                  <div className="relative text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={isMobile ? 0 : index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
