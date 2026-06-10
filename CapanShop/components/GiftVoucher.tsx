"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function GiftVoucher() {
  const { t } = useLang();

  return (
    <section id="gift" className="bg-coffee-950 py-24">
      <div className="container-shop">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-md border border-gold-400/30 bg-gradient-to-br from-coffee-800 to-coffee-950 p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:p-14">
            {/* Decorative corners */}
            <span className="absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-gold-400/60" />
            <span className="absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-gold-400/60" />
            <span className="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-gold-400/60" />
            <span className="absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-gold-400/60" />

            <span className="text-4xl">🎁</span>
            <h2 className="mt-4 font-display text-3xl text-gold-300 sm:text-4xl">
              {t("gift.title")}
            </h2>
            <div className="gold-divider" />
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream-300">
              {t("gift.text")}
            </p>
            <a href="#contact" className="btn-gold mt-8">
              {t("gift.cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
