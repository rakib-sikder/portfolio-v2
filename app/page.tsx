import { Sidebar } from "@/components/Sidebar";
import { IntroStatement } from "@/components/IntroStatement";
import { Marquee } from "@/components/Marquee";
import { AboutSection } from "@/components/AboutSection";
import { WorkList } from "@/components/WorkList";
import { ContactSection } from "@/components/ContactSection";

const tickerItems = [
  "AVAILABLE FOR FREELANCE",
  "REACT / NEXT.JS",
  "CLAUDE & LLM INTEGRATION",
  "GSAP & FRAMER MOTION",
  "CHROME EXTENSIONS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="lg:ml-[380px]">
        <IntroStatement />
        <Marquee items={tickerItems} />
        <AboutSection />
        <WorkList />
        <ContactSection />
      </main>
    </div>
  );
}
