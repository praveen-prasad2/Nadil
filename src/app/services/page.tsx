import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";

export const metadata = {
  title: "Passive Fire Protection Services | Nadil",
  description: "MEP penetration firestopping, linear joint systems, curtain wall perimeter fire barriers, and certified firestop solutions.",
};

const services = [
  "MEP Penetration Firestopping",
  "Linear Joint & Expansion Joint Fire Systems",
  "Curtain Wall Perimeter Fire Barriers",
  "Cable & Conduit Fire Sealing",
  "Fire-Rated Sealants, Collars & Mortar Systems",
  "Firestop Submittals & Compliance Documentation",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Passive Fire Protection <span className="text-[#175676]">Services</span>
            </h1>
            <p className="mt-6 font-display text-xl font-semibold tracking-wide text-[#175676]">
              Securing Spaces. Protecting Life.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <p className="text-center text-lg leading-relaxed text-slate-600">
                Our firestop services are engineered to restore and maintain fire-rated assemblies affected by mechanical, electrical, and structural penetrations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services list */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                We Deliver
              </h2>
            </AnimatedSection>
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {services.map((service, i) => (
                <AnimatedCard key={service} delay={i * 0.05}>
                  <div className="modern-card flex items-center gap-6 rounded-xl p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#175676] text-lg font-bold text-white">
                      ✓
                    </span>
                    <p className="font-display text-lg font-semibold text-slate-800">{service}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
            <AnimatedSection>
              <p className="mt-12 text-center text-slate-600">
                All installations follow tested and approved system specifications.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Service images */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 className="font-display text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Our Expertise
              </h2>
            </AnimatedSection>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="group modern-card overflow-hidden rounded-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ready to Secure Your Project?
              </h2>
              <p className="mt-4 text-slate-600">
                Request a technical consultation for your next firestop project.
              </p>
              <Link
                href="/#contact"
                className="font-display mt-8 inline-block rounded-xl bg-[#D62839] px-10 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-red-500/25 transition-all hover:bg-[#BA324F] hover:shadow-xl"
              >
                Request a Technical Consultation
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
