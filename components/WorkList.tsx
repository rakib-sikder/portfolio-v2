"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

const PREVIEW_W = 320;
const PREVIEW_H = 200;

export function WorkList() {
  const [active, setActive] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.4 });

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    x.set(Math.min(e.clientX + 28, window.innerWidth - PREVIEW_W - 24));
    y.set(e.clientY - PREVIEW_H / 2);
  }

  const activeProject = active !== null ? projects[active] : null;
  const showPreview = finePointer && activeProject?.image;

  return (
    <section id="work" className="relative px-6 sm:px-10 py-16 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading n="02" title="Selected" accent="Work" />
      </motion.div>

      <div
        className="divide-y divide-border border-y border-border"
        onMouseMove={finePointer ? handleMove : undefined}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            onMouseEnter={() => setActive(i)}
            className="group relative flex items-start gap-4 sm:gap-6 py-8 px-2 -mx-2 rounded-xl transition-colors hover:bg-card"
          >
            <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-serif font-normal text-2xl sm:text-3xl tracking-tight group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-muted">{p.tag}</span>
              </div>
              <p className="text-muted mb-4 max-w-xl">{p.description}</p>

              {p.image && (
                <div className="relative mb-4 hidden pointer-coarse:block w-full max-w-sm aspect-video overflow-hidden rounded-xl border border-border">
                  <Image
                    src={p.image}
                    alt={`${p.name} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] rounded-full border border-border px-2.5 py-1 text-muted">
                      {t}
                    </span>
                  ))}
                </div>
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
          </motion.article>
        ))}
      </div>

      {/* Floating preview that follows the cursor over the list (fine pointers only). */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            key={activeProject.name}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.86 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: reduced ? x : springX, y: reduced ? y : springY }}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block h-[200px] w-[320px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            aria-hidden
          >
            <Image
              src={activeProject.image!}
              alt=""
              fill
              sizes="320px"
              className="object-cover object-top"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
