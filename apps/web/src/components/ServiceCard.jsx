import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function ServiceCard({ icon: Icon, title, description, features, subServices, delay = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : delay, ease: 'easeOut' }}
      className="h-full group"
    >
      {/* Gradient border wrapper — lights up on hover */}
      <div className="relative h-full rounded-[1.25rem] p-[1.5px] bg-gradient-to-br from-brandkraf-teal/25 via-gray-200/60 to-brandkraf-purple/25 transition-all duration-500 group-hover:from-brandkraf-teal group-hover:via-brandkraf-teal/40 group-hover:to-brandkraf-purple group-hover:shadow-[0_24px_60px_-20px_rgba(20,184,166,0.45)] group-hover:-translate-y-1.5">
        <div className="relative h-full rounded-[1.2rem] bg-white p-7 flex flex-col overflow-hidden">
          {/* Soft brand glow that appears on hover */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br from-brandkraf-teal/25 to-brandkraf-purple/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon tile */}
          <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
            <Icon className="h-7 w-7" />
          </div>

          <h3 className="relative text-xl font-bold text-foreground tracking-tight">{title}</h3>
          <p className="relative text-[0.95rem] text-gray-600 mt-2 leading-relaxed">{description}</p>

          <div className="relative mt-5 mb-auto h-px bg-gradient-to-r from-gray-100 via-gray-200 to-transparent" />

          <ul className="relative space-y-3 mt-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brandkraf-teal/10 text-brandkraf-teal transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brandkraf-teal group-hover:to-brandkraf-purple group-hover:text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {subServices && subServices.length > 0 && (
            <div className="relative mt-6 pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1.5 text-sm font-semibold text-brandkraf-teal hover:text-brandkraf-purple smooth-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brandkraf-teal rounded-md px-1 -ml-1"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Hide Sub-services' : 'View Sub-services'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-3 border-t border-gray-100 space-y-3">
                      {subServices.map((sub, idx) => (
                        <div key={idx} className="bg-muted/40 p-3.5 rounded-xl border border-gray-100 smooth-transition hover:bg-muted/60 hover:border-brandkraf-teal/20">
                          <h4 className="text-sm font-semibold text-foreground">{sub.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
