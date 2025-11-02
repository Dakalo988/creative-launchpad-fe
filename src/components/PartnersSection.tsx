import cpanelLogo from "@/assets/cpanel.png";
import wordpressLogo from "@/assets/woo.png";
import shopifyLogo from "@/assets/Shopify-ecommerce-platform.png.webp";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "cPanel", logo: cpanelLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Shopify", logo: shopifyLogo },
];

const PartnersSection = () => {
  return (
    <section aria-label="Our partners" className="py-16 bg-muted/20 border-t border-primary/10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground">Powered by Industry Leaders</h3>
          <p className="text-muted-foreground mt-2 font-light">Built with the best tools and platforms</p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto items-center animate-fade-in-up">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 w-full max-w-[180px] flex items-center justify-center transition-all hover:border-primary/50 hover:shadow-glow">
                <img src={p.logo} alt={`${p.name} logo`} className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


