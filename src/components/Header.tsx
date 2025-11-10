import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import zwiexLogo from "@/assets/zwiex logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-primary/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ZwieX Logo */}
          <button
            onClick={goHome}
            className="flex items-center gap-3 group"
          >
            {/* ZwieX Logo Image */}
            <img 
              src={zwiexLogo} 
              alt="ZwieX Logo" 
              className="h-10 w-auto group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform">ZwieX</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={goHome}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
            <button
              onClick={() => navigate('/our-story')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
            >
              Our Story / About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
            <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group inline-flex items-center gap-1">
                  <span>Services</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "rotate-0")} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => navigate('/website-development')}>
                  Website Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/web-hosting')}>
                  Web Hosting
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/ecommerce-solutions')}>
                  Ecommerce Solutions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/domain-registration')}>
                  Domain Registration
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    navigate('/ats-optimized-cv');
                    setIsServicesOpen(false);
                  }}
                >
                  ATS-Optimized CV Services
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          </nav>

          {/* CTA + Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="default"
              onClick={() => scrollToSection('services')}
              className="hover-glow"
            >
              Launch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in bg-white dark:bg-black">
            <nav className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>
              <button
                onClick={() => { navigate('/our-story'); setIsMobileMenuOpen(false); }}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Story / About Us
              </button>
              <button
                onClick={goHome}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => setIsMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileServicesOpen ? "rotate-180" : "rotate-0")} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-3 flex flex-col gap-2">
                  <button
                    onClick={() => { navigate('/website-development'); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Website Development
                  </button>
                  <button
                    onClick={() => { navigate('/web-hosting'); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Web Hosting
                  </button>
                  <button
                    onClick={() => { navigate('/ecommerce-solutions'); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Ecommerce Solutions
                  </button>
                  <button
                    onClick={() => { navigate('/domain-registration'); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Domain Registration
                  </button>
                  <button
                    onClick={() => { navigate('/ats-optimized-cv'); setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ATS-Optimized CV Services
                  </button>
                </div>
              )}
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="default"
                className="w-full"
                onClick={() => scrollToSection('services')}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
