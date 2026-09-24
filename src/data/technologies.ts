export interface TechnologyItem {
  id: string;
  title: string;
  subhead: string;
  description: string;
  badge: string;
  specs: string[];
  icon: "Scan" | "Radiation" | "Zap" | "ShieldCheck";
}

export const clinicTechnologies: TechnologyItem[] = [
  {
    id: "tech-1",
    title: "3D Intraoral Optical Scanner",
    subhead: "Goodbye uncomfortable impression trays",
    description: "Captures 6,000 optical frames per second to construct a photorealistic 3D virtual twin of your mouth in under two minutes with micrometric precision.",
    badge: "Digital Precision",
    specs: ["Sub-20 micron accuracy", "Instant color tooth shade mapping", "Real-time treatment simulation"],
    icon: "Scan",
  },
  {
    id: "tech-2",
    title: "Ultra-Low-Dose Digital CBCT & X-Ray",
    subhead: "90% less radiation than standard dental film",
    description: "High-definition sensor technology enables us to diagnose hidden micro-cracks and root canals with unmatched clarity while keeping patient radiation negligible.",
    badge: "Safety First",
    specs: ["90% radiation reduction", "Instant onscreen chairside review", "High-dynamic range sensor"],
    icon: "Radiation",
  },
  {
    id: "tech-3",
    title: "Biolase® Diode Soft-Tissue Laser",
    subhead: "Painless gum contouring without scalpels",
    description: "Targeted laser energy vaporizes harmful periodontal bacteria and shapes gum margins gently with simultaneous coagulation, eliminating the need for sutures.",
    badge: "Minimally Invasive",
    specs: ["Virtually bleeding-free", "Rapid 24-hour tissue healing", "Significantly reduces anaesthetic need"],
    icon: "Zap",
  },
  {
    id: "tech-4",
    title: "Class-B Pre-Vacuum Hospital Autoclave",
    subhead: "Six-step strict sterilization protocol",
    description: "Every handpiece and instrument undergoes ultrasonic enzymatic bathing, medical packaging, pre-vacuum sterilization at 134°C, and digital spore-strip monitoring.",
    badge: "100% Traceability",
    specs: ["Individually heat-sealed pouches", "European EN 13060 Class-B certified", "Single-use disposable barriers"],
    icon: "ShieldCheck",
  },
];
