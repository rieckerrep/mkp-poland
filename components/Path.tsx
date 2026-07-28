"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Copy } from "@/content/copy";
import { Reveal, SectionLabel } from "./ui";

export function Path({ t }: { t: Copy }) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <SectionLabel>{t.path.label}</SectionLabel>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-night-900">
            {t.path.h2}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {t.path.steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.15} className="relative">
              <div className="flex items-start gap-5 md:block">
                <div className="flex items-center gap-4">
                  <span className="bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-5xl font-bold text-transparent">
                    {s.num}
                  </span>
                  {i < t.path.steps.length - 1 && (
                    <motion.span
                      aria-hidden
                      className="hidden text-amber-500 md:inline-block"
                      initial={reduce ? false : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.span>
                  )}
                </div>
                <div className="md:mt-5">
                  <h3 className="text-xl font-semibold text-night-900">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-mid">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
