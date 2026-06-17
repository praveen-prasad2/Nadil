"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full rounded-xl border border-[#4BA3C3]/20 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-colors focus:border-[#4BA3C3] focus:outline-none focus:ring-2 focus:ring-[#4BA3C3]/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) newErrors.name = "Name is required";
    if (!email?.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!message?.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent("Contact from NADIL Website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="font-heading text-xl font-bold text-slate-900">Contact Information</h3>
          <div className="mt-8 space-y-6">
            {[
              {
                label: "Address",
                value: siteConfig.address,
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#175676] text-white">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 text-sm text-slate-600 hover:text-[#4BA3C3]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm text-slate-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4BA3C3]/20 text-slate-500 transition-all hover:border-[#4BA3C3] hover:text-[#4BA3C3]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#4BA3C3]/20 shadow-sm">
          <iframe
            title="NADIL office location"
            src={siteConfig.mapEmbed}
            className="h-64 w-full grayscale-[30%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-card relative rounded-2xl p-8">
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4BA3C3]/10"
              >
                <svg className="h-8 w-8 text-[#4BA3C3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <p className="font-heading mt-4 text-xl font-bold text-slate-900">Message Sent!</p>
              <p className="mt-2 text-sm text-slate-500">Opening your email client...</p>
            </motion.div>
          )}
        </AnimatePresence>

        <h3 className="font-heading text-xl font-bold text-slate-900">Send Us a Message</h3>
        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
            <input type="text" id="name" name="name" className={inputClass} placeholder="Your name" />
            {errors.name && <p className="mt-1 text-xs text-[#D62839]">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" id="email" name="email" className={inputClass} placeholder="your@email.com" />
            {errors.email && <p className="mt-1 text-xs text-[#D62839]">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+971 50 123 4567" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your project..." />
            {errors.message && <p className="mt-1 text-xs text-[#D62839]">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#D62839] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_-4px_rgba(214,40,57,0.5)] transition-all hover:bg-[#BA324F]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
