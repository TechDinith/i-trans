import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import Section from "@/components/ui/section";
import { GROUPS, SERVICES } from "@/lib/constants";
import { icons } from "@/lib/icons";
import { priceLabel } from "@/lib/format";

export default function Work() {
  return (
    <Section id="services">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        What We Do
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-white/60">
        Five things we do properly — from a single scrollable portfolio to a full
        custom application. Every service is a fixed price, and you own
        everything we build.
      </p>

      {GROUPS.map((group) => {
        const items = SERVICES.filter((s) => s.group === group.id);
        if (items.length === 0) return null;

        return (
          <div key={group.id} className="mb-14 last:mb-0">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-teal-400 md:text-2xl">
                {group.name}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/50">
                {group.blurb}
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                items.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {items.map((s, i) => {
                const Icon = icons[s.icon];
                const price = priceLabel(s.priceUsd);
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    className="group rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-teal-500/30 hover:shadow-[0_0_25px_rgba(13,148,136,0.08)]"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <Icon className="text-3xl" />
                    <h4 className="mt-4 flex items-center gap-2 text-xl font-bold">
                      {s.name}
                      <FaArrowRight className="text-sm text-teal-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </h4>
                    <p className="mt-2 leading-relaxed text-white/60">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-teal-400">
                      {price.usd}{" "}
                      <span className="font-normal text-white/40">
                        &middot; {price.lkr}
                      </span>
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                      {s.timeline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      <p className="mt-10 text-center text-lg text-white/50">
        Cost is not an obstacle &mdash; we&apos;re flexible more than you can
        imagine.{" "}
        <a
          href="#pricing"
          className="font-semibold text-teal-400 underline underline-offset-2 transition-colors hover:text-teal-300"
        >
          See our pricing
        </a>{" "}
        or{" "}
        <a
          href="#connect"
          className="font-semibold text-teal-400 underline underline-offset-2 transition-colors hover:text-teal-300"
        >
          let&apos;s talk
        </a>
        .
      </p>
    </Section>
  );
}
