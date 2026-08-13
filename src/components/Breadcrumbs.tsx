import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { site } from "@/data/site";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-xl pt-8">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-500">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={12} />}
            {i === trail.length - 1 ? (
              <span className="text-ink-300">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-ink-200">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
