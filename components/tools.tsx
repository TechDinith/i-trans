"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "React / Next.js", type: "Frontend" },
  { name: "TypeScript", type: "Language" },
  { name: "Node.js", type: "Backend" },
  { name: "PostgreSQL / Prisma", type: "Database" },
  { name: "Tailwind CSS", type: "Styling" },
  { name: "Framer Motion", type: "Animation" },
  { name: "Git / GitHub", type: "DevOps" },
  { name: "REST / GraphQL", type: "API" },
];

export default function Tools() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white/5 p-6 backdrop-blur-sm md:p-10"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Tools <span className="ml-2 opacity-60">✨</span>
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {tools.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-white/30"
          >
            <p className="text-sm opacity-60">{t.type}</p>
            <p className="font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
