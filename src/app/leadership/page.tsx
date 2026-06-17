import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Board of Trustees of Taukei Enterprises: Pita Taukei (Chairman & Founder), Paula Taukei (Co Vice-Chair), and Makayla Taukei (Co Vice-Chair). View our organizational structure.",
};

const boardOfficers = [
  {
    name: "Pita G. Taukei",
    title: "Chairman & Founder",
    initials: "PT",
    photo: "/pita-taukei.jpg",
    bio: [
      "Pita G. Taukei is the Founder and Chairman of Taukei Enterprises, a diversified California-based holding company building businesses that improve lives and strengthen communities.",
      "A graduate of Brigham Young University–Hawaii with a degree in Business Management, Pita brings both academic rigor and real-world leadership to every venture he leads. His vision has grown Taukei Enterprises from a single home care company to a five-company portfolio operating across California, Hawaii, and Utah.",
      "As Executive Director of Providential Fijian Home Care — the flagship company — Pita has guided the organization from concept to a licensed, operating provider serving three California counties. He oversees strategic direction across all portfolio companies.",
      "Deeply rooted in Fijian values of community, warmth, and hard work, Pita leads with a long-term mindset — building a legacy his family and community will be proud of for generations to come.",
    ],
    quote: "Leadership is service. The moment you stop serving, you stop leading.",
    credentials: [
      { label: "Education", value: "B.S. Business Management, BYU–Hawaii" },
      { label: "Role at Taukei", value: "Chairman & Founder" },
      { label: "Also Serves As", value: "Executive Director, Providential Fijian Home Care" },
      { label: "Based In", value: "Santa Rosa, California" },
    ],
    featured: true,
  },
  {
    name: "Paula Taukei",
    title: "Co Vice-Chair",
    initials: "PaT",
    photo: "/paula-taukei.jpg",
    bio: [
      "Paula Taukei serves as Co Vice-Chair of the Taukei Enterprises Board of Trustees. As a founding member of the board, Paula plays a vital role in governance, strategic oversight, and ensuring the company upholds its core values across all operations.",
      "Paula brings a strong family-centered perspective to the boardroom, helping guide decisions that affect employees, clients, and the communities Taukei Enterprises serves. Her leadership ensures the enterprise remains grounded in its mission of integrity, service, and long-term stewardship.",
    ],
    quote: "We build businesses that reflect our values — because business is personal.",
    credentials: [
      { label: "Board Role", value: "Co Vice-Chair" },
      { label: "Focus", value: "Governance & Strategic Oversight" },
      { label: "Tenure", value: "Founding Board Member" },
    ],
    featured: false,
  },
  {
    name: "Makayla Taukei",
    title: "Co Vice-Chair",
    initials: "MT",
    photo: "/makayla-taukei.jpg",
    bio: [
      "Makayla Taukei serves as Co Vice-Chair of the Taukei Enterprises Board of Trustees. In this role, Makayla contributes to governance oversight and helps ensure the organization's operations remain transparent and aligned with its core values.",
      "As a member of the board, Makayla contributes a detail-oriented and principled perspective to enterprise decision-making, supporting the long-term vision of building a trustworthy and impactful multi-sector holding company.",
    ],
    quote: "Precision in governance builds the foundation for lasting trust.",
    credentials: [
      { label: "Board Role", value: "Co Vice-Chair" },
      { label: "Focus", value: "Corporate Governance & Records" },
      { label: "Tenure", value: "Founding Board Member" },
    ],
    featured: false,
  },
];

const subsidiaries = [
  { name: "Providential Fijian Home Care", subtitle: "Home Care · Santa Rosa, CA", status: "Active" },
  { name: "Providential Care Homes", subtitle: "Assisted Living · UT & CA", status: "Active" },
  { name: "Elite Security Agency", subtitle: "Security · Hawaii", status: "Active" },
  { name: "Taukei Logistics & Freight", subtitle: "Logistics · Fremont, CA", status: "Active" },
  { name: "Taukei Realty Holdings", subtitle: "Real Estate · San Francisco, CA", status: "Active" },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Team · Board of Trustees"
        title="Guided by Principled Leaders"
        subtitle="Taukei Enterprises is led by a family-founded leadership team committed to integrity, long-term vision, and community impact."
      />

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">Leadership Team</h2>
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mt-3">Board of Trustees</p>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          {/* Chairman — full width featured */}
          <AnimateIn>
            <div className="relative border border-gold/40 shadow-xl shadow-gold/10 overflow-hidden mb-10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Portrait */}
                <div className="lg:col-span-2 bg-navy-pattern flex flex-col items-center justify-center p-10 min-h-64">
                  <div className="w-36 h-36 rounded-full border-2 border-gold/50 overflow-hidden mb-4 flex-shrink-0">
                    <Image src="/pita-taukei.jpg" alt="Pita G. Taukei" width={144} height={144} className="object-cover w-full h-full object-top" />
                  </div>
                  <p className="font-display text-white text-2xl font-bold text-center">Pita G. Taukei</p>
                  <p className="text-gold text-sm tracking-widest uppercase mt-1">Chairman &amp; Founder</p>
                  <p className="text-white/40 text-xs mt-1">Taukei Enterprises</p>
                  <div className="mt-5 space-y-2 w-full max-w-xs">
                    {boardOfficers[0].credentials.map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-start gap-3 border-b border-white/10 pb-2 last:border-0">
                        <span className="text-white/40 text-xs flex-shrink-0">{label}</span>
                        <span className="text-white/80 text-xs text-right font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bio */}
                <div className="lg:col-span-3 p-10 lg:p-12">
                  <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Biography</p>
                  <h3 className="font-display text-2xl font-bold text-navy mb-6">
                    Visionary Entrepreneur. Servant Leader. Community Builder.
                  </h3>
                  <div className="space-y-4 text-navy/65 leading-relaxed mb-6">
                    {boardOfficers[0].bio.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <blockquote className="border-l-2 border-gold pl-6 italic text-navy/80 text-lg font-display my-6">
                    &ldquo;{boardOfficers[0].quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Co Vice-Chairs — side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {boardOfficers.slice(1).map((officer, i) => (
              <AnimateIn key={officer.name} delay={i * 0.1}>
                <div className="border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Header */}
                  <div className="bg-navy/3 border-b border-gray-100 p-8 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full border-2 border-gold/30 overflow-hidden flex-shrink-0">
                      <Image src={officer.photo} alt={officer.name} width={64} height={64} className="object-cover w-full h-full object-top" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-navy">{officer.name}</p>
                      <p className="text-gold text-sm tracking-wide uppercase mt-0.5">{officer.title}</p>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-8">
                    <div className="space-y-3 text-navy/65 text-sm leading-relaxed mb-6">
                      {officer.bio.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                    <blockquote className="border-l-2 border-gold/50 pl-4 italic text-navy/60 text-sm font-display mb-6">
                      &ldquo;{officer.quote}&rdquo;
                    </blockquote>
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {officer.credentials.map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-start">
                          <span className="text-navy/40 text-xs">{label}</span>
                          <span className="text-navy text-xs font-medium text-right ml-4">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Structure</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">Organizational Structure</h2>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="max-w-4xl mx-auto">
              {/* Holding Company */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md border-2 border-gold bg-navy p-6 text-center">
                  <p className="font-display text-white text-xl font-bold">Taukei Enterprises</p>
                  <p className="text-gold text-xs tracking-widest uppercase mt-1">Holding Company</p>
                  <p className="text-white/40 text-xs mt-1">Santa Rosa, California</p>
                </div>

                {/* Board */}
                <div className="w-px h-6 bg-gold/40" />
                <div className="border border-gold/30 bg-white px-8 py-3 text-center">
                  <p className="text-navy/60 text-xs uppercase tracking-widest font-semibold">Leadership Team</p>
                  <p className="text-navy text-sm font-medium mt-1">Pita Taukei · Paula Taukei · Makayla Taukei</p>
                </div>

                {/* Down arrow */}
                <div className="flex flex-col items-center py-3">
                  <div className="w-px h-6 bg-gold/40" />
                  <ChevronDown size={18} className="text-gold" />
                </div>

                {/* Subsidiaries grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {subsidiaries.map((sub) => (
                    <div key={sub.name} className="border-2 border-green-300 bg-white p-4 text-center hover:shadow-md hover:border-gold transition-all duration-300 cursor-default">
                      <p className="font-display font-bold text-navy text-xs leading-tight mb-1">{sub.name}</p>
                      <p className="text-navy/40 text-xs">{sub.subtitle}</p>
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-green-50 text-green-700 font-semibold uppercase tracking-wider">
                        {sub.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 border border-gold/20 bg-white text-center">
                <p className="text-navy/50 text-sm leading-relaxed">
                  Taukei Enterprises serves as the parent holding company overseeing all five subsidiaries.
                  Each company operates independently while adhering to the enterprise&rsquo;s core values,
                  governance standards, and long-term strategic vision.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-pattern">
        <div className="container-max">
          <AnimateIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Future Leadership Opportunities
              </h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-8">
                As Taukei Enterprises continues to grow, we will add exceptional leaders who share our values.
                If you are a proven operator or executive who wants to be part of something meaningful, we want to hear from you.
              </p>
              <Link href="/contact" className="btn-outline">
                Express Your Interest <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
