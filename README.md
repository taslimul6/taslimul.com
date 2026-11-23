<div align="center">

# taslimul.com

**Personal portfolio of Taslimul Hasan, full-stack (MERN) web developer from Dhaka.**

[**Live site →**](https://taslimul.com)

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Editing content](#editing-content)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Accessibility](#accessibility)
- [Deployment](#deployment)

---

## Features

- **Single-page portfolio:** hero, tech-stack ticker, metrics, projects, services, experience, YouTube and contact.
- **All content in one file:** edit [`data/site.ts`](data/site.ts) to update the site; no component changes needed.
- **Animated hero:** a scrambling headline word and a terminal that types itself out.
- **Compact project showcase:** one featured project plus a grid of smaller cards (a swipe row on mobile), each with its own illustrated mockup.
- **Spam-safe email:** the address is stored encoded and only revealed when a visitor clicks.
- **Fully static:** no server needed. Only interactive pieces ship JavaScript.
- **Respects "reduce motion":** every animation turns off when the visitor's OS asks for less motion.

---

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 with custom design tokens |
| Fonts | Space Grotesk and JetBrains Mono via `next/font` (self-hosted) |
| Linting | ESLint with `next/core-web-vitals` |

---

## Getting started

**Requirements:** Node.js 18.18 or newer.

```bash
git clone https://github.com/taslimul6/taslimul.com.git
cd taslimul.com
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `.next/` |
| `npm run start` | Serve the production build |
| `npm run lint` | Check the code with ESLint |

> **Tip:** don't run `npm run build` while `npm run dev` is running. Both use the `.next/` folder, and the dev
> server breaks. If that happens, stop the dev server, delete `.next/` and start it again.

---

## Editing content

Everything visible on the site lives in **[`data/site.ts`](data/site.ts)**. The types for each item are in
[`data/types.ts`](data/types.ts), so your editor will warn you about missing or misspelled fields.

| Section on the page | Variable in `data/site.ts` |
| --- | --- |
| Name, role, location, email, CV link | `profile` |
| Navigation links | `navLinks` |
| Rotating word in the headline | `heroWords` |
| Hero terminal script | `terminalLines` |
| Small stat chips under the terminal | `heroStats` |
| Scrolling tech-stack ticker | `techStack` |
| Big numbers row | `metrics` |
| Projects | `projects` |
| Services | `services` |
| Work history | `jobs` |
| YouTube channel and videos | `youtube`, `videos` |
| Contact links | `socialLinks` |

> **Placeholder links are hidden automatically.** Any link set to `"#"` (CV, social links, project
> live/source, videos) is left off the page until you replace it with a real URL.

### Add a project

Copy an existing object in the `projects` array and edit it:

```ts
{
  title: "My Project",
  category: "SaaS dashboard",
  meta: "2026",                          // shown top-right of the card (year, country…)
  url: "https://my-project.vercel.app",  // shown in the fake browser address bar
  description: "One or two sentences about what it does.",
  highlights: ["Feature one", "Feature two"], // optional bullet list (featured card only)
  stack: ["React", "Express", "MongoDB"],
  liveUrl: "https://my-project.vercel.app",
  sourceUrl: "https://github.com/taslimul6/my-project",
  mockup: "budget",                      // which illustration to show, see below
  // featured: true,                     // make this the big card at the top
}
```

**Mockup options:** each card shows an illustrated preview instead of a screenshot.

| `mockup` | Looks like |
| --- | --- |
| `marketplace` | Food marketplace with "add to order" button |
| `directory` | Search bar with result cards |
| `events` | Event cards with dates and join buttons |
| `prices` | Price ticker with ▲/▼ price cards |
| `budget` | Budget dashboard with progress bar and transactions |
| `board` | Dark project dashboard with status pills |
| `landing` | Dark SaaS landing page with pricing tiers |

To use a real screenshot instead, put the image in `public/` (16:9 works best) and add
`image: "/projects/my-project.png"` to the project.

**Featured project:** the project with `featured: true` is shown as the large card. All others appear in the
compact grid. If no project is featured, the first one is used.

### Add a YouTube video

Save the thumbnail in `public/videos/`, then add an entry to `videos`:

```ts
{
  title: "Video title",
  type: "TUTORIAL",                       // or "REVIEW"
  duration: "5:12",
  url: "https://www.youtube.com/watch?v=VIDEO_ID",
  thumbnail: "/videos/my-video.jpg",
}
```

YouTube thumbnails can be downloaded from `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg`.

### Change the email address

The email is stored **base64-encoded** in `profile.emailEncoded`, so it never appears in the page source where
spam bots could collect it. To encode a new address, run:

```bash
node -e "console.log(btoa('you@example.com'))"
```

and paste the result into `emailEncoded`.

---

## Project structure

```text
app/
├── layout.tsx              Root HTML, fonts and SEO metadata
├── page.tsx                Home page: lists the sections in order
└── globals.css             Tailwind layers and CSS-only effects (grid, scan line, caret…)

components/
├── layout/                 Shared site chrome
│   ├── StatusBar.tsx         Top bar: availability and live Dhaka clock
│   ├── Navbar.tsx            Sticky navigation
│   ├── Logo.tsx              "TH" monogram and wordmark
│   ├── LiveClock.tsx         Ticking clock (client)
│   └── Footer.tsx
├── sections/               One component per page section
│   ├── hero/                 Hero, ScrambleText and Terminal animations
│   ├── projects/             Projects grid, featured and compact cards
│   ├── StackMarquee.tsx      Infinite tech-stack ticker
│   ├── Metrics.tsx           Count-up numbers
│   ├── Services.tsx
│   ├── Experience.tsx        Work history styled as `git log`
│   ├── YouTube.tsx
│   ├── Contact.tsx
│   └── RevealEmail.tsx       Click-to-reveal email button (client)
├── mockups/                Illustrated project previews (one per `mockup` type)
└── ui/                     Reusable building blocks with no content inside
    ├── Container.tsx         Max-width and padding wrapper
    ├── SectionHeader.tsx     "[01] — /path" label and heading
    ├── Button.tsx            Solid, outline and accent link buttons
    ├── Tag.tsx               Small monospace labels
    ├── BrowserFrame.tsx      Fake browser window around previews
    ├── Reveal.tsx            Fade-up-on-scroll wrapper (client)
    ├── CountUp.tsx           Animated number (client)
    └── ProgressBar.tsx       Bar that fills when revealed

data/
├── site.ts                 All site content
└── types.ts                TypeScript types for the content

hooks/
├── useInView.ts            Fires once when an element scrolls into view
└── useReducedMotion.ts     Detects the OS "reduce motion" setting

lib/
└── cn.ts                   `cn()` class joiner and `isRealLink()` helper

public/
├── images/                 Profile photo
└── videos/                 YouTube thumbnails
```

**Server vs client components:** everything renders on the server by default, so most of the page ships no
JavaScript. Only components that need the browser are marked `"use client"`: `Reveal`, `CountUp`, `LiveClock`,
`ScrambleText`, `Terminal`, `RevealEmail` and the two hooks.

---

## Design system

Colours, fonts and animations are defined once in [`tailwind.config.ts`](tailwind.config.ts). Components only
use these token names (for example `bg-volt`, `text-dim`), never raw hex values, so changing a colour there
updates the whole site.

| Token | Value | Used for |
| --- | --- | --- |
| `paper` | `#F2F3EF` | Page background |
| `panel` | `#FFFFFF` | Cards and raised surfaces |
| `ink` | `#0B0D0E` | Text and dark sections |
| `dim` | `#5E646B` | Secondary text |
| `rule` | `#D9DCD6` | Hairline borders |
| `volt` | `#2B4BFF` | Primary accent (electric blue) |
| `lime` | `#C6F432` | Highlight accent |
| `term` | `#0F1214` | Terminal and video backgrounds |

**Fonts:** Space Grotesk for headings and body text, JetBrains Mono for labels and code.

> The background colour is called `paper`, not `base`, because `text-base` is already Tailwind's 16px
> font-size class and the two would clash.

---

## Accessibility

- All animations are disabled when the visitor has "reduce motion" turned on.
- The scrambling headline word is hidden from screen readers, which hear the plain list of words instead.
- Decorative elements (mockups, glows, grid backgrounds) use `aria-hidden`.
- External links open in a new tab with `rel="noopener noreferrer"`.

---

## Deployment

The site is fully static and deploys anywhere. The simplest option is [Vercel](https://vercel.com/new):
import this repository, keep the **Next.js** framework preset, and deploy. Every push to `main` then
redeploys the site automatically.

If you move to a different domain, update `metadataBase` in [`app/layout.tsx`](app/layout.tsx).

---

<div align="center">

Built by **Taslimul Hasan** · [GitHub](https://github.com/taslimul6) · [YouTube](https://youtube.com/@Taslimul6)

</div>
