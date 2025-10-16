import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeGoogleAnalytics, trackPageView } from "./lib/analytics";

// Initialize Google Analytics if an ID is provided via Vite env
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
if (measurementId) {
  initializeGoogleAnalytics(measurementId);
  trackPageView();
}

createRoot(document.getElementById("root")!).render(<App />);
