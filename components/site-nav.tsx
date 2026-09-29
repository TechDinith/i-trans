import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import { SITE } from "@/lib/constants";

export default function SiteNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-white/[0.06] bg-[#0a0a0f]/80 px-4 py-3 backdrop-blur-md"
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/iTrans.png"
          alt="iTrans"
          width={40}
          height={40}
          priority
          className="h-auto w-auto"
        />
        <span className="text-sm font-bold tracking-widest uppercase">
          {SITE.name}
        </span>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/#services"
          className="hidden rounded-lg px-4 py-2 text-sm tracking-widest uppercase transition-colors hover:bg-white/10 sm:block"
        >
          Services
        </Link>
        <Link
          href="/#pricing"
          className="hidden rounded-lg px-4 py-2 text-sm tracking-widest uppercase transition-colors hover:bg-white/10 sm:block"
        >
          Pricing
        </Link>
        <Link
          href="/#faq"
          className="hidden rounded-lg px-4 py-2 text-sm tracking-widest uppercase transition-colors hover:bg-white/10 sm:block"
        >
          FAQ
        </Link>
        <a
          href="#contact"
          className="rounded-lg bg-gradient-to-r from-teal-600 to-cyan-400 px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-90"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}

export function BackLink() {
  return (
    <Link
      href="/#services"
      className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
    >
      <FaArrowLeft className="text-xs" />
      All services
    </Link>
  );
}
