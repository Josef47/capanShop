"use client";

import { OPENING_HOURS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import OpenStatus from "./OpenStatus";

// Display order: Monday … Sunday
const ORDER = [1, 2, 3, 4, 5, 6, 0];

export default function OpeningHours() {
  const { t } = useLang();
  const today = new Date().getDay();

  return (
    <section id="hours" className="bg-coffee-950 py-20">
      <div className="container-shop grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            {t("hours.title")}
          </span>
          <h2 className="section-title">{t("hours.title")}</h2>
          <p className="mt-4 max-w-md text-cream-300">
            Capan Kapsalon — {t("footer.tagline")}.
          </p>
          <div className="mt-6">
            <OpenStatus large />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card overflow-hidden">
            {ORDER.map((day) => {
              const h = OPENING_HOURS.find((x) => x.day === day)!;
              const isToday = day === today;
              return (
                <div
                  key={day}
                  className={`flex items-center justify-between border-b border-coffee-700/40 px-6 py-3.5 transition-colors last:border-0 ${
                    isToday ? "bg-gold-400/10" : "hover:bg-coffee-800/40"
                  }`}
                >
                  <span
                    className={`text-sm uppercase tracking-wider ${
                      isToday ? "font-bold text-gold-300" : "text-cream-200"
                    }`}
                  >
                    {t(`day.${day}`)}
                    {isToday && (
                      <span className="ml-2 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-bold text-ink">
                        {t("admin.today")}
                      </span>
                    )}
                  </span>
                  <span
                    className={`font-display text-base ${
                      h.open ? "text-cream-100" : "italic text-red-400/80"
                    }`}
                  >
                    {h.open ? `${h.open} – ${h.close}` : t("hours.closed")}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
