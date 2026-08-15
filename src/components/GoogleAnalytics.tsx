"use client";

import { useEffect } from "react";
import { getGaMeasurementId } from "@/lib/analytics";
import { loadGoogleAnalytics } from "@/lib/load-google-analytics";

export function GoogleAnalytics({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    const gaId = getGaMeasurementId();
    if (!gaId) return;

    window[`ga-disable-${gaId}` as `ga-disable-${string}`] = !enabled;

    if (enabled) loadGoogleAnalytics();
  }, [enabled]);

  return null;
}
