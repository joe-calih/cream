"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
      setIsVisible(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ "--scroll-progress": progress } as React.CSSProperties}
      className={`group fixed right-4 bottom-4 z-50 size-14 rounded-full p-1 transition-all duration-300 sm:right-6 sm:bottom-6 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[conic-gradient(var(--primary)_calc(var(--scroll-progress)*360deg),color-mix(in_oklab,var(--primary)_22%,transparent)_0)]" aria-hidden="true" />
      <span className="relative flex size-full items-center justify-center rounded-full border border-border bg-background text-primary shadow-lg transition group-hover:bg-accent group-focus-within:ring-2 group-focus-within:ring-ring group-focus-within:ring-offset-2">
        <ArrowUp className="size-5" />
      </span>
    </button>
  );
}