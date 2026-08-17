import { Link } from "@/i18n/routing";
import { ArrowUpRight, Zap, ShieldCheck, GitBranch } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroRotator } from "@/components/HeroRotator";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SignalDecor, TerminalLine } from "@/components/SignalAccent";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { getProjects, getServices, getHomeFaqs, getSite } from "@/data";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";

const capabilities = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL",
  "Supabase", "Stripe", "OpenAI", "React Native", "iOS & Android", "Vercel", "Cloudflare", "PWA",
  "REST & GraphQL APIs", "AI Integrations",
];

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({
    title: t("metaTitle"),
    description: site.description,
    path: "/",
    locale,
  });
}

export default async function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const projects = getProjects(locale);
  const services = getServices(locale);
  const homeFaqs = getHomeFaqs(locale);
  const featuredProjects = projects.filter((p) => p.featured);
  const heroSlides = t.raw("heroSlides") as { title: string; subtitle: string }[];
  const processSteps = t.raw("processSteps") as { n: string; title: string; desc: string }[];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="container-xl relative pt-6 pb-20 md:pt-[72px] md:pb-28">
          <Reveal immediate>
            <p className="eyebrow mb-6">{t("eyebrow")}</p>
          </Reveal>
          <Reveal immediate delay={0.05}>
            <HeroRotator slides={heroSlides} />
          </Reveal>
          <Reveal immediate delay={0.15}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/work" className="btn-primary">
                {tc("viewWork")} <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                {tc("startProject")}
              </Link>
              <Link href="/services" className="btn-ghost">
                {tc("exploreServices")}
              </Link>
            </div>
          </Reveal>
          <Reveal immediate delay={0.2}>
            <TerminalLine className="mt-8">{t("terminal")}</TerminalLine>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface/40 py-10">
        <div className="container-xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          <PositionPoint icon={<GitBranch size={18} />} title={t("directCollaboration")} text={t("directCollaborationText")} />
          <PositionPoint icon={<Zap size={18} />} title={t("customBuilt")} text={t("customBuiltText")} />
          <PositionPoint icon={<ShieldCheck size={18} />} title={t("seniorOwnership")} text={t("seniorOwnershipText")} />
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Reveal><p className="eyebrow mb-4">{t("selectedWork")}</p></Reveal>
              <Reveal delay={0.05}><h2 className="max-w-lg text-display-md text-ink-50">{t("selectedWorkTitle")}</h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/work" className="btn-secondary shrink-0">
                {tc("viewAllWork")} <ArrowUpRight size={16} />
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

      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("whatWeBuild")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-lg text-display-md text-ink-50">{t("whatWeBuildTitle")}</h2>
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

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl relative grid gap-12 md:grid-cols-2 md:gap-20">
          <SignalDecor variant="line-v" className="top-12 hidden md:block" />
          <SignalDecor variant="glow-sm" className="right-0 top-1/2 -translate-y-1/2 md:right-8" />
          <div>
            <Reveal><Eyebrow className="mb-4" cursor>{t("whyStudio")}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display-md text-ink-50">{t("whyStudioTitle")}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink-300">{t("whyStudioP1")}</p>
            </Reveal>
          </div>
          <div className="space-y-6">
            {[
              { title: t("expectTitle"), text: t("expectText") },
              { title: t("focusTitle"), text: t("focusText") },
              { title: t("layersTitle"), text: t("layersText") },
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

      <section className="section border-t border-surface-border">
        <div className="container-xl">
          <Reveal><p className="eyebrow mb-4">{t("capabilities")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-lg text-display-md text-ink-50">{t("capabilitiesTitle")}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl leading-relaxed text-ink-400">{t("capabilitiesNote")}</p>
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

      <section className="section border-t border-surface-border bg-surface/30">
        <div className="container-xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Reveal><p className="eyebrow mb-4">{t("process")}</p></Reveal>
              <Reveal delay={0.05}><h2 className="max-w-lg text-display-md text-ink-50">{t("processTitle")}</h2></Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/process" className="btn-secondary shrink-0">
                {tc("viewFullProcess")} <ArrowUpRight size={16} />
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

      <section className="section border-t border-surface-border">
        <div className="container-xl relative">
          <SignalDecor variant="glow-sm" className="left-0 top-0 -translate-x-1/3 -translate-y-1/4" />
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <Reveal><Eyebrow className="mb-4" cursor>{t("faq")}</Eyebrow></Reveal>
              <Reveal delay={0.05}>
                <h2 className="max-w-sm text-display-md text-ink-50">{t("faqTitle")}</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-6 flex items-center gap-4">
                  <SignalDecor variant="line-h" />
                  <TerminalLine>{t("faqTerminal")}</TerminalLine>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <FAQ items={homeFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <Cta locale={locale} />
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
