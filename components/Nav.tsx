"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { locales, type Copy, type Locale } from "@/content/copy";

export function Nav({ t, locale }: { t: Copy; locale: Locale }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  /* Dropdown schließt bei Klick außerhalb */
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [langOpen]);

  const links = [
    { href: "#kregi", label: t.nav.circles },
    { href: "#nwta", label: t.nav.nwta },
    { href: "#faq", label: t.nav.faq },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-night-950/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2 text-white">
          <span className="text-lg font-bold tracking-tight">MKP</span>
          <span className="text-sm font-medium text-slate-300">Polska</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Sprach-Dropdown */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 rounded-lg border border-white/20 px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-white/50 hover:text-white"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale.toUpperCase()}
              <motion.span animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-night-950/95 py-1.5 shadow-xl backdrop-blur-md"
                >
                  {locales.map((l) => {
                    const active = l.code === locale;
                    return (
                      <li key={l.code} role="option" aria-selected={active}>
                        <Link
                          href={l.href}
                          onClick={() => setLangOpen(false)}
                          className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                            active
                              ? "font-semibold text-amber-400"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {l.label}
                          {active && <Check className="h-4 w-4" />}
                        </Link>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#kontakt"
            className="rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-night-950 shadow-md transition-transform hover:-translate-y-0.5"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
