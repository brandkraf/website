import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import CountdownTimer from './CountdownTimer.jsx';

export default function PricingTierCard({
  name,
  price,
  originalPrice,
  discountPrice,
  savings,
  description,
  features,
  isPopular,
  isCustom,
  showTimer,
  ctaText = 'Contact Us',
  delay = 0,
  serviceCategory,
  numericPrice
}) {
  const navigate = useNavigate();

  const textColor = isCustom ? 'text-slate-300' : 'text-muted-foreground';
  const headingColor = isCustom ? 'text-white' : 'text-foreground';
  const featureTextColor = isCustom ? 'text-slate-200' : 'text-foreground/90';

  const handlePayNow = () => {
    const sName = serviceCategory ? `${serviceCategory} - ${name}` : name;
    navigate(`/checkout?service=${encodeURIComponent(sName)}&price=${numericPrice}`);
  };

  const content = (
    <>
      {isPopular && !isCustom && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-4 py-1 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brandkraf-purple/30">
          Most Popular
        </div>
      )}

      {isCustom && (
        <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-4 py-1 text-sm font-bold uppercase tracking-wide text-slate-200 shadow-sm">
          <Sparkles className="h-4 w-4 text-brandkraf-teal" /> Tailored
        </div>
      )}

      <div className="mb-6">
        <h3 className={`mb-2 text-2xl font-bold ${headingColor}`}>{name}</h3>
        <p className={`h-10 text-sm ${textColor}`}>{description}</p>
      </div>

      <div className="mb-8 flex min-h-[100px] flex-col justify-center">
        {isCustom ? (
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-extrabold ${headingColor}`}>Contact for Quote</span>
          </div>
        ) : discountPrice ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-lg font-medium text-muted-foreground line-through decoration-destructive/50">
                {originalPrice}
              </span>
              {savings && (
                <span className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-sm font-semibold text-destructive">
                  {savings}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-clip-text text-4xl font-extrabold text-transparent">
                {discountPrice}
              </span>
              <span className={textColor}>/mo</span>
            </div>
            {showTimer && <CountdownTimer initialDays={3} />}
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-extrabold ${headingColor}`}>{price}</span>
            {price !== 'Custom' && <span className={textColor}>/mo</span>}
          </div>
        )}
      </div>

      <ul className="mb-8 flex-grow space-y-3.5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={`text-sm ${featureTextColor}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3">
        {!isCustom && numericPrice && (
          <Button
            className="w-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-semibold text-white shadow-lg shadow-brandkraf-teal/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brandkraf-purple/30"
            size="lg"
            onClick={handlePayNow}
          >
            <CreditCard className="mr-2 h-4 w-4" /> Pay Now
          </Button>
        )}
        <Button
          className="w-full font-semibold"
          variant={isCustom ? 'default' : (isPopular && !numericPrice ? 'default' : 'outline')}
          size="lg"
          asChild
        >
          <Link to="/contact">
            {ctaText} {(!numericPrice || isCustom) && <ArrowRight className="ml-2 h-4 w-4" />}
          </Link>
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
      className={`relative h-full ${isPopular && !isCustom ? 'z-10 lg:scale-105' : ''}`}
    >
      {isPopular && !isCustom ? (
        <div className="h-full rounded-[1.15rem] bg-gradient-to-b from-brandkraf-teal to-brandkraf-purple p-[2px] shadow-2xl shadow-brandkraf-purple/25">
          <div className="relative flex h-full flex-col rounded-[1rem] bg-card p-8">{content}</div>
        </div>
      ) : isCustom ? (
        <div className="custom-tier-card relative flex h-full flex-col rounded-2xl border p-8 shadow-xl">{content}</div>
      ) : (
        <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:shadow-xl">{content}</div>
      )}
    </motion.div>
  );
}
