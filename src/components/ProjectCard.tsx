import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="bracket-corner card group block overflow-hidden p-0 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-surface-raised to-ink-900">
        <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-40" />
        <span className="relative font-display text-2xl font-medium text-ink-600 transition-colors group-hover:text-signal/60">
          {project.name}
        </span>
        {project.isPlaceholder && (
          <span className="absolute right-3 top-3 rounded-xs border border-ink-600 bg-ink-950/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-400">
            Visuals coming soon
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wide text-signal">{project.category}</span>
          <span className="font-mono text-xs text-ink-500">{project.year}</span>
        </div>
        <h3 className="mb-2 font-display text-xl text-ink-50">{project.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-ink-300">{project.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technology.slice(0, 3).map((t) => (
              <span key={t} className="rounded-xs border border-surface-border px-2 py-1 font-mono text-[11px] text-ink-400">
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight size={18} className="shrink-0 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
        </div>
      </div>
    </Link>
  );
}
