import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TEAM = [
  { id: "t1", name: "Capan",     role: null,                                           photo: "/team-capan.jpg" },
  { id: "t2", name: "Ceylan",    role: { nl: "Dames-specialist", en: "Ladies' specialist" }, photo: "/team-ceylan.jpg" },
  { id: "t3", name: "Muhammet",  role: null,                                           photo: "/team-muhammet.jpg" },
  { id: "t4", name: "Ensar",     role: null,                                           photo: "/team-ensar.jpg" },
  { id: "t5", name: "Ilhan",     role: null,                                           photo: "/team-ilhan.jpg" },
];

export default function Team() {
  const { lang } = useLang();

  return (
    <section id="team" className="py-24">
      <div className="container-shop">
        <SectionHeading
          eyebrow={lang === "nl" ? "Maak kennis met ons" : "Meet our team"}
          title={lang === "nl" ? "Ons Team" : "Our Team"}
        />

        {/* Team cards — 5 personen: 3 bovenaan, 2 gecentreerd eronder */}
        <div className="grid gap-8 sm:grid-cols-3">
          {TEAM.slice(0, 3).map((member, i) => (
            <Reveal key={member.id} delay={i * 100}>
              <TeamCard member={member} lang={lang} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:mx-auto sm:max-w-2xl">
          {TEAM.slice(3).map((member, i) => (
            <Reveal key={member.id} delay={i * 100}>
              <TeamCard member={member} lang={lang} />
            </Reveal>
          ))}
        </div>

        {/* Salon banner */}
        <Reveal delay={150} className="mt-20">
          <div className="relative overflow-hidden rounded-md border border-gold-400/20 bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-900 p-10 text-center sm:p-14">
            <div
              className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=60)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/90 via-coffee-950/70 to-coffee-950/90" />
            <div className="relative z-10">
              <span className="section-eyebrow justify-center">
                <span className="h-px w-8 bg-gold-400" />
                {lang === "nl" ? "Vakmanschap sinds 2005" : "Craftsmanship since 2005"}
                <span className="h-px w-8 bg-gold-400" />
              </span>
              <h3 className="mt-2 font-display text-3xl text-cream-100 sm:text-4xl">
                {lang === "nl" ? "Welkom bij Capan's" : "Welcome to Capan's"}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-cream-300">
                {lang === "nl"
                  ? "Al meer dan 20 jaar de vertrouwde kapsalon in Nootdorp. Loop gewoon binnen — wij staan voor u klaar."
                  : "Your trusted barber shop in Nootdorp for over 20 years. Just walk in — we're here for you."}
              </p>
              <a href="#contact" className="btn-gold mt-8 inline-flex">
                {lang === "nl" ? "Kom langs" : "Visit us"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Member = { id: string; name: string; role: { nl: string; en: string } | null; photo: string };

function TeamCard({ member, lang }: { member: Member; lang: "nl" | "en" }) {
  return (
    <div className="card group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Foto of placeholder */}
      <div className="relative h-72 overflow-hidden bg-coffee-800">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        {/* Initiaal fallback (altında kalır, foto yoksa görünür) */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <span className="font-display text-8xl font-bold text-gold-400/20">
            {member.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
      </div>

      <div className="p-6 text-center">
        <h3 className="font-display text-2xl text-cream-100">{member.name}</h3>
        {member.role && (
          <p className="mt-1 text-sm uppercase tracking-widest text-gold-400">
            {member.role[lang]}
          </p>
        )}
      </div>
    </div>
  );
}
