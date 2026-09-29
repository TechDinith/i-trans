import type { Metadata } from "next";
import { SITE, FAQS } from "@/lib/constants";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Pricing from "@/components/pricing";
import Tools from "@/components/tools";
import Connect from "@/components/connect";
import About from "@/components/about";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: `${SITE.name} | Web Development for Startups & Small Businesses`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    url: `${SITE.url}/`,
    inLanguage: "en",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Nav />
      <Hero />

      <main className="mx-auto max-w-6xl space-y-24 px-4 pb-10">
        <Work />
        <Pricing />
        <Tools />
        <Connect />
        <About />
        <Faq />
      </main>

      <Footer />
      <ScrollToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
