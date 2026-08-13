import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { getSite } from "@/data";
import { getTermsContent } from "@/content/legal";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "terms" });
  return buildMetadata({
    title: t("metaTitle"),
    description: `Terms and conditions for using the ${site.name} website and engaging ${site.name} for project work.`,
    path: "/terms",
    locale,
  });
}

export default async function TermsPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const content = getTermsContent(locale);

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/terms" }]} />
      <article className="section pt-10">
        <div className="container-xl max-w-prose">
          <p className="eyebrow mb-4">{tc("legal")}</p>
          <h1 className="mb-6 text-display-md text-ink-50">{t("title")}</h1>
          <p className="mb-8 font-mono text-xs text-ink-500">{tc("lastUpdated")}</p>

          <div className="space-y-8 leading-relaxed text-ink-300">
            <p>{content.intro}</p>

            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 font-display text-xl text-ink-50">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
