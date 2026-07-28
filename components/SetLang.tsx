"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/copy";

/* Setzt das lang-Attribut pro Sprachroute (das Root-Layout ist statisch pl) */
export function SetLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
