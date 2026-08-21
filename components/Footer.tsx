import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container relative z-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="footer-brand-link">
              <Image src="/images/logo.png" alt="Royal Estates" width={56} height={56} className="h-14 w-auto" />
              <span className="footer-brand-wordmark">Royal Estates</span>
            </Link>
            <p className="footer-copy text-sm leading-relaxed">
              Royal Estates is a professionally managed real estate company providing reliable, transparent, and value-driven residential, commercial, and land property solutions.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="footer-title">Explore</h2>
            <ul className="space-y-3 text-sm">
              {[['Home','/'],['About us','/about'],['Projects','/projects'],['Services','/services'],['Contact','/contact']].map(([label, href]) => <li key={href}><Link href={href} className="footer-link-new">{label}<ArrowUpRight size={14} /></Link></li>)}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="footer-title">Start a conversation</h2>
            <ul className="footer-contact space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ba7517] shrink-0 mt-1" />
                <span>410, 4th Floor, Sai Jambu Tower, Bhalubasa, East Singhbhum - 831009, Jharkhand, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ba7517] shrink-0" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+918340395597">+91 83403 95597</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#ba7517] shrink-0" />
                <a href="mailto:gillreetkaur07@gmail.com">gillreetkaur07@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">ISO Certified</h2>
            <div className="overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-2">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/royal-estates-iso-certificate.jpeg"
                  alt="Royal Estates ISO 9001:2015 certificate"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
        </div>
        <div className="footer-legal flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()} Royal Estates. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a href="https://ai.arevei.com" target="_blank" rel="noreferrer" className="footer-powered">Powered by <span>ai.arevei.com</span></a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

