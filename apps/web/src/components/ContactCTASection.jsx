import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

function ContactCTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to scale your brand?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Let's build something remarkable together. Get in touch with our team to discuss your goals and how we can help you achieve them.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base font-semibold text-primary hover:scale-105 transition-transform">
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTASection;