import Link from "next/link";
import { ArrowUpRight, Zap, ShieldCheck, GitBranch } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: `${site.name} — Independent Digital Studio | ${site.descriptor}`,
  description: site.description,
  path: "/",
});

const capabilities = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL",
  "Supabase", "Stripe", "Vercel", "Cloudflare", "REST & GraphQL APIs", "AI Integrations",
];

const processSteps = [
  { n: "01", title: "Discovery", desc: "Understanding your business, goals and constraints before any design work starts." },
  { n: "02", title: "Strategy", desc: "Defining scope, architecture and success criteria in writing, so nothing is ambiguous." },
  { n: "03", title: "Design & Build", desc: "Design and development happen under one roof, iterated together rather than handed off in stages." },
  { n: "04", title: "Launch & Grow", desc: "Testing, launch, and a clear path for ongoing improvements once the product is live." },
];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="container-xl relative pt-20 pb-24 md:pt-32 md:pb-32">
          <Reveal>
            <p className="eyebrow mb-6">Independent digital studio</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-display-xl text-ink-50">
              We build digital products that move businesses forward.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Modern websites, e-commerce platforms and custom web applications, designed and developed
              for businesses that want more from the web than a template.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/work" className="btn-primary">
                View our work <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a project
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-10 font-mono text-sm text-ink-500">
              <span className="text-signal">$</span> building for Websites · Applications · E-commerce · AI
              <span className="cursor-blink" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-y border-surface-border bg-surface/40 py-10">
        <div className="container-xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          <PositionPoint icon={<GitBranch size={18} />} title="Direct collaboration" text="From idea to launch, you work directly with the person building your product." />
          <PositionPoint icon={<Zap size={18} />} title="Custom-built" text="No templates stretched to fit. Every product is engineered around your actual needs." />
          <PositionPoint icon={<ShieldCheck size={18} />} title="Senior-level ownership" text="Clean architecture, real technical judgment, and code you fully own." />
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="container-xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Reveal><p className="eyebrow mb-4">Selected work</p></Reveal>
              <Reveal delay={0.05}><h2 className="max-w-lg text-display-md text-ink-50">Recent products, built end to end.</h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/work" className="btn-secondary shrink-0">
                View all work <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">What we build</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-lg text-display-md text-ink-50">Custom digital products, not templates stretched to fit.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why this studio */}
      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal><p className="eyebrow mb-4">Why this studio</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md text-ink-50">Design and development under one roof.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">
                INCODECRAFT is an independent, developer-led digital studio. There&apos;s no account
                manager translating your requirements to a separate design team, and no separate
                engineering team translating designs into code that never quite matches the mockup.
                One person, senior-level attention, from strategy to shipped product.
              </p>
            </Reveal>
          </div>
          <div className="space-y-6">
            {[
              { title: "What you can expect", text: "Clear scope and pricing before work begins, transparent communication throughout, and a product built on clean, maintainable code." },
              { title: "Built with a focus on", text: "Performance, accessibility and search visibility from the first commit — not bolted on before launch." },
              { title: "No unnecessary layers", text: "Fewer handoffs mean fewer things get lost in translation between what you asked for and what gets built." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card p-6">
                  <h3 className="mb-2 font-display text-lg text-ink-50">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-300">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Capabilities</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-lg text-display-md text-ink-50">Modern technology, chosen deliberately.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {capabilities.map((c) => (
                <span key={c} className="rounded-xs border border-surface-border bg-surface-raised/40 px-4 py-2 font-mono text-sm text-ink-300">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process preview */}
      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Reveal><p className="eyebrow mb-4">Process</p></Reveal>
              <Reveal delay={0.05}><h2 className="max-w-lg text-display-md text-ink-50">A clear process, from first call to launch.</h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/process" className="btn-secondary shrink-0">
                View full process <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <span className="font-mono text-2xl text-signal">{step.n}</span>
                  <h3 className="mt-4 mb-2 font-display text-lg text-ink-50">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-300">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <Reveal><p className="eyebrow mb-4">FAQ</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="max-w-sm text-display-md text-ink-50">Questions worth answering upfront.</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <FAQ items={homeFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

function PositionPoint({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xs border border-surface-border text-signal">
        {icon}
      </span>
      <div>
        <h3 className="font-display text-sm text-ink-50">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-400">{text}</p>
      </div>
    </div>
  );
}
