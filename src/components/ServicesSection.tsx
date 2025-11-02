import { useState } from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Server } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const servicesData = [
  {
    title: "Static Website",
    price: "R2,500",
    description: "Simple, interactive web apps tailored to your business",
    features: [
      "Responsive design for all devices",
      "Single Page",
      "Contact form integration",
      "Basic SEO optimization",
      "2 months free hosting",
      "Free domain name co.za included",
      "SSL certificate included",
      "2 Email accounts setup",
      
    ],
    hostingPrice: "R99",
    highlight: false,
  },
  {
    title: "Business Website",
    price: "R5,500",
    description: "Full-featured corporate websites with 5 pages",
    features: [
      "Professional custom design",
      "5 optimized pages",
      "Advanced SEO optimization",
      "Contact forms & integrations",
      "Content management system",
      "2 months free hosting",
      "Free domain name co.za included",
      "SSL certificate included",
      "5 Email accounts setup",
    ],
    hostingPrice: "R99",
    highlight: true,
  },
  {
    title: "E-commerce Website",
    price: "From R7,000",
    description: "Complete online store with all essential features",
    features: [
      "Full e-commerce functionality",
      "Product catalog & cart",
      "Product pages",
      "Up to 20 Products",
      "Speed Optimized",
      "Payment gateway integration",
      "Order management system",
      "Customer accounts",
      "2 months free VPS hosting",
      "Free domain name co.za included",
      "SSL certificate included",
      "10 Email accounts setup",
      "Inventory management",
      
    ],
    hostingPrice: "R350 Dedicated VPS Hosting",
    highlight: false,
  },
];

const ServicesSection = () => {
  const [showHostingDetails, setShowHostingDetails] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const selectionSchema = z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(100, { message: "Name must be less than 100 characters" }),
    email: z
      .string()
      .trim()
      .email({ message: "Please enter a valid email address" })
      .max(255, { message: "Email must be less than 255 characters" }),
    phone: z
      .string()
      .trim()
      .min(10, { message: "Please enter a valid phone number" })
      .max(20, { message: "Phone number must be less than 20 characters" })
      .regex(/^[0-9+\s()-]+$/, { message: "Please enter a valid phone number" }),
    message: z.string().trim().max(1000).optional(),
  });

  type SelectionFormData = z.infer<typeof selectionSchema>;

  const form = useForm<SelectionFormData>({
    resolver: zodResolver(selectionSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const handleSelectPlan = (title: string) => {
    setSelectedService(title);
    setIsDialogOpen(true);
  };

  const onSubmit = async (data: SelectionFormData) => {
    if (!selectedService) return;

    const text = `New Service Inquiry\n\n` +
      `Service: ${selectedService}\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Message: ${data.message || 'N/A'}`;
    const encoded = encodeURIComponent(text);
    const phoneNumber = '27826656051';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    toast({
      title: 'Opening WhatsApp…',
      description: 'Review and send your pre-filled message.',
    });

    form.reset();
    setIsDialogOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Server className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Build Your<span className="text-gradient"> Digital Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light">
            Premium web solutions with 2 months free hosting and a free domain to launch your vision
          </p>
        </div>

        {/* Hosting Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in-up">
          <Label 
            htmlFor="hosting-toggle" 
            className={`text-sm font-medium cursor-pointer transition-colors ${
              !showHostingDetails ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Without Hosting Details
          </Label>
          <Switch
            id="hosting-toggle"
            checked={showHostingDetails}
            onCheckedChange={setShowHostingDetails}
            className="data-[state=checked]:bg-primary"
          />
          <Label 
            htmlFor="hosting-toggle" 
            className={`text-sm font-medium cursor-pointer transition-colors ${
              showHostingDetails ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            With Hosting Details
          </Label>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div 
              key={service.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                {...service}
                showHostingDetails={showHostingDetails}
                onSelectPlan={() => handleSelectPlan(service.title)}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {showHostingDetails && (
          <div className="mt-12 max-w-4xl mx-auto animate-fade-in">
            <div className="bg-card border rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Hosting Package Includes:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>✓ Professional email accounts</li>
                  <li>✓ SSL/Personal certificates</li>
                  <li>✓ Regular backups</li>
                  <li>✓ 99.9% uptime guarantee</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ 24/7 technical support</li>
                  <li>✓ Security monitoring</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Domain renewal assistance</li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Domain renewal is billed annually and paid by client
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Plan / Quote Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Provide your details</DialogTitle>
            <DialogDescription>
              {selectedService ? `You're interested in: ${selectedService}` : 'Tell us how to reach you.'}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+27 82 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Anything specific you want us to know?" className="min-h-[100px] resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
