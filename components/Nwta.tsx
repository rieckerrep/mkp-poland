"use client";

import { ArrowRight, CalendarDays, Globe, MapPin, Users } from "lucide-react";
import Image from "next/image";
import type { Copy } from "@/content/copy";
import { Reveal, SectionLabel } from "./ui";

const factIcons = [CalendarDays, MapPin, Users, Globe];

export function Nwta({ t }: { t: Copy }) {
  return (
    <section id="nwta" className="section-night scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <SectionLabel tone="dark">{t.nwta.label}</SectionLabel>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-white">
                {t.nwta.h2a}
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  {t.nwta.h2b}
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                {t.nwta.lead}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                {t.nwta.body}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <a href="#kontakt" className="btn-gold">
                  {t.nwta.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-sm text-slate-400">{t.nwta.note}</p>
              </div>
            </Reveal>
          </div>

          {/* Fakten-Karte */}
          <Reveal delay={0.15}>
            <div className="card-night overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/maenner-in-aktion.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <ul className="space-y-6 p-8">
                {t.nwta.facts.map((f, i) => {
                  const Icon = factIcons[i % factIcons.length];
                  return (
                    <li key={f.k} className="flex items-start gap-4">
                      <span className="mt-0.5 rounded-lg bg-amber-500/15 p-2 text-amber-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="label text-slate-500">{f.k}</p>
                        <p className="mt-1 font-medium text-white">{f.v}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
