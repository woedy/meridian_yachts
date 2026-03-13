import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

const Services = () => {
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
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Core Services</p>
          <h2 className="font-display text-3xl md:text-5xl">Professional Advisory for Buyers, Sellers & Owners</h2>
          <p className="mt-5 text-muted-foreground font-body font-light max-w-3xl mx-auto leading-relaxed">
            Click any service to open a dedicated page with detailed process information and scope.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
