import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A minimal browser window chrome (three dots + address bar).
 * Wrap a screenshot or a mockup in it to present a project.
 */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col border-b border-rule", className)}>
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-rule bg-paper/60 px-3" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="ml-2 flex-1 truncate border border-rule bg-panel px-2.5 py-0.5 font-mono text-[10px] text-dim">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <div className="relative aspect-[16/9] flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
