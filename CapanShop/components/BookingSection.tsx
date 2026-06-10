"use client";

import { useLang } from "@/lib/LanguageContext";
import BookingForm from "./BookingForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function BookingSection() {
  const { t } = useLang();

  return (
    <section id="booking" className="relative overflow-hidden bg-coffee-950 py-24">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container-shop relative z-10">
        <SectionHeading eyebrow={t("booking.subtitle")} title={t("booking.title")} />
        <Reveal className="mx-auto max-w-3xl">
          <BookingForm source="online" />
        </Reveal>
      </div>
    </section>
  );
}
