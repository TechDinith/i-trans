"use client";

import { FaPalette, FaBolt, FaFire } from "react-icons/fa6";

import Section from "@/components/ui/section";
import Card from "@/components/ui/card";

const services = [
  { icon: FaPalette, title: "Landing Pages & Portfolios", desc: "Fast, modern, responsive sites that make an impact. Clean code, sharp design, no bloat." },
  { icon: FaBolt, title: "Full-Stack Web Apps", desc: "End-to-end applications from database to deployment. Full mastery when you need more than a page." },
  { icon: FaFire, title: "Firebase Powered", desc: "Skip the backend for most projects. Auth, database, hosting — all in one platform." },
];

export default function Work() {
  return (
    <Section id="services">
      <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">What We Do</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Card key={s.title} delay={i * 0.12} className="p-6 text-center">
            <s.icon className="mx-auto text-3xl" />
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-white/60">{s.desc}</p>
          </Card>
        ))}
      </div>
      <p className="mt-10 text-center text-lg text-white/50">
        Cost is not an obstacle &mdash; we&apos;re flexible more than you can imagine.{" "}
        <a href="#connect" className="font-semibold text-teal-400 underline underline-offset-2 transition-colors hover:text-teal-300">Let&apos;s talk</a>.
      </p>
    </Section>
  );
}
