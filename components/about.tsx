"use client";

import { FaCode } from "react-icons/fa6";

import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import GradientLink from "@/components/ui/gradient-link";

const values = [
  { title: "No Fluff", desc: "We build what you need, not what looks good on a resume." },
  { title: "Ownership", desc: "Your project gets the same care we'd give our own." },
  { title: "Straight Talk", desc: "No ego. No jargon. Just clean code and clear communication." },
];

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600/30 to-cyan-400/30">
          <FaCode className="text-2xl" />
        </div>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">How We Work</h2>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Card key={v.title} delay={i * 0.1} className="p-6 text-left">
              <h3 className="mb-2 text-lg font-bold">{v.title}</h3>
              <p className="leading-relaxed text-white/60">{v.desc}</p>
            </Card>
          ))}
        </div>

        <GradientLink href="#connect">Start a Project</GradientLink>
      </div>
    </Section>
  );
}
