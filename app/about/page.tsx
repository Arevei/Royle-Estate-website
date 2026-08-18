"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Home, Landmark, MapPin, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { num: "500,000", label: "Sq ft area developed" },
  { num: "1,200+", label: "Clients served" },
  { num: "15", label: "Years active" },
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

const services = [
  { icon: Trees, title: "Land Development" },
  { icon: Landmark, title: "Plot Planning" },
  { icon: Home, title: "Residential Land Options" },
  { icon: MapPin, title: "Site Visits & Support" },
];

const team = [
  {
    name: "Aarav",
    role: "Founder & CEO",
    desc: "Guides buyer conversations, growth decisions, and long-term land development strategy.",
    focus: "Client Strategy",
    stat: "15 yrs",
    tone: "team-tone-emerald",
  },
  {
    name: "Ananya",
    role: "Development Head",
    desc: "Oversees site planning, quality checks, and project coordination from survey to delivery.",
    focus: "Project Quality",
    stat: "42 sites",
    tone: "team-tone-brass",
  },
  {
    name: "Vihaan",
    role: "Operations Manager",
    desc: "Keeps visits, documentation steps, and client updates moving with clear accountability.",
    focus: "Operations",
    stat: "1,200+",
    tone: "team-tone-sunset",
  },
  {
    name: "Isha",
    role: "Land Planning Expert",
    desc: "Shapes plot layouts around access, future use, sunlight, open space, and practical budgets.",
    focus: "Plot Planning",
    stat: "Layouts",
    tone: "team-tone-olive",
  },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-white font-sans">
      <section className="inner-hero relative flex min-h-[420px] items-center justify-center pt-24 text-center">
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

      <section className="pt-20 md:pt-24">
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
              Premium planned land for secure investment.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-zinc-600">
              <strong className="text-zinc-800">Royal Estates specializes in land development</strong>, offering practical plot options tailored to meet your real estate needs in India.
            </p>
            <p className="mb-8 text-base leading-relaxed text-zinc-600">
              Our approach is rooted in integrity, quality, and clear ownership support. From plot selection to site visits and documentation coordination, we keep the process simple to follow.
            </p>
            <Link
              href="/contact"
              className="theme-primary-cta inline-flex h-[52px] items-center gap-2 px-8 text-xs font-bold uppercase tracking-widest"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      

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
              To be India&apos;s premier land developer delivering quality plots.
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              Our mission is delivering quality land opportunities for every family. We combine clear
              communication, sustainable practices, and personalized service so clients can secure
              land with confidence.
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
                A focused local team supports planning, site visits, paperwork coordination, and practical advice for every Royal Estates enquiry.
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

