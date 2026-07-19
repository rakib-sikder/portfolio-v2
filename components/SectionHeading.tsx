export function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-accent text-sm">{n}</span>
      <h2 className="text-2xl font-semibold tracking-tight whitespace-nowrap">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
