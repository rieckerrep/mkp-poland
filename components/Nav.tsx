"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Copy } from "@/content/copy";

export function Nav({ t }: { t: Copy }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

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
          <Link
            href={t.otherLocaleHref}
            className="rounded-lg border border-white/20 px-2.5 py-1 text-xs font-semibold text-slate-200 transition-colors hover:border-white/50 hover:text-white"
          >
            {t.otherLocaleLabel}
          </Link>
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
