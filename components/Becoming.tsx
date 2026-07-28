"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Copy } from "@/content/copy";
import { Reveal, SectionLabel } from "./ui";

/* Botschaften-Slider: die Kartenreihe wandert scroll-gekoppelt von links nach rechts */
export function Becoming({ t }: { t: Copy }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-22%", "2%"]);

  return (
    <section ref={ref} className="section-night overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:pt-32">
        <Reveal>
          <SectionLabel tone="dark">{t.becoming.label}</SectionLabel>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-white">
            {t.becoming.h2a}
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              {t.becoming.h2b}
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.becoming.lead}
          </p>
        </Reveal>
      </div>

      <div className="pb-24 pt-14 md:pb-32">
        <motion.div
          style={reduce ? undefined : { x }}
          className="flex w-max gap-5 pl-5 will-change-transform"
        >
          {t.becoming.cards.map((c) => (
            <figure
              key={c.label}
              className="group relative h-[22rem] w-[16rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-[24rem] sm:w-[18rem]"
            >
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="block h-0.5 w-8 rounded bg-gradient-to-r from-amber-400 to-orange-500" />
                <span className="mt-3 block text-xl font-semibold text-white">
                  {c.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
