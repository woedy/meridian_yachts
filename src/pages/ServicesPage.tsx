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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Services</p>
          <h1 className="font-display text-4xl md:text-6xl">Buy, Sell, Charter, Build</h1>
          <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed max-w-4xl mx-auto">
            Meridian provides owner-side advisory across every major yachting decision. Our role is to bring
            market intelligence, technical scrutiny, and disciplined execution to high-value transactions and projects.
          </p>
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="border border-border bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">Who We Serve</p>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
              Private principals, family offices, corporate buyers, first-time owners, and established yacht programs.
            </p>
          </div>
          <div className="border border-border bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">How We Work</p>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
              Confidential mandates, milestone reporting, risk-controlled decision frameworks, and senior advisor access.
            </p>
          </div>
          <div className="border border-border bg-card/50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">Coverage</p>
            <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
              Mediterranean, Northern Europe, US East Coast, Caribbean, Gulf region, and selected expedition routes.
            </p>
          </div>
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
