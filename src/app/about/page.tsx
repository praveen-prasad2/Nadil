import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Nadil | Securing Spaces. Protecting Life.",
  description: "Nadil is a specialized passive fire protection contractor delivering certified firestop systems across Dubai and Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e8eef6]">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-40 pb-24 px-6">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8eef6] via-[#e8eef6]/90 to-[#e8eef6]" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4BA3C3]">About Us</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              About <span className="text-[#4BA3C3]">NADIL</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">Securing Spaces. Protecting Life.</p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <p className="text-lg leading-relaxed text-slate-600">
                NADIL is a specialized passive fire protection contractor delivering certified firestop systems across complex construction environments. We ensure that MEP penetrations and movement joints do not compromise fire-rated assemblies.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Our team works with consultants, contractors, and project managers to deliver technically compliant and fully documented fire compartmentation solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(75,163,195,0.06)_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl">
            <SectionHeading
              title="Our"
              highlight="Philosophy"
              description="Fire protection is not visible once a building is complete. But when it is needed, it becomes everything."
            />
            <AnimatedSection delay={0.15}>
              <div className="glass-card mt-12 rounded-2xl p-12 text-center">
                <p className="text-xl font-medium italic text-slate-800 sm:text-2xl">
                  That is why our work focuses on precision, compliance, and technical integrity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="team" className="section-padding">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="group relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=500&fit=crop"
                  alt="Modern construction"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-[#175676]/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-center text-2xl font-bold text-white sm:text-3xl">
                    Securing Spaces. Protecting Life.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mt-12 text-center">
              <Button href="/#contact">Work With Us</Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
