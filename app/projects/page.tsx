"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "SWARNY CITY | RESIDENTIAL PLOT 30 BY 40",
    group: "30x40",
    loc: "RAKHAMINES DURKU",
    img: "project-signboard.png",
    desc: "Discover a thoughtfully planned real estates project offering prime location, excellent connectivity, modern infrastructure, and strong investment potential. Design for comfortable living and long term value the project provide an ideal opportunity for families , investors, and future homeowners",

  },
  {
    title: "Land Plot 30x40",
    group: "30x40",
    loc: "Jamshedpur",
    img: "land-plot-30x40.webp",
    desc: "Premium 1200 sq ft land plot options planned for future residential development.",
  },
  {
    title: "Land Plot 1200 sq ft",
    group: "1200 Sq Ft",
    loc: "Jamshedpur",
    img: "land-plot-1200-sq-ft.webp",
    desc: "Affordable plot options with ownership guidance, local support, and site visit coordination.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects = activeTab === "All" ? projects : projects.filter((p) => p.group === activeTab);

  return (
    <div className="w-full bg-zinc-50 pb-20 font-sans">
      <section className="inner-hero relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/developed-plotted-layout.webp" alt="Aerial view of a developed land plot layout" fill priority sizes="100vw" className="object-cover" />
          <div className="inner-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="inner-hero-title mb-4 text-5xl font-bold md:text-6xl">PROJECTS</h1>
          <div className="inner-hero-breadcrumb flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">PROJECTS</span>
          </div>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {["All", "30x40", "1200 Sq Ft"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`project-filter px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab ? "is-active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((prop, i) => (
                <motion.article
                  layout
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  whileHover={{ y: -8 }}
                  className="ploy-card group overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-72 overflow-hidden shrink-0">
                    <Image
                      src={`/images/projects/${prop.img}`}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="project-image-overlay absolute inset-0" />
                    <div className="project-category absolute bottom-5 left-5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-md">
                      {prop.group}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-zinc-800 transition-colors group-hover:text-[#ba7517]">
                        {prop.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-zinc-500">{prop.desc}</p>

                      {/* {prop.details && (
                        <div className="mb-6 grid grid-cols-2 gap-2 text-xs border-t border-b border-zinc-100 py-4">
                          {prop.details.map((d) => (
                            <div key={d.label} className="bg-[#fcfbf9] border border-[#f5ebd6] px-3 py-2 rounded">
                              <span className="text-[10px] font-bold text-zinc-400 block tracking-wider uppercase">{d.label}</span>
                              <span className="font-bold text-zinc-700">{d.value}</span>
                            </div>
                          ))}
                        </div>
                      )} */}
                    </div>

                    <div>
                      <div className="mb-6 flex items-center gap-2 border-t border-zinc-100 pt-4 text-sm font-semibold text-zinc-500">
                        <MapPin className="h-4 w-4 shrink-0 text-[#763300]" />
                        {prop.loc}
                      </div>
                      <Link
                        href="/contact"
                        className="theme-primary-cta flex h-12 w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
                      >
                        Inquire Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
