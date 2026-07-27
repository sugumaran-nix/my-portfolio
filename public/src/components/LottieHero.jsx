import { useEffect, useRef } from "react";

// LottieFiles — free coding/developer animation
// src: https://lottiefiles.com/free-animations/developers
// Using dotLottie-web (official LottieFiles player, no React dep needed)
const LOTTIE_SRC = "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie";

// Fallback: inline SVG animated coder if lottie fails
export default function LottieHero({ className = "" }) {
  const canvasRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { DotLottie } = await import("@lottiefiles/dotlottie-web");
        if (!mounted || !canvasRef.current) return;
        playerRef.current = new DotLottie({
          canvas: canvasRef.current,
          src: LOTTIE_SRC,
          autoplay: true,
          loop: true,
        });
      } catch (e) {
        // silently fallback — SVG shown instead
      }
    })();
    return () => {
      mounted = false;
      playerRef.current?.destroy();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Canvas for Lottie */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: 340, maxHeight: 340 }}
      />
      {/* Fallback visible while Lottie loads — animated SVG coder (unDraw style) */}
      <noscript>
        <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-60" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#10b981" strokeWidth="2" strokeDasharray="8 4"/>
          <text x="100" y="108" textAnchor="middle" fontSize="48">👨‍💻</text>
        </svg>
      </noscript>
    </div>
  );
}
