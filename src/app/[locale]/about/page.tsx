import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "about" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/about",
    locale,
  });
}

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const principles = t.raw("principles") as { title: string; text: string }[];

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/about" }]} />
      <section className="pt-10 pb-16">
        <div className="container-xl grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Reveal><p className="eyebrow mb-4">{t("eyebrow")}</p></Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg text-ink-50">{t("title")}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">{t("p1")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 leading-relaxed text-ink-300">{t("p2")}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex gap-4">
                <Link href="/work" className="btn-secondary">
                  {tc("viewWork")} <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="btn-primary">
                  {tc("startProject")} <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card relative aspect-[4/5] overflow-hidden bg-surface-raised/40">
              <Image
                src="/about/about-workspace.jpg"
                alt={t("photoAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("principlesEyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-12 max-w-xl text-display-md text-ink-50">{t("principlesTitle")}</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <h3 className="mb-2 font-display text-lg text-ink-50">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-300">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("locationEyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-display-md text-ink-50">{t("locationTitle")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-300">{t("locationText")}</p>
          </Reveal>
        </div>
      </section>

      <Cta locale={locale} />
    </>
  );
}
