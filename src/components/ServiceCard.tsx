import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="bracket-corner card group flex flex-col justify-between p-7 transition-all duration-300 hover:border-signal/40 hover:-translate-y-1"
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-ink-500">{String(index + 1).padStart(2, "0")}</span>
          <ArrowUpRight size={18} className="text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
        </div>
        <h3 className="mb-3 font-display text-xl text-ink-50">{service.name}</h3>
        <p className="text-sm leading-relaxed text-ink-300">{service.tagline}</p>
      </div>
    </Link>
  );
}
