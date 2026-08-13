import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About — Independent, Developer-Led Digital Studio",
  description:
    "INCODECRAFT is an independent, developer-led digital studio based in Iași, Romania, building modern websites, applications and e-commerce platforms with direct collaboration from idea to launch.",
  path: "/about",
});

const principles = [
  { title: "Direct collaboration", text: "You work with the person actually writing the code and making the technical decisions, from the first conversation to launch." },
  { title: "Design and development, together", text: "Interface decisions and engineering decisions are made by the same person, in the same sitting — not handed off between departments." },
  { title: "Technical ownership", text: "Every project is built on architecture chosen for that specific product, not a one-size-fits-all internal template." },
  { title: "Attention to detail", text: "Spacing, performance, accessibility and SEO are treated as part of the build, not a final pass before launch." },
  { title: "Long-term thinking", text: "Code is written to be extended later, by whoever maintains it — including future you." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="pt-10 pb-16">
        <div className="container-xl grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Reveal><p className="eyebrow mb-4">About INCODECRAFT</p></Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg text-ink-50">An independent digital studio, led directly by the person building your product.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">
                INCODECRAFT is an independent, developer-led digital studio focused on building modern
                websites, custom web applications, e-commerce platforms and AI-powered digital products.
                Rather than routing a project through account managers, separate designers and separate
                developers, INCODECRAFT keeps strategy, design and engineering under one roof —
                which means fewer handoffs, less translation loss, and a shorter distance between an
                idea and a shipped product.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 leading-relaxed text-ink-300">
                This is not a large agency, and it doesn&apos;t pretend to be one. It&apos;s an independent
                studio built around direct collaboration, senior-level technical judgment, and ownership
                of the outcome — the kind of attention a project gets when the same person is responsible
                for the whole thing.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex gap-4">
                <Link href="/work" className="btn-secondary">
                  View our work <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="btn-primary">
                  Start a project <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card flex aspect-[4/5] items-center justify-center bg-surface-raised/40">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-ink-600 font-mono text-xs text-ink-500">
                  Photo
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-500">Portrait placeholder</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">How the studio operates</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-12 max-w-xl text-display-md text-ink-50">The principles behind every project.</h2>
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
          <Reveal><p className="eyebrow mb-4">Based in Iași, working broadly</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-display-md text-ink-50">
              Based in Iași, Romania — working with businesses across Romania, Moldova, and internationally.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-300">
              All collaboration happens remotely by default, with clear written scope and regular updates —
              so distance is never an obstacle to a project moving forward on schedule.
            </p>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
