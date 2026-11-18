import { services } from "@/data/site";
import type { Service } from "@/data/types";
import { Container, Reveal, SectionHeader } from "@/components/ui";

/** One service tile. The whole tile turns electric blue on hover. */
function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <Reveal delay={delay} className="group border-b border-r border-white/15 p-7 transition-colors hover:bg-volt">
      <p className="font-mono text-[11px] text-white/50 group-hover:text-white/80">{service.code}</p>
      <h3 className="mt-8 font-display text-2xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60 group-hover:text-white/85">{service.description}</p>
      <p className="mt-6 font-mono text-[11px] text-lime">{service.tags}</p>
    </Reveal>
  );
}

/** Dark section listing services as "modules". */
export function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 overflow-hidden bg-ink text-paper">
      <div className="grid-bg-light absolute inset-0" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <SectionHeader index="02" path="services" title="Modules you can plug into your business." dark className="mb-14" titleClassName="max-w-2xl" />

        {/* top/left border on the wrapper + right/bottom on each tile = a clean 1px grid */}
        <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.code} service={service} delay={i * 0.05} />
          ))}
        </div>
      </Container>
    </section>
  );
}
