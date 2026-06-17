import React from 'react';
import { motion } from 'framer-motion';

function BenefitsSection({ benefits }) {
  return (
    <section className="section-padding bg-gray-50 border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">Key Benefits</h2>
          <p className="text-lg text-muted-foreground">
            What you can expect when partnering with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white soft-shadow border border-border/50 hover:border-primary/20 smooth-transition"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;