import { projectPlaceholder, projects } from "@/data/site";
import { Container, Reveal, SectionHeader, Tag } from "@/components/ui";
import { CompactProjectCard, FeaturedProjectCard } from "./ProjectCard";

/**
 * "Selected builds":
 * - one big featured project (the one with `featured: true`, or the first)
 * - the rest as compact cards: a 3-column grid on desktop, 2 on tablet,
 *   and a horizontal swipe row on phones so the page doesn't get endlessly long.
 */
export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p !== featured);

  return (
    <section id="work" className="scroll-mt-16">
      <Container className="py-20 sm:py-28">
        <SectionHeader
          index="01"
          path="projects"
          title="Selected builds"
          action={
            <a
              href="https://github.com/taslimul6"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-ink font-mono text-sm hover:border-volt hover:text-volt"
            >
              github.com/taslimul6 ↗
            </a>
          }
        />

        {featured && <FeaturedProjectCard project={featured} />}

        {others.length > 0 && (
          <>
            <p className="mb-3 mt-10 flex items-center justify-between font-mono text-xs text-dim">
              <span>
                {"// more builds"} <span className="text-ink">({others.length})</span>
              </span>
              <span className="sm:hidden" aria-hidden="true">
                swipe →
              </span>
            </p>

            <ul
              className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
              aria-label="More projects"
            >
              {others.map((project, i) => (
                <li key={project.title} className="w-[85%] shrink-0 snap-start sm:w-auto">
                  <CompactProjectCard project={project} delay={(i % 3) * 0.08} />
                </li>
              ))}
            </ul>
          </>
        )}

        {projectPlaceholder && (
          <Reveal className="mt-6 flex flex-col justify-between gap-3 border border-dashed border-ink/30 p-6 sm:flex-row sm:items-center">
            <p className="font-mono text-sm">
              <span className="text-dim">{"// TODO:"}</span> {projectPlaceholder}
            </p>
            <Tag tone="lime" className="self-start sm:self-auto">
              PLACEHOLDER
            </Tag>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
