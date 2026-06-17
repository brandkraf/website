import React from 'react';
import { motion } from 'framer-motion';

function TimelineSection({ phases, duration }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Project Timeline</h2>
          <p className="text-lg text-muted-foreground inline-flex items-center px-4 py-2 rounded-full bg-muted font-medium">
            Estimated Duration: {duration}
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
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
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-3rem)] ${
                idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <div className="p-6 bg-card border border-border rounded-2xl soft-shadow hover:-translate-y-1 smooth-transition">
                  <div className="text-sm font-bold text-primary mb-2 tracking-wider uppercase">
                    Phase {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
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