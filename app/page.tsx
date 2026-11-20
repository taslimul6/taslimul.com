import { Footer, Navbar, StatusBar } from "@/components/layout";
import {
  Contact,
  Experience,
  Hero,
  Metrics,
  Projects,
  Services,
  StackMarquee,
  YouTube,
} from "@/components/sections";

/**
 * Home page. It only composes sections, top to bottom.
 * To reorder or remove a section, just move or delete its line here.
 */
export default function HomePage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="top">
        <Hero />
        <StackMarquee />
        <Metrics />
        <Projects />
        <Services />
        <Experience />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
