import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { getServices, getServiceBySlug, getProjects, getSite } from "@/data";
import { ProjectCard } from "@/components/ProjectCard";
import { buildMetadata } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServices(locale).map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(locale, slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} — ${service.tagline}`,
    description: service.summary,
    path: `/services/${service.slug}`,
    locale,
  });
}

export default async function ServiceDetailPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  setRequestLocale(locale);
  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const site = getSite(locale);
  const projects = getProjects(locale);
  const relatedProjects = projects.slice(0, 2);
  const t = await getTranslations({ locale, namespace: "services" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const tcta = await getTranslations({ locale, namespace: "cta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: ["RO"],
    description: service.summary,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t("breadcrumb"), href: "/services" },
          { label: service.shortName, href: `/services/${service.slug}` },
        ]}
      />

      <section className="pt-10 pb-16">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{tc("service")}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">{service.name}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-ink-300">{service.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-400">{service.summary}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact" className="btn-primary mt-8">
              {tc("startProject")} <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-surface-border">
        <div className="container-xl grid gap-10 md:grid-cols-3">
          <InfoBlock title={t("whoFor")} items={service.whoFor} />
          <InfoBlock title={t("whatWeBuild")} items={service.whatIBuild} />
          <InfoBlock title={t("typicalFeatures")} items={service.typicalFeatures} />
        </div>
      </section>

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("businessValue")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-10 max-w-xl text-display-md text-ink-50">{t("businessValueTitle")}</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {service.businessValue.map((v, i) => (
              <Reveal key={v} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <Check className="mb-4 text-signal" size={20} />
                  <p className="text-sm leading-relaxed text-ink-200">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("relatedWork")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-10 max-w-xl text-display-md text-ink-50">{t("relatedWorkTitle")}</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta
        locale={locale}
        title={tcta("readyToStart", { service: service.shortName.toLowerCase() })}
        subtitle={tcta("readyToStartSubtitle")}
      />
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div>
        <h3 className="mb-5 font-display text-lg text-ink-50">{title}</h3>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-300">
              <span className="mt-1 font-mono text-signal">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
