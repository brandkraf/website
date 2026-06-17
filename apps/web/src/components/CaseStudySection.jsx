import React from 'react';
import { Card } from '@/components/ui/card.jsx';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function CaseStudySection() {
  const isMobile = useIsMobile();
  
  const metrics = [
    {
      icon: Eye,
      value: '250K+',
      label: 'Total Views'
    }, 
    {
      icon: Users,
      value: '1,200+',
      label: 'Units Sold'
    }, 
    {
      icon: TrendingUp,
      value: '45%',
      label: 'Sales Growth'
    }
  ];

  return (
    <section className="section-padding bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} 
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-brandkraf-teal" />
              <span className="text-sm font-semibold tracking-wider uppercase text-brandkraf-teal">
                Featured Case Study
              </span>
            </div>
            <h2 className="mb-6 text-foreground">How we helped an e-commerce brand scale to 6 figures</h2>
            
            <div className="space-y-6 mb-8">
              <div className="pl-4 border-l-2 border-gray-100">
                <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                <p className="text-gray-600">
                  A local supplement brand was struggling with low engagement and minimal online sales despite having quality products.
                </p>
              </div>
              
              <div className="pl-4 border-l-2 border-brandkraf-teal">
                <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                <p className="text-gray-600">
                  We implemented a comprehensive UGC content strategy combined with targeted TikTok and Meta ads, focusing on authentic storytelling and social proof.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">The Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brandkraf-teal mb-3 soft-shadow">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-2xl font-bold text-brandkraf-purple">{metric.value}</div>
                        <div className="text-xs font-medium text-gray-600 mt-1">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <WhatsAppButton size="lg" className="bg-brandkraf-teal text-white hover:bg-brandkraf-purple smooth-transition rounded-lg">
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
            <div className="absolute -inset-4 gradient-teal-purple rounded-2xl opacity-10 blur-lg" />
            <Card className="overflow-hidden soft-shadow border-0 rounded-2xl relative z-10">
              <img src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/0114238bfa8769d5e052b8edd90d1d6f.png" alt="Moringa Caffé - Moringa coffee product packaging" className="w-full h-auto" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;