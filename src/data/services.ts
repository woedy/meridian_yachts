import { Anchor, Compass, Gavel, Hammer, ShieldCheck, Waves, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  scope: string;
  highlights: string[];
  image: string;
  detailIntro: string;
  detailSections: Array<{
    heading: string;
    body: string;
  }>;
}

export const services: ServiceItem[] = [
  {
    slug: "yacht-acquisition",
    icon: Compass,
    title: "Yacht Acquisition",
    description:
      "We act exclusively for buyers to secure the right yacht at the right valuation, with full technical and commercial protection throughout the transaction.",
    scope:
      "Structured search mandates for brokerage and off-market opportunities from 40m to 95m+ across Mediterranean, US, and Middle East markets.",
    highlights: [
      "Comparative market analysis and asset benchmarking.",
      "Pre-survey technical screening and red-flag review.",
      "Offer strategy, negotiation support, and closing coordination.",
    ],
    image: "/images/yacht-1.jpg",
    detailIntro:
      "Our acquisition team represents your interests from initial brief to final transfer of ownership. We combine market intelligence with technical oversight to help you buy with confidence.",
    detailSections: [
      {
        heading: "Market Search & Shortlisting",
        body: "We build a data-backed shortlist based on cruising profile, guest capacity, technical pedigree, and resale outlook. This includes active brokerage listings and discreet off-market options.",
      },
      {
        heading: "Due Diligence & Risk Review",
        body: "Before offer submission, we coordinate technical pre-checks, ownership history reviews, class status validation, and maintenance analysis to identify risk exposure early.",
      },
      {
        heading: "Negotiation, Survey & Closing",
        body: "We manage offer strategy, coordinate legal counsel, oversee survey and sea trial findings, and support final closing documentation through secure funds transfer and handover planning.",
      },
    ],
  },
  {
    slug: "yacht-sales-resale",
    icon: Gavel,
    title: "Yacht Sales & Resale",
    description:
      "Our resale advisory service is designed to protect value, reduce time-to-sale, and position each yacht credibly to qualified international buyers.",
    scope:
      "End-to-end seller representation, including pricing strategy, listing package development, buyer qualification, and transaction management.",
    highlights: [
      "Data-led pricing and absorption planning.",
      "Targeted campaign execution with discreet buyer outreach.",
      "Negotiation, contract workflow, and handover support.",
    ],
    image: "/images/yacht-2.jpg",
    detailIntro:
      "We position your yacht for a successful exit with a clear strategy, international exposure, and disciplined deal execution built around your timeline and value objectives.",
    detailSections: [
      {
        heading: "Valuation & Positioning",
        body: "Our team benchmarks comparable transactions, market sentiment, and vessel-specific differentiators to establish a defendable asking strategy.",
      },
      {
        heading: "Marketing & Buyer Qualification",
        body: "We create premium sales collateral, direct campaigns to serious buyer channels, and qualify inquiries before arranging inspections.",
      },
      {
        heading: "Transaction Delivery",
        body: "From offer negotiation to contract execution, survey handling, and completion support, we maintain process control and transparent reporting.",
      },
    ],
  },
  {
    slug: "luxury-charter-planning",
    icon: Waves,
    title: "Luxury Charter Planning",
    description:
      "We curate charter experiences with the same rigor as transaction advisory, ensuring the right vessel, right crew profile, and right itinerary for each brief.",
    scope:
      "Single-week, seasonal, and event-focused charters with direct support for family travel, corporate hosting, and celebration programs.",
    highlights: [
      "Yacht shortlist aligned to guest profile and destination.",
      "Route planning, permits, and berth coordination.",
      "Onboard experience curation, provisioning, and concierge.",
    ],
    image: "/images/yacht-3.jpg",
    detailIntro:
      "Whether you are chartering for leisure, business hospitality, or a milestone occasion, we deliver an end-to-end guest program built to premium service standards.",
    detailSections: [
      {
        heading: "Briefing & Yacht Selection",
        body: "We assess group profile, destination priorities, and service preferences to recommend suitable charter yachts and crew profiles.",
      },
      {
        heading: "Itinerary & Logistics",
        body: "Our team handles routing, berth planning, destination permissions, and coordination with local partners to keep every leg seamless.",
      },
      {
        heading: "Guest Experience Delivery",
        body: "From wellness requests and watersports planning to culinary preferences and shore-side events, we manage details for a smooth, private charter.",
      },
    ],
  },
  {
    slug: "custom-new-build",
    icon: Hammer,
    title: "Custom New Build",
    description:
      "As owner representatives, we manage the full new-build pathway from concept and yard selection to sea trials and final acceptance.",
    scope:
      "Independent oversight for custom and semi-custom programs covering technical specification, milestones, change orders, and cost control.",
    highlights: [
      "Shipyard and design partner evaluation.",
      "Contract advisory and milestone governance.",
      "Factory acceptance, sea trial, and delivery protocols.",
    ],
    image: "/images/yacht-4.jpg",
    detailIntro:
      "A new build is a multi-year investment program. We provide owner-side governance to align design ambition, engineering performance, and commercial discipline.",
    detailSections: [
      {
        heading: "Concept Development",
        body: "We translate owner objectives into a practical build brief across layout, propulsion philosophy, operational range, and budget envelope.",
      },
      {
        heading: "Yard Selection & Contract Structure",
        body: "We support competitive yard evaluation, negotiation strategy, and contract terms including milestone payments, guarantees, and change mechanisms.",
      },
      {
        heading: "Build Oversight & Acceptance",
        body: "During construction, we monitor milestones, quality checks, and specification compliance through to sea trials and final delivery sign-off.",
      },
    ],
  },
  {
    slug: "refit-lifecycle-upgrades",
    icon: Anchor,
    title: "Refit & Lifecycle Upgrades",
    description:
      "We plan and supervise refits that improve guest experience, technical reliability, and charter competitiveness while minimizing downtime.",
    scope:
      "Interior renewals, class updates, machinery upgrades, and performance projects delivered through vetted shipyard and supplier networks.",
    highlights: [
      "Technical worklist definition and budget phasing.",
      "Yard tendering, contractor management, and QA.",
      "Post-refit commissioning and operational readiness.",
    ],
    image: "/images/yacht-5.jpg",
    detailIntro:
      "Refit programs demand practical planning, cost control, and tight schedule management. We coordinate technical and hospitality priorities with minimal operational disruption.",
    detailSections: [
      {
        heading: "Scope Definition & Budgeting",
        body: "We define critical path worklists, compliance needs, and owner preference upgrades while building a realistic budget and downtime plan.",
      },
      {
        heading: "Tendering & Execution",
        body: "Our team runs shipyard comparisons, contractor selection, and progress monitoring with regular reporting against cost and schedule.",
      },
      {
        heading: "Recommissioning",
        body: "Before relaunch, we coordinate system validation, crew handover, documentation closure, and readiness checks for private or charter operations.",
      },
    ],
  },
  {
    slug: "ownership-management",
    icon: ShieldCheck,
    title: "Ownership Management",
    description:
      "Beyond acquisition or build, we support long-term ownership administration so your yacht remains compliant, efficient, and market-ready.",
    scope:
      "Advisory support across legal, tax, registry, insurance, crewing, and operating budget planning in coordination with trusted specialists.",
    highlights: [
      "Flag and class compliance coordination.",
      "Insurance, legal, and annual cost optimization.",
      "Crew structure guidance and operational reporting.",
    ],
    image: "/images/yacht-6.jpg",
    detailIntro:
      "We provide retained advisory support to keep ownership administration efficient, compliant, and aligned with your long-term asset strategy.",
    detailSections: [
      {
        heading: "Compliance & Governance",
        body: "We coordinate with legal and technical partners to maintain flag, class, and operational compliance across jurisdictions.",
      },
      {
        heading: "Cost & Program Management",
        body: "Annual operating budgets, insurance structure, and supplier strategy are reviewed to improve transparency and efficiency.",
      },
      {
        heading: "Crew & Operational Continuity",
        body: "We support owner and captain with crewing structure, performance expectations, and reporting processes that sustain service standards.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
