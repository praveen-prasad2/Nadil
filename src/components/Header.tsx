"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHero = pathname === "/" && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHero
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative">
          <motion.div whileHover={{ scale: 1.02 }} className="relative h-9 w-20 sm:h-10 sm:w-24">
            <Image
              src="/nadil-logo.png"
              alt="NADIL"
              fill
              className="object-contain object-left"
              priority
              sizes="96px"
            />
          </motion.div>
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div key={item.href} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
              <Link
                href={item.href}
                className={`font-display text-sm font-semibold tracking-wide transition-colors ${
                  isHero ? "text-slate-700 hover:text-slate-900" : "text-slate-600 hover:text-slate-900"
                } ${pathname === item.href ? "text-[#D62839]" : ""}`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
