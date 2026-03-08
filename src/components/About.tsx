import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">About Us</p>
        <h2 className="font-display text-3xl md:text-5xl mb-8">
          Craftsmanship Meets Innovation
        </h2>
        <p className="text-secondary-foreground font-body font-light leading-relaxed mb-6">
          Our studio specializes in the design and construction of fully custom yachts tailored to the vision of each owner. From the first concept sketch to the final launch, every detail is engineered with precision and built with uncompromising craftsmanship.
        </p>
        <p className="text-secondary-foreground font-body font-light leading-relaxed">
          Our team of designers, naval architects, and master builders collaborate to create vessels that combine advanced engineering with refined aesthetics. Each yacht is a one-of-a-kind creation built for performance, luxury, and longevity.
        </p>
      </div>
    </section>
  );
};

export default About;
