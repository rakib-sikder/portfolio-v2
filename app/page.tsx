import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProjectsSection />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
