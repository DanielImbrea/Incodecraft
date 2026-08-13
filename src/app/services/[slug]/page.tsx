import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} — ${service.tagline}`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedProjects = projects.slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: ["RO", "MD"],
    description: service.summary,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.shortName, href: `/services/${service.slug}` }]} />

      <section className="pt-10 pb-16">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Service</p></Reveal>
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
              Start a project <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-surface-border">
        <div className="container-xl grid gap-10 md:grid-cols-3">
          <InfoBlock title="Who this is for" items={service.whoFor} />
          <InfoBlock title="What we build" items={service.whatIBuild} />
          <InfoBlock title="Typical features" items={service.typicalFeatures} />
        </div>
      </section>

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Business value</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-10 max-w-xl text-display-md text-ink-50">Why this matters for your business.</h2>
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
          <Reveal><p className="eyebrow mb-4">Related work</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-10 max-w-xl text-display-md text-ink-50">Recent projects in this space.</h2>
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
        title={`Ready to start your ${service.shortName.toLowerCase()} project?`}
        subtitle="Every project starts with a short conversation about what you actually need."
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
