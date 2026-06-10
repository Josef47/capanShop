"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-coffee-950 py-24">
      <div className="container-shop max-w-3xl">
        <SectionHeading title={t("faq.title")} />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <Reveal key={item.id} delay={i * 80}>
                <div
                  className={`card overflow-hidden transition-colors duration-300 ${
                    isOpen ? "border-gold-400/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-cream-100">
                      {item.q[lang]}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/50 text-gold-400 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-cream-300">
                        {item.a[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
