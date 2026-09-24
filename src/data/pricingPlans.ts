export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  pricePerYear: string;
  period: string;
  popular?: boolean;
  highlightBadge?: string;
  features: string[];
  ctaLabel: string;
  savingsNote: string;
}

export const membershipPlans: PricingPlan[] = [
  {
    id: "plan-essential",
    name: "Essential Glow",
    tagline: "Preventive maintenance and peace of mind for health-conscious individuals.",
    pricePerYear: "₹3,999",
    period: "/ year",
    highlightBadge: "Foundational Care",
    features: [
      "2 Ultrasonic hygiene cleanings per year",
      "2 Comprehensive doctor examinations",
      "Full digital 3D intraoral scan & digital bite analysis",
      "Unlimited low-dose digital diagnostic X-rays",
      "10% off all restorative & cosmetic dental treatments",
      "Direct priority emergency booking line",
    ],
    ctaLabel: "Choose Essential Glow",
    savingsNote: "Saves approx. ₹2,800 annually compared to standalone appointments",
  },
  {
    id: "plan-signature",
    name: "Signature Smile Sanctuary",
    tagline: "Our most chosen plan for complete aesthetic refinement and priority concierge attention.",
    pricePerYear: "₹8,499",
    period: "/ year",
    popular: true,
    highlightBadge: "Most Popular",
    features: [
      "3 Ultrasonic hygiene cleanings & air-polish stain removals",
      "1 In-chair cold-light brightening touch-up session",
      "3 Comprehensive doctor check-ups with periodontal audits",
      "Unlimited digital X-rays & annual 3D progression scan",
      "15% off all cosmetic, orthodontic & surgical procedures",
      "Complimentary enamel desensitizing treatments",
      "Dedicated concierge WhatsApp booking assistant",
    ],
    ctaLabel: "Join Signature Sanctuary",
    savingsNote: "Saves approx. ₹6,500 annually including brightening touch-up",
  },
  {
    id: "plan-family",
    name: "Family Heritage Pass",
    tagline: "Thoughtful holistic oral wellness for parents, children, and grandparents.",
    pricePerYear: "₹14,999",
    period: "/ year (up to 4 members)",
    highlightBadge: "Comprehensive Family",
    features: [
      "Care coverage for 2 adults and 2 dependents",
      "2 Ultrasonic cleanings per member per year (8 total)",
      "Pediatric fluoride varnish & pit-fissure sealants for kids",
      "Unlimited diagnostic digital X-rays for all members",
      "20% off braces, aligners, implants, and root canals",
      "Priority weekend & evening emergency access",
    ],
    ctaLabel: "Protect Your Family",
    savingsNote: "Combined savings of ₹14,000+ across four family members",
  },
];
