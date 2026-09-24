export interface JourneyStep {
  step: string;
  title: string;
  shortDesc: string;
  detail: string;
  durationEstimate: string;
  whatToExpect: string[];
}

export const treatmentJourney: JourneyStep[] = [
  {
    step: "01",
    title: "The Welcome & Consultation",
    shortDesc: "A warm tea, comfortable dialogue, and understanding your concerns without judgment.",
    detail: "We begin in our quiet consult lounge—not immediately in a dental chair. We listen to your goals, past dental anxieties, and specific aesthetic wishes.",
    durationEstimate: "20 minutes",
    whatToExpect: ["Herbal tea or infused water", "Confidential smile questionnaire", "No-pressure conversation"],
  },
  {
    step: "02",
    title: "Digital Biomimetic Diagnosis",
    shortDesc: "High-resolution 3D intraoral scan and ultra-low-dose digital imagery.",
    detail: "We map your smile in 3D. You sit back and see your teeth on a large monitor in crystal clarity as we explain our findings in plain, respectful language.",
    durationEstimate: "25 minutes",
    whatToExpect: ["No messy impression pastes", "Chairside monitor co-discovery", "Full periodontal health score"],
  },
  {
    step: "03",
    title: "Collaborative Care Blueprint",
    shortDesc: "Transparent pricing, visual simulation, and step-by-step phased treatment options.",
    detail: "We co-create a personalized blueprint. You choose the pace, materials, and appointment cadence with fully transparent, itemized fees.",
    durationEstimate: "15 minutes",
    whatToExpect: ["Digital smile preview mockups", "Printed itemized cost sheet", "0% interest EMI options outlined"],
  },
  {
    step: "04",
    title: "Gentle, Precision Care",
    shortDesc: "Quiet operatory, noise-canceling audio, and painless micro-dentistry.",
    detail: "Our doctors execute your care using magnification loupes, gentle numbing gels, and conservative techniques designed to minimize tissue stress.",
    durationEstimate: "Tailored to procedure",
    whatToExpect: ["Noise-canceling Bose headphones", "Comfort ceiling TV / streaming", "Warm lavender-scented recovery towel"],
  },
  {
    step: "05",
    title: "Proactive Follow-up & Care",
    shortDesc: "Evening check-in from your doctor and personalized oral longevity guidance.",
    detail: "Your doctor directly messages or calls you later that evening to check your comfort, providing direct concierge contact for total peace of mind.",
    durationEstimate: "Ongoing concierge care",
    whatToExpect: ["Direct doctor WhatsApp line", "Personalized maintenance kit", "Scheduled hygiene check-ins"],
  },
];
