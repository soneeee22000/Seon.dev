"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { GREETINGS, SOCIAL_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/hooks";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  op: number;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [greetIdx, setGreetIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setGreetIdx((i) => (i + 1) % GREETINGS.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mx = 0;
    let my = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts: Particle[] = Array.from({ length: 75 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
      op: Math.random() * 0.45 + 0.08,
    }));

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          p.vx -= (dx / d) * 0.07;
          p.vy -= (dy / d) * 0.07;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        }
        if (p.x > canvas.width) {
          p.x = canvas.width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        }
        if (p.y > canvas.height) {
          p.y = canvas.height;
          p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.op})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 105) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(201,169,110,${(1 - d / 105) * 0.11})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

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
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Radial ambient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,169,110,.04) 0%, transparent 65%)",
        }}
      />
      {/* Scan line */}
      <div
        className="pointer-events-none absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,.18), transparent)",
          animation: "scanline 7s linear infinite",
        }}
      />

      <div className="relative z-2 max-w-[1000px] px-6 text-center">
        {/* Greeting */}
        <div
          className="mb-7 h-[22px] font-dm-mono text-[13px] tracking-[.35em] text-accent transition-all duration-350"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-8px)",
          }}
        >
          {GREETINGS[greetIdx]}
        </div>

        {/* Name with glitch */}
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
          FOUNDING AI ENGINEER &middot; STATION F &middot; PARIS
        </div>
        <div
          className="mb-13 font-dm-mono text-[clamp(10px,1.4vw,12px)] tracking-[.18em] text-accent"
          style={{ animation: "fadeUp 1s ease .6s both" }}
        >
          CreativeAI &nbsp;&middot;&nbsp; NLP &nbsp;&middot;&nbsp; Full-Stack AI
          Systems
        </div>

        <div
          className="flex flex-wrap justify-center gap-3.5"
          style={{ animation: "fadeUp 1s ease .8s both" }}
        >
          <button
            onClick={() => handleCta("projects")}
            className="cursor-pointer border border-accent bg-accent px-[30px] py-[13px] font-dm-mono text-[10px] tracking-[.2em] text-bg transition-all duration-300 hover:bg-accent-light"
          >
            VIEW WORK &#8595;
          </button>
          <button
            onClick={() => handleCta("contact")}
            className="cursor-pointer border border-text/[.22] bg-transparent px-[30px] py-[13px] font-dm-mono text-[10px] tracking-[.2em] text-text transition-all duration-300 hover:border-accent hover:bg-accent/[.08] hover:text-accent"
          >
            GET IN TOUCH &#8594;
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

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
        style={{ animation: "fadeIn 1.5s ease 1.5s both" }}
      >
        <span className="font-dm-mono text-[8px] tracking-[.3em] text-muted">
          SCROLL
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
