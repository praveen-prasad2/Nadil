import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function BusinessProfileCTA() {
  return (
    <section id="profile" className="section-padding px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#175676] via-[#175676] to-[#4BA3C3]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#4BA3C3]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#D62839]/10 blur-3xl" />

        <div className="relative grid items-center gap-10 p-10 sm:p-16 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4BA3C3]">Company Profile</p>
            <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
              Download Our Business Profile
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-slate-300">
              Explore our capabilities, certifications, project portfolio, and technical expertise in a comprehensive company overview document.
            </p>
            <div className="mt-8">
              <Button href="/#" variant="primary" className="!bg-white !text-[#175676] hover:!bg-slate-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Profile
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {["Certifications", "Project Portfolio", "Technical Specs", "Safety Standards"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-medium text-white backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
