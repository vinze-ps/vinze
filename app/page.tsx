import HeroSection from "@/containers/home-page/hero-section";
import CardSection from "@/containers/home-page/cards-section";
import MarqueesSection from "@/containers/home-page/marquees-section";
import StickySection from "@/containers/home-page/sticky-section";
import ContactSection from "@/containers/home-page/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CardSection />
      <MarqueesSection /> */}
      <StickySection />
      {/* <ContactSection /> */}
    </>
  );
}
