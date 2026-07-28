import type { Locale } from "@/content/copy";

/**
 * Basis-URL der Seite.
 * Reihenfolge: explizite Env-Variable → Vercel-Produktionsdomain → lokaler Dev-Server.
 * Niemals hart auf eine fremde Live-Domain zeigen, sonst kanonisieren Previews falsch.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3100";
}

export const SITE_URL = resolveSiteUrl();

/**
 * Indexierung nur auf der Produktionsumgebung.
 * Preview-Deployments und lokale Builds bleiben auf noindex,
 * damit sie nicht mit der Live-Seite um dieselben Keywords konkurrieren.
 * Mit NEXT_PUBLIC_ALLOW_INDEXING lässt sich beides erzwingen.
 */
export const IS_INDEXABLE = (() => {
  const flag = process.env.NEXT_PUBLIC_ALLOW_INDEXING;
  if (flag === "true") return true;
  if (flag === "false") return false;
  return process.env.VERCEL_ENV === "production";
})();

export const ORG_EMAIL = "marek@mkp-polska.pl";
export const ORG_PHONE = "+48784601018";

/** NWTA-Termin — eine Quelle für Event-Markup und Sitemap */
export const NWTA = {
  startDate: "2026-10-02T18:00:00+02:00",
  endDate: "2026-10-04T18:00:00+02:00",
  locality: "Kiczyce",
  region: "Śląsk Cieszyński",
  country: "PL",
  language: "en",
} as const;

export const localePaths: Record<Locale, string> = {
  pl: "/",
  en: "/en",
  de: "/de",
  cs: "/cs",
  uk: "/uk",
};

export const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
  de: "de_DE",
  cs: "cs_CZ",
  uk: "uk_UA",
};

type LocaleSeo = {
  title: string;
  /** Kurzform für den Tab und Social-Karten */
  shortTitle: string;
  description: string;
  keywords: string[];
  orgName: string;
  orgDescription: string;
  eventName: string;
  eventDescription: string;
  imageAlt: string;
};

export const seo: Record<Locale, LocaleSeo> = {
  pl: {
    title: "Męskie kręgi i trening NWTA | MKP Polska",
    shortTitle: "MKP Polska",
    description:
      "Męskie kręgi i inicjacyjny trening NWTA w Polsce. Miejsce, w którym mężczyźni mówią prawdę o swoim życiu i wspierają się nawzajem. Bez oceniania, bez naprawiania.",
    keywords: [
      "męskie kręgi",
      "krąg mężczyzn",
      "praca z mężczyznami",
      "ManKind Project Polska",
      "NWTA",
      "New Warrior Training Adventure",
      "rozwój osobisty dla mężczyzn",
      "grupa wsparcia dla mężczyzn",
      "inicjacja męska",
      "warsztaty dla mężczyzn",
    ],
    orgName: "The ManKind Project Polska",
    orgDescription:
      "Niezależna organizacja non-profit prowadząca męskie kręgi i inicjacyjny trening NWTA dla mężczyzn w Polsce.",
    eventName: "New Warrior Training Adventure (NWTA) — Polska 2026",
    eventDescription:
      "Weekendowy trening inicjacyjny ManKind Project: 48 godzin poza strefą komfortu, w oparciu o klasyczną drogę bohatera. Prowadzenie w języku angielskim z tłumaczami na miejscu.",
    imageAlt: "Mężczyźni siedzący razem na zboczu góry — wspólnota MKP Polska",
  },
  en: {
    title: "Men's Circles & NWTA Training | MKP Poland",
    shortTitle: "MKP Poland",
    description:
      "Men's circles and the NWTA initiation training in Poland. A place where men tell the truth about their lives and support each other. No judging, no fixing.",
    keywords: [
      "men's circle",
      "men's work",
      "ManKind Project Poland",
      "NWTA",
      "New Warrior Training Adventure",
      "men's group Poland",
      "personal growth for men",
      "male initiation",
      "emotional support for men",
      "men's retreat Poland",
    ],
    orgName: "The ManKind Project Poland",
    orgDescription:
      "An independent nonprofit running men's circles and the NWTA initiation training for men in Poland.",
    eventName: "New Warrior Training Adventure (NWTA) — Poland 2026",
    eventDescription:
      "The ManKind Project's weekend initiation training: 48 hours outside your comfort zone, built on the classic hero's journey. Held in English with translators on site.",
    imageAlt: "Men sitting together on a mountainside — the MKP Poland community",
  },
  de: {
    title: "Männerkreise und NWTA-Training | MKP Polen",
    shortTitle: "MKP Polen",
    description:
      "Männerkreise und das Initiationstraining NWTA in Polen. Ein Ort, an dem Männer die Wahrheit über ihr Leben aussprechen und einander tragen. Ohne Bewertung, ohne Ratschläge.",
    keywords: [
      "Männerkreis",
      "Männerarbeit",
      "emotionale Männerarbeit",
      "ManKind Project",
      "NWTA",
      "New Warrior Training Adventure",
      "Männergruppe",
      "Männerseminar",
      "Initiation Mann",
      "Persönlichkeitsentwicklung Männer",
    ],
    orgName: "The ManKind Project Polska",
    orgDescription:
      "Eine unabhängige Non-Profit-Organisation, die Männerkreise und das Initiationstraining NWTA für Männer in Polen durchführt.",
    eventName: "New Warrior Training Adventure (NWTA) — Polen 2026",
    eventDescription:
      "Das Wochenend-Initiationstraining des ManKind Project: 48 Stunden außerhalb der Komfortzone, aufgebaut auf der klassischen Heldenreise. Auf Englisch, mit Übersetzern vor Ort.",
    imageAlt: "Männer sitzen gemeinsam an einem Berghang — die Gemeinschaft von MKP Polen",
  },
  cs: {
    title: "Mužské kruhy a trénink NWTA | MKP Polsko",
    shortTitle: "MKP Polsko",
    description:
      "Mužské kruhy a iniciační trénink NWTA v Polsku. Místo, kde muži říkají pravdu o svém životě a vzájemně se podporují. Bez hodnocení, bez oprav.",
    keywords: [
      "mužský kruh",
      "mužská práce",
      "ManKind Project",
      "NWTA",
      "New Warrior Training Adventure",
      "mužská skupina",
      "osobní rozvoj pro muže",
      "mužská iniciace",
      "seminář pro muže",
    ],
    orgName: "The ManKind Project Polsko",
    orgDescription:
      "Nezávislá nezisková organizace, která vede mužské kruhy a iniciační trénink NWTA pro muže v Polsku.",
    eventName: "New Warrior Training Adventure (NWTA) — Polsko 2026",
    eventDescription:
      "Víkendový iniciační trénink ManKind Project: 48 hodin mimo komfortní zónu, postavený na klasické cestě hrdiny. Vedeno v angličtině s překladateli na místě.",
    imageAlt: "Muži sedící společně na úbočí hory — společenství MKP Polsko",
  },
  uk: {
    title: "Чоловічі кола та тренінг NWTA | MKP Польща",
    shortTitle: "MKP Польща",
    description:
      "Чоловічі кола та ініціаційний тренінг NWTA у Польщі. Місце, де чоловіки говорять правду про своє життя і підтримують одне одного. Без оцінок, без порад.",
    keywords: [
      "чоловіче коло",
      "чоловіча робота",
      "ManKind Project",
      "NWTA",
      "New Warrior Training Adventure",
      "чоловіча група",
      "особистісний розвиток для чоловіків",
      "чоловіча ініціація",
      "тренінг для чоловіків",
    ],
    orgName: "The ManKind Project Польща",
    orgDescription:
      "Незалежна неприбуткова організація, що проводить чоловічі кола та ініціаційний тренінг NWTA для чоловіків у Польщі.",
    eventName: "New Warrior Training Adventure (NWTA) — Польща 2026",
    eventDescription:
      "Вікендовий ініціаційний тренінг ManKind Project: 48 годин поза зоною комфорту, побудований на класичному шляху героя. Англійською, з перекладачами на місці.",
    imageAlt: "Чоловіки сидять разом на схилі гори — спільнота MKP Польща",
  },
};

/** hreflang-Alternativen inklusive x-default */
export function languageAlternates(): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const [code, path] of Object.entries(localePaths)) {
    entries[code] = `${SITE_URL}${path === "/" ? "" : path}`;
  }
  entries["x-default"] = SITE_URL;
  return entries;
}

export function canonicalFor(locale: Locale): string {
  const path = localePaths[locale];
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
