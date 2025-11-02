import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import zwiexLogo from "@/assets/zwiex logo.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-4 py-20 animate-fade-in">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          {/* ZwieX Logo/Brand */}
          <div className="flex flex-col items-center justify-center gap-8 mb-8 animate-scale-in">
            {/* ZwieX Logo Image */}
            <div className="relative">
              <img 
                src={zwiexLogo} 
                alt="ZwieX Logo" 
                className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-pulse-glow"
              />
            </div>
            
            {/* Brand Name */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-gradient">ZwieX</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light animate-fade-in-up">
                good things meet innovation.
              </p>
            </div>
          </div>

          {/* Main Tagline */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Premium Web Solutions<br />For The Future
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Cutting-edge web development, hosting, and innovation for businesses that refuse to stand still
            </p>
          </div>

          {/* Value Props - Minimal Tesla-style */}
          <div className="flex flex-wrap justify-center gap-8 text-base md:text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">2 Months Free Hosting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Free Domain (.co.za)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Premium Design</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToServices}
              className="group min-w-[200px] text-base font-semibold"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="min-w-[200px] text-base font-semibold backdrop-blur-sm border-2"
            >
              <Rocket className="h-5 w-5" />
              Launch Project
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-12 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="font-medium">Trusted by businesses across South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
