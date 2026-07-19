"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Full-stack web",
    body: "React, Next.js, Node.js — real business logic (auth, server-validated writes, availability/checkout algorithms), not just CRUD.",
  },
  {
    title: "AI / LLM integration",
    body: "RAG pipelines, tool-forced structured output, streaming, and cost-aware agent workflows using Claude.",
  },
  {
    title: "Motion & interaction",
    body: "GSAP ScrollTrigger, Framer Motion — scroll-driven storytelling and micro-interactions that support the UX rather than distract from it.",
  },
  {
    title: "Automation & extensions",
    body: "Chrome extensions (Manifest V3), embeddable widgets, browser-based scraping/automation tools.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm font-medium text-accent mb-2">What I do</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Four areas, one toolkit</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-medium mb-2">{s.title}</h3>
            <p className="text-muted text-sm">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
