'use client';

import { useEffect, useState } from 'react';

type PortfolioLenis = {
  scrollTo: (target: number | string, options?: { duration?: number; easing?: (value: number) => number; immediate?: boolean }) => void;
};

type PortfolioWindow = Window & { __portfolioLenis?: PortfolioLenis };

const fastEaseOut = (value: number) => 1 - Math.pow(1 - value, 4);

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 300);
        frame = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = (window as PortfolioWindow).__portfolioLenis;

    if (prefersReducedMotion) {
      lenis?.scrollTo('top', { immediate: true });
      if (!lenis) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (lenis) {
      lenis.scrollTo('top', { duration: 0.58, easing: fastEaseOut });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`scroll-top-control fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full transition-[opacity,transform] duration-200 ${visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
