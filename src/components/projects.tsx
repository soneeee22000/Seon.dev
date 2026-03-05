"use client";

import { useCallback, type MouseEvent } from "react";
import { PROJECTS } from "@/lib/data";

export function Projects() {
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

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-10 py-[120px]">
      <div className="reveal mb-16">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          03 &mdash; PROJECTS
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          Things I&rsquo;ve <em className="text-accent">Built</em>
        </h2>
      </div>

      {/* Featured Projects */}
      <div className="flex flex-col gap-5 mb-5">
        {featuredProjects.map((featured, fi) => (
          <div
            key={featured.id}
            className="reveal proj3d"
            style={{ transitionDelay: `${fi * 0.12}s` }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div
              className="relative overflow-hidden border bg-surface px-10 py-11"
              style={{
                borderColor: `${featured.color}35`,
                boxShadow: `inset 0 0 80px ${featured.color}06`,
              }}
            >
              <div
                className="absolute top-0 right-0 px-3.5 py-1.5 font-dm-mono text-[8px] tracking-[.25em]"
                style={{ background: featured.color, color: "#06080D" }}
              >
                FEATURED
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-11">
                <div>
                  <div className="mb-4 text-[44px]">{featured.emoji}</div>
                  <h3 className="mb-3.5 font-playfair text-[34px] font-bold text-text">
                    {featured.title}
                  </h3>
                  <p className="mb-6 text-[14px] leading-[1.8] text-body">
                    {featured.desc}
                  </p>
                  <div className="mb-7 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="font-dm-mono text-[9px] tracking-[.1em]"
                        style={{
                          padding: "4px 11px",
                          background: `${featured.color}12`,
                          border: `1px solid ${featured.color}35`,
                          color: featured.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-[22px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-colors duration-300"
                      style={{
                        background: featured.color,
                        color: "#06080D",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.85";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      LIVE DEMO &#8599;
                    </a>
                    <a
                      href={featured.gh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-[22px] py-2.5 font-dm-mono text-[9px] tracking-[.18em] transition-all duration-300"
                      style={{
                        borderColor: `${featured.color}50`,
                        color: featured.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${featured.color}12`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      GITHUB &#8599;
                    </a>
                  </div>
                </div>
                <div
                  className="flex flex-col items-center justify-center gap-3"
                  style={{
                    aspectRatio: "16/9",
                    background: `${featured.color}08`,
                    border: `1px solid ${featured.color}18`,
                  }}
                >
                  <div
                    className="text-[72px] opacity-50"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  >
                    {featured.emoji}
                  </div>
                  <div
                    className="font-dm-mono text-[9px] tracking-[.22em]"
                    style={{ color: `${featured.color}70` }}
                  >
                    LIVE AT VERCEL &#8599;
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {rest.map((p, i) => (
          <div
            key={p.id}
            className="reveal proj3d"
            style={{ transitionDelay: `${i * 0.09}s` }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div
              className="h-full border border-border bg-surface p-7 transition-[border-color] duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-[30px]">{p.emoji}</span>
                <div className="flex gap-2.5">
                  {p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-dm-mono text-[9px] tracking-[.1em] text-muted transition-colors duration-300 hover:text-accent"
                    >
                      DEMO &#8599;
                    </a>
                  )}
                  <a
                    href={p.gh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm-mono text-[9px] tracking-[.1em] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    GH &#8599;
                  </a>
                </div>
              </div>
              <h3 className="mb-2 font-playfair text-[19px] font-bold text-text">
                {p.title}
              </h3>
              <p className="mb-4 text-[13px] leading-[1.75] text-body-dim">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-dm-mono text-[9px]"
                    style={{
                      padding: "3px 8px",
                      background: `${p.color}10`,
                      border: `1px solid ${p.color}28`,
                      color: p.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
