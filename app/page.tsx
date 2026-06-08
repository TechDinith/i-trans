import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Tools from "@/components/tools";
import Connect from "@/components/connect";
import About from "@/components/about";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="mx-auto max-w-6xl space-y-24 px-4 pb-10">
        <Work />
        <Tools />
        <Connect />
        <About />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
