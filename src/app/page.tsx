import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TrustStats } from "@/components/home/TrustStats";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BusinessProfileCTA } from "@/components/home/BusinessProfileCTA";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8eef6]">
      <Header />

      <main>
        <HeroSection />
        <TrustStats />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseUs />
        <ClientsMarquee />
        <TestimonialsSection />
        <BusinessProfileCTA />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
