"use client";

import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Heart, Home, Shield, Truck, Building2 } from "lucide-react";

const companies = [
  {
    name: "Providential Fijian Home Care",
    tagline: "We Care Like Family.",
    location: "Santa Rosa, CA",
    sector: "Home Care",
    status: "Active",
    href: "https://www.providentialfijianhomecare.com",
    external: true,
    icon: Heart,
  },
  {
    name: "Providential Care Homes",
    tagline: "Dignified Living. Compassionate Care.",
    location: "Utah & California",
    sector: "Assisted Living",
    status: "Active",
    href: "/portfolio",
    external: false,
    icon: Home,
  },
  {
    name: "Elite Security Agency",
    tagline: "Protecting What Matters Most.",
    location: "Hawaii",
    sector: "Security",
    status: "Active",
    href: "/portfolio",
    external: false,
    icon: Shield,
  },
  {
    name: "Taukei Logistics & Freight",
    tagline: "Moving Business Forward.",
    location: "Fremont, CA",
    sector: "Logistics",
    status: "Active",
    href: "/portfolio",
    external: false,
    icon: Truck,
  },
  {
    name: "Taukei Realty Holdings",
    tagline: "Building Wealth. Creating Stability.",
    location: "San Francisco, CA",
    sector: "Real Estate",
    status: "Active",
    href: "/portfolio",
    external: false,
    icon: Building2,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="portfolio-heading">
      <div className="container-max">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Our Companies
            </p>
            <h2 id="portfolio-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              A Growing Portfolio
            </h2>
            <div className="gold-divider" />
            <p className="text-navy/60 max-w-xl mx-auto text-lg">
              Five companies. Four sectors. Three states. One mission — businesses that create real impact.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {companies.map((company, i) => {
            const Icon = company.icon;
            return (
              <AnimateIn key={company.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-gray-200 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 p-6 group cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300">
                      <Icon size={18} className="text-navy/50 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-0.5 uppercase tracking-wider">
                      {company.status}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">{company.sector}</p>
                    <h3 className="font-display font-bold text-navy text-base mb-1">{company.name}</h3>
                    <p className="text-navy/50 text-sm italic mb-3">&ldquo;{company.tagline}&rdquo;</p>
                    <p className="text-navy/40 text-xs">{company.location}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {company.external ? (
                      <a
                        href={company.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gold text-xs font-semibold hover:gap-2 transition-all duration-200"
                      >
                        Visit Site <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link
                        href={company.href}
                        className="flex items-center gap-1 text-navy/40 text-xs font-semibold hover:text-gold hover:gap-2 transition-all duration-200"
                      >
                        Learn More <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimateIn>
            );
          })}

          {/* +1 teaser card */}
          <AnimateIn delay={0.35}>
            <div className="border border-dashed border-gray-200 hover:border-gold/30 transition-all duration-300 p-6 flex flex-col items-center justify-center text-center min-h-48 group cursor-default">
              <div className="w-8 h-8 rounded-full border border-dashed border-gray-300 group-hover:border-gold/40 flex items-center justify-center mb-3 transition-colors duration-300">
                <span className="text-gray-300 group-hover:text-gold text-lg leading-none transition-colors duration-300">+</span>
              </div>
              <p className="text-navy/30 text-sm font-medium">Future Acquisition</p>
              <p className="text-navy/20 text-xs mt-1">Growing portfolio</p>
              <Link href="/contact" className="mt-4 text-xs text-gold/60 hover:text-gold font-semibold transition-colors duration-200">
                Submit Opportunity →
              </Link>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.4}>
          <div className="text-center">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
