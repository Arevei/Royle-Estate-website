import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container relative z-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="footer-brand-link">
              <Image src="/images/logo.png" alt="Royal Estates" width={56} height={56} className="h-14 w-auto" />
              <span className="footer-brand-wordmark">Royal Estates</span>
            </Link>
            <p className="footer-copy text-sm leading-relaxed">
              Royal Estates specializes in land development, offering premium 30x40 plots covering 1200 square feet with clear guidance, trusted ownership support, and responsive service.
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
                <span>410, 4th Floor, Sai Jumbu Tower, Bhalubasa, East Singhbhum - 831009, Jharkhand, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ba7517] shrink-0" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+917004549412">+91 70045 49412</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#ba7517] shrink-0" />
                <a href="mailto:pgoswamijmp@gmail.com">pgoswamijmp@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4 removed per request */}

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

