"use client";

import { useTranslations } from "next-intl";
import { EXP_META } from "@/lib/data";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="bg-bg2 px-10 py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mb-16">
          <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
            {t("label")}
          </div>
          <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
            {t("heading")} <em className="text-accent">{t("headingEm")}</em>
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute top-6 bottom-6 left-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent), rgba(201,169,110,.08))",
              animation: "lineGrow 1.5s ease .3s both",
            }}
          />

          <div className="flex flex-col gap-12 pl-11">
            {EXP_META.map((ex, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ transitionDelay: `${i * 0.18}s` }}
              >
                <div
                  className="absolute -left-[52px] top-[22px] h-3.5 w-3.5 rounded-full bg-bg2"
                  style={{
                    border: `2px solid ${ex.color}`,
                    animation: "glow 3s ease-in-out infinite",
                  }}
                />

                <div
                  className="border border-border bg-surface px-9 py-8 transition-[border-color,box-shadow] duration-350"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${ex.color}50`;
                    e.currentTarget.style.boxShadow = `0 12px 48px ${ex.color}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="mb-1.5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-1.5 font-playfair text-[22px] font-bold text-text">
                        {t(`${i}_job`)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-dm-mono text-[11px] tracking-[.04em] transition-opacity duration-200 hover:opacity-70"
                          style={{ color: ex.color }}
                        >
                          {ex.company} &#8599;
                        </a>
                        <span
                          className="font-dm-mono text-[9px] tracking-[.12em]"
                          style={{
                            padding: "3px 10px",
                            border: `1px solid ${ex.color}40`,
                            color: ex.color,
                          }}
                        >
                          {t(`${i}_badge`)}
                        </span>
                      </div>
                    </div>
                    <span className="pt-1 font-dm-mono text-[9px] tracking-[.12em] text-muted whitespace-nowrap">
                      {t(`${i}_date`)}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5">
                    {Array.from({ length: ex.ptCount }, (_, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span
                          className="mt-[5px] shrink-0 text-[10px]"
                          style={{ color: ex.color }}
                        >
                          &#9670;
                        </span>
                        <p className="text-[14px] leading-[1.75] text-body">
                          {t(`${i}_pt${j}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
