"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What is Royal Estates?",
    a: "Royal Estates is a real estate agency in Bhalubasa, Jamshedpur supporting property search, buying, selling, rentals, commercial spaces, land, plots and advisory requirements.",
  },
  {
    q: "What types of properties does Royal Estates offer?",
    a: "Royal Estates supports residential properties, commercial spaces, land, plots, rentals, investment guidance and seller-side property conversations.",
  },
  {
    q: "Can Royal Estates help me shortlist properties?",
    a: "Yes. The team starts with your budget, preferred locality, timeline and property purpose, then helps you move toward relevant options and site visits.",
  },
  {
    q: "Why should I invest with Royal Estates?",
    a: "Royal Estates focuses on clear communication, local guidance, practical shortlisting, site visit coordination and support through important next steps.",
  },
  {
    q: "Can Royal Estates help owners sell property?",
    a: "Yes. Property owners can discuss selling support, buyer conversations, visits, positioning and negotiation coordination.",
  },
  {
    q: "Can I arrange a site visit?",
    a: "Yes. Share your requirement through the contact form or call the office, and the team can coordinate the next practical visit step.",
  },
  {
    q: "How can I contact Royal Estates for inquiries?",
    a: "Call 0657-2440244, use the website contact form, or visit 410, 4th Floor, Sai Jambu Tower, Bhalubasa, Jamshedpur - 831009.",
  },
  {
    q: "Does Royal Estates provide legal or financial advice?",
    a: "Royal Estates provides property guidance and coordination. Legal, tax or financial decisions should be verified with qualified professionals before commitment.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="faq-item border-b last:border-none"
    >
      <button className="flex w-full items-center justify-between gap-6 py-5 text-left group" onClick={() => setOpen(!open)}>
        <span className="faq-question text-base font-bold leading-snug">
          {q}
        </span>
        <span className={`faq-toggle flex h-9 w-9 shrink-0 items-center justify-center ${open ? "is-open" : ""}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="faq-answer pb-6 pr-14 text-[15px] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full bg-white font-sans">
      <section className="inner-hero relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="Contact Royal Estates" fill priority sizes="100vw" className="object-cover" />
          <div className="inner-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="inner-hero-title mb-4 text-5xl font-bold md:text-6xl">FAQ</h1>
          <div className="inner-hero-breadcrumb flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">FAQ</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <div className="theme-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">Got Questions?</div>
            <h2 className="text-4xl font-bold text-zinc-800 md:text-[44px]">Frequently Asked Questions</h2>
          </div>

          <div className="theme-card px-6 py-4 md:px-10">
            {faqs.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="theme-dark-section py-14">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">Still have questions?</h3>
            <p className="theme-dark-copy text-sm">Our team is ready to help you find the perfect property.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:06572440244" className="theme-brass-cta flex h-[52px] items-center px-8 text-xs font-bold uppercase tracking-wider">
              Call 0657-2440244
            </a>
            <Link href="/contact" className="theme-outline-light-cta flex h-[52px] items-center px-8 text-xs font-bold uppercase tracking-wider">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

