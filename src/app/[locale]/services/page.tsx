import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { getServices } from "@/data";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "services" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/services",
    locale,
  });
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const services = getServices(locale);

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/services" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">{t("title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">{t("subtitle")}</p>
          </Reveal>

          <div className="mt-16 space-y-5">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-6 rounded-md border border-surface-border bg-surface/40 p-7 transition-all duration-300 hover:border-signal/40 md:flex-row md:items-center md:justify-between md:p-8"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-3xl text-ink-700 transition-colors group-hover:text-signal/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-xl text-ink-50 md:text-2xl">{service.name}</h2>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-300">{service.tagline}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={22} className="shrink-0 text-ink-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
