import { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Interests } from '@/components/sections/Interests';
import { Contact } from '@/components/sections/Contact';
import { Reveal } from '@/components/Reveal';

export function Home() {
  useEffect(() => {
    document.title = 'Taslimul Hasan — AI-Native Full-Stack Web Developer';
  }, []);

  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Interests /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  );
}
