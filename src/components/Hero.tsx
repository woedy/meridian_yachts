const Hero = () => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-yacht.jpg')" }}
    />
    <div className="absolute inset-0 bg-background/60" />

    <div className="relative z-10 text-center max-w-5xl px-6">
      <p className="text-sm uppercase tracking-[0.35em] text-primary font-body mb-6 animate-fade-up">
        Yacht Sales • Charter • New Build • Owner Services
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight animate-fade-up">
        Global Expertise in <span className="text-gradient-gold">Luxury Yachting</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-secondary-foreground font-body font-light max-w-3xl mx-auto animate-fade-up-delay-1">
        Meridian Yachts represents discerning clients in yacht acquisition,
        discreet resale, charter experiences, and fully custom build programs.
        From first consultation to final delivery, we provide technical rigor,
        market intelligence, and concierge-level service.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
        <a
          href="/#contact"
          className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
        >
          Request a Private Consultation
        </a>
        <a
          href="/portfolio"
          className="px-8 py-3.5 border border-foreground/30 text-foreground font-body text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
        >
          View Signature Fleet
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
