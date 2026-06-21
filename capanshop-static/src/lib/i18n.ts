import type { Lang } from "./types";

type Dict = Record<string, { nl: string; en: string }>;

export const DICT: Dict = {
  // Nav
  "nav.home": { nl: "Home", en: "Home" },
  "nav.services": { nl: "Diensten", en: "Services" },
  "nav.gallery": { nl: "Galerij", en: "Gallery" },
  "nav.reviews": { nl: "Reviews", en: "Reviews" },
  "nav.contact": { nl: "Contact", en: "Contact" },
  "nav.book": { nl: "Afspraak maken", en: "Book appointment" },
  "nav.admin": { nl: "Admin", en: "Admin" },

  // Hero
  "hero.title": { nl: "Klassieke Stijl, Moderne Elegantie", en: "Classic Style, Modern Elegance" },
  "hero.womenNotice": {
    nl: "Ook dameshaircuts • Vrouwelijke kapster beschikbaar",
    en: "Women's haircuts too • Female stylist available",
  },
  "hero.subtitle": {
    nl: "Professionele knipbeurten voor heren, dames en kinderen — inclusief damescuts met speciale aandacht.",
    en: "Professional haircuts for men, women and children — including women's cuts with special care.",
  },
  "hero.cta.book": { nl: "Afspraak maken", en: "Book appointment" },
  "hero.cta.prices": { nl: "Bekijk prijzen", en: "View prices" },
  "hero.since": { nl: "Vakmanschap sinds 2005", en: "Craftsmanship since 2005" },

  // Status
  "status.open": { nl: "Nu geopend", en: "Open now" },
  "status.closed": { nl: "Momenteel gesloten", en: "Currently closed" },

  // Hours
  "hours.title": { nl: "Openingstijden", en: "Opening hours" },
  "hours.closed": { nl: "Gesloten", en: "Closed" },
  "day.0": { nl: "Zondag", en: "Sunday" },
  "day.1": { nl: "Maandag", en: "Monday" },
  "day.2": { nl: "Dinsdag", en: "Tuesday" },
  "day.3": { nl: "Woensdag", en: "Wednesday" },
  "day.4": { nl: "Donderdag", en: "Thursday" },
  "day.5": { nl: "Vrijdag", en: "Friday" },
  "day.6": { nl: "Zaterdag", en: "Saturday" },

  // Services
  "services.title": { nl: "Diensten & Prijzen", en: "Services & Prices" },
  "services.subtitle": {
    nl: "Eerlijke prijzen, vakkundig resultaat",
    en: "Honest prices, expert results",
  },
  "services.validFrom": { nl: "Prijzen geldig vanaf", en: "Prices valid from" },
  "services.from": { nl: "vanaf", en: "from" },

  // Booking
  "booking.title": { nl: "Afspraak maken", en: "Book an appointment" },
  "booking.subtitle": {
    nl: "Reserveer uw moment van verzorging",
    en: "Reserve your moment of care",
  },
  "booking.name": { nl: "Naam", en: "Name" },
  "booking.phone": { nl: "Telefoonnummer", en: "Phone number" },
  "booking.service": { nl: "Dienst", en: "Service" },
  "booking.barber": { nl: "Voorkeur kapper (optioneel)", en: "Preferred barber (optional)" },
  "booking.noPreference": { nl: "Geen voorkeur", en: "No preference" },
  "booking.date": { nl: "Datum", en: "Date" },
  "booking.time": { nl: "Tijd", en: "Time" },
  "booking.selectService": { nl: "Kies een dienst…", en: "Choose a service…" },
  "booking.selectTime": { nl: "Kies een tijd…", en: "Choose a time…" },
  "booking.submit": { nl: "Bevestig afspraak", en: "Confirm appointment" },
  "booking.sundayClosed": {
    nl: "Op zondag zijn wij gesloten. Kies een andere dag.",
    en: "We are closed on Sundays. Please choose another day.",
  },
  "booking.slotTaken": {
    nl: "Dit tijdstip is al bezet. Kies een ander moment.",
    en: "This time slot is already taken. Please choose another.",
  },
  "booking.fillAll": { nl: "Vul alle velden in.", en: "Please fill in all fields." },
  "booking.success.title": { nl: "Afspraak bevestigd!", en: "Appointment confirmed!" },
  "booking.success.text": {
    nl: "Wij verheugen ons op uw bezoek. Tot snel bij Capan!",
    en: "We look forward to your visit. See you soon at Capan!",
  },
  "booking.another": { nl: "Nog een afspraak maken", en: "Book another appointment" },

  // Contact
  "contact.title": { nl: "Contact & Locatie", en: "Contact & Location" },
  "contact.subtitle": { nl: "Loop binnen of bel ons", en: "Walk in or give us a call" },
  "contact.phone": { nl: "Telefoon", en: "Phone" },
  "contact.mobile": { nl: "Mobiel", en: "Mobile" },
  "contact.address": { nl: "Adres", en: "Address" },
  "contact.whatsapp": { nl: "WhatsApp ons", en: "WhatsApp us" },
  "contact.maps": { nl: "Google Maps", en: "Google Maps" },
  "contact.mapsPlaceholder": {
    nl: "Kaart wordt hier geladen",
    en: "Map loads here",
  },

  // Recruitment
  "recruit.title": { nl: "Ervaren kapper/kapster gezocht", en: "Experienced barber/hairdresser wanted" },
  "recruit.text": {
    nl: "Kom even langs of bel voor nadere informatie.",
    en: "Drop by or call for more information.",
  },
  "recruit.cta": { nl: "Bel ons", en: "Call us" },

  // Gallery
  "gallery.title": { nl: "Galerij", en: "Gallery" },
  "gallery.subtitle": { nl: "Een blik in onze salon", en: "A look inside our salon" },

  // Reviews
  "reviews.title": { nl: "Wat klanten zeggen", en: "What clients say" },
  "reviews.subtitle": { nl: "Beoordeeld met 5 sterren", en: "Rated 5 stars" },

  // Barbers
  "barbers.title": { nl: "Ons team", en: "Our team" },
  "barbers.subtitle": { nl: "Kies uw favoriete kapper", en: "Choose your favourite barber" },
  "barbers.favorite": { nl: "Favoriet", en: "Favourite" },
  "barbers.setFavorite": { nl: "Maak favoriet", en: "Set as favourite" },
  "barbers.joinTitle": { nl: "Binnenkort", en: "Coming soon" },

  // Instagram
  "insta.title": { nl: "Volg ons op Instagram", en: "Follow us on Instagram" },

  // FAQ
  "faq.title": { nl: "Veelgestelde vragen", en: "Frequently asked questions" },

  // Before/after
  "ba.title": { nl: "Voor & Na", en: "Before & After" },
  "ba.subtitle": { nl: "Het verschil dat vakmanschap maakt", en: "The difference craftsmanship makes" },
  "ba.before": { nl: "Voor", en: "Before" },
  "ba.after": { nl: "Na", en: "After" },

  // Footer
  "footer.rights": { nl: "Alle rechten voorbehouden", en: "All rights reserved" },
  "footer.tagline": {
    nl: "Premium kapsalon voor heren, dames en kinderen",
    en: "Premium salon for men, women and children",
  },

  // Admin
  "admin.login": { nl: "Admin login", en: "Admin login" },
  "admin.loginBtn": { nl: "Inloggen als beheerder", en: "Log in as administrator" },
  "admin.loginHint": { nl: "Demo: één klik logt direct in.", en: "Demo: one click logs you in." },
  "admin.logout": { nl: "Uitloggen", en: "Log out" },
  "admin.dashboard": { nl: "Dashboard", en: "Dashboard" },
  "admin.today": { nl: "Vandaag", en: "Today" },
  "admin.week": { nl: "Deze week", en: "This week" },
  "admin.calendar": { nl: "Kalender", en: "Calendar" },
  "admin.notes": { nl: "Klantnotities", en: "Customer notes" },
  "admin.addAppt": { nl: "Afspraak toevoegen", en: "Add appointment" },
  "admin.addApptPhone": {
    nl: "Voeg handmatig een afspraak toe — bijv. voor klanten die bellen.",
    en: "Manually add an appointment — e.g. for customers who call.",
  },
  "admin.edit": { nl: "Bewerken", en: "Edit" },
  "admin.delete": { nl: "Verwijderen", en: "Delete" },
  "admin.save": { nl: "Opslaan", en: "Save" },
  "admin.cancel": { nl: "Annuleren", en: "Cancel" },
  "admin.noAppts": { nl: "Geen afspraken", en: "No appointments" },
  "admin.totalToday": { nl: "Afspraken vandaag", en: "Appointments today" },
  "admin.totalWeek": { nl: "Afspraken deze week", en: "Appointments this week" },
  "admin.revenueWeek": { nl: "Verwachte omzet (week)", en: "Expected revenue (week)" },
  "admin.source.online": { nl: "Online", en: "Online" },
  "admin.source.phone": { nl: "Telefonisch", en: "By phone" },
  "admin.source.admin": { nl: "Handmatig", en: "Manual" },
  "admin.note": { nl: "Notitie", en: "Note" },
  "admin.addNote": { nl: "Notitie toevoegen", en: "Add note" },
  "admin.backToSite": { nl: "Terug naar website", en: "Back to website" },
  "admin.occupied": { nl: "Bezet", en: "Occupied" },
  "admin.free": { nl: "Vrij", en: "Free" },
  "admin.prevWeek": { nl: "Vorige week", en: "Previous week" },
  "admin.nextWeek": { nl: "Volgende week", en: "Next week" },
};

export function translate(key: string, lang: Lang): string {
  return DICT[key]?.[lang] ?? key;
}
