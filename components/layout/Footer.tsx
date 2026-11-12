import { profile } from "@/data/site";
import { Container } from "@/components/ui";

/** Minimal "build log" style footer. The year updates automatically. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink font-mono text-[11px] text-paper/60">
      <Container className="flex flex-col justify-between gap-2 py-6 sm:flex-row">
        <span>
          © {year} {profile.name.toUpperCase()}
        </span>
        <a href="#top" className="hover:text-lime">
          BACK_TO_TOP ↑
        </a>
      </Container>
    </footer>
  );
}
