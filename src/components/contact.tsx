"use client";

import { useState, useCallback } from "react";
import { SOCIAL_LINKS } from "@/lib/data";

const EMAIL = "pyaesonekyaw101010@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-10 py-[140px] text-center"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[700px]">
        <div className="reveal">
          <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
            07 &mdash; CONTACT
          </div>
          <h2 className="mb-5 font-playfair text-[clamp(40px,8vw,86px)] font-black leading-none">
            Let&rsquo;s Build
            <br />
            <em className="text-accent">Something.</em>
          </h2>
          <p className="mx-auto mb-13 max-w-[480px] text-[15px] leading-[1.85] text-body-dim">
            Open to AI engineering roles, founding team opportunities, and
            collaborations in CreativeAI, NLP, and AI for Social Good.
          </p>
        </div>

        <div className="reveal flex flex-col items-center gap-5">
          <button
            onClick={handleCopy}
            className="flex cursor-pointer items-center gap-3.5 border bg-transparent px-9 py-4 font-dm-mono text-[13px] tracking-[.08em] transition-all duration-300"
            style={{
              color: copied ? "#7BCC9C" : "#E6ECF5",
              borderColor: copied ? "#7BCC9C" : "rgba(230,236,245,.15)",
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent)";
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.currentTarget.style.borderColor = "rgba(230,236,245,.15)";
                e.currentTarget.style.color = "#E6ECF5";
              }
            }}
          >
            {copied ? "\u2713 COPIED" : EMAIL}
            {!copied && (
              <span className="font-dm-mono text-[8px] tracking-[.22em] text-muted">
                CLICK TO COPY
              </span>
            )}
          </button>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-mono text-[10px] tracking-[.2em] text-muted transition-colors duration-300 hover:text-accent"
              >
                {label} &#8599;
              </a>
            ))}
          </div>

          <div
            className="mt-8 h-px w-40"
            style={{
              background:
                "linear-gradient(to right,transparent,rgba(201,169,110,.5),transparent)",
            }}
          />
          <p className="font-dm-mono text-[9px] tracking-[.2em] text-muted">
            BASED IN PARIS &middot; OPEN TO REMOTE
          </p>
        </div>
      </div>
    </section>
  );
}
