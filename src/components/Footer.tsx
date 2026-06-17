import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/leadership", label: "Leadership" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

const values = ["Integrity", "Family", "Service", "Innovation", "Excellence", "Stewardship"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      {/* Top bar */}
      <div className="border-b border-gold/20">
        <div className="container-max section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="relative w-20 h-20 mb-3">
                  <Image src="/logo-transparent.png" alt="Taukei Enterprises" fill className="object-contain" />
                </div>
                <p className="font-display text-xl font-bold text-white tracking-wide">TAUKEI</p>
                <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mt-0.5">Enterprises</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A diversified California-based holding company building exceptional businesses and creating lasting value for communities.
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span key={v} className="text-xs border border-gold/30 text-gold/80 px-2 py-1 rounded-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gold font-semibold uppercase tracking-widest text-xs mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h3 className="text-gold font-semibold uppercase tracking-widest text-xs mb-5">Portfolio</h3>
              <div className="space-y-3">
                {[
                  { name: "Providential Fijian Home Care", loc: "Santa Rosa, CA", href: "https://www.providentialfijianhomecare.com", external: true },
                  { name: "Providential Care Homes", loc: "Utah & California", href: "/portfolio", external: false },
                  { name: "Elite Security Agency", loc: "Hawaii", href: "/portfolio", external: false },
                  { name: "Taukei Logistics & Freight", loc: "Fremont, CA", href: "/portfolio", external: false },
                  { name: "Taukei Realty Holdings", loc: "San Francisco, CA", href: "/portfolio", external: false },
                ].map((co) => (
                  <div key={co.name}>
                    {co.external ? (
                      <a href={co.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-start gap-1 text-white/70 hover:text-gold text-sm transition-colors duration-200 cursor-pointer group">
                        <span>{co.name}</span>
                        <ExternalLink size={11} className="mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <Link href={co.href} className="text-white/70 hover:text-gold text-sm transition-colors duration-200 cursor-pointer block">
                        {co.name}
                      </Link>
                    )}
                    <p className="text-white/30 text-xs mt-0.5">{co.loc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gold font-semibold uppercase tracking-widest text-xs mb-5">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    Santa Rosa, California<br />
                    <span className="text-white/40 text-xs">Regional Operations: Santa Rosa, CA</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <a href="mailto:info@taukeienterprises.com" className="text-white/60 hover:text-gold text-sm transition-colors cursor-pointer">
                    info@taukeienterprises.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <a href="tel:+17075551000" className="text-white/60 hover:text-gold text-sm transition-colors cursor-pointer">
                    (707) 555-1000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {year} Taukei Enterprises. All rights reserved. Santa Rosa, California.
          </p>
          <p className="text-white/40 text-xs">
            Founded by Pita G. Taukei
          </p>
        </div>
      </div>
    </footer>
  );
}
