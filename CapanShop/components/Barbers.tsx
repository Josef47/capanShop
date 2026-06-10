"use client";

import { useEffect, useState } from "react";
import { BARBERS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Barbers() {
  const { lang, t } = useLang();
  const [favorite, setFavorite] = useState<string | null>(null);

  useEffect(() => {
    setFavorite(window.localStorage.getItem("capan_favorite_barber"));
  }, []);

  function toggleFavorite(id: string) {
    const next = favorite === id ? null : id;
    setFavorite(next);
    if (next) window.localStorage.setItem("capan_favorite_barber", next);
    else window.localStorage.removeItem("capan_favorite_barber");
  }

  return (
    <section id="team" className="py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("barbers.subtitle")} title={t("barbers.title")} />
        <div className="grid gap-8 sm:grid-cols-3">
          {BARBERS.map((b, i) => (
            <Reveal key={b.id} delay={i * 120}>
              <div
                className={`card group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${
                  favorite === b.id ? "border-gold-400/70 shadow-[0_0_30px_rgba(212,175,55,0.15)]" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.image}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
                  {favorite === b.id && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      ★ {t("barbers.favorite")}
                    </span>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl text-cream-100">{b.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-wider text-gold-400">
                    {b.role[lang]}
                  </p>
                  <button
                    onClick={() => toggleFavorite(b.id)}
                    className={`mt-5 w-full rounded-sm border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                      favorite === b.id
                        ? "border-gold-400 bg-gold-400 text-ink"
                        : "border-coffee-700 text-cream-300 hover:border-gold-400 hover:text-gold-300"
                    }`}
                  >
                    {favorite === b.id ? `★ ${t("barbers.favorite")}` : `☆ ${t("barbers.setFavorite")}`}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
