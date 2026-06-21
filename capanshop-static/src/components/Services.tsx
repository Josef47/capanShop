import { SERVICE_CATEGORIES, SHOP } from "@/lib/data";
import type { Lang, ServiceCategory } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORY_ICONS: Record<string, string> = {
  heren: "✂",
  kinderen: "★",
  dames: "❀",
  prothesen: "♛",
};

function ServiceCard({
  cat,
  delay,
  lang,
  t,
}: {
  cat: ServiceCategory;
  delay: number;
  lang: Lang;
  t: (key: string) => string;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card group flex h-full flex-col p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 text-2xl text-gold-400 transition-all duration-500 group-hover:rotate-12 group-hover:bg-gold-400 group-hover:text-ink">
            {CATEGORY_ICONS[cat.id]}
          </span>
          <h3 className="mt-4 font-display text-2xl uppercase tracking-widest text-gold-300">
            {cat.title[lang]}
          </h3>
          {cat.subtitle && (
            <p className="mt-1 text-xs uppercase tracking-wider text-cream-400">{cat.subtitle[lang]}</p>
          )}
          <div className="mx-auto mt-4 h-px w-16 bg-gold-400/40" />
        </div>
        <ul className="flex-1 space-y-3">
          {cat.items.map((item) => (
            <li
              key={item.id}
              className="group/item flex items-start gap-3 rounded-xl border border-white/5 bg-cream-50/5 px-3 py-3 transition-colors duration-300 hover:bg-cream-50/10"
            >
              <span className="min-w-0 flex-1 text-sm leading-relaxed text-cream-200 transition-colors group-hover/item:text-cream-100">
                {item.name[lang]}
              </span>
              {item.priceText ? (
                <span className="max-w-[11rem] text-right text-xs leading-snug text-cream-300">
                  {item.priceText[lang]}
                </span>
              ) : (
                <span className="whitespace-nowrap font-display text-lg font-semibold text-gold-400 sm:text-xl">
                  {item.priceFrom && (
                    <span className="mr-1 text-xs italic text-cream-400">{t("services.from")}</span>
                  )}
                  {item.price !== undefined && `€${item.price.toFixed(2).replace(".", ",").replace(",00", "")}`}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const { lang, t } = useLang();

  const byId = (id: string) => SERVICE_CATEGORIES.find((c) => c.id === id);
  const heren = byId("heren");
  const kinderen = byId("kinderen");
  const dames = byId("dames");
  const prothesen = byId("prothesen");

  return (
    <section id="services" className="relative py-24">
      <div className="container-shop px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("services.subtitle")} title={t("services.title")} />

        {/* Desktop: links Heren + Kinderen, rechts Dames */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-8">
            {heren && <ServiceCard cat={heren} delay={0} lang={lang} t={t} />}
            {kinderen && <ServiceCard cat={kinderen} delay={120} lang={lang} t={t} />}
          </div>
          {dames && <ServiceCard cat={dames} delay={240} lang={lang} t={t} />}
        </div>

        {/* Haarprothesen gecentreerd onder de kolommen */}
        {prothesen && (
          <div className="mx-auto mt-8 w-full max-w-md lg:max-w-xl">
            <ServiceCard cat={prothesen} delay={360} lang={lang} t={t} />
          </div>
        )}

        <Reveal className="mt-10 text-center">
          <p className="text-sm italic text-cream-400">
            {t("services.validFrom")} {SHOP.pricesValidFrom}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
