import { useLang } from "@/lib/LanguageContext";
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
            <span className="inline-flex w-full items-center justify-center rounded-sm border border-gold-400/50 bg-gold-400/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-gold-200 sm:w-auto">
              {t("hero.cta.book")}
            </span>
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
