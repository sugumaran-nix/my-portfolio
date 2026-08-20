'use client';

import { useEffect, useRef, useState } from 'react';

export function ExternalDemoLink({ href }: { href: string }) {
  const [isOpening, setIsOpening] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleClick = () => {
    setIsOpening(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setIsOpening(false), 1800);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-ghost-pill project-action"
      onClick={handleClick}
      aria-busy={isOpening}
    >
      {isOpening ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 animate-spin" aria-hidden="true"><path d="M12 3a9 9 0 109 9" strokeLinecap="round" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
      )}
      {isOpening ? 'Opening…' : 'View Live'}
    </a>
  );
}
