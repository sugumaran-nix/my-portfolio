'use client';

import { useEffect, useState } from 'react';

const splineUrl = 'https://my.spline.design/animatedgradientbackgroundforweb-uWFYyIpYVM3xYkd88RS2ewR8';

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function SplineHeroBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const idleWindow = window as IdleWindow;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    const activate = () => setReady(true);

    if (typeof idleWindow.requestIdleCallback === 'function') {
      idleHandle = idleWindow.requestIdleCallback(activate, { timeout: 1800 });
    } else {
      timeoutHandle = window.setTimeout(activate, 1200);
    }

    return () => {
      if (idleHandle && typeof idleWindow.cancelIdleCallback === 'function') idleWindow.cancelIdleCallback(idleHandle);
      if (timeoutHandle) window.clearTimeout(timeoutHandle);
    };
  }, []);

  return (
    <div className="hero-spline-layer" aria-hidden="true">
      {ready && (
        <iframe
          src={splineUrl}
          title="Decorative animated nebula background"
          loading="lazy"
          tabIndex={-1}
          frameBorder="0"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
