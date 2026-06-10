"use client";

import { GALLERY_IMAGES } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="bg-coffee-950 py-24">
      <div className="container-shop">
        <SectionHeading eyebrow={t("gallery.subtitle")} title={t("gallery.title")} />
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>div]:mb-4">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <div className="group relative overflow-hidden rounded-md border border-coffee-700/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
                    img.tall ? "aspect-[3/4]" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="p-4 font-display text-sm tracking-wide text-gold-300">
                    {img.alt}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
