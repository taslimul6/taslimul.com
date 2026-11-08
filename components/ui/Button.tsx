import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "accent";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Opens in a new tab (for external links). */
  external?: boolean;
}

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-volt",
  outline: "border border-ink hover:bg-lime",
  accent: "bg-volt text-white hover:bg-ink",
};

/**
 * Square, monospace link-button. Renders an <a>, because every button
 * on this site navigates somewhere (anchor, email, external profile).
 */
export function Button({ href, children, variant = "solid", className, external }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex items-center gap-2 px-5 py-3 font-mono text-sm transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
