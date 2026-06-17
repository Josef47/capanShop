import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const MAX_STAMPS = 10;

export default function Loyalty() {
  const { t } = useLang();
  const [stamps, setStamps] = useState(0);

  useEffect(() => {
    setStamps(Number(window.localStorage.getItem("capan_loyalty_stamps") ?? 0));
  }, []);

  function addStamp() {
    const next = stamps >= MAX_STAMPS ? 0 : stamps + 1;
    setStamps(next);
    window.localStorage.setItem("capan_loyalty_stamps", String(next));
  }

  return (
    <section id="loyalty" className="py-24">
      <div className="container-shop grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            Capan Club
          </span>
          <h2 className="section-title">{t("loyalty.title")}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-cream-300">{t("loyalty.text")}</p>
          <button onClick={addStamp} className="btn-outline mt-7 !text-xs">
            {t("loyalty.addStamp")}
          </button>
        </Reveal>

        <Reveal delay={150}>
          <div className="card relative overflow-hidden p-8">
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-gold-300">Capan Club</h3>
                <span className="text-sm text-cream-300">{stamps}/{MAX_STAMPS} {t("loyalty.stamps")}</span>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-3">
                {Array.from({ length: MAX_STAMPS }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-full border-2 text-xl transition-all duration-500 ${
                      i < stamps
                        ? "border-gold-400 bg-gold-400/15 text-gold-400"
                        : "border-dashed border-coffee-700 text-coffee-700"
                    }`}
                  >
                    {i < stamps ? "✂" : i + 1}
                  </div>
                ))}
              </div>
              {stamps >= MAX_STAMPS && (
                <p className="mt-6 rounded-sm border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-center font-display text-lg text-gold-300">
                  🎉 {t("loyalty.full")}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
