import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import OpenStatus from "./OpenStatus";

const LINKS = [
  { href: "#home", key: "nav.home" },
  { href: "#services", key: "nav.services" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#reviews", key: "nav.reviews" },
  { href: "#contact", key: "nav.contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          ? "border-b border-gold-400/15 bg-ink/90 shadow-lg shadow-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-shop flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center pr-2">
          <img
            src="/capan-logo.gif"
            alt="Capan's Barber Shop"
            className="h-14 w-14 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span className="ml-3 hidden font-display text-xl tracking-wide text-cream-100 sm:block">
            Capan&apos;s <span className="text-gold-400">Barber Shop</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm uppercase tracking-widest text-cream-200 transition-colors hover:text-gold-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className="ml-12 hidden items-center gap-4 lg:flex">
          <OpenStatus />
          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="rounded-sm border border-coffee-700 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cream-200 transition-colors hover:border-gold-400 hover:text-gold-300"
            aria-label="Toggle language"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <a href="#contact" className="btn-gold !px-5 !py-2.5 !text-xs">
            {t("contact.whatsapp")}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLang(lang === "nl" ? "en" : "nl")}
            className="rounded-sm border border-coffee-700 px-2.5 py-1 text-xs font-bold uppercase text-cream-200"
          >
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-gold-400/10 bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="container-shop flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-3 text-sm uppercase tracking-widest text-cream-200 transition-colors hover:bg-coffee-800 hover:text-gold-300"
            >
              {t(l.key)}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold mt-2 !text-xs">
            {t("contact.whatsapp")}
          </a>
          <div className="mt-3 flex justify-center pb-2">
            <OpenStatus />
          </div>
        </div>
      </div>
    </header>
  );
}
