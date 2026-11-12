import { navLinks } from "@/data/site";
import { Button, Container } from "@/components/ui";
import { Logo } from "./Logo";

/**
 * Sticky top navigation.
 * Links are numbered automatically ("01.work", "02.services", …) from `navLinks` order.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className="px-3 py-2 transition-colors hover:bg-ink hover:text-paper">
                <span className="text-dim">{String(i + 1).padStart(2, "0")}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" variant="accent" className="px-4 py-2 text-[13px]">
          ./hire_me →
        </Button>
      </Container>
    </header>
  );
}
