import { Anchor, Compass, Gavel, Hammer, ShieldCheck, Waves } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Compass,
    title: "Yacht Acquisition",
    description:
      "We act exclusively for buyers to secure the right yacht at the right valuation, with full technical and commercial protection throughout the transaction.",
    scope:
      "Structured search mandates for brokerage and off-market opportunities from 40m to 95m+ across Mediterranean, US, and Middle East markets.",
    highlights: [
      "Comparative market analysis and asset benchmarking.",
      "Pre-survey technical screening and red-flag review.",
      "Offer strategy, negotiation support, and closing coordination.",
    ],
  },
  {
    icon: Gavel,
    title: "Yacht Sales & Resale",
    description:
      "Our resale advisory service is designed to protect value, reduce time-to-sale, and position each yacht credibly to qualified international buyers.",
    scope:
      "End-to-end seller representation, including pricing strategy, listing package development, buyer qualification, and transaction management.",
    highlights: [
      "Data-led pricing and absorption planning.",
      "Targeted campaign execution with discreet buyer outreach.",
      "Negotiation, contract workflow, and handover support.",
    ],
  },
  {
    icon: Waves,
    title: "Luxury Charter Planning",
    description:
      "We curate charter experiences with the same rigor as transaction advisory, ensuring the right vessel, right crew profile, and right itinerary for each brief.",
    scope:
      "Single-week, seasonal, and event-focused charters with direct support for family travel, corporate hosting, and celebration programs.",
    highlights: [
      "Yacht shortlist aligned to guest profile and destination.",
      "Route planning, permits, and berth coordination.",
      "Onboard experience curation, provisioning, and concierge.",
    ],
  },
  {
    icon: Hammer,
    title: "Custom New Build",
    description:
      "As owner representatives, we manage the full new-build pathway from concept and yard selection to sea trials and final acceptance.",
    scope:
      "Independent oversight for custom and semi-custom programs covering technical specification, milestones, change orders, and cost control.",
    highlights: [
      "Shipyard and design partner evaluation.",
      "Contract advisory and milestone governance.",
      "Factory acceptance, sea trial, and delivery protocols.",
    ],
  },
  {
    icon: Anchor,
    title: "Refit & Lifecycle Upgrades",
    description:
      "We plan and supervise refits that improve guest experience, technical reliability, and charter competitiveness while minimizing downtime.",
    scope:
      "Interior renewals, class updates, machinery upgrades, and performance projects delivered through vetted shipyard and supplier networks.",
    highlights: [
      "Technical worklist definition and budget phasing.",
      "Yard tendering, contractor management, and QA.",
      "Post-refit commissioning and operational readiness.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ownership Management",
    description:
      "Beyond acquisition or build, we support long-term ownership administration so your yacht remains compliant, efficient, and market-ready.",
    scope:
      "Advisory support across legal, tax, registry, insurance, crewing, and operating budget planning in coordination with trusted specialists.",
    highlights: [
      "Flag and class compliance coordination.",
      "Insurance, legal, and annual cost optimization.",
      "Crew structure guidance and operational reporting.",
    ],
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Core Services</p>
          <h2 className="font-display text-3xl md:text-5xl">Professional Advisory for Buyers, Sellers & Owners</h2>
          <p className="mt-5 text-muted-foreground font-body font-light max-w-3xl mx-auto leading-relaxed">
            Each mandate is customized, confidential, and execution-focused. We combine brokerage intelligence,
            engineering awareness, and project discipline to deliver outcomes expected at top-tier superyacht level.
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
