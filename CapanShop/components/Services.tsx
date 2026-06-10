"use client";

import { SERVICE_CATEGORIES, SHOP } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORY_ICONS: Record<string, string> = {
  heren: "✂",
  kinderen: "★",
  dames: "❀",
};

export default function Services() {
  const { lang, t } = useLang();

  return (
    <section id="services" className="relative py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("services.subtitle")} title={t("services.title")} />

        <div className="grid gap-8 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 120}>
              <div className="card group flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="mb-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 text-2xl text-gold-400 transition-all duration-500 group-hover:rotate-12 group-hover:bg-gold-400 group-hover:text-ink">
                    {CATEGORY_ICONS[cat.id]}
                  </span>
                  <h3 className="mt-4 font-display text-2xl uppercase tracking-widest text-gold-300">
                    {cat.title[lang]}
                  </h3>
                  {cat.subtitle && (
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream-400">
                      {cat.subtitle[lang]}
                    </p>
                  )}
                  <div className="mx-auto mt-4 h-px w-16 bg-gold-400/40" />
                </div>

                <ul className="flex-1 space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.id} className="group/item flex items-baseline gap-2">
                      <span className="text-sm text-cream-200 transition-colors group-hover/item:text-cream-100">
                        {item.name[lang]}
                      </span>
                      <span className="mx-1 flex-1 border-b border-dotted border-coffee-700" />
                      <span className="whitespace-nowrap font-display text-base text-gold-400">
                        {item.priceFrom && (
                          <span className="mr-1 text-xs italic text-cream-400">
                            {t("services.from")}
                          </span>
                        )}
                        €{item.price.toFixed(2).replace(".", ",").replace(",00", "")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm italic text-cream-400">
            {t("services.validFrom")} {SHOP.pricesValidFrom}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
