import { OPENING_HOURS } from "./data";

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
