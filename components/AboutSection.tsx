"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skills = [
  "React", "Next.js", "Node.js", "TypeScript", "Claude / LLM integration",
  "RAG pipelines", "GSAP", "Framer Motion", "Chrome Extensions (MV3)", "Tailwind CSS",
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading n="01" title="About" />
        <p className="max-w-2xl text-muted leading-relaxed">
          I&apos;m a full-stack developer who picked up AI integration and motion design
          along the way, because most real projects end up needing both — a working
          feature is only half the job if it doesn&apos;t explain itself to a user. I care
          about the parts that don&apos;t show up in a screenshot: server-side validation
          instead of trusting the client, honest documentation of what&apos;s a demo
          shortcut versus what&apos;s production-ready, and shipping something you can
          actually click on rather than a slide deck.
        </p>

        <div className="mt-8 flex flex-wrap gap-2 max-w-2xl">
          {skills.map((s) => (
            <span key={s} className="text-xs rounded-full border border-border px-3 py-1.5 text-muted">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
