import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Patrik standing on a beach at sunset"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative px-6 text-center" style={{ mixBlendMode: "difference" }}>
        <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[oklch(0.88_0.16_80)] md:text-xs">
          Developer · Creator · Student
        </p>
        <h1
          className="font-display text-[14vw] leading-[0.95] text-white md:text-[10vw] lg:text-[8.5rem]"
        >
          PATRIK ZAVADIL
          <span className="sr-only"> — Developer & Creator</span>
        </h1>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-primary/80 transition-colors hover:text-primary"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      </a>
    </section>
  );
}