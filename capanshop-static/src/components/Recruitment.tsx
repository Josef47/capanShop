import { SHOP } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Recruitment() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden border-y border-gold-400/20 bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-900 py-16">
      <div className="container-shop relative z-10 flex flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <Reveal>
          <div className="max-w-2xl px-1 sm:px-2">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              Vacature
            </span>
            <h2 className="font-display text-3xl text-cream-100 sm:text-4xl">{t("recruit.title")}</h2>
            <p className="mt-3 text-cream-300">{t("recruit.text")}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="btn-gold whitespace-nowrap">
            ☎ {t("recruit.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
