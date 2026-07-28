import type { Metadata, Viewport } from "next";
import type { Locale } from "@/content/copy";
import {
  IS_INDEXABLE,
  SITE_URL,
  canonicalFor,
  languageAlternates,
  ogLocales,
  seo,
} from "./seo";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111827" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  colorScheme: "dark light",
};

export function buildMetadata(locale: Locale): Metadata {
  const s = seo[locale];
  const canonical = canonicalFor(locale);
  const ogLocale = ogLocales[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    applicationName: s.shortTitle,
    creator: s.orgName,
    publisher: s.orgName,
    category: "nonprofit",
    alternates: {
      canonical,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      siteName: s.shortTitle,
      title: s.title,
      description: s.description,
      url: canonical,
      locale: ogLocale,
      alternateLocale: Object.values(ogLocales).filter((l) => l !== ogLocale),
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: s.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.description,
      images: ["/og.jpg"],
    },
    formatDetection: { telephone: true, email: true, address: false },
    robots: IS_INDEXABLE
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false, nocache: true },
  };
}
