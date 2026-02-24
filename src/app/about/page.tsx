import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "About Nadil | Securing Spaces. Protecting Life.",
  description: "Nadil is a specialized passive fire protection contractor delivering certified firestop systems across Dubai and Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(75,163,195,0.1)_0%,transparent_50%)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#4BA3C3 1px, transparent 1px), linear-gradient(90deg, #4BA3C3 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About <span className="text-[#D62839]">Nadil</span>
            </h1>
            <p className="mt-6 font-display text-xl font-semibold tracking-wide text-[#4BA3C3]">
              Securing Spaces. Protecting Life.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-slate-300">
                Nadil is a specialized passive fire protection contractor delivering certified firestop systems across complex construction environments. We ensure that MEP penetrations and movement joints do not compromise fire-rated assemblies.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Our team works with consultants, contractors, and project managers to deliver technically compliant and fully documented fire compartmentation solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative border-t border-[#4BA3C3]/10 py-28 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(23,86,118,0.2)_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#4BA3C3] to-[#175676] bg-clip-text text-transparent">
                  Our Philosophy
                </span>
              </h2>
              <div className="mt-16 rounded-2xl border border-[#4BA3C3]/20 bg-[#175676]/20 p-12 backdrop-blur-sm">
                <p className="font-display text-center text-xl font-semibold italic text-slate-200 sm:text-2xl">
                  Fire protection is not visible once a building is complete.
                  <br />
                  But when it is needed, it becomes everything.
                </p>
                <p className="mt-2 text-center text-slate-400">
                  That is why our work focuses on precision, compliance, and technical integrity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Image section */}
        <section className="py-28 px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="group relative aspect-[21/9] overflow-hidden rounded-2xl border border-[#4BA3C3]/20">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop"
                  alt="Modern construction"
                  fill
                  className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-[#175676]/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-display text-center text-2xl font-bold tracking-wide text-white sm:text-3xl">
                    Securing Spaces. Protecting Life.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
