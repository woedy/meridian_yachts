const Showcase = () => (
  <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/showcase.jpg')" }}
    />
    <div className="absolute inset-0 bg-background/50" />
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Global Reach</p>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl italic">
        From Mediterranean Seasons to Expedition Waters
      </h2>
      <p className="mt-6 text-secondary-foreground font-body font-light text-base md:text-lg">
        Our charter and owner support team coordinates itineraries, berthing,
        regulatory logistics, and guest services across the world&apos;s premier
        cruising regions.
      </p>
    </div>
  </section>
);

export default Showcase;
