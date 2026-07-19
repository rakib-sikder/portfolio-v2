export interface Project {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  live?: string;
  repo: string;
}

export const projects: Project[] = [
  {
    name: "LeadPilot",
    tag: "AI / Agent",
    description:
      "Classifies inbound leads, scores intent, and conditionally drafts replies — skipping cold/spam leads so the model isn't paying to write emails nobody needs.",
    tech: ["Next.js", "Claude (tool-use)", "TypeScript"],
    live: "https://ai-lead-triage-agent.vercel.app",
    repo: "https://github.com/rakib-sikder/ai-lead-triage-agent",
  },
  {
    name: "DocChat",
    tag: "AI / RAG",
    description:
      "Upload a PDF, ask questions grounded strictly in its content. Embeddings run locally in the browser's server process — no per-chunk API cost.",
    tech: ["Next.js", "Transformers.js", "Claude"],
    live: "https://ai-doc-chat-ecru.vercel.app",
    repo: "https://github.com/rakib-sikder/ai-doc-chat",
  },
  {
    name: "ai-chat-widget",
    tag: "AI / Embeddable",
    description:
      "A white-labeled AI chat bubble any site can embed with one <script> tag — Shadow DOM isolated, multi-tenant by config, CORS locked per bot.",
    tech: ["Vanilla JS", "Next.js", "Claude"],
    live: "https://ai-chat-widget-chi.vercel.app",
    repo: "https://github.com/rakib-sikder/ai-chat-widget",
  },
  {
    name: "Orbit",
    tag: "Animation",
    description:
      "A motion-design showcase — a GSAP ScrollTrigger pinned scroll section, staggered reveals, animated counters, and a testimonial carousel.",
    tech: ["GSAP", "Framer Motion", "Next.js"],
    live: "https://animation-showcase-five.vercel.app",
    repo: "https://github.com/rakib-sikder/animation-showcase",
  },
  {
    name: "AI Page Extractor",
    tag: "Extension / Automation",
    description:
      "A Chrome extension that extracts structured data from any page by describing the fields you want — no per-site CSS selectors to maintain.",
    tech: ["Manifest V3", "Vanilla JS", "Claude API"],
    repo: "https://github.com/rakib-sikder/ai-page-extractor",
  },
  {
    name: "Slotwise",
    tag: "Full-stack / SaaS",
    description:
      "A booking micro-SaaS with a real availability algorithm — server-side re-validated so two people can't win the same slot.",
    tech: ["Next.js", "TypeScript"],
    live: "https://slotwise-booking.vercel.app",
    repo: "https://github.com/rakib-sikder/slotwise-booking",
  },
  {
    name: "Fieldstone",
    tag: "Full-stack / E-commerce",
    description:
      "A storefront demo — catalog filtering, a persistent cart, and a checkout that recomputes prices server-side instead of trusting the client.",
    tech: ["Next.js", "React Context", "TypeScript"],
    live: "https://fieldstone-shop.vercel.app",
    repo: "https://github.com/rakib-sikder/fieldstone-shop",
  },
];
