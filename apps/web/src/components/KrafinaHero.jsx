import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Transparent still (van on no background), used as the video poster and as the
// reduced-motion fallback.
const HERO_STILL = '/brandkraf-van-poster.png';

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

// Apple's WebKit (desktop Safari + ALL iOS browsers, incl. iOS "Chrome") can't
// render a transparent WebM, so we serve it an animated transparent GIF instead.
function detectAppleWebkit() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const isIOS = /iP(hone|od|ad)/.test(ua);
  const isDesktopSafari = /Safari/.test(ua) && !/Chrom(e|ium)|Android|Edg|OPR|SamsungBrowser|FxiOS|CriOS/.test(ua);
  return isIOS || isDesktopSafari;
}

export default function KrafinaHero() {
  const reduceMotion = useReducedMotion();
  // Computed once on mount (client-only SPA, so navigator is available).
  const [isApple] = useState(() => detectAppleWebkit());

  // Hero visual per context (all transparent):
  //  - reduced-motion -> static PNG still (no animation)
  //  - Safari/iOS -> animated transparent GIF (no WebM alpha; HEVC was a dead end)
  //  - everyone else -> VP8-alpha WebM video
  const showVideo = !isApple && !reduceMotion;
  const showGif = isApple && !reduceMotion;

  // Force the muted *property* (React only sets the attribute) so the WebM
  // autoplays even on stricter browsers.
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center py-6">
      {/* Pulsing brand aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="h-[44rem] w-[44rem] rounded-full bg-gradient-to-tr from-brandkraf-teal/30 to-brandkraf-purple/30 blur-3xl"
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

      {/* BrandKraf media van — static (no hover/float) */}
      <div className="relative z-10 w-[340px] sm:w-[520px] lg:w-[640px]">
        {showVideo ? (
          <video
            ref={videoRef}
            src="/brandkraf-van.webm"
            poster={HERO_STILL}
            className="w-full object-contain drop-shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Animated BrandKraf media production van and team"
          />
        ) : showGif ? (
          // Safari/iOS: animated transparent GIF.
          <img
            src="/brandkraf-van.gif"
            alt="BrandKraf media production van and team"
            className="w-full object-contain drop-shadow-2xl"
          />
        ) : (
          // Reduced-motion: static van still.
          <img loading="lazy" decoding="async"
            src={HERO_STILL}
            alt="BrandKraf media production van and team"
            className="w-full object-contain drop-shadow-2xl"
          />
        )}
      </div>
    </div>
  );
}
