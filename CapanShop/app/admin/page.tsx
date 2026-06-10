"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { findService } from "@/lib/data";
import { addDays, startOfWeek, todayStr } from "@/lib/hours";
import { appointmentStore, noteStore } from "@/lib/store";
import { Appointment, CustomerNote } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";
import BookingForm from "@/components/BookingForm";
import AppointmentList from "@/components/admin/AppointmentList";
import CalendarView from "@/components/admin/CalendarView";
import CustomerNotes from "@/components/admin/CustomerNotes";

type Tab = "dashboard" | "today" | "week" | "calendar" | "add" | "notes";

export default function AdminPage() {
  const { lang, setLang, t } = useLang();
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("dashboard");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [notes, setNotes] = useState<CustomerNote[]>([]);
  const [addedFlash, setAddedFlash] = useState(false);

  const refresh = useCallback(() => {
    setAppointments(appointmentStore.list());
    setNotes(noteStore.list());
  }, []);

  useEffect(() => {
    setLoggedIn(window.localStorage.getItem("capan_admin") === "1");
    refresh();
  }, [refresh]);

  const today = todayStr();
  const weekStart = startOfWeek(today);
  const weekEnd = addDays(weekStart, 6);

  const todays = useMemo(() => appointments.filter((a) => a.date === today), [appointments, today]);
  const weeks = useMemo(
    () => appointments.filter((a) => a.date >= weekStart && a.date <= weekEnd),
    [appointments, weekStart, weekEnd]
  );
  const weekRevenue = useMemo(
    () => weeks.reduce((sum, a) => sum + (findService(a.serviceId)?.price ?? 0), 0),
    [weeks]
  );

  // ---- Login screen (dummy: one click logs in) ----
  if (loggedIn === null) return null;
  if (!loggedIn) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="card w-full max-w-md animate-fadeUp p-10 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/capan-logo.gif"
            alt="Capan's Barber Shop"
            className="mx-auto h-24 w-24 rounded-2xl shadow-lg"
          />
          <h1 className="mt-5 font-display text-3xl text-cream-100">{t("admin.login")}</h1>
          <div className="gold-divider" />
          <p className="mt-5 text-sm text-cream-400">{t("admin.loginHint")}</p>
          <button
            onClick={() => {
              window.localStorage.setItem("capan_admin", "1");
              setLoggedIn(true);
            }}
            className="btn-gold mt-7 w-full"
          >
            {t("admin.loginBtn")}
          </button>
          <Link
            href="/"
            className="mt-5 block text-xs uppercase tracking-widest text-cream-400 transition-colors hover:text-gold-300"
          >
            ← {t("admin.backToSite")}
          </Link>
        </div>
      </main>
    );
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "dashboard", label: t("admin.dashboard") },
    { id: "today", label: t("admin.today") },
    { id: "week", label: t("admin.week") },
    { id: "calendar", label: t("admin.calendar") },
    { id: "add", label: t("admin.addAppt") },
    { id: "notes", label: t("admin.notes") },
  ];

  return (
    <main className="min-h-screen pb-20">
      {/* Admin header */}
      <header className="border-b border-gold-400/15 bg-coffee-950">
        <div className="container-shop flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/capan-logo.gif"
              alt="Capan's Barber Shop"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-display text-lg text-gold-400">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "nl" ? "en" : "nl")}
              className="rounded-sm border border-coffee-700 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cream-200 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {lang === "nl" ? "EN" : "NL"}
            </button>
            <Link
              href="/"
              className="hidden rounded-sm border border-coffee-700 px-3 py-1.5 text-xs uppercase tracking-widest text-cream-300 transition-colors hover:border-gold-400 hover:text-gold-300 sm:block"
            >
              {t("admin.backToSite")}
            </Link>
            <button
              onClick={() => {
                window.localStorage.removeItem("capan_admin");
                setLoggedIn(false);
              }}
              className="rounded-sm border border-red-500/30 px-3 py-1.5 text-xs uppercase tracking-widest text-red-400 transition-colors hover:bg-red-500/10"
            >
              {t("admin.logout")}
            </button>
          </div>
        </div>
        {/* Tabs */}
        <div className="container-shop -mb-px flex gap-1 overflow-x-auto pb-0 pt-2">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`whitespace-nowrap rounded-t-sm border-b-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                tab === tb.id
                  ? "border-gold-400 bg-coffee-900 text-gold-300"
                  : "border-transparent text-cream-400 hover:text-cream-200"
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </header>

      <div className="container-shop pt-10">
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div className="animate-fadeUp space-y-10">
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="card p-7 text-center">
                <p className="font-display text-5xl text-gold-400">{todays.length}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream-400">
                  {t("admin.totalToday")}
                </p>
              </div>
              <div className="card p-7 text-center">
                <p className="font-display text-5xl text-gold-400">{weeks.length}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream-400">
                  {t("admin.totalWeek")}
                </p>
              </div>
              <div className="card p-7 text-center">
                <p className="font-display text-5xl text-gold-400">
                  €{weekRevenue.toFixed(0)}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream-400">
                  {t("admin.revenueWeek")}
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-display text-2xl text-cream-100">
                {t("admin.today")} · {today}
              </h2>
              <AppointmentList appointments={todays} onChanged={refresh} />
            </div>
          </div>
        )}

        {/* Today */}
        {tab === "today" && (
          <div className="animate-fadeUp">
            <h2 className="mb-4 font-display text-2xl text-cream-100">
              {t("admin.today")} · {today}
            </h2>
            <AppointmentList appointments={todays} onChanged={refresh} />
          </div>
        )}

        {/* Week */}
        {tab === "week" && (
          <div className="animate-fadeUp">
            <h2 className="mb-4 font-display text-2xl text-cream-100">
              {t("admin.week")} · {weekStart} — {weekEnd}
            </h2>
            <AppointmentList appointments={weeks} onChanged={refresh} />
          </div>
        )}

        {/* Calendar */}
        {tab === "calendar" && (
          <div className="animate-fadeUp">
            <CalendarView appointments={appointments} />
          </div>
        )}

        {/* Add appointment (phone customers) */}
        {tab === "add" && (
          <div className="animate-fadeUp mx-auto max-w-2xl">
            <h2 className="mb-2 font-display text-2xl text-cream-100">{t("admin.addAppt")}</h2>
            <p className="mb-6 text-sm text-cream-400">{t("admin.addApptPhone")}</p>
            {addedFlash && (
              <p className="mb-5 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                ✓ {t("booking.success.title")}
              </p>
            )}
            <BookingForm
              key={appointments.length}
              source="phone"
              onSaved={() => {
                refresh();
                setAddedFlash(true);
                setTimeout(() => setAddedFlash(false), 4000);
              }}
            />
          </div>
        )}

        {/* Customer notes */}
        {tab === "notes" && (
          <div className="animate-fadeUp">
            <h2 className="mb-6 font-display text-2xl text-cream-100">{t("admin.notes")}</h2>
            <CustomerNotes notes={notes} onChanged={refresh} />
          </div>
        )}
      </div>
    </main>
  );
}
