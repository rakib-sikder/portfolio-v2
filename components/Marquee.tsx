export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-border py-4" aria-hidden>
      <div className="flex w-max gap-8 animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm uppercase tracking-widest text-muted whitespace-nowrap">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
