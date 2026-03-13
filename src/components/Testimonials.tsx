import TestimonialCard from "./TestimonialCard";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Meridian managed our acquisition with exceptional discipline. Their technical review uncovered issues before survey and saved both time and capital.",
    author: "Family Office Representative, London",
  },
  {
    quote:
      "From itinerary design to onboard provisioning, the charter experience was immaculate. Every guest requirement was anticipated and resolved discreetly.",
    author: "Charter Client, Dubai",
  },
  {
    quote:
      "As owner representatives on our new build, they translated design ambition into practical deliverables. The shipyard process felt controlled at every milestone.",
    author: "Private Owner, Monaco",
  },
];

const Testimonials = () => {
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
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">
            Client Perspective
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Trusted by Owners, Advisors & Charter Guests</h2>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
