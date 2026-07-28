import { Rubik } from "next/font/google";
import type { Locale } from "@/content/copy";
import "@/app/globals.css";

/* Cyrillic ist für die ukrainische Fassung nötig, latin-ext für PL/CS */
const rubik = Rubik({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-rubik",
  display: "swap",
});

/**
 * Gemeinsame HTML-Hülle aller Sprachrouten.
 * Jede Sprache hat eine eigene Route-Group mit eigenem Root-Layout,
 * damit das lang-Attribut serverseitig im ausgelieferten HTML steht.
 */
export function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
