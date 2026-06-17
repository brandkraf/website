import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, TrendingUp, Users } from 'lucide-react';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';
import HeroDashboard from './HeroDashboard.jsx';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function HeroSection({
  headline = "We don't just market. We scale brands.",
  subheadline = "Helping businesses grow with content, ads, and AI-driven marketing.",
  ctaText = 'Get Free Strategy Call',
  ctaLink = '/contact'
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const ease = [0.22, 1, 0.36, 1];
  const rise = (d = 0) => ({
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: isMobile ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease },
  });

  // Split headline so we can apply an animated gradient to the last sentence
  const parts = headline.split('. ');
  const lead = parts.length > 1 ? parts[0] + '.' : headline;
  const emphasis = parts.length > 1 ? parts.slice(1).join('. ') : '';

  const stats = [
    { icon: Users, value: '50+', label: 'Brands scaled' },
    { icon: TrendingUp, value: '3.5x', label: 'Avg. ROAS' },
    { icon: Star, value: '4.9/5', label: 'Client rating' },
  ];

  // Mouse-driven 3D tilt for the showcase
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 });

  const handleTilt = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <>
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-background pt-28 pb-20 lg:pt-32">
        {/* ---- Aurora / gradient mesh backdrop ---- */}
        <div className="pointer-events-none absolute inset-0 gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
        <div className="blob h-[26rem] w-[26rem] bg-brandkraf-teal/25 -top-24 -left-16" />
        <div className="blob h-[30rem] w-[30rem] bg-brandkraf-purple/25 -top-10 right-0" style={{ animationDelay: '-6s' }} />
        <div className="blob h-[24rem] w-[24rem] bg-brandkraf-teal/15 bottom-0 left-1/3" style={{ animationDelay: '-3s' }} />
        {/* fade to white at the bottom for a clean handoff to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="container-custom relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Eyebrow */}
            <motion.span {...rise(0)} className="chip-brand mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brandkraf-teal opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brandkraf-teal" />
              </span>
              Malaysia&apos;s growth marketing partner
              <Sparkles className="h-4 w-4" />
            </motion.span>

            {/* Headline */}
            <motion.h1 {...rise(0.08)} className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              {lead}
              {emphasis && (
                <>
                  {' '}
                  <span className="bg-gradient-to-r from-brandkraf-teal via-brandkraf-purple to-brandkraf-teal bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient-pan_5s_linear_infinite]">
                    {emphasis}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p {...rise(0.16)} className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...rise(0.24)} className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="h-14 w-full rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-[length:200%_100%] bg-left px-8 text-base font-semibold text-white shadow-lg shadow-brandkraf-teal/30 transition-[background-position,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-brandkraf-purple/40 active:scale-[0.98] sm:w-auto sm:text-lg"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 w-full rounded-xl border-2 border-brandkraf-purple/30 bg-white/40 px-8 text-base font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-brandkraf-purple/50 hover:bg-white/70 sm:w-auto sm:text-lg"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Trust stats */}
            <motion.div {...rise(0.32)} className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 text-brandkraf-teal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <div className="text-xl font-extrabold leading-none text-foreground">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ---- Showcase: glass app window with 3D tilt + floating logo ---- */}
          <div
            className="relative mx-auto mt-16 w-full max-w-4xl [perspective:1600px]"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            {/* glow behind */}
            <div className="absolute inset-x-8 -top-6 bottom-0 rounded-[2rem] bg-gradient-to-tr from-brandkraf-teal/30 to-brandkraf-purple/30 blur-3xl opacity-40" />

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              animate={isMobile ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              style={isMobile ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Floating white logo badge (pops forward in 3D) */}
              <div
                style={{ transform: 'translateZ(70px)' }}
                className="absolute -top-7 left-5 z-30 hidden sm:block lg:-left-6"
              >
                <div className="animate-float-y rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                  <img
                    src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png"
                    alt="BrandKraf"
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </div>

              <div
                style={{ transform: 'translateZ(30px)' }}
                className="glass-card relative overflow-hidden rounded-[1.75rem] p-3 sm:p-4"
              >
                {/* window chrome */}
                <div className="mb-3 flex items-center gap-1.5 px-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 h-5 flex-1 rounded-md bg-foreground/5" />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-4 sm:p-6">
                  <HeroDashboard />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppInquiryForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
}

export default HeroSection;
