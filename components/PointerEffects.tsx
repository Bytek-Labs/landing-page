"use client";

import { useEffect } from "react";

// Brilho que segue o cursor (.spot) e leve inclinação 3D (.tilt), só com mouse.
export function PointerEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tilted: HTMLElement | null = null;

    const reset = (el: HTMLElement | null) => el?.style.removeProperty("transform");

    const onMove = (e: PointerEvent) => {
      const spot = (e.target as HTMLElement).closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = reduced ? null : (e.target as HTMLElement).closest<HTMLElement>(".tilt");
      if (tilt !== tilted) reset(tilted);
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(1200px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
      }
    };

    const onLeave = () => {
      reset(tilted);
      tilted = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
