import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Family Values at the Core",
    description:
      "Our companies are extensions of our family. We hire locally, promote from within, and create workplaces where employees feel valued and respected.",
  },
  {
    number: "02",
    title: "Caring for the Vulnerable",
    description:
      "Through Providential Fijian Home Care, we provide dignified, compassionate care for seniors and those who need support — treating every client like family.",
  },
  {
    number: "03",
    title: "Economic Opportunity",
    description:
      "We create quality employment in the communities we serve — particularly for caregivers, many of whom are immigrants and first-generation Americans building a better life.",
  },
  {
    number: "04",
    title: "Future Philanthropy",
    description:
      "As Taukei Enterprises grows, so does our capacity to give back. We are developing philanthropic initiatives focused on youth, families, and community resilience.",
  },
];

export default function CommunitySection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#F8F9FA" }} aria-labelledby="community-heading">
      {/* Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimateIn direction="left">
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Community Impact
            </p>
            <h2
              id="community-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6"
            >
              Business as a Force for Good
            </h2>
            <div className="gold-divider-left" />
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              At Taukei Enterprises, we believe that businesses carry a responsibility beyond profit.
              We are stewards of communities — accountable to the people who live and work in them.
            </p>
            <p className="text-navy/60 leading-relaxed mb-8">
              From the caregivers who provide in-home services to the families who trust us with their
              most vulnerable loved ones, we understand that our work is personal. It&rsquo;s human.
              And it matters.
            </p>
            <Link href="/community" className="btn-primary">
              Our Community Mission
              <ArrowRight size={18} />
            </Link>
          </AnimateIn>

          <div className="space-y-6">
            <AnimateIn direction="right">
              <div className="relative h-56 overflow-hidden mb-2">
                <Image src="/images/community.jpg" alt="Community service" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/30" />
              </div>
            </AnimateIn>
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.number} delay={i * 0.1} direction="right">
                <div className="flex gap-6 group cursor-default">
                  <div className="flex-shrink-0">
                    <span className="font-display text-3xl font-bold text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-lg mb-2">{pillar.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
