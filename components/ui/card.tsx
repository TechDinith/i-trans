"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  href?: string;
};

export default function Card({ children, className = "", delay = 0, href }: Props) {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, delay },
  };

  const base = "rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 " +
    "hover:border-teal-500/30 hover:shadow-[0_0_25px_rgba(13,148,136,0.08)] " + className;

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps} className={base}>
        {children}
      </motion.a>
    );
  }

  return <motion.div {...motionProps} className={base}>{children}</motion.div>;
}
