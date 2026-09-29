import Link from "next/link";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import {
  GROUPS,
  PLANS,
  SCOPE_NOTE,
  SITE,
  TIMELINE_NOTE,
} from "@/lib/constants";
import { priceLabel } from "@/lib/format";

export default function Pricing() {
  return (
    <Section id="pricing">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Transparent <span className="text-teal-400">Pricing</span>
      </h2>
      <p className="mx-auto mb-4 max-w-2xl text-center leading-relaxed text-white/60">
        No hourly billing, no surprise invoices. Every project is a single fixed
        price agreed in writing before work starts. Prices shown in USD with the
        equivalent in Sri Lankan Rupees.
      </p>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-white/40">
        Two separate ranges. Start with a starter site if you need to look real
        quickly, or go straight to a business build if you need something people
        can actually log in and use.
      </p>

      {GROUPS.map((group) => {
        const plans = PLANS.filter((p) => p.group === group.id);
        if (plans.length === 0) return null;

        return (
          <div key={group.id} className="mb-16 last:mb-0">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold md:text-3xl">{group.name}</h3>
              <p className="mx-auto mt-2 max-w-xl leading-relaxed text-white/50">
                {group.blurb}
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                plans.length > 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {plans.map((plan, i) => {
                const price = priceLabel(plan.usd);
                return (
                  <Card
                    key={plan.name}
                    delay={i * 0.08}
                    className={`relative flex flex-col p-6 ${
                      plan.featured
                        ? "border-teal-500/40 bg-gradient-to-b from-teal-600/10 to-transparent"
                        : ""
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-400 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}

                    <h4 className="text-lg font-bold">{plan.name}</h4>
                    <p className="mt-1 min-h-10 text-sm text-white/50">
                      {plan.tagline}
                    </p>

                    <div className="mt-4">
                      <p className="text-3xl font-bold text-teal-400">
                        {price.usd}
                      </p>
                      <p className="text-sm text-white/40">{price.lkr}</p>
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                      {plan.timeline}
                    </p>

                    <ul className="mt-5 flex-1 space-y-2 text-sm">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex gap-2 text-white/70">
                          <FaCheck className="mt-1 shrink-0 text-xs text-teal-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 space-y-2">
                      <a
                        href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                          `Project enquiry — ${plan.name} (${price.usd})`,
                        )}`}
                        className={`block rounded-lg px-5 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                          plan.featured
                            ? "bg-gradient-to-r from-teal-600 to-cyan-400 text-white"
                            : "border border-white/20 hover:bg-white/10"
                        }`}
                      >
                        Enquire
                      </a>
                      <Link
                        href={`/services/${plan.slug}/`}
                        className="flex items-center justify-center gap-1.5 text-xs text-white/40 transition-colors hover:text-teal-400"
                      >
                        What&apos;s included
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-8 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/50">
          {SCOPE_NOTE}
        </p>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/40">
          {TIMELINE_NOTE}
        </p>
        <p className="text-sm text-white/40">
          Payment plans available for larger projects.
        </p>
        <a
          href="#connect"
          className="inline-block font-semibold text-teal-400 underline underline-offset-2 transition-colors hover:text-teal-300"
        >
          Need something custom? Let&apos;s talk
        </a>
      </div>
    </Section>
  );
}
