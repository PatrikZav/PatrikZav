import { SiteHeader } from "./components/site/SiteHeader";
import { Hero } from "./components/site/Hero";
import { Gallery } from "./components/site/Gallery";
import { About } from "./components/site/About";
import { EarlyLife } from "./components/site/EarlyLife";
import { Projects } from "./components/site/Projects";
import { Inspirations } from "./components/site/Inspirations";
import { Contact } from "./components/site/Contact";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Gallery />
      <About />
      <EarlyLife />
      <Projects />
      <Inspirations />
      <Contact />
      <footer className="border-t border-border/40 py-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <a
          href="https://www.linkedin.com/in/patrik-zavadil/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
        >
          LinkedIn
        </a>
        <span className="mx-3 opacity-50">·</span>
        © {new Date().getFullYear()} Patrik Zavadil
      </footer>
    </main>
  );
}

export default App;
