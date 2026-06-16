export default function AvatarCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-gradient opacity-30 blur-3xl"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border-light bg-surface-light dark:border-border dark:bg-surface">
        {/* Decorative ring */}
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-40 w-40 animate-spin-slow rounded-full border-2 border-dashed border-violet/30"
        />

        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-8">
          <div className="relative animate-float">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-brand-gradient font-display text-4xl font-bold text-white shadow-xl sm:h-40 sm:w-40 sm:text-5xl">
              SS
            </div>
          </div>
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-ink-light dark:text-ink">
              Sugumaran S
            </p>
            <p className="text-sm text-muted-light dark:text-muted">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Floating badge: years of focused building */}
      <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-border-light bg-surface-light px-4 py-3 shadow-lg dark:border-border dark:bg-surface sm:-left-10">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
          2+
        </div>
        <p className="text-xs font-medium leading-tight text-ink-light dark:text-ink">
          Years
          <br />
          Building
        </p>
      </div>

      {/* Floating badge: code icon */}
      <div className="absolute -bottom-6 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-lg sm:-right-8">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
    </div>
  );
}
