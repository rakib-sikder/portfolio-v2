"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const leadWords = "I build AI-powered products, automation tools, and interfaces that".split(" ");
const accentWords = "move well.".split(" ");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const word = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function IntroStatement() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-10 pt-16 lg:pt-24 pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[680px] bg-[radial-gradient(closest-side,rgba(255,138,61,0.12),transparent)]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6"
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
        className="relative font-serif font-normal text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.05] tracking-[-0.015em] max-w-3xl [text-wrap:balance]"
      >
        {leadWords.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-[0.28em]">
            {w}
          </motion.span>
        ))}
        <em className="italic text-accent">
          {accentWords.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.28em] last:mr-0">
              {w}
            </motion.span>
          ))}
        </em>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative mt-10 flex flex-wrap gap-4"
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
