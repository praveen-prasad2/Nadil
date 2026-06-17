"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimatedSection className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4BA3C3]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-heading text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-[#4BA3C3]">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
