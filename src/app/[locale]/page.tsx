"use client";

import { useScrollReveal } from "@/lib/hooks";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Pillars } from "@/components/pillars";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg font-dm-sans text-text">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
