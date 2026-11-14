"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

interface ScrambleTextProps {
  /** Words to cycle through */
  words: string[];
  /** Time each word stays on screen, in ms */
  interval?: number;
}

/**
 * Cycles through `words`, morphing each one into the next with a
 * "decoding" effect: every letter flickers through random glyphs before settling.
 */
export function ScrambleText({ words, interval = 2800 }: ScrambleTextProps) {
  const [text, setText] = useState(words[0]);
  const reduced = useReducedMotion();
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    let index = 0;

    /** Animate from the current text to `next`. */
    const scrambleTo = (from: string, next: string) => {
      const length = Math.max(from.length, next.length);
      // Each letter gets a random start/end frame so they settle at different times
      const queue = Array.from({ length }, (_, i) => ({
        from: from[i] ?? "",
        to: next[i] ?? "",
        start: Math.floor(Math.random() * 10),
        end: 10 + Math.floor(Math.random() * 14),
      }));
      let frame = 0;

      const run = () => {
        let output = "";
        let settled = 0;
        for (const q of queue) {
          if (frame >= q.end) {
            settled++;
            output += q.to;
          } else if (frame >= q.start) {
            output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          } else {
            output += q.from;
          }
        }
        setText(output);
        frame++;
        if (settled < queue.length) frameRef.current = requestAnimationFrame(run);
      };
      run();
    };

    const id = setInterval(() => {
      const from = words[index];
      index = (index + 1) % words.length;
      scrambleTo(from, words[index]);
    }, interval);

    return () => {
      clearInterval(id);
      cancelAnimationFrame(frameRef.current);
    };
  }, [words, interval, reduced]);

  return (
    <span className="relative inline-block">
      {/* Lime highlighter stroke behind the word */}
      <span className="absolute inset-x-0 bottom-1 h-3 bg-lime sm:bottom-2 sm:h-5" aria-hidden="true" />
      {/* The animated text is hidden from screen readers (it flickers through random
          symbols); they get the plain list of words once instead. */}
      <span className="relative" aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
