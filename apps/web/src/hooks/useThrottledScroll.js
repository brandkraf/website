import { useEffect, useRef } from 'react';

/**
 * A custom hook that listens to window scroll events and throttles the callback execution.
 * Optimized for mobile using requestAnimationFrame to prevent scroll jank.
 * @param {Function} callback - The function to execute on scroll.
 * @param {number} delay - The throttle interval in milliseconds (default: 100ms).
 */
export function useThrottledScroll(callback, delay = 100) {
  const savedCallback = useRef(callback);
  const lastCallTime = useRef(0);
  const rafId = useRef(null);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = () => {
      const now = Date.now();
      
      if (now - lastCallTime.current >= delay) {
        // Cancel any pending animation frame to prevent stacking
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
        
        // Use requestAnimationFrame to sync with browser paint cycle
        rafId.current = requestAnimationFrame(() => {
          savedCallback.current();
          lastCallTime.current = Date.now();
        });
      }
    };

    // Use passive listener for better scrolling performance on mobile
    window.addEventListener('scroll', handler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handler);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [delay]);
}