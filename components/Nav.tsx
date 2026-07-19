export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          Rakib Sikder
        </a>
        <nav className="hidden sm:flex items-center gap-7 text-sm text-muted">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-accent text-white text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
