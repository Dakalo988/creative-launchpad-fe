import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Search, Shield, Zap, Mail, Gift } from "lucide-react";

const DomainRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Domain Registration</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Secure Your<span className="text-gradient"> Digital Identity</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Claim your perfect domain name — included free with every website package
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
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Domain Registration Services
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Your domain name is your digital address — the first thing customers see and remember. At ZwieX, 
                we make securing your perfect domain simple and seamless. Every website package includes a free 
                .co.za domain registration, so you can establish your South African presence from day one.
              </p>
              <p>
                We handle the entire registration process for you, from availability checks to DNS configuration. 
                Once registered, your domain is fully managed by us, ensuring it stays active, secure, and 
                properly connected to your website. No technical knowledge required — just your vision, 
                and we'll make it accessible to the world.
              </p>
            </div>
          </div>

          {/* Free Domain Offer */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Free With Every Package
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Static Website</h3>
                <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                <p className="text-muted-foreground">.co.za domain included</p>
              </div>

              <div className="bg-card border border-primary rounded-2xl p-8 hover:border-primary/40 transition-all text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Business Website</h3>
                <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                <p className="text-muted-foreground">.co.za domain included</p>
              </div>

              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
                <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                <p className="text-muted-foreground">.co.za domain included</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Complete Domain Management
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Availability Check</h3>
                      <p className="text-muted-foreground">We check domain availability and suggest alternatives.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Secure Registration</h3>
                      <p className="text-muted-foreground">Protected registration with privacy settings enabled.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
                      <p className="text-muted-foreground">DNS configured and connected to your website.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Renewal Reminders</h3>
                      <p className="text-muted-foreground">Never lose your domain with timely renewal notices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Domain Extensions */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Available Extensions
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {['.co.za', '.org.za', '.net.za', '.com'].map((ext) => (
                <div key={ext} className="bg-card border border-primary/20 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{ext}</div>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Domain Renewal</h3>
                <p className="text-muted-foreground mb-4">
                  Domains are registered for one year and must be renewed annually to remain active. 
                  We'll send you renewal reminders well in advance to ensure uninterrupted service. 
                  Domain renewal fees are billed separately from hosting and are paid directly by the client.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Domain registration fees vary by extension. The free domain 
                  offer applies to .co.za extensions with qualifying website packages.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-primary/20 rounded-2xl p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Claim Your Perfect Domain Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free .co.za domain when you purchase any website package
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

export default DomainRegistration;

