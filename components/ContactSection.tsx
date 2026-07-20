"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";

const EMAIL = "sikdersmail@gmail.com";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard access can be blocked by the browser; fail silently
    }
  }

  return (
    <section id="contact" className="px-6 sm:px-10 py-16 scroll-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading n="03" title="Contact" />
        <p className="max-w-lg text-muted mb-8">
          Have a project in mind, or just want to talk about something you saw above? My
          inbox is open.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <MagneticButton>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block text-3xl sm:text-5xl font-semibold tracking-tight text-accent hover:opacity-90 transition-opacity break-all"
            >
              {EMAIL}
            </a>
          </MagneticButton>

          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            data-cursor-hover
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.svg
                  key="check"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12.5 9.5 18 20 6" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="copy"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="12" height="12" rx="2" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs uppercase tracking-widest text-accent"
              >
                Copied
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-6 text-sm">
          <a href="https://github.com/rakib-sikder" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rakibul-hasan-us/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Rakibsikder27" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            X (Twitter)
          </a>
        </div>
      </motion.div>

      <footer className="mt-20 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <span>© {new Date().getFullYear()} Rakib Sikder</span>
        <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
      </footer>
    </section>
  );
}
