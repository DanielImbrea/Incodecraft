import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { getProjects } from "@/data";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "work" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/work",
    locale,
  });
}

export default async function WorkPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "work" });
  const projects = getProjects(locale);

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/work" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">{t("title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">{t("subtitle")}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
