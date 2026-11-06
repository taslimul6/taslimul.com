/**
 * Shared TypeScript types for all site content.
 * Every section component receives data shaped like these interfaces,
 * so adding a project / job / video is just adding an object in `data/site.ts`.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  /** Final number the counter animates up to */
  value: number;
  /** Text shown after the number, e.g. "+" or "%" */
  suffix?: string;
}

/** Which mock UI to draw inside the project's browser frame (until you add a real screenshot). */
export type ProjectMockup =
  | "marketplace" // food marketplace (PizzaHub)
  | "directory" // doctor search (DocList-BD)
  | "events" // event cards (GoodPlanet)
  | "prices" // price ticker + cards (BazarDor)
  | "budget" // budget dashboard (BudgetOSpend)
  | "board" // dark project dashboard (PMS)
  | "landing"; // dark SaaS landing page (NexusFlow)

export interface ProjectStat {
  label: string;
  display: string;
  /** Bar fill width, 0–100 */
  percent: number;
  /** Bar colour */
  tone?: "volt" | "lime";
}

export interface Project {
  title: string;
  category: string;
  meta: string;
  url: string;
  description: string;
  highlights?: string[];
  stats?: ProjectStat[];
  stack: string[];
  liveUrl: string;
  sourceUrl: string;
  /** Optional real screenshot in /public. If set, it replaces the mockup. */
  image?: string;
  mockup: ProjectMockup;
  /** Show as the big featured card at the top of the projects section (use on one project). */
  featured?: boolean;
}

export interface Service {
  code: string;
  title: string;
  description: string;
  tags: string;
}

export interface Job {
  /** Fake commit hash — purely decorative */
  hash: string;
  role: string;
  period: string;
  summary: string;
  /** Small label next to the hash, e.g. "HEAD → present" */
  badge?: string;
  badgeStyle?: "lime" | "outline";
}

export interface Video {
  title: string;
  type: "TUTORIAL" | "REVIEW";
  duration: string;
  url: string;
  thumbnail?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/** One line in the animated hero terminal. `command` lines are typed out; others print instantly. */
export interface TerminalLine {
  kind: "command" | "output" | "success";
  text: string;
}
