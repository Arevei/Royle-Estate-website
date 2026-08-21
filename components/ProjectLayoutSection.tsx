"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  CircleCheck,
  Compass,
  FileText,
  Leaf,
  Route,
  Zap,
} from "lucide-react";

const projectHighlights = [
  { icon: CircleCheck, label: "CNT Free Project" },
  { icon: Building2, label: "Well Planned Layout" },
  { icon: Route, label: "Wide Roads" },
  { icon: Zap, label: "Electricity Available" },
  { icon: Leaf, label: "Peaceful Environment" },
];

const projectLegend = [
  { label: "Available Plot", swatch: "bg-[#f7f4ee] border border-[#2d2d2a]" },
  { label: "Sold Plot", swatch: "bg-[#f3ea00] border border-[#c7be00]" },
  { label: "Park / Open Space", swatch: "bg-[#b6d36d] border border-[#8fa957]" },
  { label: "Road", swatch: "bg-[#9b9b9b]" },
  { label: "Project Boundary", swatch: "border-t-2 border-dashed border-[#b92922]" },
];

const mainFeatures = [
  "Main Road Touch Project",
  "Branch Road Connectivity",
  "Electricity Connection",
  "One Gate System",
  "Individual Plot Boundary",
  "3, 5 Katha & Above Plots",
  "1 Katha = 720 Sq. Ft.",
  "100% Legal & Transparent",
  "1 Katha, 1.5 Katha, 2 Katha & Above Size",
];

const projectDetails = [
  { label: "Name", value: "Swarny City" },
  { label: "Location", value: "Rakhamines Durku" },
  { label: "Type", value: "Residential Plot" },
  { label: "Plot Size", value: "30 by 40" },
];

export function ProjectLayoutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[8px] border border-[#d8d0bf] bg-[#f4efe3] shadow-2xl"
        >
          <div className="relative min-h-[920px] md:min-h-[780px] lg:min-h-[860px] xl:min-h-[920px]">
            <Image
              src="/images/about/everny-city-layout-bg.png"
              alt="Swarny City residential plot layout plan"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#f7f0e1]/20" />

            <div className="absolute left-4 right-4 top-5 z-10 grid gap-4 md:left-8 md:right-auto md:top-10 md:w-[260px]">
              <div className="rounded-[8px] bg-white/90 p-5 shadow-[0_20px_55px_rgba(38,48,26,0.14)] backdrop-blur-sm md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2f6b1c] text-white">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black uppercase leading-none tracking-tight text-[#285d16]">
                    Project
                    <br />
                    Highlights
                  </h3>
                </div>
                <div className="space-y-3">
                  {projectHighlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-[#1f221f]">
                      <item.icon className="h-5 w-5 shrink-0 text-[#2f6b1c]" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-[8.5rem] left-4 z-10 w-[230px] rounded-[8px] border border-[#d8d0bf] bg-white/82 p-4 shadow-[0_18px_42px_rgba(38,48,26,0.12)] backdrop-blur-sm md:bottom-24 md:left-8 md:w-[250px]">
              <h3 className="mb-4 bg-[#2f6b1c] py-1 text-center text-xl font-black uppercase leading-none text-white">
                Legend
              </h3>
              <div className="space-y-3">
                {projectLegend.map((item) => (
                  <div key={item.label} className="grid grid-cols-[3.25rem_1fr] items-center gap-3 text-xs font-medium text-[#1f221f] md:text-sm">
                    <span className={`block h-5 w-9 ${item.swatch}`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-4 right-4 top-[18.5rem] z-10 text-center md:left-auto md:right-10 md:top-10 md:w-[45%] lg:right-16">
              <div className="mb-3 flex justify-center">
                <div className="relative h-24 w-48">
                  <Image
                    src="/images/logo.png"
                    alt="Royal Estates logo"
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="font-serif text-4xl font-bold uppercase tracking-[0.14em] text-[#174d23] md:text-5xl lg:text-6xl">
                Royal Estates
              </h2>
              <p className="mt-2 font-serif text-sm font-bold uppercase tracking-[0.08em] text-[#a02218] md:text-base">
                410, 4th Floor, Sai Jambu Tower, Bhalubasa, Jamshedpur
              </p>
              <p className="mt-6 font-serif text-2xl font-bold uppercase tracking-[0.04em] text-[#171717] md:text-3xl">
                Swarny City Project
              </p>
              <p className="mt-3 font-serif text-xl font-bold uppercase tracking-[0.03em] text-[#171717] md:text-2xl">
                Rakhamines Durku
              </p>
              <div className="mt-8 flex items-center justify-center gap-14">
                <span className="rounded-[6px] border border-[#b34132] bg-[#f8f4ec]/80 px-6 py-2 font-serif text-2xl font-bold text-[#a02218] shadow-sm">
                  CNT Free
                </span>
                <div className="hidden text-[#111] md:block">
                  <Compass className="h-20 w-20 stroke-[1.5]" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-4 z-10 w-[260px] border border-[#c49a84] bg-[#f8f1e8]/88 p-4 shadow-[0_18px_40px_rgba(38,48,26,0.10)] backdrop-blur-sm md:bottom-28 md:right-10 md:w-[310px] lg:right-16">
              <h3 className="border-b border-[#c49a84] pb-1 text-center text-lg font-black uppercase leading-none text-[#315d1f]">
                Main Features
              </h3>
              <ol className="mt-2 space-y-1 font-serif text-sm leading-snug text-[#191919] md:text-base">
                {mainFeatures.map((feature, index) => (
                  <li key={feature}>
                    <span className="mr-2 font-bold text-[#b92820]">{index + 1}.</span>
                    {feature}
                  </li>
                ))}
              </ol>
            </div>

            <div className="absolute bottom-[5.25rem] left-[37%] z-10 hidden rotate-[-8deg] rounded-sm bg-white/85 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white md:block">
              <span className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Village Road</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-5 rounded-[8px] border border-[#d8d0bf] bg-[#fffdf8] p-5 shadow-[0_18px_48px_rgba(7,59,42,0.08)] md:grid-cols-[0.95fr_1.35fr] md:p-7"
        >
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#b98218]">Project Details</p>
            <h3 className="font-serif text-3xl font-bold leading-tight text-[#173B20] md:text-4xl">
              Swarny City residential plots
            </h3>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {projectDetails.map((detail) => (
                <div key={detail.label} className="border-l-2 border-[#c89b3c] bg-[#f7f1e6] px-4 py-3">
                  <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#657168]">
                    {detail.label}
                  </span>
                  <strong className="mt-1 block text-base font-bold text-[#173B20]">{detail.value}</strong>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[#17231D]/75 md:text-base">
              Discover a thoughtfully planned real estate project offering a prime location,
              excellent connectivity, modern infrastructure, and strong investment potential.
              Designed for comfortable living and long-term value, the project provides an ideal
              opportunity for families, investors, and future homeowners.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
