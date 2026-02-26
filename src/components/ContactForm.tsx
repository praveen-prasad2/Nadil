"use client";

import { useState } from "react";

// Update with your contact details
const contactInfo = {
  phone: "+971 50 123 4567",
  email: "info@nadil.com",
  address: "Dubai, UAE",
};

// Update href with your social media profile URLs
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
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent("Contact from NADIL Website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-12">
      {/* Contact info - dark theme */}
      <div className="w-full rounded-2xl border border-[#4BA3C3]/25 bg-slate-100/95 p-8 backdrop-blur-sm shadow-sm lg:max-w-md">
        <div className="space-y-8">
          {/* Phone */}
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D62839] text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-800">Phone</p>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="mt-1 block text-slate-600 hover:text-[#4BA3C3]">
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D62839] text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-800">Email ID</p>
              <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-slate-600 hover:text-[#4BA3C3]">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D62839] text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-800">Address</p>
              <p className="mt-1 text-slate-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-10 border-t border-[#4BA3C3]/20 pt-8">
          <p className="mb-4 font-display text-sm font-bold text-slate-800">Follow us</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#4BA3C3]/25 bg-slate-100 text-slate-600 transition-all hover:border-[#4BA3C3]/50 hover:text-[#4BA3C3]"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex-1 space-y-6 rounded-2xl border border-[#4BA3C3]/25 bg-slate-100/95 p-8 backdrop-blur-sm shadow-sm lg:max-w-md"
      >
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-[#4BA3C3]/25 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#4BA3C3]/50 focus:outline-none focus:ring-1 focus:ring-[#4BA3C3]/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-[#4BA3C3]/25 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#4BA3C3]/50 focus:outline-none focus:ring-1 focus:ring-[#4BA3C3]/50"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-[#4BA3C3]/25 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#4BA3C3]/50 focus:outline-none focus:ring-1 focus:ring-[#4BA3C3]/50"
            placeholder="+971 50 123 4567"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full rounded-xl border border-[#4BA3C3]/25 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#4BA3C3]/50 focus:outline-none focus:ring-1 focus:ring-[#4BA3C3]/50"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="font-display w-full rounded-xl bg-[#D62839] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_30px_-5px_rgba(214,40,57,0.5)] transition-all hover:bg-[#BA324F] hover:shadow-[0_0_40px_-5px_rgba(214,40,57,0.6)]"
        >
          {submitted ? "Opening email..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
