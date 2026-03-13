import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  scope: string;
  highlights: string[];
}

const ServiceCard = ({ slug, icon: Icon, title, description, scope, highlights }: ServiceCardProps) => (
  <Link
    to={`/services/${slug}`}
    className="group p-8 bg-card border border-border hover:border-primary/40 transition-all duration-500 block"
  >
    <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
    <h3 className="font-display text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">{description}</p>

    <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-primary font-body">Service Scope</p>
    <p className="mt-2 text-sm text-foreground/90 font-body leading-relaxed">{scope}</p>

    <ul className="mt-4 space-y-2">
      {highlights.map((item) => (
        <li key={item} className="text-xs text-muted-foreground font-body leading-relaxed flex gap-2">
          <span className="text-primary">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <p className="mt-5 text-xs uppercase tracking-[0.2em] text-primary font-body">View Detailed Service →</p>
  </Link>
);

export default ServiceCard;
