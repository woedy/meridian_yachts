import Navbar from "@/components/Navbar";
import ProcessTimeline from "@/components/ProcessTimeline";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ProcessPage = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Process</p>
          <h1 className="font-display text-4xl md:text-6xl">Owner Representation Framework</h1>
          <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed">
            Every engagement follows a controlled, transparent methodology designed to reduce risk,
            optimize decisions, and protect owner outcomes from briefing to delivery.
          </p>
        </div>
      </section>
      <ProcessTimeline />
      <Services />
      <CallToAction />
      <Contact />
    </main>
    <Footer />
  </>
);

export default ProcessPage;
