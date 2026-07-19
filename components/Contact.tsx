"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "sikdersmail@gmail.com", href: "mailto:sikdersmail@gmail.com" },
  { label: "GitHub", value: "github.com/rakib-sikder", href: "https://github.com/rakib-sikder" },
  { label: "LinkedIn", value: "in/rakibul-hasan-us", href: "https://www.linkedin.com/in/rakibul-hasan-us/" },
  { label: "X (Twitter)", value: "@Rakibsikder27", href: "https://x.com/Rakibsikder27" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium text-accent mb-2">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 max-w-lg">
          Have a project in mind? Let&apos;s talk.
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card px-4 py-3 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-muted">{l.label}</p>
              <p className="text-sm font-medium">{l.value}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
      <span>© {new Date().getFullYear()} Rakib Sikder</span>
      <span>Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
    </footer>
  );
}
