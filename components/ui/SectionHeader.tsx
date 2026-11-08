import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  /** Section number shown as "[01]" */
  index: string;
  /** Path-style label shown as "— /projects" */
  path: string;
  title: ReactNode;
  /** Optional element on the right (usually a link) */
  action?: ReactNode;
  /** Use on dark backgrounds */
  dark?: boolean;
  className?: string;
  /** Extra classes for the <h2>, e.g. a max width to control line breaks */
  titleClassName?: string;
}

/**
 * The standard heading block used at the top of every section:
 *   [01] — /projects
 *   Selected builds                         github ↗
 */
export function SectionHeader({ index, path, title, action, dark, className, titleClassName }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 flex flex-wrap items-end justify-between gap-4", className)}>
      <div>
        <p className={cn("mb-3 font-mono text-xs", dark ? "text-lime" : "text-volt")}>
          [{index}] — /{path}
        </p>
        <h2 className={cn("font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl", titleClassName)}>
          {title}
        </h2>
      </div>
      {action}
    </Reveal>
  );
}
