import AnimateIn from "@/components/AnimateIn";
import { Shield, TrendingUp, Users, Globe, Award, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Values-Driven Leadership",
    description:
      "Every decision we make is filtered through our core values of integrity, family, and service. We never compromise character for profit.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Vision",
    description:
      "We think in generations, not quarters. Our investment horizon is built for lasting value — not short-term gains.",
  },
  {
    icon: Users,
    title: "Community-Centered Operations",
    description:
      "Our businesses are embedded in the communities they serve. We create jobs, support families, and invest in local growth.",
  },
  {
    icon: Globe,
    title: "Diversified Portfolio Strategy",
    description:
      "We actively acquire and build across multiple industries, creating a resilient and growing enterprise for the future.",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description:
      "We meet the highest standards of licensure, compliance, and operational excellence in every industry we enter.",
  },
  {
    icon: Handshake,
    title: "Partnership Minded",
    description:
      "Whether you're an investor, acquisition target, or strategic partner, we approach every relationship with transparency and mutual respect.",
  },
];

export default function WhySection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-max">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Why Partner With Us
            </p>
            <h2
              id="why-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
            >
              Why Choose Taukei Enterprises
            </h2>
            <div className="gold-divider" />
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <AnimateIn key={reason.title} delay={i * 0.08}>
                <div className="group p-8 border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10 rounded-none flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-navy/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-3">{reason.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
