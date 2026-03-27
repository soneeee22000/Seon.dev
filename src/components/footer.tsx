"use client";

import { useTranslations } from "next-intl";
import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-wrap items-center justify-between gap-3.5 border-t border-border px-10 py-7">
      <div className="flex items-center gap-2">
        <Logo size={22} />
        <span className="font-playfair text-[18px] font-bold text-accent">
          PSK
        </span>
      </div>
      <div className="font-dm-mono text-[8px] tracking-[.2em] text-muted">
        {t("credit")}
      </div>
      <div className="font-dm-mono text-[8px] text-muted">
        {t("builtWith")} &hearts;
      </div>
    </footer>
  );
}
