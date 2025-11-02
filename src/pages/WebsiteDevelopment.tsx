import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Sparkles, Zap, Smartphone, Search, Mail, Code } from "lucide-react";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Website Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Build Your<span className="text-gradient"> Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Premium, custom websites engineered for performance, designed for growth
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
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Custom Website Development
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Your website is more than just a digital presence — it's your gateway to growth, your connection 
                to customers, and your competitive advantage. At ZwieX, we craft websites that don't just look 
                stunning — they perform, convert, and scale with your business.
              </p>
              <p>
                From sleek single-page portfolios to comprehensive business platforms, every line of code we write 
                is optimized for speed, security, and success. We blend cutting-edge technology with intuitive 
                design to create digital experiences that your customers will remember — and your competitors will envy.
              </p>
            </div>
          </div>

          {/* Packages */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Development Packages
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Static Website */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Static Website</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-4">R2,500</div>
                  <p className="text-muted-foreground mb-6">Simple, interactive web apps tailored to your business</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Single Page application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contact form integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Basic SEO optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2 months free hosting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Free domain name (.co.za)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>SSL certificate included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2 Email accounts setup</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Business Website */}
              <div className="bg-card border border-primary rounded-2xl p-8 hover:border-primary/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Business Website</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-4">R5,500</div>
                  <p className="text-muted-foreground mb-6">Full-featured corporate websites with 5 pages</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional custom design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>5 optimized pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced SEO optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contact forms & integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Content management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2 months free hosting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Free domain name (.co.za)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>SSL certificate included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>5 Email accounts setup</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Add-on Card */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Custom Solutions</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-4">Custom Pricing</div>
                  <p className="text-muted-foreground mb-6">Tailored development for unique business needs</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Multi-page websites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>API integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Database setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Third-party services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ongoing support</span>
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
                Why Choose Our Development?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Fully Responsive</h3>
                      <p className="text-muted-foreground">Perfect on mobile, tablet, and desktop — no matter the device.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                      <p className="text-muted-foreground">Optimized code and assets for instant page loads.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
                      <p className="text-muted-foreground">Built to rank and drive organic traffic to your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Future-Proof</h3>
                      <p className="text-muted-foreground">Built with modern technologies that scale with your growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Development Process
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {['Discovery', 'Design', 'Development', 'Launch'].map((step, index) => (
                <div key={step} className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 transform -translate-x-1/2" />
                  )}
                  <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-primary/20 rounded-2xl p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your vision and create a website that truly represents your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-glow"
                onClick={() => window.location.href = '/#contact'}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/'}
              >
                View All Services
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;

