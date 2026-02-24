import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />

      <main>
        <HeroSection />

        {/* Positioning Section */}
        <section className="relative py-28 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(75,163,195,0.08)_0%,transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#4BA3C3] to-[#175676] bg-clip-text text-transparent">
                  Securing Spaces. Protecting Life.
                </span>
              </h2>
              <p className="mt-10 text-center text-lg leading-relaxed text-slate-300 sm:text-xl">
                At Nadil, passive fire protection is not a checklist item. It is a structural safety system.
              </p>
              <p className="mt-6 text-center text-lg leading-relaxed text-slate-300">
                We specialize in certified firestop installations that preserve fire compartmentation, prevent smoke spread, and maintain the integrity of fire-rated walls and floors.
              </p>
              <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
                <p className="font-display text-center text-base font-bold tracking-wide text-[#D62839]">Every penetration sealed.</p>
                <p className="font-display text-center text-base font-bold tracking-wide text-[#D62839]">Every joint protected.</p>
                <p className="font-display text-center text-base font-bold tracking-wide text-[#D62839]">Every project inspection-ready.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Preview */}
        <section className="relative border-t border-[#4BA3C3]/10 py-28 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(23,86,118,0.2)_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our <span className="text-[#4BA3C3]">Services</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
                Engineered firestop solutions to restore and maintain fire-rated assemblies.
              </p>
            </AnimatedSection>
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "MEP Penetration Firestopping",
                  desc: "Sealing mechanical, electrical, and plumbing penetrations.",
                  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
                },
                {
                  title: "Linear & Expansion Joint Systems",
                  desc: "Fire-rated joint and perimeter fire barriers.",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
                },
                {
                  title: "Certified Documentation",
                  desc: "Firestop submittals and compliance documentation.",
                  image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop",
                },
              ].map((service, i) => (
                <AnimatedCard key={service.title} delay={i * 0.1}>
                  <Link href="/services">
                    <div className="group futuristic-card relative overflow-hidden rounded-2xl p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/90 via-[#175676]/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{service.title}</h3>
                        </div>
                      </div>
                      <p className="p-6 text-slate-400">{service.desc}</p>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="font-display inline-block rounded-xl border-2 border-[#4BA3C3]/50 bg-[#4BA3C3]/10 px-8 py-3 text-sm font-bold tracking-wide text-[#4BA3C3] transition-all hover:bg-[#4BA3C3]/20 hover:shadow-[0_0_30px_-10px_rgba(75,163,195,0.3)]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section id="about" className="relative border-t border-[#4BA3C3]/10 py-28 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(214,40,57,0.06)_0%,transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Operating Across the <span className="text-[#4BA3C3]">Gulf</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
                NADIL delivers firestop application services in key markets.
              </p>
            </AnimatedSection>
            <div className="mt-20 flex flex-col items-center justify-center gap-10 lg:flex-row">
              <AnimatedCard delay={0.2}>
                <div className="group futuristic-card relative overflow-hidden rounded-2xl w-full max-w-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop"
                      alt="Dubai skyline"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Dubai, UAE</h3>
                      <p className="mt-1 text-slate-300">Serving the UAE and wider GCC region</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.3}>
                <div className="group futuristic-card relative overflow-hidden rounded-2xl w-full max-w-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop"
                      alt="Saudi Arabia"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Saudi Arabia</h3>
                      <p className="mt-1 text-slate-300">Projects across the Kingdom</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative border-t border-[#4BA3C3]/10 py-28 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(75,163,195,0.08)_0%,transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Contact <span className="text-[#4BA3C3]">Us</span>
              </h2>
              <p className="mt-4 text-center text-slate-400">
                For fire stop application inquiries and project quotes.
              </p>
              <div className="mt-16">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
