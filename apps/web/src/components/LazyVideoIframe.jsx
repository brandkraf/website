import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Optimized Video Iframe component to prevent iOS Safari memory leaks and crashes.
 * - Detects iOS and disables heavy Framer Motion IntersectionObservers.
 * - Uses native loading="lazy" to prevent loading 30+ iframes simultaneously.
 * - Memoized to prevent unnecessary re-renders during scroll.
 */
const LazyVideoIframe = memo(({ url, title, index, delay, className }) => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkIOS = () => {
      if (typeof window === 'undefined') return false;
      return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    };
    setIsIOS(checkIOS());
  }, []);

  // Ensure URL is in preview format
  const embedUrl = url ? url.replace(/\/view.*$/, '/preview') : '';
  const delayTime = delay !== undefined ? delay : (index % 4) * 0.1;

  // On iOS, completely bypass Framer Motion to save memory and prevent crashes
  if (isIOS) {
    return (
      <div className={className}>
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full border-none"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          title={title}
        ></iframe>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.4, delay: delayTime }}
      className={className}
    >
      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full border-none"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        title={title}
      ></iframe>
    </motion.div>
  );
});

LazyVideoIframe.displayName = 'LazyVideoIframe';
export default LazyVideoIframe;