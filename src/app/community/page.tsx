import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ArrowRight, Heart, Users, Briefcase, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "Taukei Enterprises is committed to community impact through family values, caregiving services, employment opportunities, and long-term philanthropic initiatives in California.",
};

const pillars = [
  {
    icon: Heart,
    number: "01",
    title: "Caring for Families",
    description:
      "Through Providential Fijian Home Care, we provide compassionate, dignified care for seniors and individuals who need support. We treat every client like a member of our own family — because that's what they deserve.",
    impact: "Serving Sonoma, Marin & San Francisco Counties",
  },
  {
    icon: Users,
    number: "02",
    title: "Community Employment",
    description:
      "We create meaningful employment opportunities for caregivers, many of whom are immigrants and first-generation Americans building better lives for their families. We invest in their training, wellbeing, and professional growth.",
    impact: "Living-wage caregiving jobs in Northern California",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Local Business Growth",
    description:
      "Every dollar spent on a Taukei Enterprises company stays in the community. We source locally, hire locally, and reinvest in the regions we serve — creating an economic multiplier effect.",
    impact: "California-focused operations & investment",
  },
  {
    icon: Star,
    number: "04",
    title: "Future Philanthropy",
    description:
      "As our enterprise grows, so does our capacity to give back. We are building a foundation for philanthropic initiatives focused on youth education, family resilience, and immigrant community support.",
    impact: "Planned charitable programs in development",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title="Business as a Force for Good"
        subtitle="At Taukei Enterprises, community isn't a footnote — it's the entire point. Everything we build serves a community first."
      />

      {/* Statement */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <div className="w-16 h-px bg-gold mx-auto mb-8" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-6">
                Our Commitment to Community
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                From the moment Taukei Enterprises was founded, our work has been shaped by a deeply
                held belief: that business — when led with integrity and purpose — is one of the most
                powerful tools for elevating communities.
              </p>
              <p className="text-navy/60 leading-relaxed">
                We see it in the faces of seniors who receive dignified care in their own homes.
                We see it in the caregivers who found stable, meaningful employment through our companies.
                We see it in the families who trust us with their most vulnerable loved ones.
                That trust is our greatest responsibility — and our greatest honor.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-padding bg-gray-50" aria-labelledby="pillars-heading">
        <div className="container-max">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">How We Give Back</p>
              <h2 id="pillars-heading" className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Four Pillars of Community Impact
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimateIn key={pillar.title} delay={i * 0.08}>
                  <div className="group p-8 bg-white border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 cursor-default h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                        <Icon size={22} className="text-navy/50 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-gold/60 text-xs font-bold tracking-widest">{pillar.number}</span>
                        <h3 className="font-display text-xl font-bold text-navy mt-0.5">{pillar.title}</h3>
                      </div>
                    </div>
                    <p className="text-navy/60 leading-relaxed mb-5 flex-1">{pillar.description}</p>
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <p className="text-navy/50 text-xs font-medium">{pillar.impact}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values in action */}
      <section className="section-padding bg-navy-pattern relative overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                Values in Action
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Family. Service. Stewardship.
              </h2>
              <div className="gold-divider-left" />
              <p className="text-white/70 leading-relaxed mb-5">
                Our core values aren&rsquo;t just words on a wall — they are standards that shape how
                we operate every single day. &ldquo;Family&rdquo; means we hire, train, and support
                our caregivers like family members. &ldquo;Service&rdquo; means we go above and beyond
                for every client and partner. &ldquo;Stewardship&rdquo; means we take care of what
                has been entrusted to us.
              </p>
              <p className="text-white/60 leading-relaxed">
                This is what distinguishes Taukei Enterprises from a typical holding company.
                We are accountable — not just to our investors and partners, but to the communities
                that depend on us.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="space-y-4">
                {[
                  {
                    value: "Integrity",
                    action: "We operate with full transparency in all dealings — clients, employees, and partners.",
                  },
                  {
                    value: "Family",
                    action: "We hire caregivers who embody our values and treat clients as extensions of our family.",
                  },
                  {
                    value: "Service",
                    action: "Every caregiver is trained to serve with compassion, patience, and professionalism.",
                  },
                  {
                    value: "Stewardship",
                    action: "We invest profits back into our companies, our people, and our communities.",
                  },
                ].map((item) => (
                  <div key={item.value} className="p-5 border border-gold/20 hover:border-gold/40 transition-colors duration-300 group cursor-default">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-1">{item.value}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{item.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-navy mb-4">
                Join Us in Building Better Communities
              </h2>
              <div className="gold-divider" />
              <p className="text-navy/60 leading-relaxed mb-8">
                Whether you&rsquo;re looking for care services, employment opportunities, or partnership
                possibilities — we invite you to be part of the Taukei Enterprises story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://www.providentialfijianhomecare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-navy border-navy/30 hover:bg-navy hover:text-white hover:border-navy"
                >
                  Home Care Services
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
