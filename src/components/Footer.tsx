import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-6xl text-center">
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
        <p className="mt-3 font-display text-lg font-semibold tracking-wide text-slate-700">
          Securing Spaces. Protecting Life.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Certified Passive Fire Protection Contractor
        </p>
      </div>
    </footer>
  );
}
