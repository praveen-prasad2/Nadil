"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          Certified Firestop & Passive Fire Protection Solutions
        </motion.h1>

        <motion.p
          className="mt-6 font-display text-xl font-semibold tracking-wide text-[#175676] sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Securing Spaces. Protecting Life.
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Professional firestop contractor delivering code-compliant passive fire protection systems for commercial, residential, and industrial projects.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="#contact">
            <motion.span
              className="font-display inline-block rounded-xl bg-[#D62839] px-10 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#BA324F] hover:shadow-xl hover:shadow-red-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Technical Consultation
            </motion.span>
          </Link>
          <Link href="/services">
            <motion.span
              className="font-display inline-block rounded-xl border-2 border-slate-900 bg-transparent px-10 py-3.5 text-sm font-bold tracking-wide text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Projects
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-display text-xs font-medium uppercase tracking-widest text-slate-400">Scroll</span>
          <div className="h-8 w-px bg-slate-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
