"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Skip smooth scroll on low-end devices or when user prefers reduced motion
    if (prefersReducedMotion || navigator.hardwareConcurrency < 4) {
      return;
    }

    const scroller = new Lenis({
      duration: 0.8, // Reduced from 1.2 for better performance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced sensitivity
    });

    let lastTime = 0;
    function raf(time: number) {
      // Throttle to 60fps max
      if (time - lastTime >= 16.67) {
        scroller.raf(time);
        lastTime = time;
      }
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);
    setLenisRef(scroller);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      scroller.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}