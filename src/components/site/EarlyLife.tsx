import earlyImg from "@/assets/early-life-gym.jpeg";

export function EarlyLife() {
  return (
    <section id="early-life" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="group relative block overflow-hidden rounded-xl border border-border/40 bg-card shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_50px_-12px_oklch(0.7_0.18_80/0.35)]">
            <img
              src={earlyImg}
              alt="Bench press setup at the gym"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[480px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 md:h-[600px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
          </div>
        </div>
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-primary/80">
            02 — Earlier Life
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-6xl">
            From curiosity<br />to craft.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Born on November 30, 2007, in Kroměříž, Czech Republic, I grew up in a calm
            and supportive environment, fascinated by heroes — both fictional and real.
            In 2024 a curiosity sparked by gaming and online videos led me into
            programming and web development.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            I balance school with the gym five days a week — building discipline
            mentally and physically — and I'm steadily laying the foundations of a life
            on my own terms.
          </p>
        </div>
      </div>
    </section>
  );
}