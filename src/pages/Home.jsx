import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import FeaturedCaseStudies from "../components/home/FeaturedCaseStudies";
import WhatIBuild from "../components/home/WhatIBuild";
import UIUXShowcase from "../components/home/UIUXShowcase";
import SkillsSection from "../components/home/SkillsSection";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#183c40]">
      <Navbar />
      <Hero />
      <FeaturedCaseStudies />
      <WhatIBuild />
      <UIUXShowcase />
      <SkillsSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
