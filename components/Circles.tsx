"use client";

import { CalendarDays, ListChecks, Lock, Users } from "lucide-react";
import Image from "next/image";
import type { Copy } from "@/content/copy";
import { Reveal, SectionLabel } from "./ui";

const icons = [CalendarDays, ListChecks, Lock, Users];

export function Circles({ t }: { t: Copy }) {
  return (
    <section id="kregi" className="bg-paper scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <SectionLabel>{t.circles.label}</SectionLabel>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-night-900">
            {t.circles.h2}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-mid">
            {t.circles.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.circles.features.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div
                  className="card-edge h-full p-6"
                  style={{ "--edge": "#172554" } as React.CSSProperties}
                >
                  <Icon className="h-6 w-6 text-blue-700" />
                  <h3 className="mt-4 font-semibold text-night-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-mid">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* No-Fixing-Prinzip als eigenes, ruhiges Statement */}
        <Reveal delay={0.1}>
          <div
            className="card-edge mt-14 grid overflow-hidden md:grid-cols-[1.3fr_1fr]"
            style={{ "--edge": "linear-gradient(90deg,#facc15,#f59e0b,#ea580c)" } as React.CSSProperties}
          >
            <div className="p-8 md:p-12">
              <p className="label text-ember">{t.circles.noFixing.label}</p>
              <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.5rem)] font-bold tracking-tight text-night-900">
                {t.circles.noFixing.title}
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-mid">
                {t.circles.noFixing.text}
              </p>
              <a href="#kontakt" className="btn-quiet-light mt-8">
                {t.circles.cta}
              </a>
            </div>
            <div className="relative h-56 w-full md:h-auto">
              <Image
                src="/images/empathie.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
