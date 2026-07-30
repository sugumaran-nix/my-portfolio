import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Lucide icons — https://lucide.dev (premium-website skill: consistent icon library)
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-borderLight dark:border-borderDark text-inkMuted dark:text-white/50 hover:text-ink dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
    >
      {dark
        ? <Sun  size={15} strokeWidth={2} />
        : <Moon size={15} strokeWidth={2} />
      }
    </button>
  );
}
