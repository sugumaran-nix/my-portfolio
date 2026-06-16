const socials = [
  { label: "GitHub", href: "https://github.com/sugumaran-nix", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sugumaran-nix", icon: "linkedin" },
];

function Icon({ name }: { name: string }) {
  if (name === "github") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.93 3.2 9.11 7.64 10.59.56.1.76-.24.76-.54 0-.27-.01-1.13-.02-2.04-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.91.1-.71.38-1.2.69-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.21 1.14-2.99-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.13 2.79.37 2.14-1.45 3.08-1.14 3.08-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.5.39.34.74 1.02.74 2.05 0 1.48-.01 2.67-.01 3.04 0 .3.2.65.76.54 4.44-1.48 7.63-5.66 7.63-10.59C23.02 5.24 18.27.5 12 .5z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-muted-light transition-colors hover:border-violet hover:text-violet dark:border-border dark:text-muted"
        >
          <Icon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
