import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, TrendingUp, Users } from 'lucide-react';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function HeroSection({
  headline = "Elevate Your Brand with Data-Driven Marketing",
  subheadline = "We help modern businesses scale and connect with their audience through cutting-edge digital strategies.",
  ctaText = 'Get Free Strategy Call',
  ctaLink = '/contact'
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const trustStats = [
    { icon: Users, value: '50+', label: 'Brands scaled' },
    { icon: TrendingUp, value: '3.5x', label: 'Avg. ROAS' },
    { icon: Star, value: '4.9/5', label: 'Client rating' },
  ];

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-16 lg:pt-24 lg:pb-0">
        {/* Layered backdrop: animated gradient mesh + dotted grid + soft brand blobs */}
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" />
        <div className="blob bg-brandkraf-teal/20 h-72 w-72 -top-10 -left-10" />
        <div className="blob bg-brandkraf-purple/20 h-80 w-80 top-1/3 right-0" style={{ animationDelay: '-5s' }} />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={isMobile ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <span className="chip-brand mb-6">
                <Sparkles className="h-4 w-4" />
                Malaysia&apos;s growth marketing partner
              </span>

              <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple pb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
                {headline}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-[60ch] leading-relaxed text-balance">
                {subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="text-base sm:text-lg h-14 px-8 bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position,box-shadow,transform] duration-500 rounded-xl shadow-lg shadow-brandkraf-teal/25 hover:shadow-xl hover:shadow-brandkraf-purple/30 hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg h-14 px-8 border-2 border-brandkraf-purple/40 text-brandkraf-teal hover:bg-gradient-to-r hover:from-brandkraf-teal hover:to-brandkraf-purple hover:text-white hover:border-transparent transition-all duration-300 rounded-xl w-full sm:w-auto"
                  asChild
                >
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Trust stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-md">
                {trustStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex flex-col items-center lg:items-start">
                      <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-foreground">
                        <Icon className="h-5 w-5 text-brandkraf-teal" />
                        {stat.value}
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0 order-first lg:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brandkraf-teal to-brandkraf-purple rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/8aaa0f3fe5dc3f1e591d45d0339e89ad.png"
                alt="BrandKraf Marketing Strategy"
                className="relative z-10 w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto drop-shadow-2xl animate-float-y object-contain"
              />

              {/* Floating glass stat cards */}
              <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={isMobile ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden sm:flex absolute z-20 top-6 -left-2 lg:-left-6 glass-card rounded-2xl px-4 py-3 items-center gap-3 animate-float-y"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brandkraf-teal/15 text-brandkraf-teal">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-foreground">+182%</p>
                  <p className="text-xs text-muted-foreground">Engagement lift</p>
                </div>
              </motion.div>

              <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={isMobile ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                style={{ animationDelay: '-3s' }}
                className="hidden sm:flex absolute z-20 bottom-8 -right-2 lg:-right-4 glass-card rounded-2xl px-4 py-3 items-center gap-3 animate-float-y"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brandkraf-purple/15 text-brandkraf-purple">
                  <Star className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-foreground">4.9/5</p>
                  <p className="text-xs text-muted-foreground">50+ happy brands</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppInquiryForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
}

export default HeroSection;