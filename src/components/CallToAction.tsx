const CallToAction = () => (
  <section className="section-padding bg-navy text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl mb-6">
        Start Your Custom Yacht Journey
      </h2>
      <p className="text-secondary-foreground font-body font-light text-lg mb-10">
        Tell us about your vision and our team will guide you through the process
        of designing your dream yacht.
      </p>
      <a
        href="#contact"
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300"
      >
        Request a Private Consultation
      </a>
    </div>
  </section>
);

export default CallToAction;
