export type Lang = "nl" | "en";

export interface ServiceItem {
  id: string;
  name: { nl: string; en: string };
  price: number;
  priceFrom?: boolean;
  durationMin: number;
}

export interface ServiceCategory {
  id: string;
  title: { nl: string; en: string };
  subtitle?: { nl: string; en: string };
  items: ServiceItem[];
}

export interface Barber {
  id: string;
  name: string;
  role: { nl: string; en: string };
  image: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  serviceId: string;
  barberId?: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  note?: string;
  source: "online" | "phone" | "admin";
  createdAt: string;
}

export interface CustomerNote {
  id: string;
  customerName: string;
  phone: string;
  note: string;
  updatedAt: string;
}

export interface DayHours {
  day: number; // 0 = Sunday
  open: string | null;
  close: string | null;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: { nl: string; en: string };
  date: string;
}
