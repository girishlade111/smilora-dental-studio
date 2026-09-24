export interface Differentiator {
  id: string;
  iconName: "Clock" | "Sparkles" | "Cpu" | "HeartHandshake" | "ShieldCheck" | "Coffee";
  title: string;
  description: string;
  highlight: string;
}

export const differentiators: Differentiator[] = [
  {
    id: "diff-1",
    iconName: "Clock",
    title: "Zero Waiting Lounge Time",
    description: "Your schedule is sacred. We book only one patient per operatory block, guaranteeing on-time treatment in an unhurried, calm atmosphere.",
    highlight: "Strict 1-to-1 Booking",
  },
  {
    id: "diff-2",
    iconName: "Sparkles",
    title: "Anxiety-Free Sensory Clinic",
    description: "Designed like a quiet boutique wellness lounge with noise-canceling headphones, warm aromatic towels, and gentle ceiling entertainment.",
    highlight: "Gentle Touch Care",
  },
  {
    id: "diff-3",
    iconName: "Cpu",
    title: "100% Digital & Impression-Free",
    description: "Say goodbye to gag-inducing pink putty impressions. Our 3D intraoral scanner maps your teeth in 60 seconds with sub-millimeter precision.",
    highlight: "Fast 3D Scanning",
  },
  {
    id: "diff-4",
    iconName: "ShieldCheck",
    title: "Hospital-Grade Class-B Sterilization",
    description: "We employ 6-step hospital surgical autoclaving, medical vacuum sealing, and biological spore tracking for uncompromised infection prevention.",
    highlight: "100% Traceable Safety",
  },
  {
    id: "diff-5",
    iconName: "HeartHandshake",
    title: "Conservative Biomimetic Philosophy",
    description: "We treat natural teeth as priceless heirlooms. We only remove damaged enamel when strictly necessary, choosing gentle bonding over aggressive grinding.",
    highlight: "Tooth-Saving Approach",
  },
  {
    id: "diff-6",
    iconName: "Coffee",
    title: "Transparent, Upfront Pricing",
    description: "No surprise add-on charges or unclear fees. You receive an itemized, clear treatment estimate with zero pressure before any procedure starts.",
    highlight: "Honest Fee Transparency",
  },
];
