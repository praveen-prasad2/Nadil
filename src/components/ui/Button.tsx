"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D62839] text-white shadow-[0_4px_24px_-4px_rgba(214,40,57,0.5)] hover:bg-[#BA324F] hover:shadow-[0_8px_32px_-4px_rgba(214,40,57,0.6)]",
  secondary:
    "bg-[#175676] text-white shadow-[0_4px_24px_-4px_rgba(23,86,118,0.4)] hover:bg-[#4BA3C3]",
  outline:
    "border-2 border-[#4BA3C3]/50 bg-white/10 text-[#4BA3C3] backdrop-blur-sm hover:bg-[#4BA3C3]/10 hover:border-[#4BA3C3]",
  ghost: "text-slate-700 hover:text-[#4BA3C3] hover:bg-[#4BA3C3]/5",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
