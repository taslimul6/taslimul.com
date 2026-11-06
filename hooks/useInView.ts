"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tells you when an element scrolls into view (fires once, then stops watching).
 *
 * @param threshold How much of the element must be visible (0–1). Default 0.15.
 * @returns `[ref, inView]` — attach `ref` to the element you want to watch.
 *
 * @example
 * const [ref, inView] = useInView<HTMLDivElement>();
 * return <div ref={ref} className={inView ? "opacity-100" : "opacity-0"} />;
 */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only animate the first time
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}
