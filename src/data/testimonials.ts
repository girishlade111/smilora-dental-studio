export interface Testimonial {
  id: string;
  author: string;
  role: string;
  treatment: string;
  doctor: string;
  rating: number;
  date: string;
  verifiedPatient: boolean;
  content: string;
  keyHighlight: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Radhika K.",
    role: "Architect & Interior Designer, Pune",
    treatment: "Ceramic Veneers & Smile Design",
    doctor: "Dr. Ananya Deshmukh",
    rating: 5,
    date: "August 2024",
    verifiedPatient: true,
    content: "As a designer, I am obsessive about subtle textures and proportions. Dr. Deshmukh did not push an artificial Hollywood white veneer smile on me. Instead, she sculpted natural translucency that harmonized with my face. The clinic feels like an upscale Scandinavian spa.",
    keyHighlight: "Sculpted natural translucency that harmonized with my face",
  },
  {
    id: "test-2",
    author: "Vikramaditya M.",
    role: "Software Director, Hinjawadi",
    treatment: "Microscopic Root Canal & Guided Implant",
    doctor: "Dr. Rohan Kulkarni",
    rating: 5,
    date: "July 2024",
    verifiedPatient: true,
    content: "I had prolonged dental phobia from a painful experience during college. Dr. Kulkarni explained every single step on the 3D screen beforehand. I fell asleep with noise-canceling headphones during the implant procedure. Completely painless recovery.",
    keyHighlight: "Fell asleep with noise-canceling headphones during the procedure",
  },
  {
    id: "test-3",
    author: "Pooja & Sameer T.",
    role: "Parents of Anay (7 yrs), Kothrud",
    treatment: "Pediatric Preventive Care & Sealants",
    doctor: "Dr. Aditya Shinde",
    rating: 5,
    date: "September 2024",
    verifiedPatient: true,
    content: "Dr. Aditya has an unbelievable gift with children. Our 7-year-old son used to cry just driving past a clinic. Here, he was shown every tool as a friendly cartoon character, received a bravery medal, and actually asked when he could go back!",
    keyHighlight: "Turned our son's dental fear into excitement and laughter",
  },
  {
    id: "test-4",
    author: "Snehal P.",
    role: "Product Manager, Baner",
    treatment: "Invisible Clear Aligners",
    doctor: "Dr. Tanvi Joshi",
    rating: 5,
    date: "May 2024",
    verifiedPatient: true,
    content: "The 3D time-lapse simulation shown by Dr. Tanvi on day one matched my final 12-month outcome almost to the millimeter. Appointments always started at the exact scheduled minute, which was vital for my packed workday schedule.",
    keyHighlight: "Outcome matched the 3D digital simulation to the millimeter",
  },
  {
    id: "test-5",
    author: "Capt. Arvind R. (Retd.)",
    role: "Aviation Consultant, Aundh",
    treatment: "Full Mouth Ultrasonic Hygiene & Laser Periodontics",
    doctor: "Dr. Ananya Deshmukh",
    rating: 5,
    date: "June 2024",
    verifiedPatient: true,
    content: "The hygiene standards and sterile packaging procedures here rival any top international medical center. Zero lingering chemical smell; pristine surgical protocols and courteous, intelligent doctors.",
    keyHighlight: "Hygiene standards rival top international medical centers",
  },
];
