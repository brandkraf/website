import React from 'react';
import { motion } from 'framer-motion';

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

export default function KrafinaHero() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-6">
      {/* Pulsing brand aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-brandkraf-teal/30 to-brandkraf-purple/30 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Twinkling sparkles */}
      <Sparkle className="left-4 top-8 text-brandkraf-teal" delay={0} size={18} />
      <Sparkle className="right-6 top-16 text-brandkraf-purple" delay={0.7} size={22} />
      <Sparkle className="left-10 bottom-20 text-brandkraf-purple" delay={1.3} size={14} />
      <Sparkle className="right-12 bottom-28 text-brandkraf-teal" delay={1.9} size={16} />
      <Sparkle className="left-1/2 top-2 text-brandkraf-teal" delay={2.4} size={12} />

      {/* Krafina — floats and gently sways */}
      <motion.img
        src="/krafina-camera.png"
        alt="Krafina, the BrandKraf mascot, holding a camera"
        className="relative z-10 w-[250px] object-contain drop-shadow-2xl sm:w-[300px] lg:w-[360px]"
        animate={{ y: [0, -16, 0], rotate: [0, 1.6, 0, -1.6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft ground shadow */}
      <motion.div
        className="pointer-events-none absolute bottom-2 left-1/2 h-5 w-44 -translate-x-1/2 rounded-[50%] bg-black/15 blur-xl"
        animate={{ scaleX: [1, 0.88, 1], opacity: [0.18, 0.12, 0.18] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
