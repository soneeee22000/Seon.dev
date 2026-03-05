"use client";

import { EDUCATION, JOURNEY } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1200px] px-10 py-[120px]">
      <div className="reveal mb-16">
        <div className="mb-3.5 font-dm-mono text-[9px] tracking-[.35em] text-accent">
          05 &mdash; EDUCATION
        </div>
        <h2 className="font-playfair text-[clamp(32px,6vw,62px)] font-bold leading-[1.1]">
          Asia <span className="text-muted">&rarr;</span> Europe.
          <br />
          <em className="text-accent">The Journey Shapes the Engineer</em>
        </h2>
      </div>

      {/* Journey banner */}
      <div className="reveal relative mb-12 overflow-hidden border border-border bg-surface px-10 py-9">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(123,156,204,.04), rgba(201,169,110,.04))",
          }}
        />
        <div className="relative flex flex-wrap items-center justify-around gap-6">
          {JOURNEY.map((item, i) =>
            item.arrow ? (
              <div
                key={i}
                className="text-[20px] opacity-60"
                style={{ color: item.color }}
              >
                {item.flag}
              </div>
            ) : (
              <div key={i} className="text-center">
                <div className="mb-1.5 text-[28px]">{item.flag}</div>
                <div
                  className="mb-[3px] font-dm-mono text-[9px] tracking-[.12em]"
                  style={{ color: item.color }}
                >
                  {item.date}
                </div>
                <div className="mb-[2px] font-playfair text-[15px] text-text">
                  {item.city}
                </div>
                <div className="max-w-[120px] font-dm-mono text-[9px] text-muted">
                  {item.label}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
        {EDUCATION.map((ed, i) => (
          <div
            key={i}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div
              className="relative h-full overflow-hidden border border-border bg-surface p-7 transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${ed.color}50`;
                e.currentTarget.style.boxShadow = `0 8px 32px ${ed.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 right-0 left-0 h-0.5"
                style={{ background: ed.color }}
              />
              <div className="mb-3.5 text-[24px]">{ed.flag}</div>
              <div
                className="mb-1.5 font-dm-mono text-[9px] tracking-[.15em]"
                style={{ color: ed.color }}
              >
                {ed.date}
              </div>
              <h3 className="mb-1.5 font-playfair text-[15px] font-bold leading-[1.35] text-text">
                {ed.degree}
              </h3>
              <div
                className="mb-[3px] font-dm-mono text-[11px]"
                style={{ color: ed.color }}
              >
                {ed.school}
              </div>
              <div className="mb-[18px] font-dm-mono text-[10px] text-muted">
                {ed.loc}
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="mb-[2px] font-dm-mono text-[8px] tracking-[.15em] text-muted">
                    GPA
                  </div>
                  <div
                    className="font-playfair text-[22px] font-bold"
                    style={{ color: ed.color }}
                  >
                    {ed.gpa}
                  </div>
                </div>
                <div className="max-w-[110px] text-right font-dm-mono text-[9px] leading-[1.4] text-muted">
                  {ed.note}
                </div>
              </div>

              {ed.asterisk && (
                <div className="mt-3 border-t border-border pt-2.5 font-dm-mono text-[9px] leading-[1.5] text-muted">
                  {ed.asterisk}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
