"use client";

import { motion } from "framer-motion";
import { WORK_ITEMS } from "@/lib/constants";

export default function Work() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white/5 p-6 backdrop-blur-sm md:p-10"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Work <span className="ml-2 opacity-60">📋</span>
      </h2>
      <p className="mb-4 text-lg leading-relaxed md:text-xl">
        We develop simple but modern,
      </p>
      <ul className="mb-6 space-y-1 text-lg md:text-xl">
        {WORK_ITEMS.map((item) => (
          <li key={item}>
            <b>{item}</b>
          </li>
        ))}
      </ul>
      <p className="mb-4 text-lg md:text-xl">
        especially for <b>minor</b> and <b>start-up</b> companies.
      </p>
      <p className="mb-4 text-lg md:text-xl">
        With us, the <b>cost</b> is <b>not</b> an <b>obstacle</b>, and
        it&apos;s <b>flexible</b> more than you can <b>imagine</b>.
      </p>
      <p className="text-lg md:text-xl">
        Well, if you have a <b>project</b> that cost is bothering you, just{" "}
        <a href="#contact" className="underline">
          contact us
        </a>
        .
      </p>
    </motion.section>
  );
}
