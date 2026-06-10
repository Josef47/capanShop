"use client";

import { useEffect, useState } from "react";
import { isOpenNow } from "@/lib/hours";
import { useLang } from "@/lib/LanguageContext";

export default function OpenStatus({ large = false }: { large?: boolean }) {
  const { t } = useLang();
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-semibold uppercase tracking-wider ${
        large ? "text-sm" : "text-xs"
      } ${
        open
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
          : "border-red-500/40 bg-red-500/10 text-red-400"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          open ? "bg-emerald-400 animate-pulse" : "bg-red-400"
        }`}
      />
      {open ? t("status.open") : t("status.closed")}
    </span>
  );
}
