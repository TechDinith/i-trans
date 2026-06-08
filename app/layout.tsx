import type { Metadata } from "next";
import { SITE, SEO_KEYWORDS } from "@/lib/constants";
import "./globals.css";

const titleTemplate = `%s | ${SITE.name}`;
const defaultTitle = `${SITE.name} | Web Solutions for Small and Start-up Companies`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description:
    "iTrans builds modern web solutions for startups and small businesses — landing pages, full-stack web apps, Firebase-powered platforms. No budget is an obstacle.",
  keywords: SEO_KEYWORDS,
  icons: [{ rel: "icon", url: "/iTrans.svg" }],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description:
      "iTrans builds modern web solutions for startups and small businesses — landing pages, full-stack web apps, Firebase-powered platforms.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "iTrans builds modern web solutions for startups and small businesses — landing pages, full-stack web apps, Firebase-powered platforms.",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/iTrans.png`,
    description: SITE.tagline,
    email: SITE.email,
    foundingDate: "2024",
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
  };

  return (
    <html lang="en">
      <body className="relative text-white antialiased">
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
      </body>
    </html>
  );
}
