import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We conduct all business with honesty, transparency, and accountability — no exceptions.",
  },
  {
    title: "Family",
    description: "Family is the foundation of everything we build. We treat employees, partners, and clients as family.",
  },
  {
    title: "Service",
    description: "We are called to serve. Every business decision is measured against the impact it has on people.",
  },
  {
    title: "Innovation",
    description: "We embrace change, seek new solutions, and continuously improve how we create value.",
  },
  {
    title: "Excellence",
    description: "We set the highest standards in every industry we enter and never settle for ordinary.",
  },
  {
    title: "Stewardship",
    description: "We are responsible stewards of resources, relationships, and the communities we serve.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <AnimateIn>
              <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                Who We Are
              </p>
              <h2
                id="about-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6"
              >
                A Holding Company Built on Purpose
              </h2>
              <div className="gold-divider-left" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                Taukei Enterprises is a California-based holding company that builds, acquires, and operates
                businesses designed to improve lives and strengthen the communities we serve. We take a
                long-term view — investing in industries that matter, led by people who care.
              </p>
              <p className="text-navy/70 leading-relaxed mb-8">
                Founded by Pita G. Taukei, our enterprise is rooted in Fijian values of community,
                hard work, and deep respect for others. From healthcare to future expansions across
                multiple sectors, we grow with purpose and operate with heart.
              </p>
              <Link href="/about" className="btn-primary">
                Our Story
                <ArrowRight size={18} />
              </Link>
            </AnimateIn>
          </div>

          {/* Right: image + values grid */}
          <div>
            <AnimateIn direction="right">
              <div className="relative h-56 overflow-hidden mb-6">
                <Image src="/images/about-office.jpg" alt="Taukei Enterprises" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/20" />
              </div>
            </AnimateIn>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <AnimateIn key={value.title} delay={i * 0.07} direction="up">
                  <div className="group p-5 border border-gray-100 hover:border-gold/40 hover:bg-navy/2 transition-all duration-300 cursor-default card-hover">
                    <div className="w-8 h-0.5 bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
                    <h3 className="font-display font-semibold text-navy text-base mb-2">{value.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
