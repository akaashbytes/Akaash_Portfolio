// src/hooks/useInViewAnimate.js
import { useMemo } from 'react';
import { Variants } from 'framer-motion';

/**
 * Returns Framer‑Motion variants for a simple fade‑up reveal.
 * Optionally accepts a custom delay multiplier for staggering.
 */
export const useInViewAnimate = (delayMultiplier = 0) => {
  const variants = useMemo(() => {
    const base: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delayMultiplier * 0.1 } },
    };
    return base;
  }, [delayMultiplier]);
  return variants;
};
