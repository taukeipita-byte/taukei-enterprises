import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Briefcase, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Taukei Enterprises — a California-based holding company founded by Pita G. Taukei. Discover our story, mission, vision, and core values.",
};

const values = [
  { title: "Integrity", desc: "We operate with honesty and transparency in all that we do." },
  { title: "Family", desc: "Family is our foundation — in how we lead, operate, and care." },
  { title: "Service", desc: "We exist to serve: our clients, our employees, our communities." },
  { title: "Innovation", desc: "We seek better ways to solve problems and create value." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards — always." },
  { title: "Stewardship", desc: "We are responsible stewards of the resources entrusted to us." },
];

const milestones = [
  { icon: GraduationCap, year: "Education", label: "B.S. Business Management", detail: "Brigham Young University – Hawaii" },
  { icon: Heart, year: "2020", label: "Founded Providential Fijian Home Care", detail: "Licensed CA Home Care Organization" },
  { icon: Briefcase, year: "Founded", label: "Established Taukei Enterprises", detail: "California-based diversified holding company" },
  { icon: Globe, year: "Growing", label: "Expanding Portfolio", detail: "Pursuing acquisitions across multiple sectors" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Taukei Enterprises"
        title="Built on Purpose. Driven by Values."
        subtitle="A California holding company founded to build great businesses and leave a lasting legacy."
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateIn direction="left">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Our Story</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-6">
                How Taukei Enterprises Came to Be
              </h2>
              <div className="gold-divider-left" />
              <p className="text-navy/70 leading-relaxed mb-5">
                Taukei Enterprises was founded with a simple but powerful conviction: business, done right,
                is one of the most effective ways to serve people and strengthen communities. When Pita G. Taukei
                looked at the landscape of home care services in Northern California, he saw a gap — families
                needing high-quality, compassionate care that felt personal. Cultural. Like family.
              </p>
              <p className="text-navy/70 leading-relaxed mb-5">
                Drawing on his Fijian heritage — a culture defined by community, warmth, and deep care for
                one another — Pita launched Providential Fijian Home Care as the first expression of what
                Taukei Enterprises would become.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Today, Taukei Enterprises is a growing holding company with a clear mandate: identify,
                build, and acquire businesses that improve lives. We are patient, principled, and built for
                the long run.
              </p>
            </AnimateIn>

            {/* Image + Timeline */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="relative h-72 mb-8 overflow-hidden">
                <Image src="/images/team-meeting.jpg" alt="Taukei Enterprises team" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              <div className="space-y-6">
                {milestones.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <div key={i} className="flex gap-5 group cursor-default">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-navy/5 group-hover:bg-gold/10 rounded-none flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                          <Icon size={18} className="text-navy/50 group-hover:text-gold transition-colors duration-300" />
                        </div>
                        {i < milestones.length - 1 && <div className="w-px h-8 bg-gray-200 mt-1" />}
                      </div>
                      <div className="pb-4">
                        <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1">{m.year}</p>
                        <h3 className="font-display font-semibold text-navy">{m.label}</h3>
                        <p className="text-navy/50 text-sm mt-0.5">{m.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-navy-pattern relative overflow-hidden">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn>
              <div className="p-10 border border-gold/20 hover:border-gold/40 transition-colors duration-300">
                <div className="w-12 h-0.5 bg-gold mb-6" />
                <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  To build, acquire, and operate businesses that improve lives, strengthen communities,
                  and create long-term value for future generations.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="p-10 bg-gold/5 border border-gold/20 hover:border-gold/40 transition-colors duration-300">
                <div className="w-12 h-0.5 bg-gold mb-6" />
                <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  To become a diversified enterprise recognized for excellence, integrity, innovation,
                  and community impact — a company that stands the test of time.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="section-padding bg-white" id="founder">
        <div className="container-max">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Leadership</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Meet the Founder
              </h2>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Portrait */}
            <AnimateIn className="lg:col-span-2" direction="left">
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/20 shadow-xl shadow-navy/10">
                <Image src="/pita-taukei.jpg" alt="Pita G. Taukei" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-xl font-bold text-white">Pita G. Taukei</p>
                  <p className="text-gold text-sm tracking-wide uppercase mt-1">Founder &amp; Chairman</p>
                  <p className="text-white/50 text-xs mt-1">Taukei Enterprises</p>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
              </div>
            </AnimateIn>

            {/* Bio */}
            <AnimateIn className="lg:col-span-3" delay={0.1}>
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">Biography</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5">
                Pita G. Taukei — Entrepreneur, Leader, Servant
              </h3>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Pita G. Taukei is the Founder and Chairman of Taukei Enterprises, a California-based
                  diversified holding company dedicated to building businesses that serve people and
                  strengthen communities.
                </p>
                <p>
                  A graduate of Brigham Young University – Hawaii with a degree in Business Management,
                  Pita combines rigorous business acumen with the warmth and community-centered values
                  of his Fijian heritage. His academic training gave him the framework for enterprise
                  building; his heritage gave him the why.
                </p>
                <p>
                  As Executive Director of Providential Fijian Home Care — Taukei Enterprises&rsquo;
                  flagship company — Pita oversees the delivery of compassionate, high-quality home
                  care services across Sonoma, Marin, and San Francisco Counties. Under his leadership,
                  the organization has earned a reputation for treating every client &ldquo;like family.&rdquo;
                </p>
                <p>
                  Beyond business, Pita is deeply committed to community service and mentorship.
                  He believes that entrepreneurship is one of the most powerful tools for elevating
                  families and communities — and he leads by example, building businesses that create
                  opportunity at every level.
                </p>
                <p>
                  His long-term vision: to build Taukei Enterprises into a multi-sector holding
                  company recognized for its integrity, impact, and generational legacy.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/leadership" className="btn-primary">
                  Leadership &amp; Org Structure
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">What Guides Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">Core Values</h2>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.07}>
                <div className="p-8 bg-white border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                  <div className="w-10 h-0.5 bg-gold mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{v.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
