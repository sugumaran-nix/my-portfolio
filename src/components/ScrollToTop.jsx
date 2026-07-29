import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom]   = useState(24);

  useEffect(() => {
    const FOOTER_H = 57;
    const BTN_H    = 40;
    const GAP      = 8;

    const update = () => {
      const scrollY        = window.scrollY;
      const windowH        = window.innerHeight;
      const docH           = document.body.scrollHeight;
      const distFromBottom = docH - (scrollY + windowH);

      setVisible(scrollY > 300);

      // Only push up when button would physically overlap footer
      const overlap = (FOOTER_H + GAP) - distFromBottom;
      setBottom(overlap > 0 ? 24 + overlap : 24);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        bottom: `${bottom}px`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease, transform 0.3s ease, bottom 0.15s ease",
      }}
      className="fixed right-6 z-50 w-10 h-10 rounded-full bg-ink dark:bg-white text-white dark:text-ink flex items-center justify-center shadow-md hover:shadow-lg"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
        <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
