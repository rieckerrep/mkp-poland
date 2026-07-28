"use client";

import type { Copy } from "@/content/copy";
import { Reveal, SectionLabel } from "./ui";

export function Problem({ t }: { t: Copy }) {
  return (
    <section className="section-night relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <SectionLabel tone="dark">{t.problem.label}</SectionLabel>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-white">
            {t.problem.h2a}
            <br />
            <span className="text-slate-400">{t.problem.h2b}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.problem.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.problem.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="card-night h-full p-7">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-20 max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-snug text-white">
            {t.problem.punchA}{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              {t.problem.punchB}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
