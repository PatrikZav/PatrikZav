const projects = [
  {
    name: "YouTube — Pazaxcz",
    year: "2014",
    desc: "Game montages, car edits, and glimpses of my life including go-kart racing.",
    href: "https://www.youtube.com/@Pazaxcz",
  },
  {
    name: "First Personal Page",
    year: "2024",
    desc: "My very first website after three months of studying IT — the start of the journey.",
    href: "https://patrikzav.github.io/PatrikZav/Personal_page/firstpage.html",
  },
  {
    name: "BMW M4 Website",
    year: "2024",
    desc: "A school project after seven months of IT — my most sophisticated work in pure HTML/CSS.",
    href: "https://patrikzav.github.io/PatrikZav/BMWwebsite/index.html",
  },
  {
    name: "Second Personal Website",
    year: "2025",
    desc: "Hand-coded one year into my IT studies in pure HTML, CSS and JavaScript. Fully responsive and optimized — built on an older stack that I've since outgrown.",
    href: "https://patrikzav.github.io/PatrikZav/",
  },
  {
    name: "Budget App",
    year: "2025",
    desc: "My first team project and first JavaScript app — track income and expenses with Local Storage.",
    href: "https://patrikzav.github.io/PatrikZav/BudgetApp/index.html",
  },
  {
    name: "Bucket List App",
    year: "2025",
    desc: "First full-stack app on Node.js — create, edit, and manage personal goals. Responsive on every device.",
    href: "https://bucket-list-app-i6e6.onrender.com/",
  },
  {
    name: "Red Bull Blog",
    year: "2026",
    desc: "First time building a WordPress site from scratch using Elementor for layout editing. Partially optimized.",
    href: "https://i23zavapa.turney.cz",
    readmeHref: "https://patrikzav.github.io/Red-Bull-Blog/",
  },
  {
    name: "Blogic Bazar",
    year: "2026",
    desc: "Internship project for Business Logic — an internal marketplace built with React, Next.js and TypeScript on a local SQLite database, using various libraries and APIs. Link goes to the GitHub README with screenshots and setup instructions.",
    href: "https://patrikzav.github.io/blum-bazar/",
    readmeHref: "https://patrikzav.github.io/blum-bazar/",
  },
  {
    name: "Zavadil Motorsport",
    year: "2026",
    desc: "Solo school project — a premium car rental app featuring interactive 3D models (Three.js) and a custom reservation modal. Backend: Node.js, Express.js, Mongoose. Frontend: EJS, HTML, CSS, Vanilla JS. Database: MongoDB Atlas. On mobile devices, the 3D model is not working properly.",
    href: "https://zavadil-motorsport.onrender.com",
  },
  {
    name: "Auto Shine Detailing",
    year: "2026",
    desc: "Solo project built with TypeScript and JavaScript and React that I created just as a template, because I wanted to try some 3D animated website. ",
    href: "https://patrikzav.github.io/AutoshineDetailing/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-24">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-primary/80">
            03 — Projects
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Things I've built.
          </h2>
        </div>

        <ul className="divide-y divide-border/40 border-y border-border/40">
          {projects.map((p, i) => (
            <li key={p.name} className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 transition-colors md:gap-12 md:py-10">
              <span className="font-display text-xl text-muted-foreground md:text-2xl pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-3xl text-foreground transition-colors group-hover:text-primary md:text-4xl">
                  <a href={p.href} target="_blank" rel="noreferrer" className="before:absolute before:inset-0 before:z-0 outline-none">
                    {p.name}
                  </a>
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base relative pointer-events-none">
                  {p.desc}
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                {p.readmeHref && (
                  <a
                    href={p.readmeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary p-2"
                    title="Read.me / Documentation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                  </a>
                )}
                <span className="hidden text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:block pointer-events-none">
                  {p.year} ↗
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}