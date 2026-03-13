import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">About Meridian</p>
          <h1 className="font-display text-4xl md:text-6xl">Independent Superyacht Advisory</h1>
          <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed">
            We guide private clients, family offices, and corporate principals through yacht acquisition,
            ownership strategy, charter planning, resale positioning, and custom build delivery.
          </p>
        </div>
      </section>
      <About />
      <CallToAction />
      <Contact />
    </main>
    <Footer />
  </>
);

export default AboutPage;
