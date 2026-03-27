"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales, localeFlags, type Locale } from "@/i18n/config";

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = useCallback(
    (newLocale: Locale) => {
      router.replace(pathname, { locale: newLocale });
      setOpen(false);
    },
    [router, pathname],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1.5 border border-border bg-transparent px-2.5 py-1.5 font-dm-mono text-[9px] tracking-[.12em] text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
      >
        <span className="text-[13px] leading-none">{localeFlags[locale]}</span>
        <span>{locale.toUpperCase()}</span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 2.5L4 5.5L7 2.5"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-[400] mt-1.5 flex flex-col border border-border bg-bg/95 py-1 backdrop-blur-xl"
          style={{ minWidth: 120 }}
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleSwitch(loc)}
              className={`flex cursor-pointer items-center gap-2.5 border-none bg-transparent px-4 py-2 text-left font-dm-mono text-[9px] tracking-[.1em] transition-colors duration-200 ${
                loc === locale
                  ? "text-accent"
                  : "text-muted hover:bg-surface hover:text-text"
              }`}
            >
              <span className="text-[13px] leading-none">
                {localeFlags[loc]}
              </span>
              <span>{loc.toUpperCase()}</span>
              {loc === locale && (
                <span className="ml-auto text-[8px] text-accent">&#9670;</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
