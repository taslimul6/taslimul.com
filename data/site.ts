/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit text, links, projects, jobs and videos in this one file —
 *  you should not need to touch the components to update the portfolio.
 *  Items marked `TODO` are placeholders that still need real content.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type {
  Job,
  Metric,
  NavLink,
  Project,
  Service,
  SocialLink,
  TerminalLine,
  Video,
} from "./types";

export const profile = {
  name: "Taslimul Hasan",
  shortName: "taslimul",
  initials: "TH",
  domain: ".com",
  role: "full-stack web developer",
  location: "Dhaka, BD",
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
  /**
   * Email, base64-encoded so it never appears in the page source (keeps spam bots away).
   * It is decoded only when a visitor clicks "reveal_email".
   * To change it, run in a terminal:  node -e "console.log(btoa('you@example.com'))"
   */
  emailEncoded: "aGFzYW50YXNsaW11bEBnbWFpbC5jb20=",
  available: true,
  intro:
    "For 5+ years I've built websites and web apps for clients around the world: from React and Next.js frontends to full-stack web apps with auth, payments and APIs.",
  cvUrl: "https://drive.google.com/file/d/1woM1P4YM7rihNG773P-baKtx9OigfStE/view?usp=sharing", // CV on Google Drive (opens in a new tab)
};

export const navLinks: NavLink[] = [
  { label: "work", href: "#work" },
  { label: "services", href: "#services" },
  { label: "experience", href: "#experience" },
  { label: "youtube", href: "#youtube" },
];

/** Words that cycle (with a scramble effect) in the hero headline. */
export const heroWords = ["web apps", "SaaS products", "fast websites"];

export const terminalLines: TerminalLine[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: "taslimul — full-stack web developer" },
  { kind: "command", text: "cat stack.txt" },
  { kind: "output", text: "next.js · react · typescript · node · mongodb" },
  { kind: "command", text: "npm run deploy --client=you" },
  { kind: "success", text: "✓ build completed in 1.8s" },
  { kind: "success", text: "✓ lighthouse: 98 / 100 / 100 / 100" },
  { kind: "success", text: "✓ deployed → https://your-next-site.com" },
];

/** Small stat chips under the terminal. */
export const heroStats = [
  { label: "uptime", value: "5+ yrs" },
  { label: "deploys", value: "500+" },
  { label: "csat", value: "99%" },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "Stripe",
  "Docker",
  "Vercel",
  "Shopify",
  "WordPress",
];

export const metrics: Metric[] = [
  { label: "Sites shipped", value: 500, suffix: "+" },
  { label: "Years building", value: 5, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Client satisfaction", value: 99, suffix: "%" },
];

export const projects: Project[] = [
  {
    title: "PizzaHub",
    category: "Multi-vendor marketplace",
    meta: "2025",
    url: "https://pizza-pulse-gamma.vercel.app",
    description:
      "A marketplace connecting customers, local pizza vendors and admins. Vendors manage menus and orders; premium vendors pay through Stripe subscriptions.",
    highlights: [
      "Role-based access (customer / vendor / admin)",
      "Better Auth + JWT, shared MongoDB",
      "Stripe premium subscriptions",
    ],
    stack: ["Next.js 16", "Express 5", "MongoDB", "Stripe"],
    liveUrl: "https://pizza-pulse-gamma.vercel.app",
    sourceUrl: "https://github.com/taslimul6/Pizza-Hub",
    mockup: "marketplace",
    featured: true,
  },
  {
    title: "DocList-BD",
    category: "Healthcare directory",
    meta: "Bangladesh",
    url: "https://doclist-bd.com",
    description:
      "A searchable directory of doctors and hospitals across Bangladesh, with location-based listings and structured data.",
    stats: [
      { label: "doctor_profiles", display: "3,600+", percent: 92 },
      { label: "hospitals", display: "1,300+", percent: 60 },
      { label: "user_growth", display: "+20%", percent: 38, tone: "lime" },
    ],
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    liveUrl: "https://doclist-bd.com",
    sourceUrl: "https://github.com/taslimul6/doclist-bd",
    mockup: "directory",
  },
  {
    title: "GoodPlanet",
    category: "Community volunteering platform",
    meta: "2026",
    url: "https://good-planet-wheat.vercel.app",
    description:
      "Connects volunteers and organizers around social and environmental causes. People discover and join events, track volunteer hours, or organize their own.",
    highlights: [
      "Visitor / participant / organizer roles",
      "Waitlists for full events + volunteer-hour tracking",
      "Express + MongoDB API secured with JWT",
    ],
    stack: ["Next.js 16", "TypeScript", "Better Auth", "MongoDB"],
    liveUrl: "https://good-planet-wheat.vercel.app",
    sourceUrl: "https://github.com/taslimul6/GoodPlanet",
    mockup: "events",
  },
  {
    title: "BazarDor",
    category: "Market price tracker",
    meta: "Bangladesh",
    url: "https://ajker-bajar-green.vercel.app",
    description:
      "A Bangla-first platform for checking and comparing daily prices of everyday essentials across markets in Bangladesh.",
    highlights: [
      "33 products across 8 categories (rice, fish, spices…)",
      "Price rise / fall indicators with % change",
      "User accounts with Better Auth + MongoDB",
    ],
    stack: ["Next.js", "React", "Tailwind", "MongoDB"],
    liveUrl: "https://ajker-bajar-green.vercel.app",
    sourceUrl: "https://github.com/taslimul6/AjkerBajar",
    mockup: "prices",
  },
  {
    title: "BudgetOSpend",
    category: "Expense & budget tracker",
    meta: "2026",
    url: "https://budgetospend.vercel.app",
    description:
      "A bento-grid dashboard for tracking income, expenses and a monthly budget. Data stays in the browser, with JSON/CSV export.",
    highlights: [
      "Monthly budget, recurring entries, 5 currencies",
      "Filter, search and sort, with undo on delete",
      "Tested with Vitest, CI on GitHub Actions",
    ],
    stack: ["React 19", "Vite", "Tailwind v4", "Zod", "Vitest"],
    liveUrl: "https://budgetospend.vercel.app",
    sourceUrl: "https://github.com/taslimul6/BudgetOSpend",
    mockup: "budget",
  },
  {
    title: "PMS",
    category: "Project management dashboard",
    meta: "2026",
    url: "https://pms-omega-sandy.vercel.app",
    description:
      "A dashboard for managing client projects: budgets, status, favourites and completion, all in one place.",
    highlights: [
      "Create, edit and delete projects; budgets total automatically",
      "Debounced search, filters and sorting",
      "Validated forms, toasts and localStorage persistence",
    ],
    stack: ["React 19", "Vite", "Tailwind v4"],
    liveUrl: "https://pms-omega-sandy.vercel.app",
    sourceUrl: "https://github.com/taslimul6/pms-Project-Management-System",
    mockup: "board",
  },
  {
    title: "NexusFlow",
    category: "SaaS landing page",
    meta: "Concept",
    url: "https://nexusflow1.netlify.app",
    description:
      "A dark, developer-focused landing page for a fictional AI sprint-planning product, built to practise component architecture and polished micro-interactions.",
    highlights: [
      "Animated terminal and count-up stats",
      "Monthly / annual pricing toggle",
      "Accessible FAQ, respects reduced-motion",
    ],
    stack: ["React 19", "Vite", "Tailwind v4"],
    liveUrl: "https://nexusflow1.netlify.app",
    sourceUrl: "https://github.com/taslimul6/NexusFlow",
    mockup: "landing",
  },
];

/** Shown as a dashed "TODO" card under the projects. Set to null to hide. */
export const projectPlaceholder: string | null =
  null;

export const services: Service[] = [
  {
    code: "MOD_01",
    title: "Full-stack development",
    description: "Complete MERN apps from idea to deploy: database, API, UI, auth and payments.",
    tags: "mongo · express · react · node",
  },
  {
    code: "MOD_02",
    title: "Front-end development",
    description: "Fast, responsive React and Next.js interfaces that look sharp on every screen.",
    tags: "react · next.js · tailwind",
  },
  {
    code: "MOD_03",
    title: "Back-end development",
    description: "Secure REST APIs with clean MongoDB data models, validation and role-based access.",
    tags: "express · mongoose · jwt",
  },
  {
    code: "MOD_04",
    title: "SaaS product development",
    description: "Multi-user platforms with accounts, roles, dashboards and Stripe subscriptions.",
    tags: "better-auth · stripe · saas",
  },
];

export const jobs: Job[] = [
  {
    hash: "a3f9c21",
    role: "Web Developer @ Corinthia Studio",
    period: "2023 — now",
    summary: "Luxury hospitality & lifestyle sites for 10+ global clients · 99% satisfaction.",
    badge: "HEAD → present",
    badgeStyle: "lime",
  },
  {
    hash: "7be04d8",
    role: "Junior Web Developer @ MASS DATA",
    period: "2022 — 2023",
    summary: "Responsive client sites and high-converting landing pages.",
  },
  {
    hash: "e21a6f0",
    role: "Freelancer @ Fiverr · Level 2",
    period: "2019 — 2024",
    summary: "500+ websites delivered to international clients.",
  },
  {
    hash: "0c7d3b9",
    role: "Contributor @ Quran.com",
    period: "",
    summary: "Shipped alongside an international developer community.",
    badge: "open-source",
    badgeStyle: "outline",
  },
];

export const youtube = {
  handle: "@Taslimul6",
  url: "https://youtube.com/@Taslimul6",
};

// Latest relevant videos from the channel. Thumbnails are saved in /public/videos.
export const videos: Video[] = [
  {
    title: "How to Install Node.js on Windows 11: Step-by-Step Guide",
    type: "TUTORIAL",
    duration: "1:14",
    url: "https://www.youtube.com/watch?v=picOeyroN8Y",
    thumbnail: "/videos/nodejs-install.jpg",
  },
  {
    title: "How to Install n8n Locally on Your PC (Free Forever Setup)",
    type: "TUTORIAL",
    duration: "5:12",
    url: "https://www.youtube.com/watch?v=EmVz9h-MwtI",
    thumbnail: "/videos/n8n-install.jpg",
  },
  {
    title: "How to Use AI Models Locally: Free, Unlimited Premium AI",
    type: "TUTORIAL",
    duration: "2:52",
    url: "https://www.youtube.com/watch?v=pohPXrGYi30",
    thumbnail: "/videos/ai-models-locally.jpg",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "whatsapp", href: "https://wa.me/8801787836963" },
  { label: "github", href: "https://github.com/taslimul6" },
  { label: "youtube", href: "https://youtube.com/@Taslimul6" },
  { label: "fiverr", href: "#" }, // TODO
  { label: "linkedin", href: "#" }, // TODO
];
