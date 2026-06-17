import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

function PricingCard({ name, price, description, features, isPopular, delay = 0 }) {
  const content = (
    <>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-4 py-1 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brandkraf-purple/30">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-foreground">{name}</h3>
      <p className="mt-1 text-base text-muted-foreground">{description}</p>
      <div className="mt-5">
        <span className="bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-clip-text text-4xl font-extrabold text-transparent">{price}</span>
        {price !== 'Custom' && <span className="font-medium text-muted-foreground">/month</span>}
      </div>

      <ul className="mt-6 flex-grow space-y-3.5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          className={`w-full rounded-xl font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brandkraf-purple/30'
              : 'border-2 border-brandkraf-purple/40 bg-transparent text-brandkraf-teal hover:border-transparent hover:bg-gradient-to-r hover:from-brandkraf-teal hover:to-brandkraf-purple hover:text-white'
          }`}
          size="lg"
        >
          Book Consultation
        </Button>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative h-full ${isPopular ? 'z-10 lg:scale-105' : ''}`}
    >
      {isPopular ? (
        <div className="h-full rounded-[1.15rem] bg-gradient-to-b from-brandkraf-teal to-brandkraf-purple p-[2px] shadow-2xl shadow-brandkraf-purple/25">
          <div className="relative flex h-full flex-col rounded-[1rem] bg-card p-8">{content}</div>
        </div>
      ) : (
        <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:shadow-xl">{content}</div>
      )}
    </motion.div>
  );
}

export default PricingCard;
