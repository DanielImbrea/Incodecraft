"use client";

import { useTranslations } from "next-intl";

export function CookieSettingsLink() {
  const t = useTranslations("cookieConsent");

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className="hover:text-ink-200"
    >
      {t("settingsLink")}
    </button>
  );
}
