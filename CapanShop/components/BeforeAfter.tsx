"use client";

import { BEFORE_AFTER } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { lang, t } = useLang();

  return (
    <section id="before-after" className="py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("ba.subtitle")} title={t("ba.title")} />
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          {BEFORE_AFTER.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <div className="card group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40">
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`${item.label[lang]} — ${t("ba.before")} & ${t("ba.after")}`}
                    loading="lazy"
                    className="aspect-[5/8] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
                </div>
                <p className="p-4 text-center font-display text-lg text-cream-100">
                  {item.label[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
