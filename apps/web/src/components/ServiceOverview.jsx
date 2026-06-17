import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function ServiceOverview({ description, differentiators }) {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="chip-brand mb-4">Overview</span>
            <h2 className="mb-6">
              Service <span className="text-gradient">overview</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-brandkraf-teal/30 via-gray-200/50 to-brandkraf-purple/30"
          >
            <div className="glass-card rounded-[1.4rem] p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold">
                Why <span className="text-gradient">BrandKraf?</span>
              </h3>
              <ul className="space-y-4">
                {differentiators.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;
