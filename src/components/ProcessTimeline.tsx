import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Owner Briefing",
    desc: "Confidential discovery session covering intended use, cruising profile, guest program, and target investment envelope.",
  },
  {
    num: "02",
    title: "Market & Technical Mapping",
    desc: "Shortlist creation with data-led comparison on pedigree, refit history, commercial viability, and lifecycle cost.",
  },
  {
    num: "03",
    title: "Negotiation & Contracting",
    desc: "Offer strategy, legal coordination, condition precedent management, and milestone payment security.",
  },
  {
    num: "04",
    title: "Build / Refit / Charter Setup",
    desc: "Execution oversight including class and flag compliance, specification sign-offs, and guest operations preparation.",
  },
  {
    num: "05",
    title: "Delivery & Ongoing Support",
    desc: "Sea trials, acceptance protocols, crew integration, and post-delivery owner representation.",
  },
];

const ProcessTimeline = () => {
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
    <section id="process" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Execution Model</p>
          <h2 className="font-display text-3xl md:text-5xl">A Disciplined Route from Brief to Delivery</h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center md:text-left">
              <span className="font-display text-4xl text-primary/20">{s.num}</span>
              <h3 className="font-display text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm font-light">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-full w-full h-px bg-border -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
