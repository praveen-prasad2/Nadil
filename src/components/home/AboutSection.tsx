import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop"
                alt="NADIL team on construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-[#4BA3C3]/20 bg-white p-6 shadow-xl lg:block">
              <p className="font-heading text-3xl font-bold text-[#175676]">15+</p>
              <p className="text-sm text-slate-600">Years of Excellence</p>
            </div>
          </AnimatedSection>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About NADIL"
              title="Engineering Safety Into Every"
              highlight="Structure"
              description="NADIL is a specialized passive fire protection contractor delivering certified firestop systems across complex construction environments throughout the UAE and GCC."
            />

            <AnimatedSection delay={0.15} className="mt-10 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Our Mission</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  To deliver technically compliant, fully documented fire compartmentation solutions that protect lives, assets, and infrastructure.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Our Vision</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  To be the most trusted passive fire protection partner in the Gulf region, setting the standard for precision and compliance.
                </p>
              </div>
              <Button href="/about">Learn More About Us</Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
