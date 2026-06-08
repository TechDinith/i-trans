"use client";

import { FaEnvelope } from "react-icons/fa6";
import Section from "@/components/ui/section";
import { SITE } from "@/lib/constants";

export default function Connect() {
  return (
    <Section id="connect">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600/30 to-cyan-400/30">
          <FaEnvelope className="text-2xl" />
        </div>

        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Let&apos;s Talk</h2>
        <p className="mb-10 text-lg text-white/50">
          Have a project in mind? We&apos;d love to hear about it.
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-400 px-8 py-5 text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
        >
          <FaEnvelope className="text-xl" />
          {SITE.email}
        </a>

        <p className="mt-4 text-sm text-white/30">We reply within 24 hours</p>
      </div>
    </Section>
  );
}
