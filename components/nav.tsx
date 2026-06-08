"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const links = [
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 z-50 flex w-full items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <a href="#hero" className="shrink-0">
          <Image src="/iTrans.png" alt="iTrans" width={48} height={48} className="h-auto w-auto" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-lg px-4 py-2 text-sm tracking-widest uppercase transition-colors hover:bg-white/10">
              {l.label}
            </a>
          ))}
          <a href="#connect" className="ml-4 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-400 px-5 py-2 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90">
            Let&apos;s Talk
          </a>
        </div>

        <button className="flex flex-col gap-1 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full bg-black/90 p-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block rounded-lg px-4 py-3 text-center text-sm tracking-widest uppercase hover:bg-white/10" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#connect" className="mt-2 block rounded-lg bg-gradient-to-r from-teal-600 to-cyan-400 px-5 py-3 text-center text-sm font-semibold uppercase tracking-widest" onClick={() => setOpen(false)}>
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
