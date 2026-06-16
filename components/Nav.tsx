import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-base-light/80 backdrop-blur-md dark:border-border dark:bg-base/80">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold text-ink-light dark:text-ink">
          Sugumaran<span className="text-violet">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-muted-light dark:text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-violet"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
