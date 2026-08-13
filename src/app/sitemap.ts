import type { MetadataRoute } from "next";
import { getSite, getProjects, getServices, getBlogPosts } from "@/data";
import { localizedPath } from "@/lib/metadata";
import { routing, type Locale } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSite("ro");
  const staticPaths = [
    "",
    "/work",
    "/services",
    "/about",
    "/process",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const localeSite = getSite(locale);

    for (const path of staticPaths) {
      const locPath = localizedPath(locale, path || "/");
      entries.push({
        url: `${localeSite.url}${locPath === "/" ? "" : locPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => {
              const altPath = localizedPath(loc, path || "/");
              return [loc, `${getSite(loc).url}${altPath === "/" ? "" : altPath}`];
            })
          ),
        },
      });
    }

    for (const project of getProjects(locale)) {
      const locPath = localizedPath(locale, `/work/${project.slug}`);
      entries.push({
        url: `${localeSite.url}${locPath}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const service of getServices(locale)) {
      const locPath = localizedPath(locale, `/services/${service.slug}`);
      entries.push({
        url: `${localeSite.url}${locPath}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const post of getBlogPosts(locale)) {
      const locPath = localizedPath(locale, `/blog/${post.slug}`);
      entries.push({
        url: `${localeSite.url}${locPath}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
