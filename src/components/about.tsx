"use client";

import Image from "next/image";
import { SKILLS, STATS, ABOUT_PARAGRAPHS, ABOUT_QUOTE } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-10 py-[120px]">
      <div className="reveal mb-16">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          01 &mdash; ABOUT
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          Building at the intersection of
          <br />
          <em className="text-accent">AI and Human Experience</em>
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-16">
        {/* Left — Photo + Stats */}
        <div className="rl">
          <div
            className="relative max-w-[360px] overflow-hidden border border-border bg-surface"
            style={{
              aspectRatio: "3/4",
              animation: "borderPulse 4s ease infinite",
            }}
          >
            <Image
              src="/images/seon.jpg"
              alt="Pyae Sone Kyaw"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback =
                  target.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="hidden h-full w-full items-center justify-center"
              style={{
                background: "linear-gradient(135deg,#111820,#1a2535)",
              }}
            >
              <span className="font-playfair text-[96px] font-black text-accent/20">
                PSK
              </span>
            </div>
            {/* Corner marks */}
            <div className="absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-accent" />
            <div className="absolute right-3 bottom-3 h-5 w-5 border-r-2 border-b-2 border-accent" />
          </div>

          <div className="mt-5 grid max-w-[360px] grid-cols-2 gap-3">
            {STATS.map(([num, label]) => (
              <div
                key={label}
                className="border border-border bg-surface p-4 transition-[border-color] duration-300 hover:border-accent/40"
              >
                <div className="font-playfair text-[30px] font-bold text-accent">
                  {num}
                </div>
                <div className="mt-1 font-dm-mono text-[9px] tracking-[.1em] text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Bio + Marquee */}
        <div className="rr pt-2">
          <p className="mb-8 border-l-2 border-accent pl-5 font-playfair text-[20px] leading-[1.65] italic text-body">
            &ldquo;{ABOUT_QUOTE}&rdquo;
          </p>

          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              className="mb-[18px] text-[14.5px] leading-[1.85] text-body"
            >
              {p}
            </p>
          ))}

          <div className="mt-9">
            <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.28em] text-muted">
              TECH STACK
            </div>
            <div
              className="overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
              }}
            >
              <div
                className="flex w-max gap-4"
                style={{ animation: "marquee 22s linear infinite" }}
              >
                {[...SKILLS, ...SKILLS].map((s, i) => (
                  <div
                    key={i}
                    className="flex shrink-0 items-center gap-2 border border-border bg-surface px-3.5 py-[7px] whitespace-nowrap"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.logo}
                      alt={s.name}
                      width={16}
                      height={16}
                      loading="lazy"
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="font-dm-mono text-[10px] tracking-[.08em] text-body">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
