import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Creative Nexus - Web Development and Hosting Solutions" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-scale-in">
            <div className="p-3 bg-primary rounded-xl shadow-lg">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Creative Nexus
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Professional web development and hosting solutions that bring your digital vision to life
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Free 2-Month Hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Free Domain Name</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Professional Design</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToServices}
              className="group"
            >
              View Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 text-sm text-muted-foreground animate-fade-in-up">
            <p>Trusted by businesses across South Africa</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
