"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/clients";

const LOGO_WIDTH = 176;
const LOGO_HEIGHT = 80;

export function ClientsMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative border-y border-[#4BA3C3]/10 bg-white/60 py-20 px-6 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#4BA3C3]">
          Trusted By
        </p>
        <h2 className="font-heading mt-3 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Our <span className="text-[#4BA3C3]">Clients</span>
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#e8eef6] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#e8eef6] to-transparent" />

        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="mx-8 flex shrink-0 items-center justify-center"
              style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="h-full w-full object-contain object-center"
                unoptimized
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
