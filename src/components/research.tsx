"use client";

import { useCallback, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { PAPERS_META } from "@/lib/data";

export function Research() {
  const t = useTranslations("research");

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const c = e.currentTarget;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(6px)`;
    c.style.boxShadow = `${-x * 14}px ${-y * 14}px 36px rgba(0,0,0,.4)`;
  }, []);

  const handleLeave = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    e.currentTarget.style.boxShadow = "none";
  }, []);

  return (
    <section id="research" className="mx-auto max-w-[1200px] px-10 py-[120px]">
      <div className="reveal mb-14">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          {t("label")}
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          {t("heading")} <em className="text-accent">{t("headingEm")}</em>
        </h2>
        <p className="mt-6 max-w-[680px] text-[14.5px] leading-[1.85] text-body">
          {t("intro")}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {PAPERS_META.map((paper, i) => {
          const buttons: { key: string; href: string; label: string }[] = [
            { key: "gh", href: paper.links.gh, label: t("githubBtn") },
            { key: "hf", href: paper.links.hf, label: t("hfModel") },
            {
              key: "collection",
              href: paper.links.collection,
              label: t("hfCollection"),
            },
            { key: "demo", href: paper.links.demo, label: t("demoBtn") },
          ].filter((b) => b.href !== "#");

          return (
            <div
              key={paper.id}
              className="reveal proj3d"
              style={{ transitionDelay: `${i * 0.12}s` }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div
                className="relative overflow-hidden border bg-surface px-10 py-10"
                style={{
                  borderColor: `${paper.color}35`,
                  boxShadow: `inset 0 0 80px ${paper.color}06`,
                }}
              >
                <div
                  className="absolute top-0 right-0 px-3.5 py-1.5 font-dm-mono text-[8px] tracking-[.22em]"
                  style={{ background: paper.color, color: "#06080D" }}
                >
                  {t(`${paper.id}_status`)}
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-10">
                  <div>
                    <div className="mb-4 text-[40px]">{paper.emoji}</div>
                    <h3 className="mb-1.5 font-playfair text-[30px] font-bold text-text">
                      {paper.title}
                    </h3>
                    <div
                      className="mb-4 font-dm-mono text-[10px] tracking-[.14em]"
                      style={{ color: `${paper.color}cc` }}
                    >
                      {t(`${paper.id}_venue`)}
                    </div>
                    <p className="mb-4 text-[14px] leading-[1.8] text-body">
                      {t(`${paper.id}_contribution`)}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-dm-mono text-[9px] tracking-[.1em]"
                          style={{
                            padding: "4px 11px",
                            background: `${paper.color}12`,
                            border: `1px solid ${paper.color}35`,
                            color: paper.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {buttons.map((b, bi) => (
                        <a
                          key={b.key}
                          href={b.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border px-[20px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-all duration-300"
                          style={{
                            borderColor: `${paper.color}50`,
                            background: bi === 0 ? paper.color : "transparent",
                            color: bi === 0 ? "#06080D" : paper.color,
                          }}
                          onMouseEnter={(e) => {
                            if (bi === 0) {
                              e.currentTarget.style.opacity = "0.85";
                            } else {
                              e.currentTarget.style.background = `${paper.color}12`;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (bi === 0) {
                              e.currentTarget.style.opacity = "1";
                            } else {
                              e.currentTarget.style.background = "transparent";
                            }
                          }}
                        >
                          {b.label} &#8599;
                        </a>
                      ))}
                      <span
                        className="border border-dashed px-[20px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] text-muted"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        {t("paperSoon")}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex h-full flex-col justify-center gap-4 p-7"
                    style={{
                      background: `${paper.color}08`,
                      border: `1px solid ${paper.color}18`,
                    }}
                  >
                    <div
                      className="font-dm-mono text-[9px] tracking-[.22em]"
                      style={{ color: `${paper.color}80` }}
                    >
                      {t("headline")}
                    </div>
                    <p className="text-[15px] leading-[1.7] text-body">
                      {t(`${paper.id}_metrics`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reveal mt-9">
        <a
          href="https://github.com/soneeee22000"
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm-mono text-[10px] tracking-[.18em] text-muted transition-colors duration-300 hover:text-accent"
        >
          {t("moreOnGithub")} &#8599;
        </a>
      </div>
    </section>
  );
}
