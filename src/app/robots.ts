import type { MetadataRoute } from "next";
import { getSite } from "@/data";

export default function robots(): MetadataRoute.Robots {
  const site = getSite("ro");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
