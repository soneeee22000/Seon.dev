"use client";

interface LogoProps {
  /** Size in pixels (default 24) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * The Crowned S — premium personal logo mark.
 * Bold serif S with a minimal three-line crown chevron above.
 */
export function Logo({ size = 24, className = "" }: LogoProps) {
  const id = `logo-grad-${size}`;
  const crownY = size * 0.18;
  const crownSpread = size * 0.18;
  const crownCenter = size / 2;
  const strokeWidth = size < 28 ? 1.2 : 1.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pyae Sone Kyaw logo"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C88A" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
      </defs>

      {/* Crown chevron — three angled lines */}
      <line
        x1={crownCenter}
        y1={crownY - size * 0.06}
        x2={crownCenter}
        y2={crownY + size * 0.06}
        stroke="#E8C88A"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1={crownCenter - crownSpread}
        y1={crownY + size * 0.06}
        x2={crownCenter - crownSpread * 0.45}
        y2={crownY - size * 0.06}
        stroke="#E8C88A"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1={crownCenter + crownSpread}
        y1={crownY + size * 0.06}
        x2={crownCenter + crownSpread * 0.45}
        y2={crownY - size * 0.06}
        stroke="#E8C88A"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Bold serif S */}
      <text
        x="50%"
        y="66%"
        dominantBaseline="central"
        textAnchor="middle"
        fill={`url(#${id})`}
        fontFamily="var(--font-playfair-display), 'Playfair Display', serif"
        fontWeight="700"
        fontSize={size * 0.55}
        letterSpacing=".02em"
      >
        S
      </text>
    </svg>
  );
}
