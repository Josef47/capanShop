import { OPENING_HOURS, SLOT_MINUTES } from "./data";

export function hoursForDay(day: number) {
  return OPENING_HOURS.find((h) => h.day === day) ?? null;
}

export function isOpenNow(now: Date = new Date()): boolean {
  const h = hoursForDay(now.getDay());
  if (!h || !h.open || !h.close) return false;
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= toMin(h.open) && minutes < toMin(h.close);
}

export function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function toHHMM(min: number): string {
  const h = Math.floor(min / 60).toString().padStart(2, "0");
  const m = (min % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

/** All bookable time slots for a date (YYYY-MM-DD). Empty when closed. */
export function slotsForDate(dateStr: string): string[] {
  if (!dateStr) return [];
  const date = new Date(dateStr + "T12:00:00");
  if (isNaN(date.getTime())) return [];
  const h = hoursForDay(date.getDay());
  if (!h || !h.open || !h.close) return [];
  const slots: string[] = [];
  for (let m = toMin(h.open); m + SLOT_MINUTES <= toMin(h.close); m += SLOT_MINUTES) {
    slots.push(toHHMM(m));
  }
  return slots;
}

export function isSunday(dateStr: string): boolean {
  const d = new Date(dateStr + "T12:00:00");
  return !isNaN(d.getTime()) && d.getDay() === 0;
}

export function todayStr(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + days);
  return todayStr(d);
}

/** Monday of the week containing dateStr */
export function startOfWeek(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  const diff = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - diff);
  return todayStr(d);
}
