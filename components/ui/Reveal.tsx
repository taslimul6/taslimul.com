"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger the animation, in seconds. */
  delay?: number;
  as?: ElementType;
}

/**
 * Fades + slides its children up the first time they scroll into view.
 * Wrap any block in <Reveal> to get the scroll-in animation.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const style: CSSProperties = { transitionDelay: `${delay}s` };

  return (
    <Tag
      ref={ref}
      style={style}
      // `group/reveal` + data attribute let children react to the reveal (e.g. progress bars)
      data-in-view={inView}
      className={cn(
        "group/reveal transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        inView ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
