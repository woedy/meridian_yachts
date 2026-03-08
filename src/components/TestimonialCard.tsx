interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => (
  <div className="p-8 border border-border bg-card">
    <p className="font-display text-lg italic leading-relaxed text-foreground mb-6">
      "{quote}"
    </p>
    <p className="text-sm text-primary font-body tracking-wider uppercase">— {author}</p>
  </div>
);

export default TestimonialCard;
