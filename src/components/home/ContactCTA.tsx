import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-navy-pattern relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="container-max relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Let&rsquo;s Connect
            </p>
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Build Something Great Together?
            </h2>
            <div className="gold-divider" />
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Whether you&rsquo;re an investor, a business owner exploring acquisition opportunities,
              a potential partner, or a client seeking our services — we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Send a Business Inquiry
                <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Our Portfolio
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
