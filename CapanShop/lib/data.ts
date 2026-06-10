import { Barber, DayHours, Review, ServiceCategory } from "./types";

/**
 * Central dummy-data module.
 * Replace with Supabase / Firebase / PostgreSQL queries later —
 * every component reads from here, never hard-codes data.
 */

export const SHOP = {
  name: "Capan Kapsalon",
  phone: "+31153647232",
  phoneDisplay: "015 364 72 32",
  mobile: "+31611740604",
  mobileDisplay: "06 11 74 06 04",
  whatsapp: "31611740604",
  address: "Korte Baan 1, 2632 GL Nootdorp",
  email: "info@capan.nl",
  instagram: "@capansbarbershop",
  instagramUrl: "https://www.instagram.com/capansbarbershop/",
  pricesValidFrom: "01-01-2026",
};

// 0 = Sunday … 6 = Saturday
export const OPENING_HOURS: DayHours[] = [
  { day: 0, open: null, close: null },
  { day: 1, open: "11:00", close: "18:00" },
  { day: 2, open: "09:00", close: "18:00" },
  { day: 3, open: "09:00", close: "18:00" },
  { day: 4, open: "09:00", close: "18:00" },
  { day: 5, open: "09:00", close: "18:00" },
  { day: 6, open: "09:00", close: "18:00" },
];

export const SLOT_MINUTES = 30;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "heren",
    title: { nl: "Heren", en: "Men" },
    items: [
      { id: "h1", name: { nl: "Knippen", en: "Haircut" }, price: 23, durationMin: 30 },
      { id: "h2", name: { nl: "Knippen, wassen", en: "Haircut & wash" }, price: 25, durationMin: 30 },
      { id: "h3", name: { nl: "Knippen, scheren", en: "Haircut & shave" }, price: 38, durationMin: 60 },
      { id: "h4", name: { nl: "Knippen, wassen, drogen, gel en wax", en: "Haircut, wash, dry, gel & wax" }, price: 40, durationMin: 60 },
    ],
  },
  {
    id: "kinderen",
    title: { nl: "Kinderen", en: "Children" },
    subtitle: { nl: "t/m 8 jaar", en: "up to 8 years" },
    items: [
      { id: "k1", name: { nl: "Knippen jongens", en: "Boys haircut" }, price: 20, durationMin: 30 },
      { id: "k2", name: { nl: "Knippen meisjes", en: "Girls haircut" }, price: 22, durationMin: 30 },
    ],
  },
  {
    id: "dames",
    title: { nl: "Dames", en: "Women" },
    items: [
      { id: "d1", name: { nl: "Knippen", en: "Haircut" }, price: 25, durationMin: 30 },
      { id: "d2", name: { nl: "Wassen, knippen en drogen", en: "Wash, cut & dry" }, price: 30, durationMin: 45 },
      { id: "d3", name: { nl: "Wassen, knippen en föhnen (kort haar)", en: "Wash, cut & blow-dry (short hair)" }, price: 45, durationMin: 60 },
      { id: "d4", name: { nl: "Wassen, knippen en föhnen (lang haar)", en: "Wash, cut & blow-dry (long hair)" }, price: 50, durationMin: 75 },
      { id: "d5", name: { nl: "Wassen en föhnen", en: "Wash & blow-dry" }, price: 40, priceFrom: true, durationMin: 45 },
      { id: "d6", name: { nl: "High-Light", en: "Highlights" }, price: 65, durationMin: 90 },
      { id: "d7", name: { nl: "Uitgroei", en: "Root touch-up" }, price: 37, durationMin: 60 },
      { id: "d8", name: { nl: "Epileren wenkbrauwen met touw", en: "Eyebrow threading" }, price: 15, durationMin: 15 },
      { id: "d9", name: { nl: "Epileren bovenlip", en: "Upper lip threading" }, price: 7.5, durationMin: 15 },
      { id: "d10", name: { nl: "Wenkbrauwen verven", en: "Eyebrow tinting" }, price: 10, durationMin: 15 },
    ],
  },
];

export function findService(id: string) {
  for (const cat of SERVICE_CATEGORIES) {
    const item = cat.items.find((i) => i.id === id);
    if (item) return { ...item, category: cat };
  }
  return null;
}

export const BARBERS: Barber[] = [
  {
    id: "b1",
    name: "Ensar",
    role: { nl: "Meester-barbier", en: "Master barber" },
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  },
  {
    id: "b2",
    name: "Çapan",
    role: { nl: "Dames-specialist", en: "Ladies' specialist" },
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80",
  },
  {
    id: "b3",
    name: "Ahmed",
    role: { nl: "Barbier & stylist", en: "Barber & stylist" },
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&q=80",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ahmet Yusuf",
    rating: 5,
    text: {
      nl: "Een geweldige plek om je haar te laten knippen. Ze zijn er goed in om precies te maken wat je wilt.",
      en: "A great place to get a haircut. They are good at making what you want.",
    },
    date: "Local Guide \u00b7 23 reviews",
  },
  {
    id: "r2",
    name: "Gabor Racz",
    rating: 5,
    text: {
      nl: "Turkse barbershops zijn de beste. Punt. De service bij Capans is uitstekend: de mannen hier zijn goede barbiers, ze zijn beleefd, werken snel en voor een zeer redelijke prijs. Een echte aanrader.",
      en: "Turkish barbershops are the best. Period. The service at Capans is excellent: the guys here are good barbers, they are polite, work fast and for a very reasonable price. Highly recommended.",
    },
    date: "Local Guide \u00b7 75 reviews",
  },
  {
    id: "r3",
    name: "M.E. H.",
    rating: 5,
    text: {
      nl: "Geweldige service, vriendelijk personeel, betaalbare prijzen.",
      en: "Great service, friendly staff, affordable prices.",
    },
    date: "Local Guide \u00b7 335 reviews",
  },
];

export const GALLERY_IMAGES = [
  { src: "/gallery-1.jpg", alt: "Feest bij Capan's", tall: true },
  { src: "/gallery-2.jpg", alt: "Capan's Barbershop", tall: true },
  { src: "/gallery-3.jpg", alt: "In de salon", tall: true },
  { src: "/gallery-4.jpg", alt: "Capan's Barbershop", tall: true },
  { src: "/gallery-5.jpg", alt: "Blije klant", tall: true },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", alt: "Classic fade haircut", tall: true },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80", alt: "Barbershop interior" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", alt: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80", alt: "Vintage barber chair", tall: true },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80", alt: "Straight razor shave" },
  { src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=800&q=80", alt: "Hot towel treatment" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", alt: "Ladies styling", tall: true },
  { src: "https://images.unsplash.com/photo-1634302086887-13b5281f0d98?w=800&q=80", alt: "Barber tools" },
];

export const BEFORE_AFTER = [
  {
    id: "ba1",
    image: "/before-after-1.jpg",
    label: { nl: "Kleur & styling", en: "Colour & styling" },
  },
  {
    id: "ba2",
    image: "/before-after-2.jpg",
    label: { nl: "Balayage transformatie", en: "Balayage transformation" },
  },
];

export const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  "https://images.unsplash.com/photo-1634302086887-13b5281f0d98?w=400&q=80",
];

export const FAQ_ITEMS = [
  {
    id: "f1",
    q: { nl: "Moet ik een afspraak maken?", en: "Do I need an appointment?" },
    a: {
      nl: "Een afspraak is niet verplicht, maar wel aan te raden. Online boeken garandeert dat u direct geholpen wordt.",
      en: "An appointment is not required but recommended. Booking online guarantees you are helped right away.",
    },
  },
  {
    id: "f2",
    q: { nl: "Kan ik pinnen of contant betalen?", en: "Can I pay by card or cash?" },
    a: {
      nl: "Beide zijn mogelijk. Wij accepteren pin, contactloos en contant.",
      en: "Both are possible. We accept debit card, contactless and cash.",
    },
  },
  {
    id: "f3",
    q: { nl: "Knippen jullie ook kinderen?", en: "Do you also cut children's hair?" },
    a: {
      nl: "Jazeker! Kinderen t/m 8 jaar hebben een speciaal tarief. Wij nemen graag de tijd voor de kleintjes.",
      en: "Absolutely! Children up to 8 years have a special rate. We gladly take our time with the little ones.",
    },
  },
  {
    id: "f4",
    q: { nl: "Hoe werkt de spaarkaart?", en: "How does the loyalty card work?" },
    a: {
      nl: "Bij elke knipbeurt ontvangt u een stempel. Bij 10 stempels is de volgende knipbeurt gratis.",
      en: "You receive a stamp with every haircut. After 10 stamps your next haircut is free.",
    },
  },
  {
    id: "f5",
    q: { nl: "Verkopen jullie cadeaubonnen?", en: "Do you sell gift vouchers?" },
    a: {
      nl: "Ja, cadeaubonnen zijn verkrijgbaar in de salon voor elk gewenst bedrag.",
      en: "Yes, gift vouchers are available in the salon for any amount.",
    },
  },
];
