// Lightweight Google Analytics (gtag.js) loader and helpers

declare global {
  interface Window {
    dataLayer: unknown[] | undefined;
    gtag: (...args: unknown[]) => void;
  }
}

export function initializeGoogleAnalytics(measurementId: string): void {
  if (!measurementId) return;

  // Avoid double-initialization
  if (typeof window !== "undefined" && (window as any).gtag) return;

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    (window.dataLayer as unknown[]).push(arguments as unknown as never);
  } as unknown as typeof window.gtag;

  // Load gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId
  )}`;
  document.head.appendChild(script);

  // Configure GA
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
}

export function trackPageView(path?: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const pagePath = path || window.location.pathname + window.location.search;
  window.gtag("event", "page_view", { page_path: pagePath });
}


