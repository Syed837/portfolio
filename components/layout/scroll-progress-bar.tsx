"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
