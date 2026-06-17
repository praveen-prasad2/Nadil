"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Projects Done" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ];

  return (
    <section className="relative flex max-h-screen flex-col justify-start items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
          alt="Construction project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#000000]/80 via-[#000000]/70 to-[#000000]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20 lg:pt-44 flex flex-col items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-4xl xl:text-[60px] text-center"
          >
            Fire Protection & Construction Solutions Built for Modern
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" max-w-2xl text-[20px] leading-relaxed text-slate-300 sm:text-xl text-center"
          >
            Delivering reliable firestop, fireproofing, thermal insulation, and
            specialized construction services across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/#contact">Request Consultation</Button>
            <Button
              href="/#projects"
              variant="outline"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              View Projects
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid gap-6 sm:grid-cols-3 lg:max-w-2xl"
        ></motion.div>
      </div>

  
    </section>
  );
}
