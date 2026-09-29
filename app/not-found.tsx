import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "@/components/site-nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-white/60">
          Sorry, we couldn&apos;t find what you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-400 px-6 py-3 font-semibold transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
          <Link
            href="/services/"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
          >
            View services
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
