import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpeningHours from "@/components/OpeningHours";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import Recruitment from "@/components/Recruitment";
import GiftVoucher from "@/components/GiftVoucher";
import Instagram from "@/components/Instagram";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function App() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <OpeningHours />
        <Services />
        <Team />
        <Gallery />
        <BeforeAfter />
        <Reviews />
<Recruitment />
        <GiftVoucher />
        <Instagram />
        <Faq />
        <Contact />
        <Footer />
        <ScrollTopButton />
      </main>
    </LanguageProvider>
  );
}
