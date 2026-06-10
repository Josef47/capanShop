import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpeningHours from "@/components/OpeningHours";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import BookingSection from "@/components/BookingSection";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import Loyalty from "@/components/Loyalty";
import Recruitment from "@/components/Recruitment";
import GiftVoucher from "@/components/GiftVoucher";
import Instagram from "@/components/Instagram";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OpeningHours />
      <Services />
      <Barbers />
      <BookingSection />
      <Gallery />
      <BeforeAfter />
      <Reviews />
      <Loyalty />
      <Recruitment />
      <GiftVoucher />
      <Instagram />
      <Faq />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}
