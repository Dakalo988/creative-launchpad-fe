import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart, CreditCard, Package, Users, TrendingUp, Shield } from "lucide-react";

const EcommerceSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <ShoppingCart className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">E-commerce Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Launch Your<span className="text-gradient"> Online Store</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Complete e-commerce solutions engineered to convert visitors into customers
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
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Full E-commerce Platform
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ready to take your products online? Our e-commerce solutions go beyond just a shopping cart — 
                we build complete digital storefronts that drive sales, engage customers, and scale with your business. 
                From product catalogs to payment processing, every feature is designed with one goal: turning 
                browsers into buyers.
              </p>
              <p>
                Starting at R7,000, each e-commerce website includes everything you need to launch and manage 
                your online business. We integrate secure payment gateways, build intuitive checkout experiences, 
                and optimize for maximum conversions. Plus, with 2 months of free VPS hosting, your store stays 
                fast and reliable from day one.
              </p>
            </div>
          </div>

          {/* E-commerce Package */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Complete E-commerce Package
              </h2>
            </div>
            
            <div className="bg-card border border-primary rounded-2xl p-12 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">E-commerce Website</h3>
                  <div className="text-2xl font-bold text-primary">From R7,000</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8">Complete online store with all essential features</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full e-commerce functionality</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Product catalog & cart</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Product pages</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Up to 20 Products</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Speed Optimized</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Payment gateway integration</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Order management system</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Customer accounts</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2 months free VPS hosting</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Free domain name (.co.za)</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>SSL certificate included</span>
                  </li>
                  {/* <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>10 Email accounts setup</span>
                  </li> */}
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Inventory management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Our E-commerce Solution?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                      <p className="text-muted-foreground">Integrated payment gateways ensure safe, seamless transactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Easy Management</h3>
                      <p className="text-muted-foreground">Intuitive admin panel to manage products, orders, and inventory.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Built to Convert</h3>
                      <p className="text-muted-foreground">Optimized checkout flow designed to maximize sales.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                      <p className="text-muted-foreground">PCI-compliant security to protect customer data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hosting Info */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">VPS Hosting Included</h3>
                <p className="text-muted-foreground">
                  E-commerce websites run on our dedicated VPS hosting for R350/month (after 2 free months). 
                  This ensures lightning-fast load times, enhanced security, and the capacity to handle high 
                  traffic volumes during peak shopping seasons.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-primary/20 rounded-2xl p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start selling online today with a complete e-commerce solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-glow"
                onClick={() => window.location.href = '/#contact'}
              >
                Get Your Online Store
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

export default EcommerceSolutions;

