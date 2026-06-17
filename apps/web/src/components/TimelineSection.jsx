import React from 'react';
import { motion } from 'framer-motion';

function TimelineSection({ phases, duration }) {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
      <div className="container-custom relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="chip-brand mb-4">Timeline</span>
          <h2 className="mb-4">
            Project <span className="text-gradient">timeline</span>
          </h2>
          <p className="inline-flex items-center rounded-full border border-brandkraf-teal/20 bg-brandkraf-teal/5 px-4 py-2 text-base font-semibold text-brandkraf-teal">
            Estimated Duration: {duration}
          </p>
        </motion.div>

        <div className="relative ml-4 space-y-12 border-l-2 border-brandkraf-teal/20 md:left-1/2 md:ml-0 md:-translate-x-1/2">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center md:justify-between ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Center Dot */}
              <div className="absolute left-[-9px] h-4 w-4 -translate-x-0 rounded-full bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-3rem)] ${
                idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="mb-2 text-sm font-bold uppercase tracking-wider text-brandkraf-teal">
                    Phase {idx + 1}
                  </div>
                  <h4 className="mb-2 text-xl font-bold">{phase.title}</h4>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;