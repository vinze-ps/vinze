import HeroSection from "@/containers/home-page/hero-section";
import CardSection from "@/containers/home-page/cards-section";
import MarqueesSection from "@/containers/home-page/marquees-section";
import ContactSection from "@/containers/home-page/contact-section";
import OverviewSection from "@/containers/home-page/overview-section";
import LeadingProjectsSection from "@/containers/home-page/leading-projects-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      {/* <CardSection />*/}
      <LeadingProjectsSection />
      <MarqueesSection />
      {/* <ContactSection /> */}
    </>
  );
}
