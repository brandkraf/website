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
  ctaText = "Contact Us",
  delay = 0,
  serviceCategory,
  numericPrice
}) {
  const navigate = useNavigate();

  // Determine the base classes based on whether it's a custom tier or standard
  const baseClasses = isCustom 
    ? "custom-tier-card relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 border shadow-xl"
    : `relative flex flex-col h-full bg-card rounded-2xl p-8 transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-primary shadow-xl shadow-primary/10 scale-105 z-10' 
          : 'border border-border hover:border-primary/30 hover:shadow-lg'
      }`;

  const textColor = isCustom ? "text-slate-300" : "text-muted-foreground";
  const headingColor = isCustom ? "text-white" : "text-foreground";
  const featureTextColor = isCustom ? "text-slate-200" : "text-foreground/90";

  const handlePayNow = () => {
    const sName = serviceCategory ? `${serviceCategory} - ${name}` : name;
    navigate(`/checkout?service=${encodeURIComponent(sName)}&price=${numericPrice}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={baseClasses}
    >
      {isPopular && !isCustom && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
          Most Popular
        </div>
      )}

      {isCustom && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-200 border border-slate-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-4 h-4 text-primary" /> Tailored
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>{name}</h3>
        <p className={`text-sm h-10 ${textColor}`}>{description}</p>
      </div>
      
      <div className="mb-8 min-h-[100px] flex flex-col justify-center">
        {isCustom ? (
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-extrabold ${headingColor}`}>Contact for Quote</span>
          </div>
        ) : discountPrice ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-lg font-medium text-muted-foreground line-through decoration-destructive/50">
                {originalPrice}
              </span>
              {savings && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-destructive/10 text-destructive font-semibold text-sm border border-destructive/20">
                  {savings}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-extrabold text-primary`}>{discountPrice}</span>
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
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className={`text-sm ${featureTextColor}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto flex flex-col gap-3">
        {!isCustom && numericPrice && (
          <Button 
            className="w-full font-semibold shadow-lg shadow-primary/20 transition-all duration-200 hover:scale-[1.02]" 
            variant="default"
            size="lg"
            onClick={handlePayNow}
          >
            <CreditCard className="mr-2 w-4 h-4" /> Pay Now
          </Button>
        )}
        <Button 
          className="w-full font-semibold" 
          variant={isCustom ? 'default' : (isPopular && !numericPrice ? 'default' : 'outline')}
          size="lg"
          asChild
        >
          <Link to="/contact">
            {ctaText} {(!numericPrice || isCustom) && <ArrowRight className="ml-2 w-4 h-4" />}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}