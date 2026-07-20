"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const words = "I build AI-powered products, automation tools, and interfaces that move well.".split(" ");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } },
};

const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function IntroStatement() {
  return (
    <section className="px-6 sm:px-10 pt-16 lg:pt-24 pb-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Available for freelance work
      </motion.p>

      <motion.h2
        variants={container}
        initial="hidden"
        animate="show"
        className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] max-w-2xl"
      >
        {words.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-[0.28em]">
            {w}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <MagneticButton>
          <a href="#work" className="block rounded-full bg-accent text-background text-sm font-medium px-7 py-3.5">
            View my work
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="https://github.com/rakib-sikder"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full border border-border text-sm font-medium px-7 py-3.5 hover:border-accent/60 transition-colors"
          >
            GitHub ↗
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
