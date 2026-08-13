import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Our Work — Websites, Applications & E-commerce Projects",
  description:
    "A selection of websites, web applications, e-commerce platforms and AI-powered products designed and built by INCODECRAFT.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Work", href: "/work" }]} />
      <section className="section pt-10">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">Our work</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-display-lg text-ink-50">Products built end to end, from architecture to interface.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-ink-300">
              Every project here was designed and developed directly, without handoffs between separate
              design and engineering teams. Some case studies include full project images; others are
              marked as placeholders until visuals are added.
            </p>
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
      <Cta />
    </>
  );
}
