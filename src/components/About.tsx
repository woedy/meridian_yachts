import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">
          About Meridian
        </p>
        <h2 className="font-display text-3xl md:text-5xl mb-8">
          Strategic Guidance for Every Stage of Yacht Ownership
        </h2>
        <p className="text-secondary-foreground font-body font-light leading-relaxed mb-6">
          Meridian Yachts is an independent advisory and project management house
          supporting clients across brokerage, charter, and custom construction.
          Our team combines superyacht market analysts, former captains, naval
          engineers, and interior specialists to protect client interests from
          negotiation through handover.
        </p>
        <p className="text-secondary-foreground font-body font-light leading-relaxed mb-10">
          We are structured around confidentiality, long-term value, and
          operational excellence. Whether sourcing a turnkey vessel,
          repositioning an existing asset for sale, or commissioning a new build,
          we provide transparent process control and uncompromising detail.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left md:text-center">
          {[
            { value: "25+", label: "Years in combined advisory expertise" },
            { value: "40m–95m", label: "Typical yacht range represented" },
            { value: "20+", label: "Primary cruising destinations supported" },
            { value: "24/7", label: "Owner and charter guest assistance" },
          ].map((item) => (
            <div key={item.label} className="p-5 border border-border bg-card/40">
              <p className="font-display text-3xl text-primary">{item.value}</p>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground font-body leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
