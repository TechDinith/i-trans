import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import SiteNav from "@/components/site-nav";
import Footer from "@/components/footer";
import { GROUPS, SERVICES, SITE, TIMELINE_NOTE } from "@/lib/constants";
import { icons } from "@/lib/icons";
import { priceLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Portfolio websites, landing pages, business websites, Firebase MVPs and full-stack web applications for startups and small businesses. Fixed prices from $185. No budget is an obstacle.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: `Web Development Services | ${SITE.name}`,
    description:
      "Portfolio websites, landing pages, business websites, Firebase MVPs and full-stack applications. Fixed prices from $185.",
    url: "/services/",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE.url}/services/`,
      },
    ],
  };

  return (
    <>
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold md:text-5xl">
          Web Development Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          Five things we do properly, split into starter sites and full business
          builds. Every service is a fixed price agreed before work starts, and
          you own 100% of the code and the hosting account from day one.
        </p>

        {GROUPS.map((group) => {
          const items = SERVICES.filter((s) => s.group === group.id);
          if (items.length === 0) return null;

          return (
            <section key={group.id} className="mt-16 first:mt-12">
              <h2 className="text-3xl font-bold text-teal-400">{group.name}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-white/50">
                {group.blurb}
              </p>

              <div className="mt-8 space-y-6">
                {items.map((s) => {
                  const Icon = icons[s.icon];
                  const price = priceLabel(s.priceUsd);
                  return (
                    <article
                      key={s.slug}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-colors hover:border-teal-500/20 md:p-8"
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-start">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600/30 to-cyan-400/30">
                          <Icon className="text-2xl" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold">{s.name}</h3>
                          <p className="mt-2 leading-relaxed text-white/60">
                            {s.tagline}
                          </p>

                          <p className="mt-3 text-sm text-white/40">
                            <span className="text-xs uppercase tracking-wider text-white/30">
                              Best for:{" "}
                            </span>
                            {s.bestFor}
                          </p>

                          <div className="mt-5 flex flex-wrap items-center gap-4">
                            <span className="rounded-lg bg-teal-500/10 px-3 py-1.5 text-sm font-semibold text-teal-400">
                              From {price.usd}
                            </span>
                            <span className="text-sm text-white/35">
                              {price.lkr} &middot; about {s.timeline}
                            </span>
                          </div>

                          <Link
                            href={`/services/${s.slug}/`}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
                          >
                            What&apos;s included
                            <FaArrowRight className="text-xs" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        <p className="mt-10 max-w-3xl rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-white/40">
          {TIMELINE_NOTE}
        </p>

        <section id="contact" className="mt-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Not sure which one you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60">
            Describe what you are trying to build and we will tell you honestly
            what it takes, what it costs and how long it takes. Free scoping, no
            obligation.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(
              "Project enquiry — not sure which service",
            )}`}
            className="mt-8 inline-flex w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-400 px-8 py-5 text-lg font-bold transition-opacity hover:opacity-90"
          >
            {SITE.email}
          </a>
          <p className="mt-4 text-sm text-white/30">We reply within 24 hours</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
