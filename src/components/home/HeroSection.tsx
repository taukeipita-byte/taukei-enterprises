"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover opacity-20" priority />
      </div>
      <div className="absolute inset-0 bg-navy/80" />

      {/* Decorative gold lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative container-max section-padding pt-32 flex-1 flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.35em] uppercase">
              Santa Rosa, California
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Building Businesses.
            <br />
            <span className="text-gradient-gold">Creating Impact.</span>
            <br />
            Strengthening Communities.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Taukei Enterprises is a diversified holding company dedicated to building
            exceptional businesses and creating lasting value for future generations.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary">
              Explore Our Companies
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10 max-w-lg"
          >
            {[
              { value: "5", label: "Portfolio Companies" },
              { value: "3", label: "States Operated" },
              { value: "4", label: "Industry Sectors" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl sm:text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-white/50 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="relative flex justify-center pb-8"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
