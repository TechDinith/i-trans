"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import Image from "next/image";

const links = [
  { href: "#work", label: "Work" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
      <div className="flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <a href="#hero" className="shrink-0">
          <Image
            src="/iTrans.png"
            alt="iTrans"
            width={60}
            height={60}
            className="h-auto w-auto"
          />
        </a>

        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>

        <ul
          className={`absolute left-0 top-full w-full bg-[rgba(0,0,0,0.8)] p-4 md:static md:flex md:w-auto md:bg-transparent md:p-0 ${
            open ? "block" : "hidden"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block px-4 py-2 text-center text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
