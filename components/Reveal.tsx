import type { CSSProperties, ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`motion-reveal ${className}`} style={{ '--reveal-delay': `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
