"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { routing, type Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("lang");
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      role="group"
      aria-label={t("switchTo")}
      className="flex items-center rounded-xs border border-surface-border bg-surface/60 p-0.5"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-xs px-2.5 py-1 font-mono text-xs uppercase tracking-wide transition-colors",
            locale === loc
              ? "bg-signal/15 text-signal"
              : "text-ink-400 hover:text-ink-100"
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
