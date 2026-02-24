"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/80 to-[#0a1628]" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 animate-orb rounded-full bg-[#D62839]/20 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-80 w-80 animate-orb rounded-full bg-[#4BA3C3]/15 blur-[80px]" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-20 left-1/2 h-64 w-64 animate-orb rounded-full bg-[#175676]/30 blur-[60px]" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#4BA3C3 1px, transparent 1px), linear-gradient(90deg, #4BA3C3 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Certified Firestop & Passive Fire Protection Solutions
        </motion.h1>

        <motion.p
          className="mt-6 font-display text-xl font-semibold tracking-wide sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="bg-gradient-to-r from-[#4BA3C3] to-[#175676] bg-clip-text text-transparent">
            Securing Spaces. Protecting Life.
          </span>
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-slate-300 sm:text-lg"
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
              className="font-display inline-block rounded-xl bg-[#D62839] px-10 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_30px_-5px_rgba(214,40,57,0.5)] transition-all hover:bg-[#BA324F] hover:shadow-[0_0_40px_-5px_rgba(214,40,57,0.6)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Technical Consultation
            </motion.span>
          </Link>
          <Link href="/services">
            <motion.span
              className="font-display inline-block rounded-xl border-2 border-[#4BA3C3]/60 bg-[#4BA3C3]/10 px-10 py-3.5 text-sm font-bold tracking-wide text-[#4BA3C3] backdrop-blur-sm transition-all hover:bg-[#4BA3C3]/20"
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
          <span className="font-display text-xs font-medium uppercase tracking-widest text-slate-500">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-[#4BA3C3]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
