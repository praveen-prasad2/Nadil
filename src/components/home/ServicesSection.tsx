import Link from "next/link";
import { services } from "@/data/site";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export function ServicesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(75,163,195,0.06)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Specialized Construction"
          highlight="Services"
          description="Engineered solutions for fire protection, insulation, and building envelope performance."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedCard key={service.id} delay={i * 0.08}>
              <div className="group glass-card flex h-full flex-col rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4BA3C3] to-[#175676] text-white transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-heading mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4BA3C3] transition-colors hover:text-[#175676]"
                >
                  Learn More
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
