import { cn } from "@/lib/cn";

interface ProgressBarProps {
  label: string;
  display: string;
  /** 0–100 */
  percent: number;
  tone?: "volt" | "lime";
}

/**
 * Labeled bar that "loads" from 0 to `percent`.
 * Must be placed inside a <Reveal>; it animates when that Reveal enters view
 * (via the `group-data-[in-view=true]/reveal` selector).
 */
export function ProgressBar({ label, display, percent, tone = "volt" }: ProgressBarProps) {
  return (
    <div className="font-mono text-[11px]">
      <div className="flex justify-between">
        <span>{label}</span>
        <span>{display}</span>
      </div>
      <div className="mt-1 h-1.5 bg-paper">
        <div
          style={{ width: `${percent}%` }}
          className={cn(
            "h-full origin-left scale-x-0 transition-transform duration-[1400ms] ease-out",
            "group-data-[in-view=true]/reveal:scale-x-100 motion-reduce:scale-x-100",
            tone === "lime" ? "bg-lime" : "bg-volt",
          )}
        />
      </div>
    </div>
  );
}
