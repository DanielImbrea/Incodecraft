import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { getProjects, getProjectBySlug, getSite } from "@/data";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(locale, slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "work" });
  return buildMetadata({
    title: `${project.name} — ${t("caseStudy")}`,
    description: project.summary,
    path: `/work/${project.slug}`,
    locale,
  });
}

export default async function ProjectPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  setRequestLocale(locale);
  const project = getProjectBySlug(locale, slug);
  if (!project) notFound();

  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "work" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const tcta = await getTranslations({ locale, namespace: "cta" });
  const cs = project.caseStudy;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    creator: { "@type": "Organization", name: site.name },
    url: `${site.url}${localizedPath(locale, `/work/${project.slug}`)}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t("breadcrumb"), href: "/work" },
          { label: project.name, href: `/work/${project.slug}` },
        ]}
      />

      <section className="pt-10 pb-16">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{project.category} — {project.year}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-display-lg text-ink-50">{project.name}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{project.description}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {tc("visitLiveSite")} <ExternalLink size={16} />
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech) => (
                  <span key={tech} className="rounded-xs border border-surface-border px-3 py-1.5 font-mono text-xs text-ink-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface/30">
        <div className="container-xl relative flex aspect-[16/7] items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:36px_36px] opacity-30" />
          <span className="relative font-display text-3xl text-ink-700">{project.name}</span>
        </div>
      </section>

      <section className="section">
        <div className="container-xl grid gap-16 md:grid-cols-[2fr_1fr]">
          <div className="space-y-14">
            <CaseSection eyebrow="01 — Overview" title={t("overview")} text={cs.overview} />
            <CaseSection eyebrow="02 — Challenge" title={t("challenge")} text={cs.challenge} />
            <CaseSection eyebrow="03 — Approach" title={t("approach")} text={cs.approach} />
            <CaseSection eyebrow="04 — Solution" title={t("solution")} text={cs.solution} />

            <div>
              <p className="eyebrow mb-4">05 — Features</p>
              <h2 className="mb-6 font-display text-2xl text-ink-50">{t("features")}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {cs.features.map((f) => (
                  <li key={f} className="flex gap-3 rounded-sm border border-surface-border bg-surface/40 p-4 text-sm text-ink-300">
                    <span className="font-mono text-signal">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <CaseSection eyebrow="06 — Outcome" title={t("outcome")} text={cs.outcome} />

            <div>
              <p className="eyebrow mb-4">07 — Takeaways</p>
              <h2 className="mb-6 font-display text-2xl text-ink-50">{t("takeaways")}</h2>
              <ul className="space-y-3">
                {cs.takeaways.map((item) => (
                  <li key={item} className="border-l-2 border-signal/50 pl-4 text-sm leading-relaxed text-ink-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit space-y-6 md:sticky md:top-28">
            <div className="card p-6">
              <p className="eyebrow mb-4">{t("projectDetails")}</p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-ink-500">{t("category")}</dt>
                  <dd className="mt-1 text-ink-100">{project.category}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-500">{t("timeline")}</dt>
                  <dd className="mt-1 text-ink-100">{project.year}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-500">{t("technology")}</dt>
                  <dd className="mt-1 text-ink-100">{project.technology.join(", ")}</dd>
                </div>
              </dl>
            </div>
            <Link href="/contact" className="btn-primary w-full">
              {t("startSimilar")} <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <Cta locale={locale} title={tcta("buildingSimilar")} subtitle={tcta("buildingSimilarSubtitle")} />
    </>
  );
}

function CaseSection({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="mb-4 font-display text-2xl text-ink-50">{title}</h2>
      <p className="max-w-2xl leading-relaxed text-ink-300">{text}</p>
    </div>
  );
}
