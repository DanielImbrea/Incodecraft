import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Cta({
  eyebrow = "Start a project",
  title = "Have a project in mind?",
  subtitle = "Tell us what you're building. Every project starts with a short conversation about what you actually need.",
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-lg border border-surface-border bg-surface-raised/50 px-8 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px] opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/20 blur-[100px]" />
          <p className="eyebrow relative mb-4 justify-center">{eyebrow}</p>
          <h2 className="relative mx-auto max-w-2xl text-display-md text-ink-50">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-300">{subtitle}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel} <ArrowUpRight size={16} />
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
