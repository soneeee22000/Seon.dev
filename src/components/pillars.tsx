"use client";

import { useTranslations } from "next-intl";
import { PILLARS_META } from "@/lib/data";

const PILLAR_PTS = ["pt0", "pt1", "pt2"] as const;

export function Pillars() {
  const t = useTranslations("pillars");

  return (
    <section id="pillars" className="mx-auto max-w-[1200px] px-10 py-[120px]">
      <div className="reveal mb-14">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          {t("kicker")}
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          {t("heading")} <em className="text-accent">{t("headingEm")}</em>
        </h2>
        <p className="mt-6 max-w-[680px] text-[14.5px] leading-[1.85] text-body">
          {t("intro")}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {PILLARS_META.map((pillar, i) => (
          <div
            key={pillar.id}
            className="reveal flex h-full flex-col border border-border bg-surface p-8 transition-[border-color] duration-300"
            style={{
              transitionDelay: `${i * 0.1}s`,
              boxShadow: `inset 0 0 80px ${pillar.color}06`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${pillar.color}45`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[34px]">{pillar.emoji}</span>
              <span
                className="font-dm-mono text-[10px] tracking-[.2em]"
                style={{ color: `${pillar.color}80` }}
              >
                0{i + 1}
              </span>
            </div>
            <h3
              className="mb-2 font-playfair text-[24px] font-bold"
              style={{ color: pillar.color }}
            >
              {t(`${pillar.id}_title`)}
            </h3>
            <p className="mb-5 text-[13px] leading-[1.7] text-body-dim italic">
              {t(`${pillar.id}_tagline`)}
            </p>
            <ul className="mb-7 flex flex-col gap-2.5">
              {PILLAR_PTS.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-2.5 text-[13px] leading-[1.65] text-body"
                >
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0"
                    style={{ background: pillar.color }}
                  />
                  {t(`${pillar.id}_${pt}`)}
                </li>
              ))}
            </ul>
            <a
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 self-start border px-[18px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-all duration-300"
              style={{
                borderColor: `${pillar.color}50`,
                color: pillar.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${pillar.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {pillar.hrefLabel} &#8599;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
