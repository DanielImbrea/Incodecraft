import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SignalDecor, TerminalLine } from "@/components/SignalAccent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { getSite } from "@/data";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "contact" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/contact" }]} />
      <section className="section pt-10">
        <div className="container-xl grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <div className="relative">
            <SignalDecor variant="glow-sm" className="left-0 top-0 -translate-x-1/4 -translate-y-1/4" />
            <Reveal><Eyebrow className="mb-4" cursor>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg text-ink-50">{t("title")}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">{t("subtitle")}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <TerminalLine className="mt-6">{t("terminal")}</TerminalLine>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-6 font-mono text-sm">
                <div>
                  <p className="text-ink-500">{tc("email")}</p>
                  <a href={`mailto:${site.email}`} className="text-ink-100 hover:text-signal">{site.email}</a>
                </div>
                <div>
                  <p className="text-ink-500">{tc("basedIn")}</p>
                  <p className="text-ink-100">{site.location.country}</p>
                </div>
                <div>
                  <p className="text-ink-500">{tc("workingWith")}</p>
                  <p className="text-ink-100">{site.location.serves}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
