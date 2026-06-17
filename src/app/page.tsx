import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import WhySection from "@/components/home/WhySection";
import CommunitySection from "@/components/home/CommunitySection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Taukei Enterprises | Building Businesses. Creating Impact. Strengthening Communities.",
  description:
    "Taukei Enterprises is a diversified California-based holding company dedicated to building exceptional businesses, creating lasting value, and strengthening communities. Founded by Pita G. Taukei.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ChairmanMessage />
      <PortfolioPreview />
      <WhySection />
      <CommunitySection />
      <ContactCTA />
    </>
  );
}
