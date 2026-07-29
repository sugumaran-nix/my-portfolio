import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom]   = useState(24); // px from bottom

  useEffect(() => {
    const FOOTER_H = 57; // footer height px — thin bar ~57px
    const GAP      = 12; // gap between button and footer

    const update = () => {
      const scrollY   = window.scrollY;
      const windowH   = window.innerHeight;
      const docH      = document.body.scrollHeight;
      const distFromBottom = docH - (scrollY + windowH);

      setVisible(scrollY > 300);

      // If footer is coming into view, push button up above it
      if (distFromBottom < FOOTER_H + GAP + 40) {
        setBottom(FOOTER_H + GAP + (FOOTER_H + GAP + 40 - distFromBottom));
      } else {
        setBottom(24);
      }
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
        transition: "opacity 0.3s ease, transform 0.3s ease, bottom 0.2s ease",
      }}
      className="fixed right-6 z-50 w-10 h-10 rounded-full bg-ink dark:bg-white text-white dark:text-ink flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
        <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
