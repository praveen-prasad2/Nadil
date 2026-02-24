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
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About <span className="text-[#D62839]">Nadil</span>
            </h1>
            <p className="mt-6 font-display text-xl font-semibold tracking-wide text-[#175676]">
              Securing Spaces. Protecting Life.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-slate-600">
                Nadil is a specialized passive fire protection contractor delivering certified firestop systems across complex construction environments. We ensure that MEP penetrations and movement joints do not compromise fire-rated assemblies.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Our team works with consultants, contractors, and project managers to deliver technically compliant and fully documented fire compartmentation solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our <span className="text-[#175676]">Philosophy</span>
              </h2>
              <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-12 shadow-sm">
                <p className="font-display text-center text-xl font-semibold italic text-slate-800 sm:text-2xl">
                  Fire protection is not visible once a building is complete.
                  <br />
                  But when it is needed, it becomes everything.
                </p>
                <p className="mt-2 text-center text-slate-600">
                  That is why our work focuses on precision, compliance, and technical integrity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Image section */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="group relative aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop"
                  alt="Modern construction"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-95"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-slate-900/30" />
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
