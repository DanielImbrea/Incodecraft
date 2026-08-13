import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { getBlogPosts, getPostBySlug, getSite } from "@/data";
import { formatDate } from "@/lib/utils";
import { buildMetadata, localizedPath } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(locale, slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    locale,
  });
}

export default async function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: Locale; slug: string };
}) {
  setRequestLocale(locale);
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const related = (post.relatedSlugs || [])
    .map((relatedSlug) => getPostBySlug(locale, relatedSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${site.url}${localizedPath(locale, `/blog/${post.slug}`)}`,
    inLanguage: locale,
  };

  const faqJsonLd = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t("breadcrumb"), href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="pt-10 pb-16">
        <div className="container-xl max-w-prose">
          <Reveal><p className="eyebrow mb-4">{post.category}</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-display-md text-ink-50">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-xs text-ink-500">
              {tc("by")} {post.author} · {formatDate(post.date, locale)} · {post.readingTime}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="prose-blog mt-10 max-w-none text-ink-200"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </Reveal>

          {post.faqs && (
            <Reveal delay={0.1}>
              <div className="mt-16">
                <h2 className="mb-6 font-display text-xl text-ink-50">{t("faqTitle")}</h2>
                <FAQ items={post.faqs} />
              </div>
            </Reveal>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section border-t border-surface-border bg-surface/30">
          <div className="container-xl">
            <p className="eyebrow mb-8">{t("relatedArticles")}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-6 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1">
                  <span className="eyebrow">{r.category}</span>
                  <h3 className="mt-3 font-display text-lg text-ink-50">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta locale={locale} eyebrow={tc("startProject")} title={tc("startProject")} primaryLabel={tc("startProject")} />
    </>
  );
}
