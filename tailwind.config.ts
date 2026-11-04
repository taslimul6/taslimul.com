import type { Config } from "tailwindcss";

/**
 * Design tokens for the "taslimul.com" brand.
 *
 * Change a colour here and it updates everywhere — components only ever use
 * these token names (e.g. `bg-volt`, `text-dim`), never raw hex values.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Named "paper", not "base": `text-base` is already Tailwind's 16px font-size class.
        paper: "#F2F3EF", // page background (warm light grey)
        panel: "#FFFFFF", // cards and raised surfaces
        ink: "#0B0D0E", // primary text + dark sections
        dim: "#5E646B", // secondary text
        rule: "#D9DCD6", // hairline borders
        volt: "#2B4BFF", // primary brand accent (electric blue)
        lime: "#C6F432", // highlight accent (signal lime)
        term: "#0F1214", // terminal / video thumbnail background
      },
      fontFamily: {
        // CSS variables are injected by next/font in app/layout.tsx
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        scan: { to: { top: "100%" } },
        blink: { "50%": { opacity: "0" } },
        ping: { "75%, 100%": { transform: "scale(2.2)", opacity: "0" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        shimmer: { to: { backgroundPosition: "-200% 0" } },
      },
      animation: {
        scan: "scan 6s linear infinite",
        blink: "blink 1s steps(1) infinite",
        ping: "ping 1.8s cubic-bezier(0,0,.2,1) infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
