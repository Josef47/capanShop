import { Appointment, CustomerNote } from "./types";

/**
 * Appointment store — localStorage implementation.
 *
 * Future-ready: swap this module for a Supabase / Firebase / PostgreSQL
 * adapter. The interface (list/add/update/remove) stays identical, so the
 * UI never has to change.
 */

const APPT_KEY = "capan_appointments";
const NOTES_KEY = "capan_customer_notes";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "[]") as T[];
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const appointmentStore = {
  list(): Appointment[] {
    return read<Appointment>(APPT_KEY).sort((a, b) =>
      (a.date + a.time).localeCompare(b.date + b.time)
    );
  },
  add(appt: Omit<Appointment, "id" | "createdAt">): Appointment {
    const full: Appointment = {
      ...appt,
      id: `apt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    };
    write(APPT_KEY, [...read<Appointment>(APPT_KEY), full]);
    return full;
  },
  update(id: string, patch: Partial<Appointment>) {
    write(
      APPT_KEY,
      read<Appointment>(APPT_KEY).map((a) => (a.id === id ? { ...a, ...patch } : a))
    );
  },
  remove(id: string) {
    write(APPT_KEY, read<Appointment>(APPT_KEY).filter((a) => a.id !== id));
  },
  isSlotTaken(date: string, time: string, excludeId?: string): boolean {
    return read<Appointment>(APPT_KEY).some(
      (a) => a.date === date && a.time === time && a.id !== excludeId
    );
  },
};

export const noteStore = {
  list(): CustomerNote[] {
    return read<CustomerNote>(NOTES_KEY).sort((a, b) =>
      b.updatedAt.localeCompare(a.updatedAt)
    );
  },
  add(note: Omit<CustomerNote, "id" | "updatedAt">): CustomerNote {
    const full: CustomerNote = {
      ...note,
      id: `note_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      updatedAt: new Date().toISOString(),
    };
    write(NOTES_KEY, [...read<CustomerNote>(NOTES_KEY), full]);
    return full;
  },
  remove(id: string) {
    write(NOTES_KEY, read<CustomerNote>(NOTES_KEY).filter((n) => n.id !== id));
  },
};
