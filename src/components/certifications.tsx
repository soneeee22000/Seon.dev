"use client";

import { CERTS } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="bg-bg2 px-10 py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mb-16">
          <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
            06 &mdash; CERTIFICATIONS
          </div>
          <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
            Proof of <em className="text-accent">Commitment</em>
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {CERTS.map((c, i) => (
            <div
              key={i}
              className="reveal cert-shimmer"
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="block border border-border bg-surface p-8 transition-all duration-350"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${c.color}50`;
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 20px 48px ${c.color}14`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <span className="text-[36px]">{c.emoji}</span>
                    <div
                      className="font-dm-mono text-[8px] tracking-[.18em]"
                      style={{
                        color: c.color,
                        padding: "4px 9px",
                        border: `1px solid ${c.color}40`,
                      }}
                    >
                      VERIFIED &#8599;
                    </div>
                  </div>
                  <h3 className="mb-2 font-playfair text-[17px] font-bold leading-[1.3] text-text">
                    {c.title}
                  </h3>
                  <div
                    className="mb-1 font-dm-mono text-[11px]"
                    style={{ color: c.color }}
                  >
                    {c.issuer}
                  </div>
                  <div className="font-dm-mono text-[10px] text-muted">
                    {c.by}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
