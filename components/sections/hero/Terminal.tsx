"use client";

import { useEffect, useState } from "react";
import type { TerminalLine } from "@/data/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Colour for each kind of terminal line. */
const lineColor: Record<TerminalLine["kind"], string> = {
  command: "text-[#E6E8E3]",
  output: "text-[#9AA0A6]",
  success: "text-[#7CE38B]",
};

/** Renders one line; commands get a lime "$ " prompt. */
function Line({ line, text = line.text }: { line: TerminalLine; text?: string }) {
  return (
    <div className={lineColor[line.kind]}>
      {line.kind === "command" && <span className="text-lime">$ </span>}
      {text}
    </div>
  );
}

/**
 * Fake terminal that "types" a script line by line.
 * - `command` lines are typed character-by-character
 * - `output` / `success` lines appear instantly after a short pause
 * With reduced motion on, the full script is shown immediately.
 */
export function Terminal({ lines, title = "~/taslimul — zsh" }: { lines: TerminalLine[]; title?: string }) {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(0); // number of fully printed lines
  const [typing, setTyping] = useState(""); // partial text of the line being typed

  useEffect(() => {
    if (reduced) {
      setDone(lines.length);
      return;
    }
    let cancelled = false;

    (async () => {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.kind === "command") {
          for (let c = 0; c <= line.text.length; c++) {
            if (cancelled) return;
            setTyping(line.text.slice(0, c));
            await wait(45 + Math.random() * 40); // human-ish typing speed
          }
          await wait(350);
        } else {
          await wait(220);
        }
        if (cancelled) return;
        setTyping("");
        setDone(i + 1);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [lines, reduced]);

  const current = lines[done];
  const isTyping = current?.kind === "command";

  return (
    <div className="border border-ink bg-term text-[#E6E8E3] shadow-[8px_8px_0_theme(colors.volt)]">
      {/* Window title bar */}
      <div className="flex h-9 items-center gap-2 border-b border-white/10 px-4 font-mono text-[11px] text-white/50">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3">{title}</span>
      </div>

      {/* Script output */}
      <div className="h-[300px] overflow-hidden whitespace-pre-wrap p-5 font-mono text-[12.5px] leading-6" aria-label="Terminal animation">
        {lines.slice(0, done).map((line, i) => (
          <Line key={i} line={line} />
        ))}

        {isTyping ? (
          <div>
            <span className="text-lime">$ </span>
            {typing}
            <span className="caret" />
          </div>
        ) : (
          done === lines.length && (
            <div>
              <span className="text-lime">$ </span>
              <span className="caret" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
