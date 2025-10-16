import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  showHostingDetails: boolean;
  hostingPrice?: string;
  onSelectPlan: () => void;
}

const ServiceCard = ({
  title,
  price,
  description,
  features,
  highlight = false,
  showHostingDetails,
  hostingPrice,
  onSelectPlan,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl border bg-card p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        highlight && "border-primary shadow-lg ring-2 ring-primary/20"
      )}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-md">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Free Hosting Badge */}
      <div className="absolute -top-3 right-6">
        <Badge variant="secondary" className="shadow-sm text-xs">
          🎁 2 Months Free Hosting & Domain
        </Badge>
      </div>

      {/* Card Content */}
      <div className="space-y-6 pt-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-card-foreground">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        {/* Price */}
        <div className="border-t border-b py-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground">once-off</span>
          </div>
          
          {showHostingDetails && hostingPrice && (
            <div className="mt-3 p-3 bg-muted/50 rounded-lg animate-fade-in">
              <p className="text-sm text-muted-foreground">
                After free period:
              </p>
              <p className="text-lg font-semibold text-foreground">
                {hostingPrice}/month
              </p>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            variant={highlight ? "default" : "outline"}
            className="w-full"
            size="lg"
            onClick={onSelectPlan}
          >
            Select Plan
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={onSelectPlan}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
