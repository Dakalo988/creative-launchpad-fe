import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import WebHosting from "./pages/WebHosting";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import DomainRegistration from "./pages/DomainRegistration";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import OurStory from "./pages/OurStory";

const queryClient = new QueryClient();

const AnalyticsListener = () => {
  const location = useLocation();
  useEffect(() => {
    const g = (window as any).gtag;
    if (typeof g === 'function') {
      g('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsListener />
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
