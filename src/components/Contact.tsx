import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className={`max-w-2xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl">Get in Touch</h2>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
            <input
              type="text"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
            <input
              type="email"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">Yacht Size Interest</label>
            <input
              type="text"
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g. 40m - 60m"
            />
          </div>
          <div>
            <label className="block text-sm font-body text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
            <textarea
              rows={5}
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your vision..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
