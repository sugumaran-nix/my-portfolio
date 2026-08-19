'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function DownloadIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    nav?.style.setProperty('backdrop-filter', 'blur(18px) saturate(130%)');
    nav?.style.setProperty('-webkit-backdrop-filter', 'blur(18px) saturate(130%)');
  }, []);

  const toggleTheme = () => {
    const dark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('theme', dark ? 'dark' : 'light');
    setIsDark(dark);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress-track" aria-hidden="true"><div className="scroll-progress-bar" /></div>
      <nav
        id="site-nav"
        ref={navRef}
        aria-label="Main navigation"
        className="site-nav sticky top-0 z-50"
        style={{ backdropFilter: 'blur(18px) saturate(130%)', WebkitBackdropFilter: 'blur(18px) saturate(130%)' }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <a href="#home" className="font-display line-hover text-[18px] italic tracking-tight text-ink dark:text-white">Sugumaran.</a>

          <ul className="hidden list-none items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link line-hover text-sm text-inkMuted transition-colors duration-150 hover:text-ink dark:text-white/50 dark:hover:text-white ${active === link.href.slice(1) ? 'font-semibold !text-ink dark:!text-white' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button type="button" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme} className="theme-toggle flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/5">
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </button>

            <a href="/sugumaran-s-resume.pdf" download className="navbar-resume btn-ghost-pill hidden items-center gap-1.5 text-xs md:inline-flex">
              <DownloadIcon />
              Resume
            </a>

            <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="menu-toggle flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/5 md:hidden">
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" /></svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
            <ul className="mobile-menu flex list-none flex-col border-t border-borderLight px-6 py-3 dark:border-borderDark md:hidden">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu} className={`mobile-nav-link block border-l-2 border-transparent py-3 pl-3 text-base text-inkMuted transition-colors duration-150 hover:text-ink dark:text-white/50 dark:hover:text-white ${active === link.href.slice(1) ? 'font-semibold !text-ink dark:!text-white' : ''}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pb-1 pt-2"><a href="/sugumaran-s-resume.pdf" download className="btn-ghost-pill inline-flex items-center gap-1.5 text-sm">Download Resume</a></li>
            </ul>
        )}
      </nav>
    </>
  );
}
