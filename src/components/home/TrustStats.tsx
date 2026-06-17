"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { trustStats } from "@/data/site";
import { AnimatedCard } from "@/components/AnimatedCard";

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2.2, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-[#175676] sm:text-5xl">
      <motion.span>{rounded}</motion.span>
      <span className="text-[#4BA3C3]">{suffix}</span>
    </span>
  );
}

export function TrustStats() {
  return (
    <section className="relative -mt-16 z-20 px-6 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustStats.map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 0.08}>
              <div className="glass-card rounded-2xl px-6 py-8 text-center">
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
