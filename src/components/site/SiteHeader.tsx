import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#early-life", label: "Earlier Life" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:py-6">
        <a
          href="#top"
          className="font-display text-lg md:text-xl tracking-[0.35em] uppercase text-white"
        >
          Patrik Zavadil
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] uppercase tracking-[0.3em] text-white transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="md:hidden text-[13px] uppercase tracking-[0.3em] text-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}