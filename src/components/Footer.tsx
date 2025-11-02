import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import zwiexLogo from "@/assets/zwiex logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* ZwieX Logo */}
                <img 
                  src={zwiexLogo} 
                  alt="ZwieX Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold text-gradient">ZwieX</span>
              </div>
              <p className="text-xs font-light text-muted-foreground">
                good things meet innovation.
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium web development and hosting solutions for future-forward businesses across South Africa.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Get In Touch</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@zwiex.co.za" className="hover:text-primary transition-colors">
                  info@zwiex.co.za
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+27826656051" className="hover:text-primary transition-colors">
                  +27 82 665 6051
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                </div>
                <span>South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/website-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/web-hosting" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link to="/ecommerce-solutions" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/domain-registration" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                  Domain Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>© {currentYear} ZwieX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
