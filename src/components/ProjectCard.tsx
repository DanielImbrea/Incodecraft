import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="bracket-corner card group block overflow-hidden p-0 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-surface-raised to-ink-900">
        <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-40" />
        <span className="relative max-w-[90%] px-4 text-center text-balance font-display text-xl font-medium leading-tight text-ink-600 transition-colors group-hover:text-signal/60 md:text-2xl">
          {project.name}
        </span>
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
            {project.technology.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-xs border border-surface-border px-2 py-1 font-mono text-[11px] text-ink-400">
                {tech}
              </span>
            ))}
          </div>
          <ArrowUpRight size={18} className="shrink-0 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
        </div>
      </div>
    </Link>
  );
}
