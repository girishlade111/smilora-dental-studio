export interface FAQItem {
  id: string;
  question: string;
  category: "General" | "Treatments" | "Pricing" | "Emergency";
  answer: string;
}

export const clinicFaqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How does Smilora ensure treatments are truly painless?",
    answer: "We utilize topical pre-numbing gels that eliminate the pinch of anaesthesia, computerized micro-dosed delivery systems (The Wand®), and gentle diode lasers that coagulate tissue with minimal nerve irritation. For anxious patients, we also provide sensory distractions including noise-canceling headphones, warm blankets, and serene ceiling visuals.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Do you have waiting times for scheduled appointments?",
    answer: "No. We practice strict single-patient room bookings. When you reserve 3:00 PM, your doctor and operatory are pre-sterilized and prepared exclusively for you at 3:00 PM. We respect your schedule as much as our own.",
  },
  {
    id: "faq-3",
    category: "Treatments",
    question: "What is the difference between traditional braces and clear aligners?",
    answer: "Clear aligners are custom-molded, transparent medical polyurethane trays that gradually shift your teeth without metal wires or brackets. They can be removed for eating, brushing, and special occasions, making oral hygiene significantly simpler while remaining nearly invisible to others.",
  },
  {
    id: "faq-4",
    category: "Treatments",
    question: "How long does a computer-guided dental implant procedure take?",
    answer: "The surgical placement of a single guided implant typically takes 30 to 45 minutes. Because we fabricate a custom 3D surgical guide beforehand, there is minimal incision or flap opening, resulting in virtually no post-operative swelling and rapid recovery.",
  },
  {
    id: "faq-5",
    category: "Pricing",
    question: "Are your treatment fees fixed, and do you offer EMI payment plans?",
    answer: "Yes. Before any clinical work begins, you receive a transparent, printed treatment blueprint listing every fee with no hidden add-ons. We provide 0% interest monthly EMI tenures through major Indian credit cards and healthcare financing partners.",
  },
  {
    id: "faq-6",
    category: "Emergency",
    question: "What should I do in a sudden dental emergency outside regular hours?",
    answer: "Call our dedicated 24/7 emergency triage line at +91 98230 98765 or click the WhatsApp emergency button. Our on-call doctor will assess your symptoms over phone/video, advise immediate comfort measures, and open the clinic for immediate emergency trauma care if needed.",
  },
];
