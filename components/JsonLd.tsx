import { copy, type Locale } from "@/content/copy";
import {
  NWTA,
  ORG_EMAIL,
  ORG_PHONE,
  SITE_URL,
  canonicalFor,
  seo,
} from "@/lib/seo";

const PUBLISHED = "2026-07-28";

/** JSON sicher in einen Script-Tag schreiben */
function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Strukturierte Daten als verbundener @graph.
 * Trägt sowohl klassische Rich Results (Event, FAQ) als auch die
 * Faktenbasis, aus der generative Suchmaschinen zitieren.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const s = seo[locale];
  const url = canonicalFor(locale);

  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;
  const pageId = `${url}#webpage`;
  const logoId = `${SITE_URL}/#logo`;
  const imageUrl = `${SITE_URL}/og.jpg`;

  const graph = [
    {
      "@type": ["NGO", "Organization"],
      "@id": orgId,
      name: s.orgName,
      alternateName: ["MKP Polska", "MKP Poland", "ManKind Project Polska"],
      url: SITE_URL,
      description: s.orgDescription,
      foundingDate: "1985",
      logo: {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${SITE_URL}/icon.svg`,
        contentUrl: `${SITE_URL}/icon.svg`,
        caption: s.orgName,
      },
      image: { "@id": logoId },
      parentOrganization: {
        "@type": "NGO",
        name: "The ManKind Project",
        url: "https://mankindproject.org",
        foundingDate: "1985",
        nonprofitStatus: "https://schema.org/Nonprofit501c3",
        areaServed: { "@type": "Place", name: "27 countries worldwide" },
      },
      areaServed: { "@type": "Country", name: "Poland" },
      knowsLanguage: ["pl", "en", "de", "cs", "uk"],
      sameAs: [
        "https://mankindproject.org",
        "https://www.mkp-polska.pl",
        "https://www.mkp-deutschland.de",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "enquiries",
        email: ORG_EMAIL,
        telephone: ORG_PHONE,
        availableLanguage: ["pl", "en", "de", "cs", "uk"],
      },
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: SITE_URL,
      name: s.shortTitle,
      description: s.description,
      publisher: { "@id": orgId },
      inLanguage: locale,
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: s.title,
      description: s.description,
      isPartOf: { "@id": siteId },
      about: { "@id": orgId },
      inLanguage: locale,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1200,
        height: 630,
        caption: s.imageAlt,
      },
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#nwta-2026-10`,
      name: s.eventName,
      description: s.eventDescription,
      startDate: NWTA.startDate,
      endDate: NWTA.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      inLanguage: NWTA.language,
      url,
      image: [imageUrl],
      organizer: { "@id": orgId },
      location: {
        "@type": "Place",
        name: NWTA.locality,
        address: {
          "@type": "PostalAddress",
          addressLocality: NWTA.locality,
          addressRegion: NWTA.region,
          addressCountry: NWTA.country,
        },
      },
      audience: { "@type": "Audience", audienceType: "Men" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#mens-circles`,
      name: t.circles.label,
      serviceType: t.circles.label,
      description: t.circles.lead,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "Poland" },
      audience: { "@type": "Audience", audienceType: "Men" },
      isRelatedTo: { "@id": `${SITE_URL}/#nwta-2026-10` },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: locale,
      isPartOf: { "@id": pageId },
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serialize({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
