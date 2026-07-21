export function SectionHeading({ n, title, accent }: { n: string; title: string; accent?: string }) {
  return (
    <div className="relative mb-10 overflow-visible">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 -left-3 select-none font-serif italic leading-none text-[clamp(5.5rem,14vw,8.5rem)] text-transparent [-webkit-text-stroke:1px_#2e2a20]"
      >
        {n}
      </span>
      <div className="relative flex items-center gap-5 pt-6 pl-14 sm:pl-20">
        <h2 className="font-serif font-normal text-3xl sm:text-4xl tracking-tight whitespace-nowrap">
          {title}
          {accent && (
            <>
              {" "}
              <em className="italic text-accent">{accent}</em>
            </>
          )}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
