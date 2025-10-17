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
    <section aria-label="Our partners" className="py-12 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-muted-foreground">Trusted by leading platforms</h3>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto items-center">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <div className="bg-card border rounded-lg p-3 w-full max-w-[160px] flex items-center justify-center">
                <img src={p.logo} alt={`${p.name} logo`} className="h-10 object-contain" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


