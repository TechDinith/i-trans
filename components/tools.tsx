"use client";

import type { IconType } from "react-icons";
import { SiReact, SiTailwindcss, SiSpringboot, SiMongodb, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const frontStack = [
  { name: "React / Next.js", type: "Frontend", icon: SiReact },
  { name: "Tailwind CSS", type: "Styling", icon: SiTailwindcss },
];

const backStack = [
  { name: "Spring Boot / Node.js", type: "Backend", icon: SiSpringboot },
  { name: "MongoDB / MySQL", type: "Database", icon: SiMongodb },
];

function ToolCard({ name, type, icon: Icon, delay = 0 }: { name: string; type: string; icon: IconType; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-teal-500/30 hover:shadow-[0_0_25px_rgba(13,148,136,0.08)] md:p-5"
    >
      <Icon className="mx-auto text-xl md:text-2xl" />
      <p className="mt-2 text-xs text-white/50 md:text-sm">{type}</p>
      <p className="mt-1 break-words text-sm font-medium md:text-base">{name}</p>
    </motion.div>
  );
}

export default function Tools() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Our Stack</h2>

      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {frontStack.map((t, i) => (
            <ToolCard key={t.name} {...t} delay={i * 0.06} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-md grid-cols-1 items-stretch gap-6 md:max-w-4xl md:grid-cols-[1fr_auto_1fr]">
        <div className="grid grid-cols-2 gap-4">
          {backStack.map((t, i) => (
            <ToolCard key={t.name} {...t} delay={0.12 + i * 0.06} />
          ))}
        </div>

        <div className="hidden h-px w-full bg-white/10 md:block md:h-auto md:w-px" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center"
        >
          <div className="w-full rounded-xl border border-teal-500/20 bg-gradient-to-br from-teal-600/10 to-cyan-400/10 p-4 text-center transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(13,148,136,0.12)] md:p-5">
            <SiFirebase className="mx-auto text-2xl" />
            <p className="mt-2 text-sm text-white/50">Auth, DB &amp; Backendless</p>
            <p className="mt-1 font-medium">Firebase</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
