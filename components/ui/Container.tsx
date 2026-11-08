import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element (default `div`). */
  as?: ElementType;
}

/**
 * Centers content at the site's max width (1200px) with consistent side padding.
 * Use it inside every full-bleed section so all content lines up on the same grid.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("mx-auto max-w-page px-5 sm:px-8", className)}>{children}</Tag>;
}
