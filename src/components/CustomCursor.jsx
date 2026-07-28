import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    // Event delegation — covers React-hydrated elements automatically
    const onDocOver = (e) => {
      if (e.target.closest("a, button, [data-cursor]")) {
        ring.classList.add("cursor-hover");
        dot.classList.add("cursor-hover");
      }
    };
    const onDocOut = (e) => {
      if (
        e.target.closest("a, button, [data-cursor]") &&
        !e.relatedTarget?.closest("a, button, [data-cursor]")
      ) {
        ring.classList.remove("cursor-hover");
        dot.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onDocOver, { passive: true });
    document.addEventListener("mouseout", onDocOut, { passive: true });
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onDocOver);
      document.removeEventListener("mouseout", onDocOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{
          position: "fixed", top: 0, left: 0,
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--cursor-color, #171717)",
          pointerEvents: "none", zIndex: 9999,
          marginLeft: -3, marginTop: -3,
          willChange: "transform",
          transition: "width 0.2s, height 0.2s, background 0.2s, margin 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={{
          position: "fixed", top: 0, left: 0,
          width: 36, height: 36, borderRadius: "50%",
          border: "1.5px solid var(--cursor-color, #171717)",
          opacity: 0.4, pointerEvents: "none", zIndex: 9998,
          marginLeft: -18, marginTop: -18,
          willChange: "transform",
          transition: "width 0.25s, height 0.25s, opacity 0.25s, margin 0.25s",
        }}
      />
    </>
  );
}
