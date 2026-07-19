"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium text-accent mb-2">About</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">A bit about how I work</h2>
        <p className="text-muted leading-relaxed">
          I&apos;m a full-stack developer who picked up AI integration and motion design along
          the way, because most real projects end up needing both — a working feature is
          only half the job if it doesn&apos;t explain itself to a user. I care about the parts
          that don&apos;t show up in a screenshot: server-side validation instead of trusting
          the client, honest documentation of what&apos;s a demo shortcut versus what&apos;s
          production-ready, and shipping something you can actually click on rather than a
          slide deck.
        </p>
      </motion.div>
    </section>
  );
}
