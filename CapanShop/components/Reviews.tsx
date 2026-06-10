"use client";

import { REVIEWS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold-400" aria-label={`${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { lang, t } = useLang();

  return (
    <section id="reviews" className="bg-coffee-950 py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("reviews.subtitle")} title={t("reviews.title")} />
        <div className="grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.id} delay={i * 100}>
              <figure className="card relative h-full p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40">
                <span className="absolute -top-4 left-6 font-display text-6xl leading-none text-gold-400/30">
                  &ldquo;
                </span>
                <Stars rating={r.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-cream-200">
                  {r.text[lang]}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 font-display text-gold-400">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream-100">{r.name}</p>
                    <p className="text-xs text-cream-400">{r.date}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
