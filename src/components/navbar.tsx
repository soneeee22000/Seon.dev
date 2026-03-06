"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/hooks";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback((id: string) => scrollToSection(id), []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between px-10 py-[18px] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,8,13,.94)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(28,37,53,.7)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div
        onClick={() => handleNav("hero")}
        className="flex cursor-pointer items-center gap-2"
      >
        <Logo size={28} />
        <span className="font-playfair text-[16px] font-bold tracking-[.06em] text-accent">
          PSK
        </span>
      </div>

      <div className="flex flex-wrap gap-7">
        {NAV_LINKS.map(([label, id]) => (
          <span
            key={id}
            onClick={() => handleNav(id)}
            className="cursor-pointer select-none font-dm-mono text-[10px] tracking-[.18em] text-muted transition-colors duration-300 hover:text-accent"
          >
            {label}
          </span>
        ))}
      </div>

      <a
        href="/files/resume.pdf"
        download
        className="group border border-accent/50 px-4 py-2 font-dm-mono text-[9px] tracking-[.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
      >
        R&Eacute;SUM&Eacute; &#8599;
      </a>
    </nav>
  );
}
