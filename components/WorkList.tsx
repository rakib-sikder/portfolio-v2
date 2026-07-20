"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

function ProjectThumbnail({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.4 };
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), springConfig);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.3, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      className="relative hidden aspect-[16/10] w-56 shrink-0 isolate overflow-hidden rounded-[14px] border-[6px] border-neutral-900 bg-neutral-900 shadow-md hover:shadow-2xl hover:shadow-black/60 hover:ring-1 hover:ring-white/10 sm:block"
    >
      <Image src={src} alt={alt} fill sizes="260px" className="object-cover object-top rounded-[8px]" />
    </motion.div>
  );
}

export function WorkList() {
  return (
    <section id="work" className="relative px-6 sm:px-10 py-16 scroll-mt-6">
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
            className="group relative flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 px-2 -mx-2 rounded-xl transition-colors hover:bg-card"
          >
            <span className="self-start font-mono text-sm text-muted group-hover:text-accent transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-muted">{p.tag}</span>
              </div>
              <p className="text-muted mb-4 max-w-xl">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links sit directly beside the thumbnail — laptop-ratio preview that tilts toward the cursor. */}
            <div className="flex shrink-0 items-center gap-4">
              <div className="flex shrink-0 items-center gap-5 text-sm font-medium">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Live demo ↗
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Code ↗
                </a>
              </div>

              {p.image && <ProjectThumbnail src={p.image} alt={`${p.name} preview`} />}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
