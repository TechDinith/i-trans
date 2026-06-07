"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white/5 p-6 backdrop-blur-sm md:p-10"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        About <span className="ml-2 opacity-60">ℹ️</span>
      </h2>

      <div className="mx-auto max-w-2xl space-y-4 text-center text-lg md:text-xl">
        <p>We&apos;re a team of freelancers!</p>
        <p>
          We can say, We are a <b>team of work</b>, that treats{" "}
          <b>your work as our own</b>.
        </p>
        <p>
          We&apos;ve just started <b>iTrans</b>, So we would like to hear from
          you about us after getting your job done!
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-lg border border-white/40 px-8 py-3 text-lg transition-colors hover:bg-white/10"
        >
          Get Started!
        </a>
      </div>
    </motion.section>
  );
}
