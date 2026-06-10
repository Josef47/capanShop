"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      {eyebrow && (
        <span className="section-eyebrow justify-center">
          <span className="h-px w-8 bg-gold-400" />
          {eyebrow}
          <span className="h-px w-8 bg-gold-400" />
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="gold-divider" />
    </Reveal>
  );
}
