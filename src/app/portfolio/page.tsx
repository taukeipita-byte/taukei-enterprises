import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin, CheckCircle, ArrowRight, Heart, Home, Shield, Truck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Taukei Enterprises' portfolio of five companies spanning home care, assisted living, security, logistics, and real estate across California, Hawaii, and Utah.",
};

const companies = [
  {
    name: "Providential Fijian Home Care",
    tagline: "We Care Like Family.",
    description:
      "A licensed California Home Care Organization providing compassionate, non-medical in-home care services to seniors and individuals across Northern California. Founded on Fijian values of warmth and community.",
    services: ["Personal Care", "Companionship", "Dementia Care", "Alzheimer's Care", "Respite Care", "Transportation Assistance", "24-Hour Care", "Live-In Care"],
    location: "Santa Rosa, CA",
    coverage: "Sonoma · Marin · San Francisco Counties",
    status: "Active",
    href: "https://www.providentialfijianhomecare.com",
    external: true,
    icon: Heart,
    image: "/images/homecare.jpg",
    sector: "Home Care",
    featured: true,
    facts: [
      { label: "License Type", value: "CA Home Care Organization" },
      { label: "Service Type", value: "Non-Medical Home Care" },
      { label: "Coverage", value: "3 Counties" },
      { label: "Care Model", value: "In-Home, Live-In, 24-Hr" },
    ],
  },
  {
    name: "Providential Care Homes",
    tagline: "Dignified Living. Compassionate Care.",
    description:
      "Licensed assisted living facilities providing residential care for seniors who need support with daily activities, medication management, and personal care in a home-like environment.",
    services: ["Assisted Living", "Memory Care", "Personal Care", "Medication Management", "Meal Preparation", "Activities & Enrichment"],
    location: "Utah & California",
    coverage: "Multi-State Operations",
    status: "Active",
    href: "/contact",
    external: false,
    icon: Home,
    image: "/images/assisted-living.jpg",
    sector: "Assisted Living",
    featured: true,
    facts: [
      { label: "Type", value: "Residential Care / ALF" },
      { label: "States", value: "Utah & California" },
      { label: "Care Model", value: "24-Hour Residential" },
      { label: "Population", value: "Seniors & Memory Care" },
    ],
  },
  {
    name: "Elite Security Agency",
    tagline: "Protecting What Matters Most.",
    description:
      "A professional security agency providing licensed security services across Hawaii. Elite Security delivers dependable, trained personnel for events, businesses, and residential properties.",
    services: ["Event Security", "Commercial Security", "Residential Patrol", "Armed & Unarmed Officers", "Access Control"],
    location: "Hawaii",
    coverage: "State of Hawaii",
    status: "Active",
    href: "/contact",
    external: false,
    icon: Shield,
    image: "/images/security.jpg",
    sector: "Security Services",
    featured: false,
    facts: [
      { label: "License", value: "Licensed Security Agency" },
      { label: "State", value: "Hawaii" },
      { label: "Service Type", value: "Armed & Unarmed" },
      { label: "Clients", value: "Commercial & Events" },
    ],
  },
  {
    name: "Taukei Logistics & Freight",
    tagline: "Moving Business Forward.",
    description:
      "A California-based logistics and freight company providing reliable transportation and delivery solutions for businesses throughout the Bay Area and beyond.",
    services: ["Freight Transportation", "Last-Mile Delivery", "Commercial Logistics", "Fleet Management", "Bay Area Routing"],
    location: "Fremont, CA",
    coverage: "Bay Area & California",
    status: "Active",
    href: "/contact",
    external: false,
    icon: Truck,
    image: "/images/logistics.jpg",
    sector: "Logistics & Freight",
    featured: false,
    facts: [
      { label: "HQ", value: "Fremont, California" },
      { label: "Coverage", value: "Bay Area & CA Statewide" },
      { label: "Type", value: "Freight & Last-Mile" },
      { label: "Fleet", value: "Commercial Vehicles" },
    ],
  },
  {
    name: "Taukei Realty Holdings",
    tagline: "Building Wealth. Creating Stability.",
    description:
      "A San Francisco-based real estate holding company focused on acquiring, managing, and growing a portfolio of residential and commercial properties in the Bay Area real estate market.",
    services: ["Property Acquisition", "Portfolio Management", "Residential Holdings", "Commercial Properties", "Investment Strategy"],
    location: "San Francisco, CA",
    coverage: "Bay Area Real Estate Market",
    status: "Active",
    href: "/contact",
    external: false,
    icon: Building2,
    image: "/images/realestate.jpg",
    sector: "Real Estate",
    featured: false,
    facts: [
      { label: "HQ", value: "San Francisco, California" },
      { label: "Focus", value: "Residential & Commercial" },
      { label: "Market", value: "Bay Area" },
      { label: "Strategy", value: "Acquisition & Hold" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Five Companies. One Vision."
        subtitle="Taukei Enterprises operates across home care, assisted living, security, logistics, and real estate — united by our commitment to excellence and community."
      />

      {/* Stats bar */}
      <section className="bg-navy border-b border-gold/20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-gold/10">
            {[
              { value: "5", label: "Portfolio Companies" },
              { value: "3", label: "States Served" },
              { value: "4", label: "Industry Sectors" },
              { value: "CA · HI · UT", label: "Operational Presence" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-8 text-center">
                <p className="font-display text-2xl sm:text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-12">
            {companies.map((company, i) => {
              const Icon = company.icon;
              return (
                <AnimateIn key={company.name} delay={i * 0.05}>
                  <div className={`relative border overflow-hidden group ${company.featured ? "border-gold/50 shadow-lg shadow-gold/10" : "border-gray-200 hover:border-gold/30"} transition-all duration-300`}>
                    {company.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-gold z-10" />}

                    {/* Image banner */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={company.image} alt={company.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent" />
                      <div className="absolute bottom-4 left-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-gold bg-navy/60 px-3 py-1">{company.sector}</span>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Main content */}
                      <div className="lg:col-span-3 p-8 lg:p-10">
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300">
                              <Icon size={20} className="text-navy/50 group-hover:text-gold transition-colors duration-300" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold tracking-wider uppercase bg-green-50 text-green-700 px-2 py-0.5">{company.status}</span>
                              <span className="ml-2 text-xs text-navy/40 bg-navy/5 px-2 py-0.5">{company.sector}</span>
                            </div>
                          </div>
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2">
                          {company.name}
                        </h2>
                        <p className="font-display italic text-gold text-lg mb-4">&ldquo;{company.tagline}&rdquo;</p>
                        <p className="text-navy/65 leading-relaxed mb-5">{company.description}</p>

                        <div className="flex items-center gap-2 mb-6">
                          <MapPin size={15} className="text-gold flex-shrink-0" />
                          <span className="text-navy/50 text-sm">{company.coverage}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-7">
                          {company.services.map((s) => (
                            <span key={s} className="text-xs bg-navy/5 text-navy/60 px-3 py-1">{s}</span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          {company.external ? (
                            <a href={company.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">
                              Visit Website <ExternalLink size={14} />
                            </a>
                          ) : (
                            <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                              Contact Us <ArrowRight size={14} />
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Facts sidebar */}
                      <div className="lg:col-span-2 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100 p-8 lg:p-10">
                        <h3 className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-5">Key Facts</h3>
                        <div className="space-y-4 mb-8">
                          {company.facts.map(({ label, value }) => (
                            <div key={label} className="flex justify-between items-start border-b border-gray-100 pb-3 last:border-0">
                              <span className="text-navy/40 text-sm">{label}</span>
                              <span className="text-navy font-semibold text-sm text-right ml-4">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 pt-5">
                          <h3 className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-3">Services</h3>
                          <ul className="space-y-2">
                            {company.services.slice(0, 5).map((s) => (
                              <li key={s} className="flex items-center gap-2">
                                <CheckCircle size={13} className="text-gold flex-shrink-0" />
                                <span className="text-navy/60 text-sm">{s}</span>
                              </li>
                            ))}
                            {company.services.length > 5 && (
                              <li className="text-navy/40 text-xs pl-5">+{company.services.length - 5} more services</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acquisition CTA */}
      <section className="section-padding bg-navy-pattern">
        <div className="container-max">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Acquisitions</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Interested in Joining Our Portfolio?
              </h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-8">
                We are continuously evaluating acquisition opportunities across healthcare, services, logistics,
                real estate, and community-oriented industries. If you own a business that aligns with our
                values, we want to hear from you.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-left mb-10">
                {[
                  { label: "Industry Focus", value: "Healthcare, Services, Logistics, Real Estate" },
                  { label: "Geography", value: "California, Hawaii, Utah & beyond" },
                  { label: "Business Stage", value: "Established operations preferred" },
                ].map(({ label, value }) => (
                  <div key={label} className="p-5 border border-gold/20 hover:border-gold/40 transition-colors duration-300">
                    <p className="text-gold text-xs uppercase tracking-wider mb-2">{label}</p>
                    <p className="text-white/70 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Submit an Acquisition Inquiry
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
