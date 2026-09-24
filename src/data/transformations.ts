export interface TransformationCase {
  id: string;
  title: string;
  category: "Smile Makeover" | "Aligners" | "Implants" | "Whitening";
  patientNote: string;
  duration: string;
  doctorInCharge: string;
  beforeDescription: string;
  afterDescription: string;
  // Visual placeholder characteristics for our SVG/gradient renderer
  beforeTheme: {
    tint: string;
    stainIntensity: number;
    misalignment: number;
    label: string;
  };
  afterTheme: {
    tint: string;
    glow: boolean;
    alignment: number;
    label: string;
  };
}

export const transformations: TransformationCase[] = [
  {
    id: "case-1",
    title: "Diastema Closure & 6 Handcrafted Ceramic Veneers",
    category: "Smile Makeover",
    patientNote: "Front teeth spacing and uneven enamel edges restored with natural light-transmitting ceramic veneers.",
    duration: "2 appointments across 10 days",
    doctorInCharge: "Dr. Ananya Deshmukh",
    beforeDescription: "4mm midline gap, mild tetracycline staining, irregular incisal edge contours.",
    afterDescription: "Proportional golden-ratio smile line, natural translucency, closed midline diastema.",
    beforeTheme: {
      tint: "#E0D7C5",
      stainIntensity: 0.6,
      misalignment: 0.5,
      label: "Initial Baseline",
    },
    afterTheme: {
      tint: "#FAF9F5",
      glow: true,
      alignment: 1,
      label: "10-Day Result",
    },
  },
  {
    id: "case-2",
    title: "14-Month Digital Clear Aligner Alignment",
    category: "Aligners",
    patientNote: "Severe lower anterior crowding and rotated upper lateral incisors corrected with invisible aligners.",
    duration: "14 months (28 aligner trays)",
    doctorInCharge: "Dr. Tanvi Joshi",
    beforeDescription: "Class II crowding, overlapping central incisors, constricted arch profile.",
    afterDescription: "Harmonious arch width, aligned incisors, balanced bilateral bite alignment.",
    beforeTheme: {
      tint: "#D9D0C1",
      stainIntensity: 0.3,
      misalignment: 0.8,
      label: "Month 0",
    },
    afterTheme: {
      tint: "#F8F6F0",
      glow: true,
      alignment: 1,
      label: "Month 14 Complete",
    },
  },
  {
    id: "case-3",
    title: "Dual Front Molar Swiss Guided Implant",
    category: "Implants",
    patientNote: "Single visit computer-guided implant placement following previous traumatic tooth loss.",
    duration: "Same-day provisional, 3 months full integration",
    doctorInCharge: "Dr. Rohan Kulkarni",
    beforeDescription: "Missing tooth #11 with mild crestal bone atrophy.",
    afterDescription: "Zirconia abutment and layered ceramic crown matching adjacent natural dentition.",
    beforeTheme: {
      tint: "#DED6C4",
      stainIntensity: 0.4,
      misalignment: 0.4,
      label: "Missing Tooth Space",
    },
    afterTheme: {
      tint: "#F7F5EE",
      glow: true,
      alignment: 1,
      label: "Full Restoration",
    },
  },
  {
    id: "case-4",
    title: "Cold-Light In-Chair Power Whitening",
    category: "Whitening",
    patientNote: "Extensive coffee and tea enamel discoloration treated gently with remineralizing gel.",
    duration: "60-minute single clinical session",
    doctorInCharge: "Dr. Ananya Deshmukh",
    beforeDescription: "Shade guide A3.5 with cervical yellowing bands.",
    afterDescription: "Shade guide B1 natural bright, zero postoperative enamel sensitivity.",
    beforeTheme: {
      tint: "#D4C7A8",
      stainIntensity: 0.8,
      misalignment: 0.1,
      label: "Shade A3.5",
    },
    afterTheme: {
      tint: "#FBF9F4",
      glow: true,
      alignment: 0.9,
      label: "Shade B1",
    },
  },
];
