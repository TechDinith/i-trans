"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 pt-20 md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/iTrans.png"
          alt="iTrans"
          width={300}
          height={300}
          priority
          className="h-auto w-auto"
        />
      </motion.div>

      <div className="hidden h-48 w-px bg-white/30 md:block" />

      <motion.p
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-3xl font-light md:text-left md:text-5xl"
      >
        Web solutions for <br />
        <b>Minor</b> and <b>Start-up</b> companies.
      </motion.p>
    </section>
  );
}
