import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function ServiceCard({ icon: Icon, title, description, features, subServices, delay = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : delay }}
      className="h-full"
    >
      <Card className="relative h-full bg-white border border-gray-100 soft-shadow rounded-2xl smooth-transition hover:-translate-y-1 hover:elevated-shadow hover:border-brandkraf-teal/30 group flex flex-col overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        <CardHeader>
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 text-brandkraf-teal smooth-transition group-hover:from-brandkraf-teal group-hover:to-brandkraf-purple group-hover:text-white">
            <Icon className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl text-foreground font-semibold">{title}</CardTitle>
          <p className="text-base text-gray-600 mt-2">{description}</p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <ul className="space-y-3 mb-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-brandkraf-teal flex-shrink-0 mt-0.5 smooth-transition group-hover:text-brandkraf-purple" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {subServices && subServices.length > 0 && (
            <div className="mt-6 pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1.5 text-sm font-medium text-brandkraf-teal hover:text-brandkraf-purple smooth-transition group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-brandkraf-teal rounded-md px-1 -ml-1"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Hide Sub-services' : 'View Sub-services'}
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} group-hover/btn:text-brandkraf-purple`} 
                />
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-3 border-t border-gray-100 space-y-3">
                      {subServices.map((sub, idx) => (
                        <div key={idx} className="bg-muted/40 p-3.5 rounded-lg border border-gray-50 smooth-transition hover:bg-muted/60 hover:border-brandkraf-teal/20">
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
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;