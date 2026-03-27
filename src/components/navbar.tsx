"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { NAV_IDS } from "@/lib/data";
import { scrollToSection, useActiveSection } from "@/lib/hooks";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";

const NAV_KEYS = [
  "about",
  "experience",
  "projects",
  "hackathons",
  "skills",
  "education",
  "contact",
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection(NAV_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = useCallback((id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 100);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 right-0 left-0 z-200 flex items-center justify-between px-5 py-[18px] transition-all duration-500 md:px-10"
        style={{
          background: scrolled ? "rgba(6,8,13,.94)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(28,37,53,.7)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
        }}
      >
        <button
          onClick={() => handleNav("hero")}
          aria-label="Scroll to top"
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
        >
          <Logo size={28} />
          <span className="font-playfair text-[16px] font-bold tracking-[.06em] text-accent">
            PSK
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden flex-wrap gap-7 md:flex">
          {NAV_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => handleNav(NAV_IDS[i])}
              className={`relative cursor-pointer select-none border-none bg-transparent p-0 font-dm-mono text-[10px] tracking-[.18em] transition-colors duration-300 ${
                activeSection === NAV_IDS[i]
                  ? "text-accent"
                  : "text-muted hover:text-accent"
              }`}
            >
              {t(key)}
              {activeSection === NAV_IDS[i] && (
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                  style={{ animation: "fadeIn 0.3s ease both" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop right side: language toggle + resume */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="/files/resume.pdf"
            download
            className="group border border-accent/50 px-4 py-2 font-dm-mono text-[9px] tracking-[.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
          >
            {t("resume")} &#8599;
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex cursor-pointer flex-col items-center justify-center gap-[6px] border-none bg-transparent p-0"
            style={{ width: 32, height: 32 }}
          >
            <span
              className={`block h-px w-5 bg-text transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[250] bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-in drawer */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-[300] h-full w-[280px] bg-bg/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 pt-20">
          {NAV_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => handleNav(NAV_IDS[i])}
              className={`cursor-pointer border-none bg-transparent p-0 text-left font-dm-mono text-[12px] tracking-[.18em] transition-colors duration-300 ${
                activeSection === NAV_IDS[i]
                  ? "text-accent"
                  : "text-muted hover:text-accent"
              }`}
            >
              {t(key)}
            </button>
          ))}
          <a
            href="/files/resume.pdf"
            download
            className="mt-4 border border-accent/50 px-4 py-3 text-center font-dm-mono text-[10px] tracking-[.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
          >
            {t("resume")} &#8599;
          </a>
        </div>
      </div>
    </>
  );
}
