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

    <div className="relative z-10 text-center max-w-4xl px-6">
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight animate-fade-up">
        Custom Yachts Designed{" "}
        <span className="text-gradient-gold">Without Limits</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-secondary-foreground font-body font-light max-w-2xl mx-auto animate-fade-up-delay-1">
        We design and build bespoke yachts for owners who demand precision,
        performance, and timeless elegance.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
        <a
          href="#contact"
          className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
        >
          Request a Consultation
        </a>
        <a
          href="#portfolio"
          className="px-8 py-3.5 border border-foreground/30 text-foreground font-body text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
        >
          View Our Yachts
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
