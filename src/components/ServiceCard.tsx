import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="group p-8 bg-card border border-border hover:border-primary/40 transition-all duration-500">
    <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
    <h3 className="font-display text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">
      {description}
    </p>
  </div>
);

export default ServiceCard;
