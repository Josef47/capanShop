"use client";

import { useMemo, useState } from "react";
import { findService } from "@/lib/data";
import { addDays, slotsForDate, startOfWeek, todayStr } from "@/lib/hours";
import { Appointment } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";

/** Weekly timeline calendar: days as columns, 30-min slots as rows. */
export default function CalendarView({ appointments }: { appointments: Appointment[] }) {
  const { lang, t } = useLang();
  const [weekStart, setWeekStart] = useState(() => startOfWeek(todayStr()));

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart]
  );

  // All distinct times across the week (09:00 … 17:30)
  const allTimes = useMemo(() => {
    const set = new Set<string>();
    days.forEach((d) => slotsForDate(d).forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [days]);

  const byDateTime = useMemo(() => {
    const map = new Map<string, Appointment>();
    appointments.forEach((a) => map.set(`${a.date}_${a.time}`, a));
    return map;
  }, [appointments]);

  const today = todayStr();

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <button onClick={() => setWeekStart(addDays(weekStart, -7))} className="btn-outline !px-4 !py-2 !text-xs">
          ← {t("admin.prevWeek")}
        </button>
        <span className="font-display text-lg text-gold-300">
          {weekStart} — {addDays(weekStart, 6)}
        </span>
        <button onClick={() => setWeekStart(addDays(weekStart, 7))} className="btn-outline !px-4 !py-2 !text-xs">
          {t("admin.nextWeek")} →
        </button>
      </div>

      <div className="overflow-x-auto rounded-md border border-coffee-700/50">
        <table className="w-full min-w-[760px] border-collapse text-xs">
          <thead>
            <tr className="bg-coffee-900">
              <th className="w-16 border-b border-r border-coffee-700/50 px-2 py-3 text-cream-400" />
              {days.map((d, i) => {
                const dayNum = new Date(d + "T12:00:00").getDay();
                return (
                  <th
                    key={d}
                    className={`border-b border-coffee-700/50 px-2 py-3 text-center ${
                      d === today ? "bg-gold-400/10" : ""
                    } ${i < 6 ? "border-r" : ""}`}
                  >
                    <span className="block font-display text-sm text-cream-100">
                      {t(`day.${dayNum}`)}
                    </span>
                    <span className={`text-[10px] ${d === today ? "font-bold text-gold-300" : "text-cream-400"}`}>
                      {d.slice(5)}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {allTimes.map((time) => (
              <tr key={time} className="group/row">
                <td className="border-r border-t border-coffee-700/50 bg-coffee-900 px-2 py-2 text-center font-display text-cream-300">
                  {time}
                </td>
                {days.map((d, i) => {
                  const open = slotsForDate(d).includes(time);
                  const appt = byDateTime.get(`${d}_${time}`);
                  const svc = appt ? findService(appt.serviceId) : null;
                  return (
                    <td
                      key={d}
                      className={`border-t border-coffee-700/30 px-1 py-1 align-top ${
                        i < 6 ? "border-r" : ""
                      } ${!open ? "bg-coffee-950/80" : d === today ? "bg-gold-400/5" : ""}`}
                    >
                      {!open ? (
                        <span className="block py-1.5 text-center text-coffee-700">—</span>
                      ) : appt ? (
                        <div
                          className="cursor-default rounded-sm border border-gold-400/50 bg-gold-400/15 px-2 py-1.5 transition-colors hover:bg-gold-400/25"
                          title={`${appt.customerName} · ${svc?.name[lang] ?? ""} · ${appt.phone}`}
                        >
                          <span className="block truncate font-semibold text-gold-300">
                            {appt.customerName}
                          </span>
                          <span className="block truncate text-[10px] text-cream-300">
                            {svc?.name[lang]}
                          </span>
                        </div>
                      ) : (
                        <span className="block rounded-sm py-1.5 text-center text-[10px] uppercase tracking-wider text-cream-400/40 transition-colors group-hover/row:text-cream-400/70">
                          {t("admin.free")}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex gap-6 text-xs text-cream-400">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-gold-400/50 bg-gold-400/15" />
          {t("admin.occupied")}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-coffee-700/50" />
          {t("admin.free")}
        </span>
      </div>
    </div>
  );
}
