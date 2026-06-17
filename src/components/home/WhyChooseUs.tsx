import { whyChooseUs } from "@/data/site";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export function WhyChooseUs() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-[#175676]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(75,163,195,0.2)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="Why NADIL"
          title="Built on Trust,"
          highlight="Driven by Expertise"
          description="We combine certified technical capability with disciplined project execution to deliver inspection-ready results."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <AnimatedCard key={item.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#4BA3C3]/30 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4BA3C3]/20 text-[#4BA3C3] transition-colors group-hover:bg-[#4BA3C3] group-hover:text-white">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
