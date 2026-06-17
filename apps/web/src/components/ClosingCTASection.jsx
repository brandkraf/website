import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';

function ClosingCTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance leading-tight">
              Ready to scale your brand?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Book a free 30-minute strategy call with our team. We'll analyze your current marketing, identify growth opportunities, and show you exactly how we can help you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsFormOpen(true)}
                className="text-lg h-14 px-8 bg-white text-brandkraf-teal hover:bg-gray-50 transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] font-bold" 
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-8 font-medium tracking-wide">
              No commitment required • Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <WhatsAppInquiryForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
}

export default ClosingCTASection;