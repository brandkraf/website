import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Static logo used as the video poster and as the fallback on browsers/settings
// where the transparent WebM can't play (Safari/iOS) or shouldn't (reduced-motion).
const LOGO_SRC = 'https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png';

function Sparkle({ className, delay = 0, size = 16 }) {
  return (
    <motion.svg
      className={`pointer-events-none absolute ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 25, 0] }}
      transition={{ duration: 2.6, delay, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <path d="M12 0 l2.6 7 7.4 2.4 -7.4 2.4 -2.6 7 -2.6 -7 -7.4 -2.4 7.4 -2.4 Z" fill="currentColor" />
    </motion.svg>
  );
}

// Apple's WebKit (desktop Safari + ALL iOS browsers) plays WebM but drops the
// alpha channel, so a transparent mascot video shows as a black box there.
// Detect it so we can render an image fallback instead.
function detectAppleWebkit() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isIOS = /iP(hone|od|ad)/.test(ua);
  const isDesktopSafari = /Safari/.test(ua) && !/Chrom(e|ium)|Android|Edg|OPR|SamsungBrowser|FxiOS|CriOS/.test(ua);
  return isIOS || isDesktopSafari;
}

export default function KrafinaHero() {
  const reduceMotion = useReducedMotion();
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(detectAppleWebkit());
  }, []);

  // Gentle vertical float only when the user hasn't asked for reduced motion.
  // (No rotation — a tilting wordmark looks off, unlike the old mascot.)
  const floatAnim = reduceMotion ? undefined : { y: [0, -14, 0] };

  // Decide what fills the hero slot:
  //  - everyone else -> transparent animated logo video
  //  - Apple/WebKit (no WebM alpha) OR reduced-motion -> static logo still
  const showVideo = !isApple && !reduceMotion;

  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-6">
      {/* Pulsing brand aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-brandkraf-teal/30 to-brandkraf-purple/30 blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Twinkling sparkles */}
      <Sparkle className="left-4 top-8 text-brandkraf-teal" delay={0} size={18} />
      <Sparkle className="right-6 top-16 text-brandkraf-purple" delay={0.7} size={22} />
      <Sparkle className="left-10 bottom-20 text-brandkraf-purple" delay={1.3} size={14} />
      <Sparkle className="right-12 bottom-28 text-brandkraf-teal" delay={1.9} size={16} />
      <Sparkle className="left-1/2 top-2 text-brandkraf-teal" delay={2.4} size={12} />

      {/* Animated BrandKraf logo, floats gently */}
      <motion.div
        className="relative z-10 w-[320px] sm:w-[420px] lg:w-[500px]"
        animate={floatAnim}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {showVideo ? (
          <video
            src="/brandkraf-hero.webm"
            poster={LOGO_SRC}
            className="w-full object-contain drop-shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Animated BrandKraf logo"
          />
        ) : (
          // Safari/iOS (no WebM alpha) or reduced-motion: static logo still.
          <img
            src={LOGO_SRC}
            alt="BrandKraf"
            className="w-full object-contain drop-shadow-xl"
          />
        )}
      </motion.div>
    </div>
  );
}
