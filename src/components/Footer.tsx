import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-[#4BA3C3]/20 bg-[#e8eef6]/90 py-16 px-6 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-[#4BA3C3]/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl text-center">
        <Link href="/" className="inline-block">
          <div className="relative mx-auto h-10 w-28 sm:h-12 sm:w-32">
            <Image
              src="/nadil-logo.png"
              alt="Nadil Firestop Solutions"
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        </Link>
        <p className="mt-3 font-display text-lg font-semibold tracking-wide text-[#4BA3C3]">
          Securing Spaces. Protecting Life.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Certified Passive Fire Protection Contractor
        </p>
      </div>
    </footer>
  );
}
