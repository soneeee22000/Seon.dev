"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { GREETINGS, SOCIAL_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/hooks";

const DESKTOP_NODES = [
  { x: 0.06, y: 0.15, r: 2.5 },
  { x: 0.04, y: 0.4, r: 3 },
  { x: 0.1, y: 0.65, r: 2.5 },
  { x: 0.06, y: 0.88, r: 2 },
  { x: 0.42, y: 0.08, r: 3 },
  { x: 0.48, y: 0.28, r: 2.5 },
  { x: 0.4, y: 0.46, r: 3.5 },
  { x: 0.52, y: 0.62, r: 2.5 },
  { x: 0.45, y: 0.78, r: 3 },
  { x: 0.5, y: 0.94, r: 2 },
  { x: 0.88, y: 0.14, r: 2.5 },
  { x: 0.92, y: 0.36, r: 3 },
  { x: 0.86, y: 0.55, r: 2.5 },
  { x: 0.94, y: 0.74, r: 3 },
  { x: 0.9, y: 0.92, r: 2 },
];

const DESKTOP_EDGES: [number, number][] = [
  [0, 4],
  [0, 5],
  [0, 6],
  [1, 5],
  [1, 6],
  [1, 7],
  [2, 6],
  [2, 7],
  [2, 8],
  [3, 7],
  [3, 8],
  [3, 9],
  [4, 10],
  [4, 11],
  [5, 10],
  [5, 11],
  [6, 11],
  [6, 12],
  [7, 12],
  [7, 13],
  [8, 13],
  [8, 14],
  [9, 13],
  [9, 14],
];

const MOBILE_NODES = [
  { x: 0.08, y: 0.18, r: 2 },
  { x: 0.05, y: 0.44, r: 2.5 },
  { x: 0.1, y: 0.68, r: 2 },
  { x: 0.06, y: 0.88, r: 1.5 },
  { x: 0.9, y: 0.22, r: 2.5 },
  { x: 0.94, y: 0.48, r: 2 },
  { x: 0.88, y: 0.7, r: 2 },
  { x: 0.92, y: 0.9, r: 1.5 },
];

const MOBILE_EDGES: [number, number][] = [
  [0, 4],
  [0, 5],
  [1, 5],
  [1, 6],
  [2, 5],
  [2, 6],
  [3, 6],
  [3, 7],
];

const PULSE_COUNT = 8;
const ACCENT = "201,169,110";

interface Pulse {
  edge: number;
  t: number;
  speed: number;
}

function bezier(
  ax: number,
  ay: number,
  c1x: number,
  c1y: number,
  c2x: number,
  c2y: number,
  bx: number,
  by: number,
  t: number,
): [number, number] {
  const m = 1 - t;
  const m2 = m * m;
  const m3 = m2 * m;
  const t2 = t * t;
  const t3 = t2 * t;
  return [
    m3 * ax + 3 * m2 * t * c1x + 3 * m * t2 * c2x + t3 * bx,
    m3 * ay + 3 * m2 * t * c1y + 3 * m * t2 * c2y + t3 * by,
  ];
}

export function Hero() {
  const t = useTranslations("hero");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const greetingIndex = useRef(0);
  const [greeting, setGreeting] = useState(GREETINGS[0]);

  useEffect(() => {
    greetingIndex.current = Math.floor(Math.random() * GREETINGS.length);
    const interval = setInterval(() => {
      greetingIndex.current = (greetingIndex.current + 1) % GREETINGS.length;
      setGreeting(GREETINGS[greetingIndex.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mx = -1000;
    let my = -1000;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mobile = canvas.width < 768;
    const nodes = mobile ? MOBILE_NODES : DESKTOP_NODES;
    const edges = mobile ? MOBILE_EDGES : DESKTOP_EDGES;

    const pulses: Pulse[] = Array.from({ length: PULSE_COUNT }, () => ({
      edge: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
    }));

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const draw = (time: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const sec = time * 0.001;

      const pos = nodes.map((n, i) => {
        const ph = i * 0.7;
        return {
          x: n.x * w + Math.sin(sec * 0.3 + ph) * 8,
          y: n.y * h + Math.cos(sec * 0.25 + ph * 1.3) * 6,
          r: n.r,
        };
      });

      for (const [from, to] of edges) {
        const a = pos[from];
        const b = pos[to];
        const c1x = a.x + (b.x - a.x) * 0.4;
        const c2x = a.x + (b.x - a.x) * 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.bezierCurveTo(c1x, a.y, c2x, b.y, b.x, b.y);
        ctx.strokeStyle = `rgba(${ACCENT},0.08)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (const pulse of pulses) {
        const [from, to] = edges[pulse.edge];
        const a = pos[from];
        const b = pos[to];
        const c1x = a.x + (b.x - a.x) * 0.4;
        const c2x = a.x + (b.x - a.x) * 0.6;
        const [px, py] = bezier(
          a.x,
          a.y,
          c1x,
          a.y,
          c2x,
          b.y,
          b.x,
          b.y,
          pulse.t,
        );

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, `rgba(${ACCENT},0.4)`);
        grad.addColorStop(1, `rgba(${ACCENT},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232,200,138,0.9)";
        ctx.fill();

        pulse.t += pulse.speed;
        if (pulse.t > 1) {
          pulse.t = 0;
          pulse.edge = Math.floor(Math.random() * edges.length);
          pulse.speed = 0.002 + Math.random() * 0.003;
        }
      }

      for (let i = 0; i < pos.length; i++) {
        const n = pos[i];
        const breathe = 0.3 + Math.sin(sec * 0.8 + i * 0.5) * 0.15;
        const dx = mx - n.x;
        const dy = my - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 200) * 0.4;
        const op = breathe + proximity;

        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        halo.addColorStop(0, `rgba(${ACCENT},${(op * 0.25).toFixed(2)})`);
        halo.addColorStop(1, `rgba(${ACCENT},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT},${op.toFixed(2)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleCta = useCallback((id: string) => scrollToSection(id), []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Neural network visualization"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(201,169,110,.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(123,156,204,.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,.18), transparent)",
          animation: "scanline 7s linear infinite",
        }}
      />

      <div className="relative z-2 max-w-[1000px] px-6 text-center">
        <div
          className="mb-7 h-[22px] font-dm-mono text-[13px] tracking-[.35em] text-accent"
          style={{ animation: "fadeIn 1s ease .1s both" }}
          suppressHydrationWarning
        >
          {greeting}
        </div>

        <div className="relative mb-5">
          <h1
            className="font-playfair text-[clamp(44px,9vw,96px)] font-black leading-none tracking-[-0.02em] text-text"
            style={{ animation: "fadeUp 1s ease .2s both" }}
          >
            Pyae Sone Kyaw
          </h1>
          <h1
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 font-playfair text-[clamp(44px,9vw,96px)] font-black leading-none tracking-[-0.02em] text-accent mix-blend-screen"
            style={{ animation: "g1 6s ease-in-out 2s infinite" }}
          >
            Pyae Sone Kyaw
          </h1>
          <h1
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 font-playfair text-[clamp(44px,9vw,96px)] font-black leading-none tracking-[-0.02em] text-blue mix-blend-screen"
            style={{ animation: "g2 6s ease-in-out 2s infinite" }}
          >
            Pyae Sone Kyaw
          </h1>
        </div>

        <div
          className="mb-2 font-dm-mono text-[clamp(10px,1.6vw,14px)] tracking-[.22em] text-muted"
          style={{ animation: "fadeUp 1s ease .45s both" }}
        >
          {t("subtitle")}
        </div>
        <div
          className="mb-13 font-dm-mono text-[clamp(10px,1.4vw,12px)] tracking-[.18em] text-accent"
          style={{ animation: "fadeUp 1s ease .6s both" }}
        >
          {t("specialties")}
        </div>

        <div
          className="flex flex-wrap justify-center gap-3.5"
          style={{ animation: "fadeUp 1s ease .8s both" }}
        >
          <button
            onClick={() => handleCta("projects")}
            className="cursor-pointer border border-accent bg-accent px-[30px] py-[13px] font-dm-mono text-[10px] tracking-[.2em] text-bg transition-all duration-300 hover:bg-accent-light"
          >
            {t("viewWork")} &#8595;
          </button>
          <button
            onClick={() => handleCta("contact")}
            className="cursor-pointer border border-text/[.22] bg-transparent px-[30px] py-[13px] font-dm-mono text-[10px] tracking-[.2em] text-text transition-all duration-300 hover:border-accent hover:bg-accent/[.08] hover:text-accent"
          >
            {t("getInTouch")} &#8594;
          </button>
        </div>

        <div
          className="mt-11 flex justify-center gap-7"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          {SOCIAL_LINKS.map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-mono text-[10px] tracking-[.15em] text-muted transition-colors duration-300 hover:text-accent"
            >
              {label} &#8599;
            </a>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
        style={{ animation: "fadeIn 1.5s ease 1.5s both" }}
      >
        <span className="font-dm-mono text-[8px] tracking-[.3em] text-muted">
          {t("scroll")}
        </span>
        <div className="flex h-[34px] w-5 items-start justify-center rounded-[10px] border border-accent/30 pt-[5px]">
          <div
            className="h-1 w-1 rounded-full bg-accent"
            style={{ animation: "scrollDot 1.8s ease infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
