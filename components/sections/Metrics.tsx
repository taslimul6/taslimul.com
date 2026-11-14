import { metrics } from "@/data/site";
import { CountUp, Reveal } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Row of big animated numbers (2 columns on mobile, 4 on desktop). */
export function Metrics() {
  return (
    <section className="border-b border-rule bg-panel">
      <div className="mx-auto grid max-w-page grid-cols-2 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.label}
            className={cn(
              "border-rule p-6 sm:p-8",
              // vertical dividers between cells; horizontal divider under the first row on mobile
              i % 2 === 0 && "border-r",
              i === 1 && "md:border-r",
              i < 2 && "border-b md:border-b-0",
            )}
          >
            <p className="font-mono text-[11px] uppercase text-dim">{metric.label}</p>
            <p className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              <CountUp end={metric.value} />
              {metric.suffix}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
