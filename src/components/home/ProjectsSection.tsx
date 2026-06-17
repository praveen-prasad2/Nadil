"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/site";
import { AnimatedCard } from "@/components/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "Commercial", "Industrial", "Residential"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative border-t border-[#4BA3C3]/10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of our completed fire protection and construction projects across the UAE and GCC."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#175676] text-white shadow-lg"
                  : "bg-white/80 text-slate-600 hover:bg-[#4BA3C3]/10 hover:text-[#4BA3C3]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((project, i) => (
            <AnimatedCard key={project.id} delay={i * 0.06} className="mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative w-full overflow-hidden rounded-2xl text-left"
              >
                <div
                  className={`relative overflow-hidden ${
                    i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#175676]/90 via-[#175676]/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="rounded-full bg-[#4BA3C3]/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="font-heading mt-3 text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{project.location}</p>
                  </div>
                </div>
              </button>
            </AnimatedCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="672px"
                />
              </div>
              <div className="p-8">
                <span className="text-sm font-medium text-[#4BA3C3]">{selectedProject.category}</span>
                <h3 className="font-heading mt-2 text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{selectedProject.location}</p>
                <p className="mt-4 leading-relaxed text-slate-600">{selectedProject.description}</p>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 rounded-xl bg-[#175676] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4BA3C3]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
