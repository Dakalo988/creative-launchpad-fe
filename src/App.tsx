import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import WebHosting from "./pages/WebHosting";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import DomainRegistration from "./pages/DomainRegistration";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import OurStory from "./pages/OurStory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
