import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { SHOP } from "@/lib/data";
import OpenStatus from "./OpenStatus";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className ?? ""}`} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
          <a
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
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
          <a
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-emerald-500"
          >
            <WhatsAppIcon className="h-4 w-4" />
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
