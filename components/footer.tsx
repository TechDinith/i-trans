import { SITE } from "@/lib/constants";

const links = [
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },

  { href: "#about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-white/40">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="#hero" className="hover:text-white/60">{SITE.name}</a>
        </p>
        <div className="flex gap-6 text-sm text-white/40">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white/60">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
