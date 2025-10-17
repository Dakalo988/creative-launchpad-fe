import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <ProjectsCarousel />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
