import { Compass, Hammer, RefreshCw, Sofa } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Compass,
    title: "Custom Yacht Design",
    description: "We transform ideas into striking yacht concepts. Our design process blends naval architecture, aesthetics, and functionality to create truly unique vessels.",
  },
  {
    icon: Hammer,
    title: "Full Yacht Construction",
    description: "Our shipyard manages the entire build process from hull construction to interior finishing using the highest quality marine materials.",
  },
  {
    icon: RefreshCw,
    title: "Yacht Refits & Upgrades",
    description: "We modernize and upgrade existing yachts with new technologies, interiors, and performance improvements.",
  },
  {
    icon: Sofa,
    title: "Interior Yacht Design",
    description: "Our interior specialists craft elegant living spaces using premium materials, custom furniture, and luxury finishes.",
  },
];

const Services = () => {
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
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-5xl">What We Do</h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
