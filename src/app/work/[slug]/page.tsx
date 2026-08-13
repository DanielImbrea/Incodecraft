import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { projects, getProjectBySlug } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.name} — Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    creator: { "@type": "Organization", name: site.name },
    url: `${site.url}/work/${project.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Work", href: "/work" }, { label: project.name, href: `/work/${project.slug}` }]} />

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
                  Visit live site <ExternalLink size={16} />
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.technology.map((t) => (
                  <span key={t} className="rounded-xs border border-surface-border px-3 py-1.5 font-mono text-xs text-ink-400">
                    {t}
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
          {project.isPlaceholder && (
            <span className="absolute bottom-6 right-6 rounded-xs border border-ink-600 bg-ink-950/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-400">
              Project visuals to be added
            </span>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-xl grid gap-16 md:grid-cols-[2fr_1fr]">
          <div className="space-y-14">
            <CaseSection eyebrow="01 — Overview" title="Project overview" text={cs.overview} />
            <CaseSection eyebrow="02 — Challenge" title="The challenge" text={cs.challenge} />
            <CaseSection eyebrow="03 — Approach" title="The approach" text={cs.approach} />
            <CaseSection eyebrow="04 — Solution" title="The solution" text={cs.solution} />

            <div>
              <p className="eyebrow mb-4">05 — Features</p>
              <h2 className="mb-6 font-display text-2xl text-ink-50">Key features</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {cs.features.map((f) => (
                  <li key={f} className="flex gap-3 rounded-sm border border-surface-border bg-surface/40 p-4 text-sm text-ink-300">
                    <span className="font-mono text-signal">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <CaseSection eyebrow="06 — Outcome" title="Outcome" text={cs.outcome} />

            <div>
              <p className="eyebrow mb-4">07 — Takeaways</p>
              <h2 className="mb-6 font-display text-2xl text-ink-50">Key takeaways</h2>
              <ul className="space-y-3">
                {cs.takeaways.map((t) => (
                  <li key={t} className="border-l-2 border-signal/50 pl-4 text-sm leading-relaxed text-ink-300">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit space-y-6 md:sticky md:top-28">
            <div className="card p-6">
              <p className="eyebrow mb-4">Project details</p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-ink-500">Category</dt>
                  <dd className="mt-1 text-ink-100">{project.category}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-500">Timeline</dt>
                  <dd className="mt-1 text-ink-100">{project.year}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-ink-500">Technology</dt>
                  <dd className="mt-1 text-ink-100">{project.technology.join(", ")}</dd>
                </div>
              </dl>
            </div>
            <Link href="/contact" className="btn-primary w-full">
              Start a similar project <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <Cta title="Building something similar?" subtitle="Every case study starts as a first conversation. Tell us what you're building." />
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
