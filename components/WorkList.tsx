"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function WorkList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const previewX = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.4 });
  const previewY = useSpring(my, { stiffness: 160, damping: 22, mass: 0.4 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    mx.set(e.clientX);
    my.set(e.clientY);
  }

  return (
    <section
      id="work"
      className="relative px-6 sm:px-10 py-16 scroll-mt-6"
      onMouseMove={onMouseMove}
    >
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
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group relative grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 py-8 px-2 -mx-2 rounded-xl transition-colors hover:bg-card"
          >
            <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-muted">{p.tag}</span>
              </div>
              <p className="text-muted mb-4 max-w-xl">{p.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  {p.image && (
                    <div className="relative hidden h-16 w-28 shrink-0 overflow-hidden rounded-lg border border-border sm:block">
                      <Image
                        src={p.image}
                        alt={`${p.name} preview`}
                        fill
                        sizes="112px"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="flex gap-5 text-sm font-medium shrink-0">
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
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        style={{ left: previewX, top: previewY }}
        className="pointer-events-none fixed z-50 hidden -translate-y-1/2 translate-x-6 lg:block"
      >
        <motion.div
          animate={{
            opacity: hovered !== null ? 1 : 0,
            scale: hovered !== null ? 1 : 0.94,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[190px] w-[300px] overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/50 bg-card"
        >
          {projects.map(
            (p, i) =>
              p.image && (
                <motion.div
                  key={p.name}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} preview`}
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                  />
                </motion.div>
              )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
