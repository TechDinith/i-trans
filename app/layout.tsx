import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SITE, SERVICES, SEO_KEYWORDS } from "@/lib/constants";
import { GA_ID } from "@/lib/analytics";
import "./globals.css";

const titleTemplate = `%s | ${SITE.name}`;
const defaultTitle = `${SITE.name} | Web Development for Startups & Small Businesses`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: SITE.description,
  keywords: SEO_KEYWORDS,
  applicationName: SITE.name,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE.name,
    title: defaultTitle,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  formatDetection: { email: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE.url}/opengraph-image`,
        description: SITE.description,
        slogan: SITE.tagline,
        email: SITE.email,
        foundingDate: SITE.founded,
        areaServed: "Worldwide",
        knowsLanguage: ["en"],
        knowsAbout: [
          "Web Development",
          "Full-Stack Development",
          "Front-End Development",
          "Back-End Development",
          "Landing Pages",
          "Firebase Development",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Spring Boot",
          "Node.js",
          "MongoDB",
          "MySQL",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SITE.email,
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        image: `${SITE.url}/opengraph-image`,
        email: SITE.email,
        areaServed: "Worldwide",
        priceRange: "$$",
        parentOrganization: { "@id": `${SITE.url}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web development services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.seoDescription,
              url: `${SITE.url}/services/${s.slug}`,
              serviceType: s.name,
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: "Worldwide",
            },
            price: s.priceUsd,
            priceCurrency: "USD",
          })),
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="relative text-white antialiased">
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-teal-600/20 blur-[150px]"
            style={{ animation: "float 20s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-48 -right-48 h-[700px] w-[700px] rounded-full bg-cyan-400/15 blur-[180px]"
            style={{ animation: "float-slow 25s ease-in-out infinite" }}
          />
          <div
            className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
            style={{ animation: "float-slower 30s ease-in-out infinite" }}
          />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
