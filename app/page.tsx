import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Work from "@/components/work";
import PreWorks from "@/components/pre-works";
import Tools from "@/components/tools";
import Contact from "@/components/contact";
import About from "@/components/about";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main className="mx-auto max-w-5xl space-y-8 px-4 pb-10">
        <Work />
        <PreWorks />
        <Tools />
        <Contact />
        <About />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
