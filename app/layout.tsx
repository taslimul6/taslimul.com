import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/site";
import "./globals.css";

/*
 * Fonts are self-hosted by next/font (no layout shift, no external request at runtime).
 * They are exposed as CSS variables and wired into Tailwind in tailwind.config.ts.
 */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

/** SEO + social sharing metadata. Update `metadataBase` to your real domain. */
export const metadata: Metadata = {
  metadataBase: new URL("https://taslimul.com"),
  title: `${profile.name} — Full-Stack Developer`,
  description:
    "Full-stack web developer from Dhaka. Next.js, Node.js, Shopify and WordPress. 500+ sites shipped.",
  openGraph: {
    title: `${profile.name} — Full-Stack Developer`,
    description: "I engineer web apps that ship fast.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
