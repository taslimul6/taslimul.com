"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CountUpProps {
  /** Number to count up to */
  end: number;
  /** Animation length in ms */
  duration?: number;
}

/**
 * Counts from 0 to `end` (with an ease-out curve) once it scrolls into view.
 * Numbers are formatted with thousands separators, e.g. 1,000.
 */
export function CountUp({ end, duration = 1400 }: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame: number;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, end, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}
