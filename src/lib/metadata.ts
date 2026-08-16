import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getSite } from "@/data";
import { getOgImageMeta, getOgImageUrl } from "@/lib/og-image";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
  noIndex?: boolean;
};

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) {
    return normalized || "/";
  }
  return `/en${normalized}`;
}

export function buildMetadata({ title, description, path, locale, image, noIndex }: SeoOptions) {
  const site = getSite(locale);
  const canonicalPath = localizedPath(locale, path);
  const url = `${site.url}${canonicalPath === "/" ? "" : canonicalPath}`;
  const ogImage = image || getOgImageUrl(site.url);
  const ogLocale = locale === "ro" ? "ro_RO" : "en_US";

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    const locPath = localizedPath(loc, path);
    languages[loc] = `${site.url}${locPath === "/" ? "" : locPath}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [getOgImageMeta(site.url, title)],
      locale: ogLocale,
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}
