import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { getSite } from "@/data";
import { localizedPath } from "@/lib/metadata";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { label: string; href: string }[];
}) {
  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "common" });
  const trail = [{ label: t("home"), href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${site.url}${localizedPath(locale, item.href)}`,
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
