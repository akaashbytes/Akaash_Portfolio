// src/hooks/useScrollVelocity.js
import { useEffect, useRef, useState } from 'react';

/**
 * Calculates the instantaneous scroll velocity (pixels per millisecond).
 * Returns a numeric value that can be used to drive skew/transform effects.
 */
export const useScrollVelocity = () => {
  const lastY = useRef(window.scrollY);
  const lastTime = useRef(performance.now());
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      const dy = window.scrollY - lastY.current;
      const dt = now - lastTime.current;
      const v = dt > 0 ? dy / dt : 0; // pixels per ms
      setVelocity(v);
      lastY.current = window.scrollY;
      lastTime.current = now;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return velocity;
};
