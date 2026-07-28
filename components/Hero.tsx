"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Copy, Locale } from "@/content/copy";
import { Counter } from "./ui";

export function Hero({ t, locale }: { t: Copy; locale: Locale }) {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.6, 0.35, 1] as const },
  });

  return (
    <section id="top" className="section-night relative overflow-hidden">
      {/* Ruhige Lichtflächen im Hintergrund */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-32">
        <motion.p {...fade(0.05)} className="label text-amber-400/90">
          {t.hero.label}
        </motion.p>

        <motion.h1
          {...fade(0.15)}
          className="mt-5 max-w-4xl text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-white"
        >
          {t.hero.h1a}
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            {t.hero.h1b}
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div {...fade(0.45)} className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#nwta" className="btn-gold">
            {t.hero.primary}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#kregi" className="btn-quiet">
            {t.hero.secondary}
          </a>
        </motion.div>

        {/* Zahlenband */}
        <motion.div
          {...fade(0.6)}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-white">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  locale={locale === "pl" ? "pl-PL" : "en-US"}
                />
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-500">
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
