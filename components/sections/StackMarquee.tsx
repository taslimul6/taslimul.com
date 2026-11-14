import { Fragment } from "react";
import { techStack } from "@/data/site";

/** One copy of the list. Rendered twice so the loop is seamless. */
function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-10 pr-10" aria-hidden={hidden}>
      {techStack.map((tech) => (
        <Fragment key={tech}>
          <span>{tech.toUpperCase()}</span>
          <span className="text-lime">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Infinite horizontal ticker of the tech stack. Pauses on hover.
 * Works by placing two identical tracks side by side and sliding by -50%.
 */
export function StackMarquee() {
  return (
    <section className="group overflow-hidden border-b border-ink bg-ink text-paper" aria-label="Tech stack">
      <div className="flex w-max animate-marquee py-4 font-mono text-sm group-hover:[animation-play-state:paused]">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
