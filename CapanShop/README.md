# Capan's Barber Shop — Premium Barbershop Website

Vintage-luxury barbershop website for [capan.nl](https://www.capan.nl/), built with Next.js 14, React 18, TypeScript and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — admin dashboard at http://localhost:3000/admin (demo login: one click).

## Features

- Dark vintage-luxury theme (black / brown / gold / cream), NL/EN language toggle
- Live open/closed status based on opening hours
- Services & prices (Heren / Kinderen / Dames), valid from 01-01-2026
- Booking system: Sundays blocked, slots follow business hours, double bookings prevented, stored in localStorage
- Admin dashboard: stats, daily/weekly lists, weekly timeline calendar, manual (phone) bookings, edit/delete, customer notes
- Loyalty stamp card, favourite barber, gallery, before & after, reviews, FAQ, Instagram grid, gift vouchers, recruitment banner, WhatsApp button, scroll-to-top, reveal animations

## Architecture / backend-ready

All data flows through two modules, so a real backend drops in without UI changes:

- `lib/data.ts` — services, hours, barbers, dummy content (replace with DB queries)
- `lib/store.ts` — appointment & notes store (localStorage now; swap for a Supabase/Firebase/PostgreSQL adapter with the same `list/add/update/remove` interface)

Other key files: `lib/hours.ts` (slot & open/closed logic), `lib/i18n.ts` + `lib/LanguageContext.tsx` (translations), `components/BookingForm.tsx` (shared by public booking and admin).

Images are Unsplash placeholders — replace with real salon photos.
