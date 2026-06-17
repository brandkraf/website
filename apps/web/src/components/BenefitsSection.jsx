import React from 'react';
import { motion } from 'framer-motion';

function BenefitsSection({ benefits }) {
  return (
    <section className="section-padding relative overflow-hidden border-y border-border bg-gradient-to-b from-muted/40 via-background to-muted/30">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center"
        >
          <span className="chip-brand mb-4">Why it matters</span>
          <h2 className="mb-4">
            Key <span className="text-gradient">benefits</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What you can expect when partnering with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-brandkraf-teal/15 via-gray-200/50 to-brandkraf-purple/15 transition-all duration-500 hover:from-brandkraf-teal hover:to-brandkraf-purple hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,184,166,0.4)]"
              >
                <div className="flex h-full gap-5 rounded-2xl glass-card p-6">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
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
