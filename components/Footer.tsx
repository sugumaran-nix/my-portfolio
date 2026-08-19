import { socials } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-borderLight px-6 py-8 dark:border-borderDark md:px-10">
      <div className="footer-inner mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-inkMuted dark:text-white/45">© {new Date().getFullYear()} Sugumaran</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={social.label} className="text-inkMuted transition-colors hover:text-ink dark:text-white/50 dark:hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d={social.path} /></svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
