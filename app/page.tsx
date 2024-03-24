import HeroSection from "@/containers/home-page/hero-section";
import CardSection from "@/containers/home-page/cards-section";
import MarqueesSection from "@/containers/home-page/marquees-section";
import ContactSection from "@/containers/home-page/contact-section";
import CurrentlyWorkingOn from "@/containers/home-page/currently-working-on-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CurrentlyWorkingOn />
      {/* <CardSection />
      <MarqueesSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}
