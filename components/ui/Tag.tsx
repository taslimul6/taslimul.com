import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "outline" | "lime" | "white";

const tones: Record<Tone, string> = {
  outline: "border border-ink",
  lime: "bg-lime text-ink",
  white: "bg-white text-ink",
};

/** Small monospace label — used for tech stack pills, badges and video types. */
export function Tag({
  children,
  tone = "outline",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={cn("inline-block px-2 py-1 font-mono text-[11px] leading-none", tones[tone], className)}>
      {children}
    </span>
  );
}
