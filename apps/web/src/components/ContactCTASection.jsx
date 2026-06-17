import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Sparkles } from 'lucide-react';

function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16"
        >
          {/* Animated brand gradient field */}
          <div className="absolute inset-0 bg-gradient-to-br from-brandkraf-teal via-brandkraf-purple to-brandkraf-teal bg-[length:200%_200%] animate-[gradient-pan_8s_linear_infinite]" />
          <div className="pointer-events-none absolute -top-16 -left-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="chip-glass mb-6">
              <Sparkles className="h-4 w-4" />
              Let&apos;s talk
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Ready to scale your brand?</h2>
            <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
              Let&apos;s build something remarkable together. Get in touch with our team to discuss your goals and how we can help you achieve them.
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl bg-white px-8 text-base font-bold text-brandkraf-teal shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-2xl"
            >
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTASection;
