import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PortfolioPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl">Signature Yacht Projects</h1>
          <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed">
            Representative listings, custom-build studies, and charter-ready vessels curated for
            discerning owners and high-net-worth travel programs.
          </p>
        </div>
      </section>
      <PortfolioGrid />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
    <Footer />
  </>
);

export default PortfolioPage;
