"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium text-accent mb-4"
      >
        Full-stack developer · Available for freelance work
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] max-w-2xl"
      >
        I build AI-powered products, automation tools, and interfaces that move well.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-muted text-lg"
      >
        Full-stack web apps, LLM-backed agents, browser extensions, and motion-heavy
        frontends — seven recent builds below, each with a live demo and the source open
        on GitHub.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a href="#work" className="rounded-full bg-accent text-white text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
          See my work
        </a>
        <a href="https://github.com/rakib-sikder" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border text-sm font-medium px-6 py-3 hover:border-muted transition-colors">
          GitHub ↗
        </a>
      </motion.div>
    </section>
  );
}
