import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Server, Shield, Zap, Globe, Clock, Mail } from "lucide-react";

const WebHosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Server className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Web Hosting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium<span className="text-gradient"> Hosting Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Reliable, secure, and fast hosting engineered for your success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-24">
          
          {/* Overview */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Professional Web Hosting
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Your website deserves hosting that's as powerful and reliable as your business. At ZwieX, 
                we don't just host websites — we provide the foundation for your digital success. With 
                99.9% uptime, lightning-fast speeds, and round-the-clock support, your site stays online, 
                secure, and performing at its best.
              </p>
              <p>
                Every hosting package comes with essential features built-in: SSL certificates for security, 
                professional email accounts for communication, and automated backups for peace of mind. 
                No hidden fees, no complicated setups — just premium hosting that works, every time.
              </p>
            </div>
          </div>

          {/* Hosting Packages */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Hosting Plans
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Shared Hosting */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Shared Hosting</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-4">R99/month</div>
                  <p className="text-muted-foreground mb-6">Perfect for small businesses and personal websites</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2 months free with website purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional email accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>SSL/Personal certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Regular automated backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>99.9% uptime guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>24/7 technical support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Security monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* VPS Hosting */}
              <div className="bg-card border border-primary rounded-2xl p-8 hover:border-primary/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  E-COMMERCE
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Dedicated VPS</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-4">R350/month</div>
                  <p className="text-muted-foreground mb-6">High-performance hosting for online stores</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2 months free with e-commerce website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dedicated resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>All shared hosting features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Enhanced performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Unlimited traffic capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced security features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scalable infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Our Hosting?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                      <p className="text-muted-foreground">Built-in SSL certificates, firewalls, and malware protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Email</h3>
                      <p className="text-muted-foreground">Business email accounts with your domain name.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Lightning Speed</h3>
                      <p className="text-muted-foreground">Optimized servers deliver blazing-fast load times.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                      <p className="text-muted-foreground">Expert technical assistance whenever you need it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Domain Renewal</h3>
                <p className="text-muted-foreground">
                  Domain renewals are billed annually and paid separately by the client. We'll assist you 
                  with the renewal process to ensure your domain stays active and secure.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-primary/20 rounded-2xl p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get Premium Hosting Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with 2 months free hosting when you purchase a website
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-glow"
                onClick={() => window.location.href = '/#services'}
              >
                View Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/#contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebHosting;

