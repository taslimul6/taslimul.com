import Image from "next/image";
import type { Project } from "@/data/types";
import { BrowserFrame, ProgressBar, Reveal, Tag } from "@/components/ui";
import { Mockup } from "@/components/mockups";
import { cn, isRealLink } from "@/lib/cn";

/** Screenshot if the project has one, otherwise the decorative mockup. */
function Preview({ project, sizes }: { project: Project; sizes: string }) {
  return project.image ? (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      fill
      sizes={sizes}
      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  ) : (
    <Mockup type={project.mockup} />
  );
}

/** "live ↗  source ↗" row. Links still set to "#" in data/site.ts are hidden. */
function Links({ project, className }: { project: Project; className?: string }) {
  if (!isRealLink(project.liveUrl) && !isRealLink(project.sourceUrl)) return null;
  return (
    <div className={cn("flex gap-5 font-mono text-[13px]", className)}>
      {isRealLink(project.liveUrl) && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-volt hover:underline">
          live ↗
        </a>
      )}
      {isRealLink(project.sourceUrl) && (
        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          source ↗
        </a>
      )}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase text-dim">
      <span className="truncate">{project.category}</span>
      <span className="shrink-0">{project.meta}</span>
    </div>
  );
}

/**
 * Big featured card: screenshot on the left, full case-study details on the right
 * (stacks vertically on small screens). Shows highlights and/or stats.
 */
export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Reveal
      as="article"
      className="brackets group grid border border-rule bg-panel lg:grid-cols-[1.35fr_1fr]"
    >
      <BrowserFrame url={project.url} className="lg:border-b-0 lg:border-r">
        <Preview project={project} sizes="(min-width: 1024px) 680px, 100vw" />
      </BrowserFrame>

      <div className="flex flex-col p-6 sm:p-7">
        <Meta project={project} />
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-volt">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-dim">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-1.5 font-mono text-[12px]">
            {project.highlights.map((item) => (
              <li key={item}>
                <span className="text-volt">→</span> {item}
              </li>
            ))}
          </ul>
        )}

        {project.stats && (
          <div className="mt-4 space-y-3">
            {project.stats.map((stat) => (
              <ProgressBar key={stat.label} {...stat} />
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* mt-auto pushes the links to the bottom of the card; pt-6 keeps a minimum gap */}
        <div className="mt-auto pt-6">
          <Links project={project} className="border-t border-rule pt-5" />
        </div>
      </div>
    </Reveal>
  );
}

/** How many stack tags a compact card shows before collapsing the rest into "+N". */
const MAX_TAGS = 3;

/**
 * Compact card for the grid: small screenshot, 2-line description, main tags and links.
 * Highlights / stats are left out to keep the grid short.
 */
export function CompactProjectCard({ project, delay }: { project: Project; delay?: number }) {
  const extra = project.stack.length - MAX_TAGS;

  return (
    <Reveal as="article" delay={delay} className="brackets group flex h-full flex-col border border-rule bg-panel">
      <BrowserFrame url={project.url}>
        <Preview project={project} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 85vw" />
      </BrowserFrame>

      <div className="flex flex-1 flex-col p-5">
        <Meta project={project} />
        <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-volt">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-dim">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, MAX_TAGS).map((tech) => (
            <Tag key={tech} className="text-[10px]">
              {tech}
            </Tag>
          ))}
          {extra > 0 && (
            <span title={project.stack.slice(MAX_TAGS).join(", ")}>
              <Tag className="text-[10px] text-dim">+{extra}</Tag>
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <Links project={project} className="border-t border-rule pt-4" />
        </div>
      </div>
    </Reveal>
  );
}
