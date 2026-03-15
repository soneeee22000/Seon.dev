"use client";

import { useCallback, type MouseEvent } from "react";
import { HACKATHONS } from "@/lib/data";
import type { Hackathon } from "@/types/portfolio";

/** Status badge config by hackathon status. */
const STATUS_CONFIG: Record<
  Hackathon["status"],
  { label: string; dotClass: string }
> = {
  in_progress: { label: "IN PROGRESS", dotClass: "animate-pulse bg-green" },
  completed: { label: "COMPLETED", dotClass: "bg-blue" },
  won: { label: "WINNER", dotClass: "bg-accent" },
};

/**
 * Hackathons section — showcases hackathon participation with
 * status badges, organizer credibility, and 3D tilt cards.
 */
export function Hackathons() {
  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const c = e.currentTarget;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    c.style.boxShadow = `${-x * 18}px ${-y * 18}px 40px rgba(0,0,0,.45)`;
  }, []);

  const handleLeave = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    e.currentTarget.style.boxShadow = "none";
  }, []);

  return (
    <section
      id="hackathons"
      className="mx-auto max-w-[1200px] px-10 py-[120px]"
    >
      <div className="reveal mb-16">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          04 &mdash; HACKATHONS
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          Compete &amp; <em className="text-accent">Ship</em>
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {HACKATHONS.map((h, i) => {
          const { label, dotClass } = STATUS_CONFIG[h.status];

          return (
            <div
              key={h.id}
              className="reveal proj3d"
              style={{ transitionDelay: `${i * 0.12}s` }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div
                className="relative overflow-hidden border bg-surface px-10 py-11"
                style={{
                  borderColor: `${h.color}35`,
                  boxShadow: `inset 0 0 80px ${h.color}06`,
                }}
              >
                {/* Status badge */}
                <div
                  className="absolute top-0 left-0 flex items-center gap-2 px-3.5 py-1.5 font-dm-mono text-[8px] tracking-[.25em]"
                  style={{ background: `${h.color}18` }}
                >
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`}
                  />
                  <span style={{ color: h.color }}>{label}</span>
                </div>

                {/* Organizer badge */}
                <div
                  className="absolute top-0 right-0 px-3.5 py-1.5 font-dm-mono text-[8px] tracking-[.25em]"
                  style={{ background: h.color, color: "#06080D" }}
                >
                  {h.organizer}
                </div>

                <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-11">
                  <div>
                    <div className="mb-4 text-[44px]">{h.emoji}</div>
                    <h3 className="mb-2 font-playfair text-[34px] font-bold text-text">
                      {h.title}
                    </h3>
                    <p className="mb-1 font-dm-mono text-[10px] tracking-[.12em] text-muted">
                      {h.event} &middot; {h.date}
                    </p>
                    {h.prize && (
                      <p
                        className="mb-4 font-dm-mono text-[11px] font-bold tracking-[.15em]"
                        style={{ color: h.color }}
                      >
                        {h.prize}
                      </p>
                    )}
                    <p className="mb-6 text-[14px] leading-[1.8] text-body">
                      {h.desc}
                    </p>
                    <div className="mb-7 flex flex-wrap gap-2">
                      {h.tags.map((t) => (
                        <span
                          key={t}
                          className="font-dm-mono text-[9px] tracking-[.1em]"
                          style={{
                            padding: "4px 11px",
                            background: `${h.color}12`,
                            border: `1px solid ${h.color}35`,
                            color: h.color,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3.5">
                      {h.demo && (
                        <a
                          href={h.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-[22px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-colors duration-300"
                          style={{ background: h.color, color: "#06080D" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.85";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                          }}
                        >
                          LIVE DEMO &#8599;
                        </a>
                      )}
                      <a
                        href={h.gh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-[22px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-all duration-300"
                        style={{
                          borderColor: `${h.color}50`,
                          color: h.color,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${h.color}12`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        GITHUB &#8599;
                      </a>
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div
                    className="flex flex-col items-center justify-center gap-3"
                    style={{
                      aspectRatio: "16/9",
                      background: `${h.color}08`,
                      border: `1px solid ${h.color}18`,
                    }}
                  >
                    <div
                      className="text-[72px] opacity-50"
                      style={{ animation: "float 4s ease-in-out infinite" }}
                    >
                      {h.emoji}
                    </div>
                    <div
                      className="font-dm-mono text-[9px] tracking-[.22em]"
                      style={{ color: `${h.color}70` }}
                    >
                      {h.status === "in_progress"
                        ? "CURRENTLY COMPETING"
                        : "HACKATHON PROJECT"}{" "}
                      &#8599;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
