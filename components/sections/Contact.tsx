import { profile, socialLinks } from "@/data/site";
import { Container, Reveal } from "@/components/ui";
import { isRealLink } from "@/lib/cn";
import { RevealEmail } from "./RevealEmail";

/** Closing call-to-action: big headline, email button and a list of social links. */
export function Contact() {
  return (
    <section id="contact" className="grid-bg relative scroll-mt-16 overflow-hidden">
      <Container className="grid items-end gap-12 py-24 sm:py-32 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="mb-3 font-mono text-xs text-volt">[05] — /contact</p>
          <h2 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl">
            Got an idea?
            <br />
            Let&apos;s <span className="bg-lime px-2">build it.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-dim">
            Tell me about your project. I usually reply within 24 hours.
          </p>
          <RevealEmail encoded={profile.emailEncoded} />
        </Reveal>

        <Reveal as="ul" className="divide-y divide-rule border border-ink bg-panel font-mono text-sm">
          {socialLinks.filter((link) => isRealLink(link.href)).map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between px-5 py-4 transition-colors hover:bg-lime"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
