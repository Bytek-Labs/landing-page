"use client";

import { useEffect } from "react";

// Revela os elementos .reveal conforme entram na tela, em cascata entre irmãos.
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.dataset.reveal = "ready";
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const index = Array.from(el.parentElement?.children ?? []).indexOf(el);
          el.style.transitionDelay = `${index * 70}ms`;
          el.classList.add("is-visible");
          // Depois da entrada, libera o elemento para outras transições (ex.: inclinação)
          window.setTimeout(() => {
            el.style.removeProperty("transition-delay");
            el.classList.add("is-settled");
          }, 700 + index * 70);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
