import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { getBlogPosts } from "@/data";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "blog" });
  return buildMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/blog",
    locale,
  });
}

export default async function BlogPage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const tcta = await getTranslations({ locale, namespace: "cta" });
  const blogPosts = getBlogPosts(locale);
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Breadcrumbs locale={locale} items={[{ label: t("breadcrumb"), href: "/blog" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">{t("title")}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">{t("subtitle")}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href={`/blog/${featured.slug}`}
              className="bracket-corner card mt-14 flex flex-col gap-6 p-7 transition-all duration-300 hover:border-signal/40 md:flex-row md:items-center md:p-10"
            >
              <div className="flex-1">
                <span className="eyebrow">{featured.category} · {tc("featured")}</span>
                <h2 className="mt-4 font-display text-2xl text-ink-50 md:text-3xl">{featured.title}</h2>
                <p className="mt-4 max-w-xl text-ink-300">{featured.excerpt}</p>
                <p className="mt-6 font-mono text-xs text-ink-500">
                  {formatDate(featured.date, locale)} · {featured.readingTime}
                </p>
              </div>
              <ArrowUpRight size={24} className="shrink-0 text-ink-500" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="card group flex h-full flex-col p-6 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1">
                  <span className="eyebrow">{post.category}</span>
                  <h3 className="mt-3 font-display text-lg text-ink-50">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{post.excerpt}</p>
                  <p className="mt-6 font-mono text-xs text-ink-500">
                    {formatDate(post.date, locale)} · {post.readingTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} eyebrow={tcta("readUseful")} title={tcta("readyToTalk")} />
    </>
  );
}
