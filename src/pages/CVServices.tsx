import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CVServicesSection from "@/components/CVServicesSection";
import { MessageSquare } from "lucide-react";

const CVServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">ATS-Optimized CV</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              ATS-Optimized<span className="text-gradient"> CV Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Professional CV creation and revamps designed to pass ATS filters and impress recruiters
            </p>
          </div>
        </div>
      </section>

      {/* Main Section (reuses homepage section for consistency) */}
      <CVServicesSection />

      <Footer />
    </div>
  );
};

export default CVServices;
