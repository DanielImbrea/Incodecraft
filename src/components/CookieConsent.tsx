"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import {
  readCookieConsent,
  writeCookieConsent,
  type AnalyticsConsent,
} from "@/lib/cookie-consent";

type ConsentStatus = "pending" | AnalyticsConsent;

export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const [status, setStatus] = useState<ConsentStatus>("pending");
  const [visible, setVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const applyConsent = useCallback((analytics: AnalyticsConsent, showBanner: boolean) => {
    writeCookieConsent(analytics);
    setStatus(analytics);
    setVisible(showBanner);
  }, []);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored) {
      setStatus(stored.analytics);
      setVisible(false);
    } else {
      setVisible(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    function handleOpenPreferences() {
      setVisible(true);
    }

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);

    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <GoogleAnalytics enabled={status === "granted"} />
      <AnimatePresence>
        {visible && (
          <motion.div
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            aria-modal="false"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[90] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:p-6"
          >
            <div className="container-xl">
              <div className="relative overflow-hidden rounded-lg border border-surface-border bg-surface-raised/95 shadow-card backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px] opacity-20" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-signal/10 blur-3xl" />
                <div className="relative grid gap-6 p-5 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-6 lg:p-7">
                  <div>
                    <p className="eyebrow mb-3">{t("eyebrow")}</p>
                    <h2 id="cookie-consent-title" className="font-display text-lg text-ink-50 md:text-xl">
                      {t("title")}
                    </h2>
                    <p id="cookie-consent-description" className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-300">
                      {t("description")}{" "}
                      <Link href="/privacy-policy" className="text-signal underline underline-offset-2 hover:text-signal-soft">
                        {t("privacyLink")}
                      </Link>
                      .
                    </p>
                    <p className="mt-3 font-mono text-xs text-ink-500">
                      <span className="text-signal">$</span> {t("terminal")}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col lg:flex-row">
                    <button type="button" onClick={() => applyConsent("denied", false)} className="btn-secondary min-w-[9rem]">
                      {t("reject")}
                    </button>
                    <button type="button" onClick={() => applyConsent("granted", false)} className="btn-primary min-w-[9rem]">
                      {t("accept")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
