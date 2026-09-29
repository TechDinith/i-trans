import Link from "next/link";
import { SITE, SERVICES, type ServiceGroup } from "@/lib/constants";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#tools", label: "Tools" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer({ group }: { group?: ServiceGroup }) {
  const services = group
    ? SERVICES.filter((s) => s.group === group)
    : SERVICES;

  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Services"
          className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="text-sm text-white/30 transition-colors hover:text-white/60"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 text-center">
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-teal-400 transition-colors hover:text-teal-300"
          >
            {SITE.email}
          </a>
          <p className="mt-3 text-xs text-white/30">
            Copyright &copy; {new Date().getFullYear()} {SITE.name} &mdash;{" "}
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
