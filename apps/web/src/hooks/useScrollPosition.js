import { useState, useRef, useCallback } from 'react';
import { useThrottledScroll } from './useThrottledScroll.js';

/**
 * A custom hook that tracks scroll thresholds and direction.
 * OPTIMIZED: No longer stores exact scrollY in state to prevent continuous re-renders.
 * @param {number} threshold - The scroll threshold in pixels to trigger isScrolled (default: 50).
 * @param {number} delay - The throttle interval in milliseconds (default: 100ms).
 * @returns {Object} { isScrolled: boolean, direction: 'up' | 'down' | 'none' }
 */
export function useScrollPosition(threshold = 50, delay = 100) {
  const [scrollData, setScrollData] = useState({
    isScrolled: typeof window !== 'undefined' ? window.scrollY > threshold : false,
    direction: 'none'
  });
  
  const previousScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Determine scroll direction
    let direction = 'none';
    if (currentScrollY > previousScrollY.current) {
      direction = 'down';
    } else if (currentScrollY < previousScrollY.current) {
      direction = 'up';
    }

    const isScrolled = currentScrollY > threshold;

    setScrollData(prev => {
      // CRITICAL OPTIMIZATION: Only trigger a React state update if the boolean threshold 
      // or direction has actually changed. This prevents re-rendering every 100ms.
      if (prev.isScrolled !== isScrolled || prev.direction !== direction) {
        return { isScrolled, direction };
      }
      return prev;
    });

    previousScrollY.current = currentScrollY;
  }, [threshold]);

  useThrottledScroll(handleScroll, delay);

  return scrollData;
}