import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';

function ClosingCTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Animated brand gradient field */}
        <div className="absolute inset-0 bg-gradient-to-br from-brandkraf-teal via-brandkraf-purple to-brandkraf-teal bg-[length:200%_200%] animate-[gradient-pan_8s_linear_infinite]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        {/* soft light blobs */}
        <div className="pointer-events-none absolute -top-16 -left-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md sm:p-14"
          >
            <span className="chip-glass mb-6">
              <Sparkles className="h-4 w-4" />
              Free 30-minute strategy call
            </span>
            <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to scale your brand?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90">
              Book a free strategy call with our team. We&apos;ll analyze your current marketing, identify growth opportunities, and show you exactly how we can help you scale.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="h-14 rounded-xl bg-white px-8 text-lg font-bold text-brandkraf-teal shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-2xl active:scale-[0.98]"
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-8 text-sm font-medium tracking-wide text-white/80">
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
