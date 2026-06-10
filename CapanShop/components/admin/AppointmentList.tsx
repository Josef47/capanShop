"use client";

import { useState } from "react";
import { BARBERS, findService } from "@/lib/data";
import { appointmentStore } from "@/lib/store";
import { Appointment } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";
import BookingForm from "@/components/BookingForm";

export default function AppointmentList({
  appointments,
  onChanged,
}: {
  appointments: Appointment[];
  onChanged: () => void;
}) {
  const { lang, t } = useLang();
  const [editing, setEditing] = useState<Appointment | null>(null);

  if (appointments.length === 0) {
    return (
      <p className="rounded-sm border border-dashed border-coffee-700 px-6 py-10 text-center text-sm italic text-cream-400">
        {t("admin.noAppts")}
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {appointments.map((a) => {
        const svc = findService(a.serviceId);
        const barber = BARBERS.find((b) => b.id === a.barberId);
        return (
          <div key={a.id} className="card p-5">
            {editing?.id === a.id ? (
              <div>
                <BookingForm
                  source={a.source}
                  initial={a}
                  compact
                  onSaved={() => {
                    setEditing(null);
                    onChanged();
                  }}
                />
                <button
                  onClick={() => setEditing(null)}
                  className="mt-3 text-xs uppercase tracking-widest text-cream-400 hover:text-gold-300"
                >
                  {t("admin.cancel")}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-sm border border-gold-400/40 bg-coffee-950">
                    <span className="font-display text-base leading-tight text-gold-300">
                      {a.time}
                    </span>
                    <span className="text-[10px] text-cream-400">{a.date.slice(5)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-cream-100">
                      {a.customerName}
                      <span
                        className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          a.source === "online"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : a.source === "phone"
                            ? "bg-sky-500/15 text-sky-400"
                            : "bg-gold-400/15 text-gold-300"
                        }`}
                      >
                        {t(`admin.source.${a.source}`)}
                      </span>
                    </p>
                    <p className="text-sm text-cream-300">
                      {svc ? svc.name[lang] : a.serviceId}
                      {svc && <span className="text-gold-400"> · €{svc.price.toFixed(2).replace(".", ",")}</span>}
                      {barber && <span className="text-cream-400"> · {barber.name}</span>}
                    </p>
                    <p className="text-xs text-cream-400">{a.phone}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditing(a)}
                    className="rounded-sm border border-coffee-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream-200 transition-colors hover:border-gold-400 hover:text-gold-300"
                  >
                    {t("admin.edit")}
                  </button>
                  <button
                    onClick={() => {
                      appointmentStore.remove(a.id);
                      onChanged();
                    }}
                    className="rounded-sm border border-red-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-400 transition-colors hover:bg-red-500/10"
                  >
                    {t("admin.delete")}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
