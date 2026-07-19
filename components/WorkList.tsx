"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function WorkList() {
  return (
    <section id="work" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading n="02" title="Selected Work" />
      </motion.div>

      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            className="group relative grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 py-8 px-2 -mx-2 rounded-xl transition-colors hover:bg-card"
          >
            <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{p.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted">{p.tag}</span>
              </div>
              <p className="text-muted mb-4 max-w-xl">{p.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 text-sm font-medium">
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
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
