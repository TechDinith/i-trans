"use client";

import { motion } from "framer-motion";
import ImageCarousel from "./image-carousel";

export default function PreWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-6 rounded-xl bg-white/5 p-4 backdrop-blur-sm md:p-6"
    >
      <h3 className="mb-4 text-center text-xl font-bold md:text-2xl">
        Pre - Works
      </h3>

      <div className="rounded-lg bg-white/10 p-4">
        <h4 className="mb-3 text-lg font-semibold">E-Commerce Web-App</h4>
        <ImageCarousel />
      </div>
    </motion.section>
  );
}
