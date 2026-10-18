"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site";
import { Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="topo">
      <div className="container nav__inner">
        <Brand label="Bytek Labs, início" />

        <nav
          className={`nav__links${open ? " is-open" : ""}`}
          id="menu"
          aria-label="Principal"
          onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#contato" className="btn btn--primary btn--sm nav__cta">Fale com a Bytek</a>
        </nav>

        <button
          className="nav__toggle"
          aria-controls="menu"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
      <div className="nav__progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
