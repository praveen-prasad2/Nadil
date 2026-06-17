"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services#firestop", label: "Firestop Systems" },
      { href: "/services#fireproofing", label: "Fireproofing" },
      { href: "/services#expansion-joints", label: "Expansion Joints" },
      { href: "/services#thermal-insulation", label: "Thermal Insulation" },
      { href: "/services#acoustic-sealants", label: "Acoustic Sealants" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isHomeHero = pathname === "/" && !isScrolled;
  const isTransparent = isHomeHero && !mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`hidden border-b transition-all duration-300 lg:block ${
          isTransparent
            ? "border-white/10 bg-black/20 text-white/80 backdrop-blur-sm"
            : "border-[#4BA3C3]/10 bg-[#e8eef6]/90 text-slate-600 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-[#4BA3C3]">
            {siteConfig.phone}
          </a>
          <span className="opacity-30">|</span>
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-[#4BA3C3]">
            {siteConfig.email}
          </a>
        </div>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "border-b border-[#4BA3C3]/15 bg-white/90 shadow-sm backdrop-blur-xl"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:py-5">
          <Link href="/" className="relative shrink-0">
            <div className="relative h-12 w-32 sm:h-14 sm:w-40">
              <Image
                src="/nadil-logo.png"
                alt={siteConfig.name}
                fill
                className={`object-contain object-left transition-all ${isTransparent ? "brightness-0 invert" : ""}`}
                priority
                sizes="160px"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isTransparent
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-[#4BA3C3]/5 hover:text-[#4BA3C3]"
                    }`}
                  >
                    {item.label}
                    <svg className="h-4 w-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full z-50 mt-1 min-w-[220px] overflow-hidden rounded-xl border border-[#4BA3C3]/15 bg-white py-2 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#4BA3C3]/5 hover:text-[#4BA3C3]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#4BA3C3]"
                      : isTransparent
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-[#4BA3C3]/5 hover:text-[#4BA3C3]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Button href="/#contact" variant={isTransparent ? "primary" : "primary"} className="!px-6 !py-2.5">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
              isTransparent ? "text-white" : "text-slate-800"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-[#4BA3C3]/15 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-3 space-y-1 border-l border-[#4BA3C3]/20 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-[#4BA3C3]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-[#4BA3C3]/5"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3">
                <Button href="/#contact" className="w-full">Get a Quote</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
