import { getGaMeasurementId } from "@/lib/analytics";

declare global {
  interface Window {
    __incodecraftGaLoaded?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || window.__incodecraftGaLoaded) return;

  const gaId = getGaMeasurementId();
  if (!gaId) return;

  window.__incodecraftGaLoaded = true;

  const loader = document.createElement("script");
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(loader);

  const config = document.createElement("script");
  config.id = "google-analytics";
  config.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
  document.head.appendChild(config);
}
