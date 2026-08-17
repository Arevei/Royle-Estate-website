"use client"
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2, ArrowRight, Check, MapPin, Star,
  Building, Home,
  Store, Trophy, Phone, Globe, Leaf, Cpu, Quote,
  User, Bed, Sofa, Smile, Zap
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeRecentProject, setActiveRecentProject] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const heroScroll = useSpring(scrollYProgress, {
    stiffness: 78,
    damping: 24,
    mass: 0.35,
  });

  const heroBgScale = useTransform(heroScroll, [0, 0.5, 1], [1.04, 1.14, 1.24]);
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "-11%"]);
  const heroBlur = useTransform(heroScroll, [0, 0.45, 1], ["blur(0px)", "blur(5px)", "blur(13px)"]);
  const heroShadeOpacity = useTransform(heroScroll, [0, 0.48, 1], [0.52, 0.72, 0.35]);
  const heroWhiteOpacity = useTransform(heroScroll, [0.58, 1], [0, 0.92]);
  const heroIntroOpacity = useTransform(heroScroll, [0, 0.2, 0.39], [1, 1, 0]);
  const heroIntroY = useTransform(heroScroll, [0, 0.39], ["0px", "-110px"]);
  const heroIntroScale = useTransform(heroScroll, [0, 0.39], [1, 0.9]);
  const heroDetailsOpacity = useTransform(heroScroll, [0.38, 0.58], [0, 1]);
  const heroDetailsY = useTransform(heroScroll, [0.38, 0.78, 1], ["120px", "0px", "-38px"]);
  const heroDetailsScale = useTransform(heroScroll, [0.38, 0.7, 1], [0.93, 1, 0.985]);
  const heroDetailsColor = useTransform(heroScroll, [0.48, 0.78], ["#ffffff", "#173B20"]);

  const testimonials = [
    {
      quote: "Affordable and efficient land plots, highly recommended!",
      name: "Rohan",
      role: "Buyer, Chennai",
    },
    {
      quote: "Reliable land deals with clear plots, no hassles.",
      name: "Priya",
      role: "Buyer, Pune",
    },
    {
      quote: "Smooth process, great support choosing the right plot.",
      name: "Arjun",
      role: "Buyer, Hyderabad",
    },
  ];

  const featureCards = [
    {
      icon: Building,
      title: "Secure Community Living",
      desc: "Property conversations handled with clear next steps, local context and responsive coordination.",
      href: "/services",
    },
    {
      icon: Globe,
      title: "Local Property Search",
      desc: "Shortlisting support based on Jamshedpur localities, budget, access and property purpose.",
      href: "/projects",
    },
    {
      icon: Leaf,
      title: "Buyer & Seller Support",
      desc: "Assistance for property owners and buyers through enquiries, visits and negotiation stages.",
      href: "/services",
    },
    {
      icon: Cpu,
      title: "Rental & Advisory Help",
      desc: "Guidance for rentals, land, plots, commercial spaces and long-term property decisions.",
      href: "/services",
    },
  ];

  const recentProjects = [
    { img: "royal-land-plots.png", title: "Residential Land Plot", desc: "Premium land options planned for secure residential development.", type: "Plot" },
    { img: "royal-property-selling.png", title: "Land Plot 1200 sq ft", desc: "Affordable plot options with ownership guidance, local support, and site visit coordination.", type: "1200 sq ft" },
    { img: "green-valley-villas.png", title: "Custom Plot Guidance", desc: "Land guidance tailored to client needs, location goals, and preferences.", type: "Advisory" },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRecentProject((current) => (current + 1) % recentProjects.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [recentProjects.length]);

  return (
    <div className="w-full font-sans">

      {/* SECTION 1: Hero */}
      <section ref={heroRef} className="hero-luxury hero-scroll-luxury relative h-[200svh] w-full bg-[#11161a]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="absolute inset-0 z-[-2]" style={{ scale: heroBgScale, y: heroBgY, filter: heroBlur }}>
            <Image
              src="/images/hero-bg.png"
              alt="Royal Estates premium property skyline"
              fill
              priority
              sizes="100vw"
              className="hero-luxury-bg object-cover"
            />
          </motion.div>
          <motion.div className="hero-scroll-shade absolute inset-0 z-[-1]" style={{ opacity: heroShadeOpacity }} />
          <motion.div className="hero-white-wash absolute inset-0 z-[-1]" style={{ opacity: heroWhiteOpacity }} />
          <div className="hero-luxury-texture absolute inset-0 z-0" aria-hidden="true">
            <div className="hero-luxury-glow" />
            <div className="hero-luxury-rings" />
            <div className="hero-luxury-grid" />
          </div>

         

          <motion.div
            className="hero-intro-screen pointer-events-none absolute inset-x-0 top-0 z-10 flex h-screen select-none flex-col items-center justify-center px-4 text-center"
            style={{ opacity: heroIntroOpacity, y: heroIntroY, scale: heroIntroScale }}
          >
            <div className="hero-reference-kicker mb-6 inline-flex items-center px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em]">
              Welcome to Royal Estates
            </div>
            <h1>
              Royal Estates
              <span>Planned land for tomorrow&apos;s living.</span>
            </h1>
            <div className="hero-title-rule mt-7" aria-hidden="true" />
            <div className="hero-scroll-cue absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
              <span>Scroll</span>
              <i />
            </div>
          </motion.div>

          <div className="relative z-10 container mx-auto flex h-screen items-center justify-center px-4 pt-36 md:px-6 md:pt-40">
            <motion.div
              initial={false}
              className="hero-copy-panel mx-auto flex max-w-5xl flex-col items-center text-center text-[#F7F4EE]"
              style={{ opacity: heroDetailsOpacity, y: heroDetailsY, scale: heroDetailsScale, color: heroDetailsColor }}
            >
              <div className="hero-reference-kicker mb-6 inline-flex items-center px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em]">
                Trusted land developer
              </div>
              <h2 className="mb-6 max-w-5xl text-4xl font-black leading-[0.98] tracking-tight md:text-5xl lg:text-[4rem]">
                Secure Your Future.
                <span className="block text-[#F7F4EE]">Premium Land Plots.</span>
              </h2>
              <p className="mb-8 max-w-3xl text-base leading-[1.8] text-white/80 md:text-lg">
                Royal Estates helps families and investors choose well-planned land with clear guidance, responsive site visit support, and dependable ownership coordination.
              </p>
              <div className="mb-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/about"
                  className="group inline-flex h-14 items-center gap-3 rounded-[10px] border border-[#F7F4EE] bg-[#F7F4EE] px-7 text-xs font-bold uppercase tracking-widest text-[#173B20] transition-colors hover:bg-transparent hover:text-[#F7F4EE]"
                >
                  Know More About Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center rounded-[10px] border border-[#F7F4EE] bg-transparent px-7 text-xs font-bold uppercase tracking-widest text-[#F7F4EE] backdrop-blur-md transition-colors hover:bg-[#F7F4EE] hover:text-[#173B20]"
                >
                  Book A Site Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Teal Accent Strip */}
      <section className="ploy-surface py-10 w-full relative z-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="group flex items-center gap-5 rounded-lg border border-zinc-900/10 bg-[#ba7517] p-5 shadow-[0_18px_45px_rgba(23,52,4,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,52,4,0.12)] md:p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ba7517] text-zinc-900 transition-colors group-hover:bg-[#1a1a1a] group-hover:text-white">
              <Building2 className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h2 className="text-xl md:text-[26px] font-bold text-[#F1EFE8] max-w-2xl leading-tight">
              Premium land opportunities, planned communities, and trusted ownership support
            </h2>
          </div>
          <Button asChild variant="outline" className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] transition-all rounded-none  border
           h-[54px] px-10 text-sm font-bold uppercase tracking-[0.15em] shrink-0">
            <Link href="/projects">
              EXPLORE NOW
            </Link>
          </Button>
        </div>
      </section>

      {/* SECTION 3: Split Overlapping Images */}
      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[520px] w-full mt-10 md:mt-0"
            >
              {/* Main living room image */}
              <div className="absolute bottom-0 right-0 h-[86%] w-[82%] overflow-hidden shadow-2xl">
                <Image
                  src="/images/interior-living.png"
                  alt="Royal Estates living space"
                  fill
                  sizes="(max-width: 1024px) 82vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping bedroom image */}
              <div className="absolute left-0 top-0 z-10 h-[52%] w-[52%] overflow-hidden border-[12px] border-white shadow-xl">
                <Image
                  src="/images/interior-bedroom.png"
                  alt="Royal Estates bedroom"
                  fill
                  sizes="(max-width: 1024px) 52vw, 26vw"
                  className="object-cover"
                />
              </div>

              {/* Teal building icon card */}
              <div className="absolute top-12 right-6 bg-[#763300] w-24 h-24 flex items-center justify-center shadow-lg z-20">
                <Building className="w-12 h-12 text-white stroke-[1.5]" />
              </div>

              {/* Supported resident statistic */}
              <div className="absolute bottom-16 left-6 bg-white border border-gray-100 shadow-xl p-6 flex items-center gap-5 z-20">
                <div className="text-5xl font-bold text-[#763300] leading-none">06</div>
                <div className="text-sm font-bold leading-snug text-navy uppercase tracking-wider">Service<br />Categories</div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="ploy-kicker mb-5">TRUSTED LAND DEVELOPER</div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-8 leading-[1.1]">Quality land plots planned with transparency</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                At Royal Estates, we provide thoughtfully planned land options for families, investors, and future residential or commercial development. Our approach focuses on clear ownership support, responsive service, and dependable land-development guidance.
              </p>

              <ul className="space-y-5 mb-12">
                {["Well-planned plots for future homes", "Clear ownership support and responsive service", "Local Jamshedpur office for site visits and guidance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-navy text-lg">
                    <div className="w-6 h-6 rounded-full bg-[#763300] flex items-center justify-center text-white shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] text-white rounded-none h-14 px-10 tracking-wider font-bold text-sm">
                <Link href="/about">
                  DISCOVER MORE
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-32 overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-[0_18px_48px_rgba(23,52,4,0.07)]">
            {[
              { icon: Building2, label: "Apartment" },
              { icon: Home, label: "Villa" },
              { icon: Store, label: "Commercial" },
              { icon: MapPin, label: "Plots" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group text-zinc-900 transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white ${i !== 0 ? 'border-l border-zinc-900/10' : ''}`}
              >
                <Link href="/projects" className="py-12 flex flex-col items-center justify-center gap-4">
                  <item.icon className="w-12 h-12 text-zinc-900 group-hover:text-[#ba7517] stroke-[1.5] transition-colors" />
                  <span className="font-bold text-lg">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Main Property Features */}
      <section className="py-24 bg-white">
        <div className="container flex flex-col  mx-auto px-4 md:px-6 gap-y-6">
          <div className="w-full flex flex-col md:flex-row  mb-12 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 pr-0 lg:pr-8 flex flex-col "
            >
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">WHY CHOOSE ROYAL ESTATES</div>
              <h2 className="text-4xl lg:text-[48px] font-black text-navy mb-6 leading-tight">Trusted land developers for your future</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                Trusted land developers providing perfectly sized plots to build your future in India.
              </p>

              <Link
                href="/services"
                className="mb-12 inline-flex h-14 w-fit items-center justify-center border-2 border-[#763300] px-10 text-xs font-black uppercase tracking-widest text-[#763300] transition-all hover:-translate-y-1 hover:bg-[#763300] hover:text-white"
              >
                READ MORE
              </Link>

              {/* <div className="flex gap-5 items-start mb-10">
                <Trophy className="w-12 h-12 text-[#763300] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="font-bold text-navy text-xl">Ideal Plot Size</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">Affordable plots sized exactly 1200 sq ft, ideal for building your dream home or planning a secure investment.</p>
                </div>
              </div> */}

            </motion.div>
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto">
                <a href="tel:+917004549412" className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#763300]" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Experts</div>
                    <div className="font-bold text-navy text-lg mt-0.5">+91 70045 49412</div>
                  </div>
                </a>
                {/* <Link href="/about" className="flex h-14 w-full items-center text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] justify-center border px-8 text-xs font-black uppercase tracking-widest  transition-all hover:-translate-y-1 hover:bg-[#763300] sm:w-auto">
                  DISCOVER MORE
                </Link> */}
              </div>
          </div>
          <div className=" w-full ">

            <div className="lg:grid-cols-2 grid grid-cols-1 ">
              {featureCards.slice(0, 2).map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex min-h-[300px] flex-col bg-white border border-gray-100 p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#2d3748] hover:border-[#2d3748] hover:shadow-2xl"
                >
                  <feature.icon className="w-8 h-8 text-[#ba7517] mb-8 stroke-[1.5]" />
                  <h3 className="text-[24px] font-black text-navy mb-5 transition-colors group-hover:text-white">{feature.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed transition-colors group-hover:text-gray-300">{feature.desc}</p>
                  <Link href={feature.href} className="mt-auto flex items-center gap-3 text-[#ba7517] font-black text-sm tracking-wider uppercase">
                    READ MORE <span className="w-10 h-10 rounded-full bg-[#ba7517] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="lg:grid-cols-2 grid grid-cols-1 ">
              {featureCards.slice(2).map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="group flex min-h-[300px] flex-col bg-white border border-gray-100 p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#2d3748] hover:border-[#2d3748] hover:shadow-2xl"
                >
                  <feature.icon className="w-8 h-8 text-[#ba7517] mb-8 stroke-[1.5]" />
                  <h3 className="text-[24px] font-black text-navy mb-5 transition-colors group-hover:text-white">{feature.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed transition-colors group-hover:text-gray-300">{feature.desc}</p>
                  <Link href={feature.href} className="mt-auto flex items-center gap-3 text-[#ba7517] font-black text-sm tracking-wider uppercase">
                    READ MORE <span className="w-10 h-10 rounded-full bg-[#ba7517] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Choose Your Dream Home */}
      <section className="recent-project-section py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">RECENT PROJECT ——</div>
            <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl font-bold text-navy">Choose your Dream Home</h2>
          </div>

          <div className="recent-project-carousel">
            <div
              className="recent-project-stack"
              style={{ "--project-slide": activeRecentProject } as CSSProperties}
            >
              {recentProjects.concat(recentProjects).map((c, i) => (
                <motion.article
                  key={`${c.title}-${i}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % recentProjects.length) * 0.08 }}
                  className="recent-project-card"
                >
                  <Image
                    src={`/images/projects/${c.img}`}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 32vw"
                    className="object-cover transition-transform duration-1000"
                  />
                  <div className="recent-project-overlay" />
                  <div className="recent-project-content">
                    <span>{c.type}</span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <Link href="/projects" aria-label={`View ${c.title}`}>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials Carousel */}
      <section className="testimonials-carousel-section py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="testimonial-heading mb-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">What Clients Say</div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-0 leading-[1.1]">Real conversations. Clearer property decisions.</h2>
            </div>
            <p className="text-gray-500 text-lg max-w-xl md:col-span-5 md:ml-auto">
              Buyers value practical guidance, quick responses, and a simple path from enquiry to site visit.
            </p>
          </div>

          <div className="testimonial-carousel">
            <div className="testimonial-track">
              {testimonials.concat(testimonials).map((item, index) => (
                <article key={`${item.name}-${index}`} className="testimonial-slide">
                  <div className="testimonial-card-top">
                    <div className="testimonial-avatar">
                      <User className="h-6 w-6" />
                    </div>
                    <div className="testimonial-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="testimonial-quote-icon" fill="currentColor" />
                  <p className="testimonial-copy">{item.quote}</p>
                  <div className="testimonial-person">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6B: Project Glimpses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">PROJECT GLIMPSES</div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-6">Royal Estates Lifestyle</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Demo visuals from our local assets show the kind of green, comfortable, and secure spaces we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/about/nature-focus.png", title: "1200 sq feet land plot landscape" },
              { img: "/images/interior-living.png", title: "Aerial view of planned land parcels" },
              { img: "/images/projects/royal-land-plots.png", title: "Land survey and marking in progress" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-[360px] overflow-hidden bg-gray-100 shadow-lg group"
              >
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173404]/80 to-transparent" />
                <h3 className="absolute bottom-8 left-8 right-8 text-xl font-bold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Dark Building Background */}
      <section className="relative py-32 bg-[#2C2C2A] overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Building Dark"
            fill
            sizes="100vw"
            className="object-cover mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        </div>

        {/* Decorative Teal brush/shape would go here, simulated with gradient */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#763300]/20 to-transparent -skew-x-12 -translate-x-32" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">VISION, MISSION & VALUE</div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-10 leading-[1.1]">To be India&apos;s premier land developer delivering quality plots</h2>
            <Button asChild className="vision-cta h-[52px] px-8 text-xs font-bold uppercase tracking-[0.15em]">
              <Link href="/projects">
                Explore now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12"
          >
            {[
              { icon: Building2, text: "Quality Land Parcels" },
              { icon: Bed, text: "1200 sq ft Land" },
              { icon: MapPin, text: "Trusted Ownership" },
              { icon: Sofa, text: "Sustainable Practices" }
            ].map((item, i) => (
              <div key={i} className="group flex min-w-0 items-center gap-4 md:gap-5">
                <div className="vision-icon-tile flex h-16 w-16 shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="vision-item-text min-w-0 text-lg font-bold leading-tight md:max-w-[150px] md:text-xl">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Stats with Bg Images */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">Key Trust Metrics</div>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-navy md:text-5xl">A proven record in land development</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            These metrics highlight our proven track record, client satisfaction, and reliability in land development.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {[
          { num: "500,000", label: "Area Developed (Sq. Ft.)", bg: "stats-bg-1.png", icon: Building2 },
          { num: "1,200+", label: "Clients Served", bg: "stats-bg-3.png", icon: Smile },
          { num: "15", label: "Years Active", bg: "stats-bg-2.png", icon: Home },
          { num: "95%", label: "On-Time Completion", bg: "stats-bg-4.png", icon: Zap },
        ].map((stat, i) => (
          <div key={i} className="stats-card group relative flex h-72 flex-col items-center justify-center overflow-hidden p-8 text-center md:h-[380px]">
            <Image
              src={`/images/${stat.bg}`}
              alt={stat.label}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="stats-card-overlay absolute inset-0" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="stats-icon-tile mb-7 flex h-16 w-16 items-center justify-center">
                <stat.icon className="h-7 w-7 stroke-[1.6]" />
              </div>
              <div className="stats-number mb-5 text-[48px] font-semibold leading-none tracking-tight lg:text-[54px]">{stat.num}</div>
              <div className="stats-label px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 9: Services Grid */}
      <section className="offering-feature-section py-24 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#173B20]">
              <span className="h-px w-10 bg-[#173B20]/50" />
              What we&apos;re offering
              <span className="h-px w-10 bg-[#173B20]/50" />
            </div>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] text-[#173B20] md:text-5xl lg:text-[56px]">Land development services shaped around your future</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#173B20]/65 md:text-base">
              Explore quality land plots, ownership guidance, and responsive support for your future residential or commercial development in India.
            </p>
          </div>

          <div className="offering-service-grid">
            {[
              {
                title: "Residential Land Plot",
                img: "projects/royal-land-plots.png",
                icon: MapPin,
                desc: "Premium land parcels planned for future residential development and secure ownership.",
              },
              {
                title: "Trusted Ownership",
                img: "projects/royal-property-selling.png",
                icon: Home,
                desc: "Reliable service focused on clear, legal ownership support for every plot offered.",
              },
              {
                title: "Custom Plot Sizes",
                img: "projects/valley-view-retreat.png",
                icon: Building2,
                desc: "Plot guidance tailored to client needs, site goals, and long-term preferences.",
              },
              {
                title: "Sustainable Practices",
                img: "projects/green-valley-villas.png",
                icon: Building,
                desc: "Committed to climate-resilient land development and responsible planning practices.",
              }
            ].map((srv, i) => (
              <motion.article
                key={srv.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="offering-service-card"
              >
                <div className="offering-service-media">
                  <Image src={`/images/${srv.img}`} alt={srv.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-1000" />
                  <span>0{i + 1}</span>
                </div>
                <div className="offering-service-body">
                  <div className="offering-service-icon">
                    <srv.icon className="h-6 w-6 stroke-[1.7]" />
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <Link href="/services">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Outstanding Way of Luxury Life */}
      <section className="know-us-panel-section py-24 md:py-28 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 gap-5 px-4 md:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="know-us-copy-panel"
          >
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-5">GET TO KNOW US ——</div>
            <h2>Quality land options for every family</h2>
            <p>
              Royal Estates helps buyers compare land options, understand site potential, and move from enquiry to site visit with clear, practical support.
            </p>
            <Button asChild className="know-us-cta">
              <Link href="/about">Discover More</Link>
            </Button>

            <div className="know-us-stat-row">
              {[
                { value: "1200", label: "Sq ft plot focus" },
                { value: "500K", label: "Sq ft developed" },
                { value: "95%", label: "On-time completion" },
              ].map((item) => (
                <div key={item.label} className="know-us-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="know-us-image-grid"
          >
            <div className="know-us-image-tile">
              <Image src="/images/interior-living.png" alt="Royal Estates living planning visual" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="know-us-image-tile">
              <Image src="/images/projects/royal-land-plots.png" alt="Royal Estates land plot visual" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11: Contact (Get in Touch) */}
      <section className="ploy-surface py-0 relative overflow-hidden">
        {/* Subtle Diamond background shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-white rotate-45 -z-10 shadow-2xl" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 py-24">
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">BOOK YOUR LAND PLOT NOW ——</div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-12">Schedule your plot enquiry or site visit</h2>

              <ContactForm />
            </div>

            <div className="lg:col-span-5 hidden lg:flex h-full min-h-[800px] items-end justify-center relative">
              <Image
                src="/images/agent.png"
                alt="Real Estate Agent"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

