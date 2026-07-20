import Image from "next/image";

const navItems = [
  { href: "#about", label: "About", n: "01" },
  { href: "#work", label: "Selected Work", n: "02" },
  { href: "#contact", label: "Contact", n: "03" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/rakib-sikder" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rakibul-hasan-us/" },
  { label: "X", href: "https://x.com/Rakibsikder27" },
];

export function Sidebar() {
  return (
    <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[380px] flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-10 lg:py-16">
      <div>
        <div className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
          <Image
            src="https://avatars.githubusercontent.com/u/57081756?v=4"
            alt="Rakib Sikder"
            fill
            sizes="64px"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            priority
          />
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight">Rakib Sikder</h1>
        <p className="mt-2 text-lg text-foreground/90">Full-Stack &amp; AI Developer</p>
        <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
          I build AI-powered products, automation tools, and interfaces that move well.
          Open to freelance work.
        </p>

        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                >
                  <span className="font-mono text-xs text-accent">{item.n}</span>
                  <span className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-accent transition-all" />
                  <span className="uppercase tracking-widest group-hover:translate-x-1 transition-transform">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-8 flex gap-5 lg:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex gap-5 mt-10 lg:mt-0">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
