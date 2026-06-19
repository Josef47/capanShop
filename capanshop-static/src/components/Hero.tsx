import { useLang } from "@/lib/LanguageContext";
import { SHOP } from "@/lib/data";
import OpenStatus from "./OpenStatus";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,10,9,0.6)_100%)]" />

      <div className="container-shop relative z-10 px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl rounded-md border border-white/5 bg-ink/60 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:px-12">
          <div className="animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            <span className="section-eyebrow justify-center">
              <span className="h-px w-8 bg-gold-400" />
              {t("hero.since")}
              <span className="h-px w-8 bg-gold-400" />
            </span>
          </div>

          <h1 className="animate-fadeUp font-display text-4xl leading-tight text-cream-100 sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.25s" }}>
            {t("hero.title").split(", ").map((part, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="text-gold-400">{part}</span> : part}
              </span>
            ))}
          </h1>

          <div className="mt-5 animate-fadeUp" style={{ animationDelay: "0.35s" }}>
            <span className="inline-flex rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-sm font-medium text-gold-100 shadow-sm">
              {t("hero.womenNotice")}
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl animate-fadeUp text-base text-cream-300 sm:text-lg" style={{ animationDelay: "0.4s" }}>
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.55s" }}>
            <a
              href={`https://wa.me/${SHOP.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("hero.cta.book")}
            </a>
            <a href="#services" className="btn-outline w-full bg-ink/70 backdrop-blur-sm sm:w-auto">
              {t("hero.cta.prices")}
            </a>
          </div>

          <div className="mt-10 animate-fadeUp" style={{ animationDelay: "0.7s" }}>
            <OpenStatus large />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-gold-400/40 p-1.5">
          <div className="h-2.5 w-1 animate-bounce rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
