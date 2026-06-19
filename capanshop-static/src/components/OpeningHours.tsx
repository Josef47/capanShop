import { useEffect, useState } from "react";
import { OPENING_HOURS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import OpenStatus from "./OpenStatus";

const ORDER = [1, 2, 3, 4, 5, 6, 0];

type Holiday = {
  date: string;
  name: string;
};

export default function OpeningHours() {
  const { t, lang } = useLang();
  const today = new Date().getDay();
  const [holiday, setHoliday] = useState<Holiday | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadHoliday() {
      try {
        const year = new Date().getFullYear();
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/NL`);
        if (!response.ok) return;

        const data = (await response.json()) as Array<{ date?: string; name?: string; localName?: string }>;
        const todayKey = new Date().toLocaleDateString("sv-SE");
        const match = data.find((item) => item.date === todayKey);

        if (!ignore && match) {
          setHoliday({
            date: match.date ?? todayKey,
            name: match.localName || match.name || "nationale feestdag",
          });
        }
      } catch {
        // Ignore API failures and keep the default schedule view.
      }
    }

    loadHoliday();
    return () => {
      ignore = true;
    };
  }, []);

  const isHolidayToday = holiday?.date === new Date().toLocaleDateString("sv-SE");

  return (
    <section id="hours" className="bg-coffee-950 py-20">
      <div className="container-shop grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="max-w-xl px-1 sm:px-2">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              {t("hours.title")}
            </span>
            <h2 className="section-title">{t("hours.title")}</h2>
            <p className="mt-4 text-cream-300">Capan's Barber Shop — {t("footer.tagline")}.</p>
            {isHolidayToday && holiday && (
              <p className="mt-4 rounded-md border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">
                {lang === "nl"
                  ? `Vandaag is de winkel gesloten vanwege ${holiday.name.toLowerCase()}.`
                  : `The shop is closed today because of ${holiday.name}.`}
              </p>
            )}
            <div className="mt-6">
              <OpenStatus large />
            </div>
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
                  className={`flex items-center justify-between border-b border-coffee-700/40 px-6 py-3.5 transition-colors last:border-0 ${isToday ? "bg-gold-400/10" : "hover:bg-coffee-800/40"}`}
                >
                  <span className={`text-sm uppercase tracking-wider ${isToday ? "font-bold text-gold-300" : "text-cream-200"}`}>
                    {t(`day.${day}`)}
                    {isToday && (
                      <span className="ml-2 rounded-full bg-gold-400 px-2 py-0.5 text-[10px] font-bold text-ink">
                        {t("admin.today")}
                      </span>
                    )}
                  </span>
                  <span className={`font-display text-base ${h.open ? "text-cream-100" : "italic text-red-400/80"}`}>
                    {h.open ? `${h.open} - ${h.close}` : t("hours.closed")}
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
