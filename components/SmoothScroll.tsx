'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let disposed = false;
    let initialized = false;
    let lenis: { destroy: () => void } | undefined;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    const init = async () => {
      if (initialized || disposed) return;
      initialized = true;
      const { default: Lenis } = await import('lenis');
      if (disposed) return;
      lenis = new Lenis({ autoRaf: true, lerp: 0.1, smoothWheel: true, syncTouch: false });
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const schedule = () => {
      if (typeof idleWindow.requestIdleCallback === 'function') {
        idleHandle = idleWindow.requestIdleCallback(() => void init(), { timeout: 1500 });
      } else {
        timeoutHandle = window.setTimeout(() => void init(), 1200);
      }
    };

    const startOnInteraction = () => void init();
    window.addEventListener('wheel', startOnInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', startOnInteraction, { once: true, passive: true });
    window.addEventListener('scroll', startOnInteraction, { once: true, passive: true });
    schedule();

    return () => {
      disposed = true;
      if (idleHandle && typeof idleWindow.cancelIdleCallback === 'function') idleWindow.cancelIdleCallback(idleHandle);
      if (timeoutHandle) window.clearTimeout(timeoutHandle);
      window.removeEventListener('wheel', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
      window.removeEventListener('scroll', startOnInteraction);
      lenis?.destroy();
    };
  }, []);

  return children;
}
