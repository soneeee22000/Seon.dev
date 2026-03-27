"use client";

import { useTranslations } from "next-intl";
import { SKILLS, CAT_COLORS, ALSO_FLUENT_IN } from "@/lib/data";

interface OrbitalRing {
  skills: typeof SKILLS;
  r: number;
  dur: number;
}

const ORBITAL_SKILLS = SKILLS.filter((s) =>
  [
    "PyTorch",
    "Python",
    "React",
    "Node.js",
    "Azure",
    "Docker",
    "PostgreSQL",
    "LangChain",
    "Pandas",
    "Next.js",
  ].includes(s.name),
);

const RINGS: OrbitalRing[] = [
  { skills: ORBITAL_SKILLS.slice(0, 4), r: 108, dur: 22 },
  { skills: ORBITAL_SKILLS.slice(4, 7), r: 156, dur: 30 },
  { skills: ORBITAL_SKILLS.slice(7, 10), r: 204, dur: 40 },
];

const RING_COLORS = ["#C9A96E", "#7B9CCC", "#9C7BCC"];

export function Skills() {
  const t = useTranslations("skills");

  const byCat = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, s) => {
    (acc[s.cat] = acc[s.cat] || []).push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="bg-bg2 px-10 py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mb-16">
          <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
            {t("label")}
          </div>
          <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
            {t("heading")} <em className="text-accent">{t("headingEm")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-20">
          <div className="rl flex items-center justify-center">
            <svg
              width="440"
              height="440"
              viewBox="0 0 440 440"
              className="overflow-visible"
              role="img"
              aria-label="Skills orbital diagram"
            >
              {RINGS.map((ring) => (
                <circle
                  key={ring.r}
                  cx="220"
                  cy="220"
                  r={ring.r}
                  fill="none"
                  stroke="rgba(201,169,110,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
              ))}
              <circle cx="220" cy="220" r="38" fill="url(#coreGrad)" />
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#E8C88A" />
                  <stop offset="100%" stopColor="#8A6030" />
                </radialGradient>
              </defs>
              <text
                x="220"
                y="226"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 900,
                  fill: "#06080D",
                  fontSize: "20px",
                }}
              >
                AI
              </text>
              <circle
                cx="220"
                cy="220"
                r="38"
                fill="none"
                stroke="rgba(201,169,110,.5)"
                strokeWidth="1"
                style={{ animation: "glow 3s ease-in-out infinite" }}
              />

              {RINGS.map((ring, ri) => {
                const color = RING_COLORS[ri];
                return (
                  <g
                    key={ri}
                    style={{
                      transformOrigin: "220px 220px",
                      animation: `spin ${ring.dur}s linear infinite`,
                    }}
                  >
                    {ring.skills.map((skill, si) => {
                      const angle =
                        (si / ring.skills.length) * 2 * Math.PI - Math.PI / 2;
                      const sx = 220 + ring.r * Math.cos(angle);
                      const sy = 220 + ring.r * Math.sin(angle);
                      return (
                        <g
                          key={skill.name}
                          style={{
                            transformOrigin: `${sx}px ${sy}px`,
                            animation: `cspin ${ring.dur}s linear infinite`,
                          }}
                        >
                          <circle
                            cx={sx}
                            cy={sy}
                            r="22"
                            fill="#101620"
                            stroke={color}
                            strokeWidth="1"
                            style={{ opacity: 0.85 }}
                          />
                          <image
                            href={skill.logo}
                            x={sx - 11}
                            y={sy - 11}
                            width="22"
                            height="22"
                            style={{ opacity: 0.9 }}
                          />
                          <title>{skill.name}</title>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="rr flex flex-col gap-5">
            {Object.entries(byCat).map(([cat, items]) => {
              const cc = CAT_COLORS[cat] || "var(--color-accent)";
              return (
                <div key={cat}>
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <div
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: cc }}
                    />
                    <span className="font-dm-mono text-[9px] tracking-[.25em] text-muted">
                      {cat.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <div
                        key={s.name}
                        className="flex cursor-default items-center gap-1.5 bg-surface px-3 py-1.5 transition-all duration-300"
                        style={{ border: `1px solid ${cc}28` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = cc;
                          e.currentTarget.style.background = `${cc}0E`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${cc}28`;
                          e.currentTarget.style.background =
                            "var(--color-surface)";
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.logo}
                          alt={s.name}
                          width={13}
                          height={13}
                          loading="lazy"
                          className="object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <span className="font-dm-mono text-[10px] text-[#A0B0C4]">
                          {s.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="mt-2 border border-border bg-surface px-5 py-[18px]">
              <div className="mb-2 font-dm-mono text-[8px] tracking-[.25em] text-accent">
                {t("alsoFluentIn")}
              </div>
              <p className="text-[12px] leading-[1.8] text-body-dim">
                {ALSO_FLUENT_IN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
