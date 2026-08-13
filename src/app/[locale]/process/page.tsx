import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SignalDecor, TerminalLine } from "@/components/SignalAccent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "process" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/process",
    locale,
  });
}

export default async function ProcessPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "process" });
  const stages = t.raw("stages") as { n: string; title: string; desc: string }[];

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/process" }]} />
      <section className="section pt-10">
        <div className="container-xl relative">
          <SignalDecor variant="glow-sm" className="right-0 top-0 translate-x-1/4 -translate-y-1/4" />
          <Reveal><Eyebrow className="mb-4" cursor>{t("eyebrow")}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">{t("title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">{t("subtitle")}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <TerminalLine className="mt-6">{t("terminal")}</TerminalLine>
          </Reveal>

          <div className="mt-16 space-y-0">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 0.04}>
                <div className="flex flex-col gap-4 border-t border-surface-border py-8 last:border-b sm:flex-row sm:gap-10">
                  <span className="font-mono text-3xl text-signal sm:w-20 sm:shrink-0">{stage.n}</span>
                  <div>
                    <h2 className="mb-2 font-display text-xl text-ink-50">{stage.title}</h2>
                    <p className="max-w-2xl leading-relaxed text-ink-300">{stage.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
