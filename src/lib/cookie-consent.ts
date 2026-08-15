export const COOKIE_CONSENT_KEY = "incodecraft-cookie-consent";

export type AnalyticsConsent = "granted" | "denied";

export type CookieConsentState = {
  analytics: AnalyticsConsent;
  updatedAt: string;
};

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentState;
    if (parsed.analytics !== "granted" && parsed.analytics !== "denied") return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(analytics: AnalyticsConsent): CookieConsentState {
  const state: CookieConsentState = {
    analytics,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  return state;
}
