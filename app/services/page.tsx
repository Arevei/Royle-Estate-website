"use client";

import { motion } from "framer-motion";
import { Building2, Home, Landmark, Map, Trees, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Map,
    title: "Land Development",
    desc: "Quality land development services for future residential and commercial possibilities in India.",
  },
  {
    icon: Trees,
    title: "30x40 Plot Planning",
    desc: "Spacious plots covering 1200 square feet, planned around practical client needs.",
  },
  {
    icon: Landmark,
    title: "Trusted Ownership",
    desc: "Reliable service ensuring clear, legal ownership support for all plots offered.",
  },
  {
    icon: Home,
    title: "Secure Investment",
    desc: "Land plot guidance for families and investors looking to secure future value.",
  },
  {
    icon: Building2,
    title: "Personalized Care",
    desc: "Responsive client service focused on satisfaction, clarity, and site visit coordination.",
  },
  {
    icon: Zap,
    title: "Sustainable Practices",
    desc: "Committed to climate-resilient land development with responsible planning practices.",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-zinc-50 pb-20 font-sans">
      <section className="inner-hero relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/developed-plotted-layout.webp" alt="Aerial view of a developed land plot layout" fill priority sizes="100vw" className="object-cover" />
          <div className="inner-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="inner-hero-title mb-4 text-5xl font-bold md:text-6xl">SERVICES</h1>
          <div className="inner-hero-breadcrumb flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">SERVICES</span>
          </div>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="ploy-kicker mb-5">Supported Service Areas</div>
            <h2 className="text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Premium 30x40 land plot services planned around quality, ownership clarity, and secure investment.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, i) => (
              <motion.article
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="ploy-card group p-8"
              >
                <div className="theme-icon-tile mb-7 flex h-16 w-16 items-center justify-center transition-transform group-hover:-translate-y-1">
                  <srv.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-800">{srv.title}</h3>
                <p className="min-h-[96px] text-sm leading-relaxed text-zinc-500">{srv.desc}</p>
                <Link href="/contact" className="service-card-link mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">
                  Discuss Requirement <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

