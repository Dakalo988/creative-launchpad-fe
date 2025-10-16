import { Code, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Creative Nexus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional web development and hosting solutions for South African businesses.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@creativenexus.co.za" className="hover:text-foreground transition-colors">
                  info@creativenexus.co.za
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+27123456789" className="hover:text-foreground transition-colors">
                  +27 82 665 6051
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Web Hosting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Domain Registration
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Creative Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
