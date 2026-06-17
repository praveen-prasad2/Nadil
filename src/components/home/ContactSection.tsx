import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative border-t border-[#4BA3C3]/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(75,163,195,0.06)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your"
          highlight="Project"
          description="For fire protection inquiries, technical consultations, and project quotes across the UAE."
        />
        <AnimatedSection className="mt-16">
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
