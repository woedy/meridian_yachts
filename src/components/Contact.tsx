import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div
        className={`max-w-3xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">
            Private Consultation
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Discuss Your Yacht Objectives</h2>
          <p className="mt-4 text-muted-foreground font-body font-light leading-relaxed">
            Tell us whether you are evaluating acquisition opportunities,
            preparing a vessel for sale, planning a charter season, or exploring
            a full custom build. A senior advisor will respond within one
            business day.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">
              Service Interest
            </label>
            <input
              type="text"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Purchase, sale, charter, or new build"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">
              Target Yacht Profile
            </label>
            <input
              type="text"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g. 45m explorer, summer Med charter, 60m new build"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">
              Project Details
            </label>
            <textarea
              rows={5}
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Share timeline, budget range, preferred regions, or vessel requirements..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
          >
            Submit Confidential Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
