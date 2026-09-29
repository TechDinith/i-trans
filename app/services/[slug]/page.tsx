import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaArrowRight } from "react-icons/fa6";

import SiteNav, { BackLink } from "@/components/site-nav";
import Footer from "@/components/footer";
import { SITE, SERVICES, SCOPE_NOTE, TIMELINE_NOTE } from "@/lib/constants";
import { icons } from "@/lib/icons";
import { priceLabel } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.seoTitle.replace(` | ${SITE.name}`, ""),
    description: service.seoDescription,
    keywords: [service.name, ...service.stack, `${service.name} price`],
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      type: "article",
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}/`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const price = priceLabel(service.priceUsd);
  const others = SERVICES.filter(
    (s) => s.slug !== service.slug && s.group === service.group,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE.url}/services/${service.slug}/#service`,
        name: service.name,
        serviceType: service.name,
        description: service.seoDescription,
        url: `${SITE.url}/services/${service.slug}/`,
        image: `${SITE.url}/opengraph-image`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "Worldwide",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Startups and small businesses",
        },
        offers: {
          "@type": "Offer",
          price: service.priceUsd,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE.url}/services/${service.slug}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services/` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${SITE.url}/services/${service.slug}/`,
          },
        ],
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

      <main className="mx-auto max-w-4xl px-4 py-16">
        <BackLink />

        <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600/30 to-cyan-400/30">
          <Icon className="text-3xl" />
        </div>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">{service.name}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="rounded-lg bg-teal-500/10 px-4 py-2 text-lg font-semibold text-teal-400">
            From {price.usd}
          </span>
          <span className="text-white/40">
            {price.lkr} &middot; about {service.timeline}
          </span>
        </div>

        <div className="mt-8 space-y-4 leading-relaxed text-white/70">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">What&apos;s included</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-white/70"
              >
                <FaCheck className="mt-1 shrink-0 text-teal-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3">
            <p className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-white/50">
              {SCOPE_NOTE}
            </p>
            <p className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-white/40">
              {TIMELINE_NOTE}
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Tech we use</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-600/10 to-cyan-400/5 p-8 text-center">
          <h2 className="text-2xl font-bold">
            Ready to start a {service.name.toLowerCase()} project?
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-white/60">
            Tell us what you are building and we will reply within 24 hours with
            an honest scope, timeline and fixed price.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(
              `Project enquiry — ${service.name} (${price.usd})`,
            )}`}
            className="mt-6 inline-flex w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-400 px-8 py-4 text-lg font-bold transition-opacity hover:opacity-90"
          >
            {SITE.email}
          </a>
        </section>

        {others.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Other services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((o) => {
                const OtherIcon = icons[o.icon];
                const otherPrice = priceLabel(o.priceUsd);
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}/`}
                    className="group rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:border-teal-500/30"
                  >
                    <OtherIcon className="text-xl" />
                    <h3 className="mt-3 font-bold">{o.name}</h3>
                    <p className="mt-1 text-sm text-teal-400">
                      From {otherPrice.usd}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs text-white/40 transition-colors group-hover:text-white">
                      Learn more
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer group={service.group} />
    </>
  );
}
