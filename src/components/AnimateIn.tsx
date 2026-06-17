"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimateInProps) {
  const reduced = useReducedMotion();

  const variants = {
    hidden: reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === "up" ? 30 : 0,
          x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
