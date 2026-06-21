export type Lang = "nl" | "en";

export interface ServiceItem {
  id: string;
  name: { nl: string; en: string };
  price?: number;
  priceText?: { nl: string; en: string };
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
  /** CSS object-position for the photo crop, e.g. "center 25%". Defaults to center. */
  imagePosition?: string;
}

export interface DayHours {
  day: number;
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
