"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm font-medium text-accent mb-2">Selected work</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Seven recent builds</h2>
      </motion.div>

      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
            className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-medium">{p.name}</h3>
              <span className="text-xs uppercase tracking-wide text-accent">{p.tag}</span>
            </div>
            <p className="text-muted mb-4">{p.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Live demo ↗
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Code ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
