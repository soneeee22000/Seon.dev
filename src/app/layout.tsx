import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pyaesonekyaw.dev"),
  title: "Pyae Sone Kyaw | Founding AI Engineer",
  description:
    "Portfolio of Pyae Sone Kyaw (Seon) — Founding AI Engineer at Siloett.AI, Station F Paris. Specializing in CreativeAI, NLP, and Full-Stack AI Systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "CreativeAI",
    "Full-Stack",
    "Paris",
    "Station F",
  ],
  authors: [{ name: "Pyae Sone Kyaw" }],
  openGraph: {
    title: "Pyae Sone Kyaw | Founding AI Engineer",
    description:
      "Founding AI Engineer at Siloett.AI, Station F Paris. Building at the intersection of AI and Human Experience.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pyae Sone Kyaw — Founding AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyae Sone Kyaw | Founding AI Engineer",
    description:
      "Founding AI Engineer at Siloett.AI, Station F Paris. Building at the intersection of AI and Human Experience.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmMono.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
