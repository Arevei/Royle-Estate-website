"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "SERVICES", path: "/services" },
    { label: "FAQ", path: "/faq" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <div className="top-work-marquee" aria-label="Royal Estates work highlights">
        <div className="top-work-marquee-track">
          {[
            "Premium land opportunities",
            "Planned residential communities",
            "500,000 sq ft area developed",
            "1,200+ clients served",
            "15 years active",
            "95% on-time completion",
            "Site visit coordination",
            "Trusted ownership support",
          ].concat([
            "Premium land opportunities",
            "Planned residential communities",
            "500,000 sq ft area developed",
            "1,200+ clients served",
            "15 years active",
            "95% on-time completion",
            "Site visit coordination",
            "Trusted ownership support",
          ]).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header-inner">
        <Link href="/" aria-label="Royal Estates home" className="brand-lockup relative z-50 flex shrink-0 items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Royal Estates" 
            width={56}
            height={56}
            className="h-12 w-auto object-contain md:h-14"
          />
          <span className="brand-wordmark">Royal Estates</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-item ${
                pathname === link.path ? "is-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden shrink-0 lg:flex">
          <Link href="/contact" className="button-primary h-12 px-5">Book a site visit <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#DED8CE] text-[#173B20] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        </div>
      </header>

      {/* Kept outside the filtered header so the surface remains fully opaque. */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-40 flex flex-col px-6 pb-10 pt-28 lg:hidden">
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-[#DED8CE] py-4 text-2xl font-medium tracking-tight ${
                pathname === link.path ? "text-[#9A4F2B]" : "text-[#173B20]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          </nav>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="button-primary w-full">Book a site visit <ArrowUpRight className="h-4 w-4" /></Link>
          <a href="tel:+917004549412" className="mt-4 text-center text-sm font-semibold text-[#173B20]">+91 70045 49412</a>
        </div>
      )}
    </>
  );
}

