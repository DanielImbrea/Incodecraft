import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Process — How Projects Are Scoped, Built and Launched",
  description:
    "A clear, eight-stage process for every INCODECRAFT project — from discovery and strategy through design, development, testing, launch and continuous improvement.",
  path: "/process",
});

const stages = [
  { n: "01", title: "Discovery", desc: "A conversation about your business, your goals for the project, and the constraints that matter — budget, timeline, existing systems. This stage exists to make sure the right project gets built, not just any project." },
  { n: "02", title: "Strategy", desc: "Scope, architecture and success criteria get defined in writing. You'll know what's included, what isn't, and roughly how long it will take before any development starts." },
  { n: "03", title: "UX / Structure", desc: "Information architecture and user flows are mapped out — how pages connect, what a user does at each step, and where the important decisions happen." },
  { n: "04", title: "Design", desc: "A visual design system is built around your brand: typography, color, spacing and components — not a generic template adjusted to fit." },
  { n: "05", title: "Development", desc: "Design and code come together. Because the same person handles both, design decisions get refined against real, working code rather than static mockups." },
  { n: "06", title: "Testing", desc: "Functionality, responsiveness, accessibility and performance are checked across real devices and browsers before anything goes live." },
  { n: "07", title: "Launch", desc: "The project goes live with proper monitoring, analytics and search console setup in place from day one." },
  { n: "08", title: "Continuous improvement", desc: "Most good products keep evolving after launch. Ongoing maintenance, new features and performance work are available as an extension of the same relationship." },
];

export default function ProcessPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Process", href: "/process" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Process</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">A structured process, built to remove ambiguity.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">
              Every project follows the same eight stages. The names stay the same regardless of scope —
              what changes is how much time each stage takes.
            </p>
          </Reveal>

          <div className="mt-16 space-y-0">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 0.04}>
                <div className="flex flex-col gap-4 border-t border-surface-border py-8 last:border-b sm:flex-row sm:gap-10">
                  <span className="font-mono text-3xl text-signal sm:w-20 sm:shrink-0">{stage.n}</span>
                  <div>
                    <h2 className="mb-2 font-display text-xl text-ink-50">{stage.title}</h2>
                    <p className="max-w-2xl leading-relaxed text-ink-300">{stage.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
