import { Anchor, Compass, Gavel, Hammer, ShieldCheck, Waves } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Compass,
    title: "Yacht Acquisition",
    description:
      "Buyer representation across global brokerage markets, with technical due diligence, valuation benchmarking, and negotiated deal structures tailored to your ownership goals.",
  },
  {
    icon: Gavel,
    title: "Yacht Sales & Resale",
    description:
      "Strategic listing, off-market introductions, and targeted campaign management to position your yacht competitively and maximize sale efficiency.",
  },
  {
    icon: Waves,
    title: "Luxury Charter Planning",
    description:
      "End-to-end charter advisory including yacht selection, itinerary design, destination permits, and curated onboard lifestyle experiences.",
  },
  {
    icon: Hammer,
    title: "Custom New Build",
    description:
      "Owner-side representation from concept brief to final delivery, including shipyard selection, contract review, milestone supervision, and specification control.",
  },
  {
    icon: Anchor,
    title: "Refit & Lifecycle Upgrades",
    description:
      "Major and minor refit planning covering class compliance, performance enhancements, interior renewals, and operational modernization.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Management",
    description:
      "Ongoing support for registration, legal and tax coordination, insurance, crew strategy, and annual operating budget optimization.",
  },
];

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
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">
            Core Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Advisory Across the Entire Yacht Cycle</h2>
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
