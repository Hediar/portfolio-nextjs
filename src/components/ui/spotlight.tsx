"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../src/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute aspect-square w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-60 dark:opacity-50 transition-opacity mix-blend-screen dark:mix-blend-lighten"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(620px circle at center, rgba(79,70,229,0.18), rgba(56,189,248,0.10) 40%, rgba(34,197,94,0.06) 62%, transparent 78%)",
        }}
      />
    </div>
  );
}
