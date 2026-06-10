"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { BARBERS, SERVICE_CATEGORIES, findService } from "@/lib/data";
import { isSunday, slotsForDate, todayStr } from "@/lib/hours";
import { appointmentStore } from "@/lib/store";
import { Appointment } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";

interface Props {
  /** Marks the appointment's origin (online booking vs. admin/phone entry). */
  source?: Appointment["source"];
  /** Pre-fill values when editing an existing appointment. */
  initial?: Appointment | null;
  onSaved?: (appt: Appointment) => void;
  compact?: boolean;
}

export default function BookingForm({ source = "online", initial = null, onSaved, compact = false }: Props) {
  const { lang, t } = useLang();
  const [name, setName] = useState(initial?.customerName ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [serviceId, setServiceId] = useState(initial?.serviceId ?? "");
  const [barberId, setBarberId] = useState(initial?.barberId ?? "");
  const [date, setDate] = useState(initial?.date ?? "");
  const [time, setTime] = useState(initial?.time ?? "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [taken, setTaken] = useState<string[]>([]);

  // Pre-select the visitor's favourite barber (loyalty feature)
  useEffect(() => {
    if (!initial) {
      const fav = window.localStorage.getItem("capan_favorite_barber");
      if (fav) setBarberId(fav);
    }
  }, [initial]);

  const slots = useMemo(() => slotsForDate(date), [date]);

  useEffect(() => {
    if (!date) return;
    setTaken(
      slotsForDate(date).filter((s) => appointmentStore.isSlotTaken(date, s, initial?.id))
    );
  }, [date, initial]);

  const sundayChosen = date !== "" && isSunday(date);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !serviceId || !date || !time) {
      setError(t("booking.fillAll"));
      return;
    }
    if (isSunday(date)) {
      setError(t("booking.sundayClosed"));
      return;
    }
    if (appointmentStore.isSlotTaken(date, time, initial?.id)) {
      setError(t("booking.slotTaken"));
      return;
    }

    let saved: Appointment;
    if (initial) {
      appointmentStore.update(initial.id, {
        customerName: name.trim(),
        phone: phone.trim(),
        serviceId,
        barberId: barberId || undefined,
        date,
        time,
      });
      saved = { ...initial, customerName: name.trim(), phone: phone.trim(), serviceId, barberId: barberId || undefined, date, time };
    } else {
      saved = appointmentStore.add({
        customerName: name.trim(),
        phone: phone.trim(),
        serviceId,
        barberId: barberId || undefined,
        date,
        time,
        source,
      });
    }

    setSuccess(true);
    onSaved?.(saved);
  }

  function reset() {
    setName("");
    setPhone("");
    setServiceId("");
    setDate("");
    setTime("");
    setSuccess(false);
    setError("");
  }

  if (success && !onSaved) {
    return (
      <div className="card animate-fadeUp p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-3xl text-emerald-400">
          ✓
        </span>
        <h3 className="mt-5 font-display text-2xl text-gold-300">{t("booking.success.title")}</h3>
        <p className="mt-2 text-cream-300">{t("booking.success.text")}</p>
        {date && time && (
          <p className="mt-4 font-display text-lg text-cream-100">
            {date} · {time} — {findService(serviceId)?.name[lang]}
          </p>
        )}
        <button onClick={reset} className="btn-outline mt-7 !text-xs">
          {t("booking.another")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "card p-7 sm:p-9"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor={`bk-name-${source}`}>{t("booking.name")}</label>
          <input
            id={`bk-name-${source}`}
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jan Jansen"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label-field" htmlFor={`bk-phone-${source}`}>{t("booking.phone")}</label>
          <input
            id={`bk-phone-${source}`}
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06 12 34 56 78"
            type="tel"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="label-field" htmlFor={`bk-service-${source}`}>{t("booking.service")}</label>
          <select
            id={`bk-service-${source}`}
            className="input-field"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
          >
            <option value="">{t("booking.selectService")}</option>
            {SERVICE_CATEGORIES.map((cat) => (
              <optgroup key={cat.id} label={cat.title[lang]}>
                {cat.items.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name[lang]} — €{s.price.toFixed(2).replace(".", ",")}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field" htmlFor={`bk-barber-${source}`}>{t("booking.barber")}</label>
          <select
            id={`bk-barber-${source}`}
            className="input-field"
            value={barberId}
            onChange={(e) => setBarberId(e.target.value)}
          >
            <option value="">{t("booking.noPreference")}</option>
            {BARBERS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} — {b.role[lang]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field" htmlFor={`bk-date-${source}`}>{t("booking.date")}</label>
          <input
            id={`bk-date-${source}`}
            className="input-field"
            type="date"
            min={todayStr()}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
          />
          {sundayChosen && (
            <p className="mt-1.5 text-xs text-red-400">{t("booking.sundayClosed")}</p>
          )}
        </div>
        <div>
          <label className="label-field" htmlFor={`bk-time-${source}`}>{t("booking.time")}</label>
          <select
            id={`bk-time-${source}`}
            className="input-field"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={!date || sundayChosen || slots.length === 0}
          >
            <option value="">{t("booking.selectTime")}</option>
            {slots.map((s) => (
              <option key={s} value={s} disabled={taken.includes(s)}>
                {s} {taken.includes(s) ? `· ${t("admin.occupied")}` : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="mt-5 rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <button type="submit" className="btn-gold mt-7 w-full">
        {initial ? t("admin.save") : t("booking.submit")}
      </button>
    </form>
  );
}
