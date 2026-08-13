import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Eyebrow, SignalDecor, TerminalLine } from "@/components/SignalAccent";
import type { Locale } from "@/i18n/routing";

export async function Cta({
  locale,
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/services",
}: {
  locale: Locale;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const t = await getTranslations({ locale, namespace: "cta" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <section className="section">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-lg border border-surface-border bg-surface-raised/50 px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px] opacity-30" />
          <SignalDecor className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 signal-breathe-soft" />
          <SignalDecor variant="glow-sm" className="right-0 bottom-0 translate-x-1/3 translate-y-1/3" />
          <Eyebrow className="relative mb-4 eyebrow-centered" cursor>
            {eyebrow ?? t("eyebrow")}
          </Eyebrow>
          <h2 className="relative mx-auto max-w-2xl text-display-md text-ink-50">{title ?? t("title")}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-300">{subtitle ?? t("subtitle")}</p>
          <TerminalLine className="relative mx-auto mt-5 justify-center">{t("terminal")}</TerminalLine>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel ?? tc("startProject")} <ArrowUpRight size={16} />
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel ?? tc("exploreServices")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
