import { OPENING_HOURS, SHOP } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ORDER = [1, 2, 3, 4, 5, 6, 0];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("contact.subtitle")} title={t("contact.title")} />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card flex h-full flex-col gap-6 p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">☎</span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-cream-400">{t("contact.phone")}</h3>
                  <a href={`tel:${SHOP.phone}`} className="block font-display text-xl text-cream-100 transition-colors hover:text-gold-300">{SHOP.phoneDisplay}</a>
                  <a href={`tel:${SHOP.mobile}`} className="block font-display text-xl text-cream-100 transition-colors hover:text-gold-300">
                    {SHOP.mobileDisplay} <span className="text-sm text-cream-400">({t("contact.mobile")})</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">⚲</span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-cream-400">{t("contact.address")}</h3>
                  <p className="font-display text-xl text-cream-100">{SHOP.address}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${SHOP.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("contact.whatsappCta")}
              </a>

              <div className="mt-2 border-t border-coffee-700/50 pt-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cream-400">{t("hours.title")}</h3>
                <div className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
                  {ORDER.map((day) => {
                    const h = OPENING_HOURS.find((x) => x.day === day)!;
                    return (
                      <div key={day} className="flex justify-between gap-4 sm:pr-6">
                        <span className="text-cream-300">{t(`day.${day}`)}</span>
                        <span className={h.open ? "text-cream-100" : "italic text-red-400/80"}>
                          {h.open ? `${h.open}–${h.close}` : t("hours.closed")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card group relative flex h-full min-h-[420px] items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                style={{ backgroundImage: "url(/shop-outside.webp)" }}
              />
              <div className="relative z-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400 text-3xl text-gold-400">⚲</span>
                <p className="mt-4 font-display text-xl text-cream-100">{t("contact.maps")}</p>
                <p className="mt-1 text-sm text-cream-400">{t("contact.mapsPlaceholder")}</p>
                <p className="mt-3 text-sm text-gold-300">{SHOP.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
