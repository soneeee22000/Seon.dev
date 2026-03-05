import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Dynamic favicon — The Crowned S at 32x32.
 * Uses Next.js ImageResponse (Satori) for server-side rendering.
 */
export default async function Icon() {
  const playfairFont = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "32px",
        height: "32px",
        background: "#06080d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
      }}
    >
      {/* Crown chevron */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "2px",
          marginBottom: "-2px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "5px",
            background: "#E8C88A",
            transform: "rotate(-25deg)",
          }}
        />
        <div
          style={{
            width: "1px",
            height: "5px",
            background: "#E8C88A",
          }}
        />
        <div
          style={{
            width: "1px",
            height: "5px",
            background: "#E8C88A",
            transform: "rotate(25deg)",
          }}
        />
      </div>

      {/* S letterform */}
      <div
        style={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: 1,
          background: "linear-gradient(180deg, #E8C88A 0%, #C9A96E 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        S
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairFont,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
