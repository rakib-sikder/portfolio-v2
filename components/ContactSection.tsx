"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading n="03" title="Contact" />
        <p className="max-w-lg text-muted mb-8">
          Have a project in mind, or just want to talk about something you saw above? My
          inbox is open.
        </p>

        <MagneticButton>
          <a
            href="mailto:sikdersmail@gmail.com"
            className="inline-block text-3xl sm:text-5xl font-semibold tracking-tight text-accent hover:opacity-90 transition-opacity break-all"
          >
            sikdersmail@gmail.com
          </a>
        </MagneticButton>

        <div className="mt-10 flex gap-6 text-sm">
          <a href="https://github.com/rakib-sikder" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rakibul-hasan-us/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Rakibsikder27" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            X (Twitter)
          </a>
        </div>
      </motion.div>

      <footer className="mt-20 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <span>© {new Date().getFullYear()} Rakib Sikder</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </section>
  );
}
