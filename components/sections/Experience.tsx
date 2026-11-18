import { jobs, profile } from "@/data/site";
import type { Job } from "@/data/types";
import { Button, Container, Reveal, Tag } from "@/components/ui";
import { isRealLink } from "@/lib/cn";

/** One "commit" in the career log. */
function Commit({ job }: { job: Job }) {
  return (
    <li className="border-b border-rule p-5 transition-colors last:border-b-0 hover:bg-paper">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-volt">{job.hash}</span>
        {job.badge && (
          <Tag tone={job.badgeStyle === "lime" ? "lime" : "outline"} className="text-[10px]">
            {job.badge}
          </Tag>
        )}
        {job.period && <span className="text-[11px] text-dim">{job.period}</span>}
      </div>
      <p className="mt-2 font-display text-lg font-semibold">{job.role}</p>
      <p className="mt-1 font-sans text-sm text-dim">{job.summary}</p>
    </li>
  );
}

/** Work history styled as `git log` output. */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="mb-3 font-mono text-xs text-volt">[03] — /experience</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Commit history</h2>
          <p className="mt-4 max-w-sm text-dim">
            Agency work, freelance and open source.
          </p>
          {/* Hidden if profile.cvUrl is set back to "#" */}
          {isRealLink(profile.cvUrl) && (
            <Button href={profile.cvUrl} variant="outline" className="mt-6 px-4 py-2" external>
              view_cv.pdf ↗
            </Button>
          )}
        </Reveal>

        <Reveal className="border border-rule bg-panel font-mono text-[13px]">
          <div className="flex h-10 items-center border-b border-rule px-5 text-[11px] text-dim">
            $ git log --career --oneline
          </div>
          <ol>
            {jobs.map((job) => (
              <Commit key={job.hash} job={job} />
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
