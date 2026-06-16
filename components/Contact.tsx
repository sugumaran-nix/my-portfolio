const contactDetails = [
  {
    label: "Email",
    value: "sugumarankugan@gmail.com",
    href: "mailto:sugumarankugan@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 63810 74457",
    href: "tel:+916381074457",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: undefined,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow text-violet">Contact Me</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-ink-light dark:text-ink sm:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-light dark:text-muted sm:text-lg">
          Have a project in mind or want to work together? Feel free to send
          me a message.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-4">
            {contactDetails.map((item) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-ink-light dark:text-ink">
                    {item.value}
                  </span>
                </>
              );
              const className =
                "flex items-center gap-3 rounded-xl border border-border-light bg-surface-light px-4 py-3.5 transition-colors hover:border-violet/40 dark:border-border dark:bg-surface";

              return item.href ? (
                <a key={item.label} href={item.href} className={className}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className={className}>
                  {content}
                </div>
              );
            })}
          </div>

          <form
            action="mailto:sugumarankugan@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-border-light bg-surface-light p-6 dark:border-border dark:bg-surface sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-xl border border-border-light bg-base-light px-4 py-3 text-sm text-ink-light placeholder:text-muted-light focus:border-violet dark:border-border dark:bg-base dark:text-ink dark:placeholder:text-muted"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-xl border border-border-light bg-base-light px-4 py-3 text-sm text-ink-light placeholder:text-muted-light focus:border-violet dark:border-border dark:bg-base dark:text-ink dark:placeholder:text-muted"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="mt-4 w-full rounded-xl border border-border-light bg-base-light px-4 py-3 text-sm text-ink-light placeholder:text-muted-light focus:border-violet dark:border-border dark:bg-base dark:text-ink dark:placeholder:text-muted"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="mt-4 w-full rounded-xl border border-border-light bg-base-light px-4 py-3 text-sm text-ink-light placeholder:text-muted-light focus:border-violet dark:border-border dark:bg-base dark:text-ink dark:placeholder:text-muted"
            />
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="border-t border-border-light dark:border-border">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-light dark:text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Sugumaran S. All rights reserved.</p>
          <p>Coimbatore, Tamil Nadu, India</p>
        </div>
      </footer>
    </section>
  );
}
