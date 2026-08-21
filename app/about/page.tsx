"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectLayoutSection } from "@/components/ProjectLayoutSection";

const stats = [
  { num: "500,000", label: "Sq ft area developed" },
  { num: "1,200+", label: "Clients served" },
  { num: "2018", label: "Established" },
];

const highlights = [
  "Planned Land Parcels",
  "Residential Plot Options",
  "Land & Plot Advisory",
  "Trusted Ownership",
  "Personalized Care",
  "Site Visit Coordination",
  "Budget & Locality Discussion",
  "Clear Legal Support",
  "Documentation Coordination",
  "Sustainable Practices",
  "On-Time Completion",
  "Transparent Next Steps",
];

const team = [
  {
    name: "Navnit Kumar",
    role: "Regional Manager",
    desc: "Leads regional coordination, customer relationships, and field-level execution for Royal Estates.",
    focus: "Regional Operations",
    stat: "RM",
    tone: "team-tone-emerald",
  },
  {
    name: "Reet Kaur",
    role: "General Manager",
    desc: "Oversees business operations, customer experience, and transparent service standards.",
    focus: "Management",
    stat: "GM",
    tone: "team-tone-brass",
  },
  {
    name: "Rajwindar Singh",
    role: "Marketing Manager",
    desc: "Manages buyer outreach, project communication, and marketing conversations with clarity.",
    focus: "Marketing",
    stat: "MM",
    tone: "team-tone-sunset",
  },
  {
    name: "Baljeet Singh",
    role: "Marketing Manager",
    desc: "Supports customer enquiries, site visit interest, and market engagement for active projects.",
    focus: "Market Growth",
    stat: "MM",
    tone: "team-tone-olive",
  },
  {
    name: "Kali Prasad Karnam",
    role: "Project Manager",
    desc: "Coordinates project progress, site requirements, planning follow-ups, and execution details.",
    focus: "Project Delivery",
    stat: "PM",
    tone: "team-tone-emerald",
  },
  {
    name: "Shaheen",
    role: "Accounts Head",
    desc: "Handles accounts coordination, financial records, and disciplined business support.",
    focus: "Accounts",
    stat: "AH",
    tone: "team-tone-brass",
  },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-white font-sans">
      <section className="inner-hero relative flex min-h-[420px] items-center justify-center py-24 text-center">
        <Image
          src="/images/hero-bg.png"
          alt="Royal Estates homes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="inner-hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p className="inner-hero-kicker mb-4 text-xs font-bold uppercase tracking-[0.24em]">
            Know More About Us
          </p>
          <h1 className="inner-hero-title text-4xl font-bold tracking-tight md:text-6xl">Royal Estates</h1>
          <div className="inner-hero-breadcrumb mt-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">
              Home
            </Link>
            <span>/</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-[10px] shadow-xl md:min-h-[500px]"
          >
            <Image
              src="/images/about/royal-estates-consultation.png"
              alt="Royal Estates property consultation team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="about-resident-badge absolute bottom-5 left-5 p-5 shadow-xl">
              <div className="number text-4xl font-bold">1850+</div>
              <div className="label mt-1 text-xs font-bold uppercase tracking-wider">
                Clients Served
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="theme-kicker mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8" /> Who Are We?
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Building trust, creating value, shaping the future.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-zinc-600">
              <strong className="text-zinc-800">Royal Estates is a professionally managed real estate company</strong> committed to providing reliable, transparent, and value-driven property solutions.
            </p>
            <p className="mb-8 text-base leading-relaxed text-zinc-600">
              Established in 2018 with the vision of creating a trusted name in the real estate sector, Royal Estates helps customers discover the right opportunities in residential, commercial, and land properties while creating long-term value for buyers and investors.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Trust", "Transparency", "Quality", "Customer Satisfaction", "Integrity", "Professionalism", "Growth"].map((value) => (
                <div key={value} className="flex items-center gap-2 border border-[#d8d0bf] bg-[#fffdf8] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#173B20]">
                  <Check className="h-4 w-4 shrink-0 text-[#c89b3c]" />
                  {value}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="theme-primary-cta inline-flex h-[52px] items-center gap-2 px-8 text-xs font-bold uppercase tracking-widest"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ProjectLayoutSection />

      <section className="bg-gray-50 pb-20 md:pb-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="theme-kicker mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8" /> Our Vision
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-800 md:text-5xl">
              A growing real estate business focused on trust and sustainable growth.
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Today, Royal Estates represents a professionally driven real estate business with a clear
              focus on trust, transparency, sustainable growth, and customer satisfaction. Our work is
              guided by integrity, professional excellence, and practical property solutions for buyers,
              investors, and future homeowners.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-[10px] shadow-xl md:min-h-[500px]"
          >
            <Image
              src="/images/about/royal-estates-vision.png"
              alt="Royal Estates vision and planning"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="about-stats py-14">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="number mb-2 text-4xl font-bold">{stat.num}</div>
              <div className="label text-xs font-bold uppercase tracking-[0.18em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

       <section className="royal-team-section py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="theme-kicker mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="h-px w-8" /> Meet Our Dedicated Team
              </p>
              <h2 className="max-w-xl text-4xl font-bold text-zinc-800 md:text-[52px]">
                People who make every plot decision clearer.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600">
                A focused professional team supports project coordination, marketing, accounts, site visits, and practical advice for every Royal Estates enquiry.
              </p>
            </div>
            
          </div>

        

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="team-profile-card"
              >
                <div className="team-profile-body">
                  <div className="team-card-topline">
                    <span>{member.focus}</span>
                    <strong>{member.stat}</strong>
                  </div>
                  <div className="team-member-head">
                    <div className={`team-mini-avatar ${member.tone}`}>
                      <span>{member.name.slice(0, 1)}</span>
                    </div>
                    <div>
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                  <p className="team-desc">{member.desc}</p>
                  <div className="team-card-index">0{index + 1}</div>
                  <Link href="/contact" className="team-card-link">
                    Discuss with team <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="theme-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Service Highlights
            </p>
            <h2 className="text-3xl font-bold text-zinc-800 md:text-[44px]">Support Built For Land Development</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.05 }}
                className="theme-card flex min-h-[76px] items-center gap-4 px-5 py-4"
              >
                <span className="theme-icon-tile flex h-10 w-10 shrink-0 items-center justify-center">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <span className="text-sm font-semibold leading-snug text-zinc-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="theme-dark-section py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="theme-dark-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Buy, Sell, Rent
            </p>
            <h2 className="text-3xl font-bold md:text-[44px]">Land Services Royal Estates Supports</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="theme-dark-card p-7">
                <div className="theme-icon-tile mb-5 flex h-14 w-14 items-center justify-center"><service.icon className="h-7 w-7" /></div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     

      <section className="theme-brass-section py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Looking for a home, commercial space, plot, or rental?</h3>
            <p className="mt-2 text-sm text-white/85">Royal Estates is here to make your vision a reality.</p>
          </div>
          <Link
            href="/contact"
            className="theme-dark-cta inline-flex h-[52px] items-center gap-2 px-8 text-xs font-bold uppercase tracking-widest"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

