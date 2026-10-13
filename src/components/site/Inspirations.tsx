const names = ["Iman Gadzhi", "Jan Šrajer", "David Luu", "Jan Liška"];

export function Inspirations() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-card/40 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-8 text-[10px] uppercase tracking-[0.5em] text-primary/80">
          Inspired by the self-made
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-20">
          {names.map((n) => (
            <span
              key={n}
              className="font-display text-2xl text-muted-foreground transition-colors hover:text-foreground md:text-4xl"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}