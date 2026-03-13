import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Services</p>
          <h1 className="font-display text-4xl md:text-6xl">Buy, Sell, Charter, Build</h1>
          <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed">
            Our advisory platform covers every technical, legal, and commercial workstream required for
            high-value yachting decisions across global markets.
          </p>
        </div>
      </section>
      <Services />
      <ProcessTimeline />
      <CallToAction />
      <Contact />
    </main>
    <Footer />
  </>
);

export default ServicesPage;
