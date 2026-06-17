import React, { useEffect, useRef } from 'react';
import { useInView, useSpring } from 'framer-motion';

/**
 * Scroll-triggered count-up number (adapted from a 21st.dev pattern).
 * Counts from 0 to `value` the first time it enters the viewport.
 */
function AnimatedCounter({ value, decimals = 0, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const spring = useSpring(0, { mass: 0.8, stiffness: 90, damping: 18 });

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix +
          Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }).format(latest) +
          suffix;
      }
    });
    return () => unsub();
  }, [spring, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
