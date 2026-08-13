import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog — Web Development, E-commerce & AI Insights",
  description:
    "Practical, no-fluff articles on website costs, e-commerce platforms, custom web applications, SEO and AI for businesses in Romania and beyond.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Blog</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">Notes on building things on the web.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">
              Practical articles on websites, e-commerce, web applications and AI — written to actually
              answer the question, not to fill space.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href={`/blog/${featured.slug}`}
              className="bracket-corner card mt-14 flex flex-col gap-6 p-7 transition-all duration-300 hover:border-signal/40 md:flex-row md:items-center md:p-10"
            >
              <div className="flex-1">
                <span className="eyebrow">{featured.category} · Featured</span>
                <h2 className="mt-4 font-display text-2xl text-ink-50 md:text-3xl">{featured.title}</h2>
                <p className="mt-4 max-w-xl text-ink-300">{featured.excerpt}</p>
                <p className="mt-6 font-mono text-xs text-ink-500">
                  {formatDate(featured.date)} · {featured.readingTime}
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
                    {formatDate(post.date)} · {post.readingTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta eyebrow="Read something useful?" title="Ready to talk about your project?" />
    </>
  );
}
