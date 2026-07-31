"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`label mb-4 ${
        tone === "dark" ? "text-amber-400/90" : "text-blue-700"
      }`}
    >
      {children}
    </p>
  );
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  locale,
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  locale: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();

  const [display, setDisplay] = useState(value);

  useIsomorphicLayoutEffect(() => {
    if (!reduce) setDisplay(0);
  }, [reduce]);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, reduce]);

  const formatted =
    value >= 10000 ? display.toLocaleString(locale) : String(display);

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
