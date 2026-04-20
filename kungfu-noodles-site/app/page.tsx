import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import HandPulledNoodles from "@/components/HandPulledNoodles";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import FullMenu from "@/components/FullMenu";
import Reviews from "@/components/Reviews";
import OrderCTA from "@/components/OrderCTA";
import FoodTruck from "@/components/FoodTruck";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Visually hidden SEO H1 — satisfies the audit requirement without disrupting visual design */}
      <h1 className="sr-only">
        Tempe &amp; Chandler&apos;s Hand-Pulled Noodle House | Authentic Chinese Lamian
      </h1>

      <main id="main-content">
        <Hero />
        <ThreePillars />
        <HandPulledNoodles />
        <About />
        <SignatureDishes />
        <FullMenu />
        <Reviews />
        <OrderCTA />
        <FoodTruck />
        <Instagram />
        <FAQ />
        <Locations />
        <Contact />
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
