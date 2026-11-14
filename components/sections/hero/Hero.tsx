import { heroStats, heroWords, profile, terminalLines } from "@/data/site";
import { Button, Container, Reveal } from "@/components/ui";
import { ScrambleText } from "./ScrambleText";
import { Terminal } from "./Terminal";

/**
 * Hero section.
 * Left: headline with the scrambling word, intro and CTAs.
 * Right: animated terminal + three stat chips.
 * Background: engineering grid with a sweeping scan line.
 */
export function Hero() {
  return (
    <section className="grid-bg scan-line relative overflow-hidden border-b border-rule">
      <Container className="relative grid items-center gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr]">
        {/* ── Left column ── */}
        <Reveal>
          <p className="mb-6 flex items-center gap-2 font-mono text-xs text-dim">
            <span className="border border-rule bg-panel px-2 py-1">v5.0</span>
            <span>{"// "}{profile.role}</span>
          </p>

          <h1 className="font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[4.4rem]">
            I engineer
            <br />
            <ScrambleText words={heroWords} />
            <br />
            that ship fast.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-dim">
            Hi, I&apos;m <strong className="font-medium text-ink">{profile.name}</strong>. {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={profile.cvUrl} external>
              view_cv() ↗
            </Button>
            <Button href="#contact" variant="outline">
              start_a_project →
            </Button>
          </div>
        </Reveal>

        {/* ── Right column ── */}
        <Reveal delay={0.15}>
          <Terminal lines={terminalLines} />
          <div className="mt-5 grid grid-cols-3 gap-3 font-mono text-[11px]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border border-rule bg-panel p-3">
                <p className="text-dim">{stat.label}</p>
                <p className="text-sm font-semibold text-ink">{stat.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
