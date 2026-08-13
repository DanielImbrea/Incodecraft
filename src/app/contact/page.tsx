import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact — Start a Project",
  description:
    "Tell us what you're building. Every INCODECRAFT project starts with understanding what you actually need before any development begins.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="section pt-10">
        <div className="container-xl grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <div>
            <Reveal><p className="eyebrow mb-4">Start a project</p></Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg text-ink-50">Tell us what you&apos;re building.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">
                Every project starts with understanding what you actually need. Share a few details
                below and expect a reply within 1–2 business days with next steps.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-6 font-mono text-sm">
                <div>
                  <p className="text-ink-500">Email</p>
                  <a href={`mailto:${site.email}`} className="text-ink-100 hover:text-signal">{site.email}</a>
                </div>
                <div>
                  <p className="text-ink-500">Based in</p>
                  <p className="text-ink-100">{site.location.city}, {site.location.country}</p>
                </div>
                <div>
                  <p className="text-ink-500">Working with</p>
                  <p className="text-ink-100">{site.location.serves}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
