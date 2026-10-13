import youtubeThumb from "@/assets/youtube-thumb.jpg";
import bmwM4 from "@/assets/bmw-m4.png";
import budgetApp from "@/assets/budget-app.png";
import blogicBazar from "@/assets/blogic-bazar.png";
import zavadilMotorsport from "@/assets/zavadil-motorsport.png";
import redBullBlog from "@/assets/red-bull-blog.png";
import autoShine from "@/assets/autoShine.png";

const items = [
  { name: "YouTube — Pazaxcz", img: youtubeThumb, href: "https://www.youtube.com/@Pazaxcz" },
  { name: "BMW M4 Website", img: bmwM4, href: "https://patrikzav.github.io/PatrikZav/BMWwebsite/index.html" },
  { name: "Budget App", img: budgetApp, href: "https://patrikzav.github.io/PatrikZav/BudgetApp/index.html" },
  { name: "Red Bull Blog", img: redBullBlog, href: "https://i23zavapa.turney.cz" },
  { name: "Blogic Bazar", img: blogicBazar, href: "https://patrikzav.github.io/blum-bazar/" },
  { name: "Zavadil Motorsport", img: zavadilMotorsport, href: "https://zavadil-motorsport.onrender.com" },
  { name: "Auto Shine Detailing", img: autoShine, href: "https://patrikzav.github.io/AutoshineDetailing/" },
];

export function Gallery() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-primary/80">
            Selected work
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A look at what I've built.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {items.map((it) => (
            <a
              key={it.name}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block w-full overflow-hidden rounded-xl border border-border/40 bg-card shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_50px_-12px_oklch(0.7_0.18_80/0.35)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                <span className="font-display text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
                  {it.name}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}