import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl mb-4">
            MERIDIAN<span className="text-gradient-gold">.</span>
          </h3>
          <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">
            Independent advisors in superyacht sales, charter, and build
            representation for clients who expect discretion, precision, and
            measurable results.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm uppercase tracking-widest text-primary mb-4">
            Navigation
          </h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm uppercase tracking-widest text-primary mb-4">
            Offices
          </h4>
          <ul className="space-y-2 text-muted-foreground font-body text-sm">
            <li>Monaco • London • Fort Lauderdale • Dubai</li>
            <li>+377 00 000 000</li>
            <li>advisory@meridian-yachts.com</li>
          </ul>
          <div className="flex gap-4 mt-6">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground font-body text-xs tracking-wider">
          © {new Date().getFullYear()} Meridian Yachts. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
