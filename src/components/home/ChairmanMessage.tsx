import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function ChairmanMessage() {
  return (
    <section
      className="section-padding bg-navy-pattern relative overflow-hidden"
      aria-labelledby="chairman-heading"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              From the Founder
            </p>
            <h2
              id="chairman-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white mb-8"
            >
              Chairman&rsquo;s Message
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="relative">
              <Quote
                className="text-gold/20 mx-auto mb-6"
                size={64}
                strokeWidth={1}
              />
              <blockquote className="text-white/80 text-xl sm:text-2xl font-display italic leading-relaxed mb-8">
                &ldquo;Everything we build, we build with purpose. Our companies don&rsquo;t just
                generate returns — they serve people, employ families, and strengthen the communities
                that have given us so much. This is our calling, and we take it seriously.&rdquo;
              </blockquote>
              <div className="gold-divider" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.25}>
            <p className="text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              When I founded Taukei Enterprises, I had one goal: to build a company that would last —
              one that my children and their children would be proud of. A business grounded in
              values, driven by service, and built to create genuine impact in people&rsquo;s lives.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
              We started with Providential Fijian Home Care because we saw a need — families struggling
              to care for their aging loved ones. Today, we serve Sonoma, Marin, and San Francisco
              counties, and we are just getting started.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mb-3">
                <span className="font-display text-gold text-xl font-bold">PT</span>
              </div>
              <p className="font-display font-semibold text-white text-lg">Pita G. Taukei</p>
              <p className="text-gold text-sm tracking-wider uppercase">Founder &amp; Chairman</p>
              <p className="text-white/40 text-xs mt-1">Taukei Enterprises</p>
              <div className="mt-6">
                <Link href="/leadership" className="btn-outline">
                  Full Biography
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
