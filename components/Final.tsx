"use client";

import { Mail, Phone } from "lucide-react";
import type { Copy } from "@/content/copy";
import { Reveal } from "./ui";

export function Final({ t }: { t: Copy }) {
  return (
    <section id="kontakt" className="section-night relative scroll-mt-16 overflow-hidden">
      {/* Hintergrund: Vater mit Kind am Meer, stark abgedunkelt */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/images/stolz.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131f42] via-transparent to-night-950/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight tracking-tight text-white">
            {t.final.h2a}
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              {t.final.h2b}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {t.final.lead}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${t.final.email}`} className="btn-gold">
              <Mail className="h-4 w-4" />
              {t.final.cta}
            </a>
            <a href={`tel:${t.final.phone.replace(/\s/g, "")}`} className="btn-quiet">
              <Phone className="h-4 w-4" />
              {t.final.call}
            </a>
          </div>
          <div className="mt-10 space-y-1 text-slate-400">
            <p className="font-medium text-slate-300">{t.final.person}</p>
            <p>
              <a href={`mailto:${t.final.email}`} className="hover:text-white">
                {t.final.email}
              </a>
              {" · "}
              <a
                href={`tel:${t.final.phone.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {t.final.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
