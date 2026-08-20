'use client';

import { useEffect, useRef, useState } from 'react';

export function ProjectImage({
  title,
  lightSrc,
  darkSrc,
  priority = false,
}: {
  title: string;
  lightSrc: string;
  darkSrc: string;
  priority?: boolean;
}) {
  const [dark, setDark] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const syncTheme = () => setDark(document.documentElement.classList.contains('dark'));
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [dark]);

  const src = dark ? darkSrc : lightSrc;
  const smallSrc = src.replace('.webp', '-640.webp');

  useEffect(() => {
    const image = imageRef.current;
    if (!image || !image.complete) return;
    if (image.naturalWidth > 0) setLoaded(true);
    else setFailed(true);
  }, [src]);

  return (
    <div className={`project-image-shell relative aspect-[16/9] w-full flex-shrink-0 overflow-hidden ${loaded || failed ? '' : 'img-skeleton'}`} aria-busy={!loaded && !failed}>
      {!failed && (
        <img
          ref={imageRef}
          key={src}
          src={src}
          srcSet={`${smallSrc} 640w, ${src} 1280w`}
          sizes="(max-width: 640px) calc(100vw - 48px), 560px"
          width={1280}
          height={607}
          alt={`${title} screenshot`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      {failed && (
        <div className="project-image-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-700 to-stone-900">
          <span className="text-xs font-mono text-white/30">screenshot coming soon</span>
        </div>
      )}
    </div>
  );
}
