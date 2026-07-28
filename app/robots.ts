import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/seo";

/**
 * Crawler generativer Suchmaschinen.
 * Sie werden ausdrücklich erlaubt, damit die Seite in KI-Antworten
 * auftauchen und zitiert werden darf (Generative Engine Optimization).
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  /* Previews und lokale Builds werden komplett ausgesperrt */
  if (!IS_INDEXABLE) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* Next.js-interne Pfade ohne eigenständigen Inhalt */
        disallow: ["/api/", "/_next/static/chunks/"],
      },
      {
        userAgent: AI_AGENTS,
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
