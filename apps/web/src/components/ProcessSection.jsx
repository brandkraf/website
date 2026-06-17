import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Rocket, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function ProcessSection() {
  const isMobile = useIsMobile();
  
  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Strategy',
      description: 'We analyze your brand, audience, and competitors to create a data-driven marketing strategy.'
    },
    {
      icon: FileText,
      number: '02',
      title: 'Content',
      description: 'Our team produces high-quality UGC content, ad creatives, and copy that resonates with your audience.'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Execution',
      description: 'We launch campaigns across TikTok, Meta, and Google with precise targeting and optimization.'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Scaling',
      description: 'We continuously test, optimize, and scale what works to maximize your ROI.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">Our proven process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From strategy to scaling, we handle every step of your marketing journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 gradient-teal-purple opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                className="relative group text-center lg:text-left"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4 smooth-transition group-hover:text-brandkraf-purple/10 absolute -top-6 right-4 lg:right-auto lg:left-16 z-0">
                  {step.number}
                </div>
                <div className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-brandkraf-teal text-brandkraf-teal mb-6 soft-shadow smooth-transition group-hover:bg-brandkraf-teal group-hover:text-white mx-auto lg:mx-0">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground smooth-transition group-hover:text-brandkraf-purple">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;