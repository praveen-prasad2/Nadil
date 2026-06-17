import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/site";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export const metadata = {
  title: "Passive Fire Protection Services | Nadil",
  description: "Firestop systems, fireproofing, expansion joints, thermal insulation, and acoustic sealants across the UAE.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#e8eef6]">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-40 pb-24 px-6">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=600&fit=crop"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8eef6] via-[#e8eef6]/90 to-[#e8eef6]" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4BA3C3]">Our Services</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              Fire Protection <span className="text-[#4BA3C3]">Services</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Engineered solutions to restore and maintain fire-rated assemblies.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8">
              {services.map((service, i) => (
                <AnimatedCard key={service.id} delay={i * 0.08}>
                  <div
                    id={service.id}
                    className="glass-card grid items-center gap-8 rounded-2xl p-8 scroll-mt-32 lg:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4BA3C3] to-[#175676] text-white">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-slate-900">{service.title}</h2>
                      <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                      <p className="mt-3 text-sm text-slate-500">
                        All installations follow tested and approved system specifications with full compliance documentation.
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Our" highlight="Expertise" />
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Fire-Rated Assemblies",
                  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
                },
                {
                  title: "Penetration Sealing",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
                },
                {
                  title: "Compliance Documentation",
                  image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop",
                },
              ].map((item, i) => (
                <AnimatedCard key={item.title} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-slate-900">Ready to Secure Your Project?</h2>
              <p className="mt-4 text-slate-600">
                Request a technical consultation for your next fire protection project.
              </p>
              <div className="mt-8">
                <Button href="/#contact">Request a Consultation</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
