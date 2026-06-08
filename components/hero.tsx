"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "@/components/ui/gradient-text";
import GradientLink from "@/components/ui/gradient-link";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 pt-20 md:flex-row md:gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/iTrans.png" alt="iTrans" width={260} height={260} priority className="h-auto w-auto drop-shadow-[0_0_40px_rgba(13,148,136,0.3)]" />
      </motion.div>

      <div className="hidden h-48 w-px bg-white/20 md:block" />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-lg text-center md:text-left"
      >
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          We Build for <GradientText>Startups</GradientText>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70 md:text-xl">
          Modern web solutions for small and start-up companies. No budget is an obstacle.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <GradientLink href="#services">View Services</GradientLink>
          <a href="#connect" className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10">
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
