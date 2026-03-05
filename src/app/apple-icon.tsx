import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon — The Crowned S at 180x180.
 * Full detail with refined crown strokes and subtle glow.
 */
export default async function AppleIcon() {
  const playfairFont = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "180px",
        height: "180px",
        background: "#06080d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "24px",
      }}
    >
      {/* Subtle outer glow ring */}
      <div
        style={{
          position: "absolute",
          width: "160px",
          height: "160px",
          borderRadius: "20px",
          border: "1px solid rgba(201, 169, 110, 0.15)",
          display: "flex",
        }}
      />

      {/* Crown chevron — three elegant lines */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          marginBottom: "-4px",
        }}
      >
        <div
          style={{
            width: "2px",
            height: "24px",
            background: "#E8C88A",
            transform: "rotate(-25deg)",
            borderRadius: "1px",
          }}
        />
        <div
          style={{
            width: "2px",
            height: "24px",
            background: "#E8C88A",
            borderRadius: "1px",
          }}
        />
        <div
          style={{
            width: "2px",
            height: "24px",
            background: "#E8C88A",
            transform: "rotate(25deg)",
            borderRadius: "1px",
          }}
        />
      </div>

      {/* S letterform with gold gradient */}
      <div
        style={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          fontSize: "110px",
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
