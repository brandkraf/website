import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';
import TestimonialCard from './TestimonialCard.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function TrustSection() {
  const isMobile = useIsMobile();
  
  const stats = [
    { icon: Users, value: '200+', label: 'Brands Served' },
    { icon: Star, value: '4.95/5', label: 'Client Rating' },
    { icon: Award, value: '1 Million+', label: 'Total Views Generated' }
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
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">Trusted by growing brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across Malaysia scale their marketing and drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-brandkraf-teal mb-4 soft-shadow">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2 text-brandkraf-purple">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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