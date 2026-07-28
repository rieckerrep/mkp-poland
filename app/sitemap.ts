import type { MetadataRoute } from "next";
import type { Locale } from "@/content/copy";
import { canonicalFor, languageAlternates, localePaths } from "@/lib/seo";

/* Letzte inhaltliche Änderung — bewusst statisch, damit der Wert
   nicht bei jedem Build springt und Crawler ihn ernst nehmen. */
const LAST_MODIFIED = new Date("2026-07-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = languageAlternates();

  return (Object.keys(localePaths) as Locale[]).map((locale) => ({
    url: canonicalFor(locale),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: locale === "pl" ? 1 : 0.8,
    alternates: { languages },
  }));
}
