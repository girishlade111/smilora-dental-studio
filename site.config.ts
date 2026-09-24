export interface Doctor {
  id: string;
  slug: string;
  name: string;
  role: string;
  qualifications: string;
  specialty: string;
  experienceYears: number;
  patientsTreated: string;
  bio: string;
  imageSlot: string;
  availability: string;
  daysAvailable: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: "General" | "Cosmetic" | "Restorative" | "Orthodontics" | "Surgical";
  startingPrice: string;
  duration: string;
  icon: string;
  highlightTag?: string;
  benefits: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  city: string;
  address: {
    line1: string;
    locality: string;
    cityStateZip: string;
    landmark: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    emergencyPhone: string;
    emergencyPhoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    email: string;
  };
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergencyNote: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    googleReviews: string;
  };
  brandColors: {
    ivory: string;
    inkTeal: string;
    mint: string;
    softSand: string;
    coral: string;
    darkBg: string;
    darkSurface: string;
  };
  trustStats: {
    googleRating: number;
    reviewCount: number;
    yearsExperience: number;
    patientsTreated: number;
    sterilizationRate: string;
  };
  doctors: Doctor[];
  services: ServiceItem[];
}

export const siteConfig: SiteConfig = {
  name: "Smilora Dental Studio",
  tagline: "Gentle, Editorial Dentistry for the Modern Smile",
  subTagline: "A serene, boutique dental sanctuary in Pune combining European biomimetic dental art, painless German laser technology, and calming bespoke care.",
  city: "Pune, Maharashtra, India",
  address: {
    line1: "Suite 402, The Pavilion Arc, Senapati Bapat Road",
    locality: "Shivajinagar",
    cityStateZip: "Pune, Maharashtra 411016",
    landmark: "Opposite JW Marriott, Above Artisanal Roastery",
  },
  contact: {
    phone: "+912025678900",
    phoneDisplay: "+91 20 2567 8900",
    emergencyPhone: "+919823098765",
    emergencyPhoneDisplay: "+91 98230 98765",
    whatsapp: "919823098765",
    whatsappDisplay: "+91 98230 98765",
    whatsappMessage: "Hello Smilora Dental Studio, I would like to consult with a dentist for a gentle consultation.",
    email: "concierge@smiloradental.in",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.973413557999!2d73.82914107595568!3d18.530104982563827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7baf68b75f%3A0x6b81d77a83d08f51!2sSenapati%20Bapat%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectionsUrl: "https://maps.google.com/?q=Senapati+Bapat+Road+Pune",
  openingHours: {
    weekdays: "09:00 AM – 08:30 PM",
    saturday: "09:00 AM – 08:00 PM",
    sunday: "10:00 AM – 02:00 PM (Priority & Emergencies)",
    emergencyNote: "24/7 on-call triage for dental trauma & severe toothache",
  },
  socialLinks: {
    instagram: "https://instagram.com/smiloradental",
    facebook: "https://facebook.com/smiloradental",
    linkedin: "https://linkedin.com/company/smiloradental",
    googleReviews: "https://g.page/r/smilora-dental-studio/review",
  },
  brandColors: {
    ivory: "#FAF7F2",
    inkTeal: "#0F3D3E",
    mint: "#BFE3D0",
    softSand: "#EADFCF",
    coral: "#FF7A59",
    darkBg: "#081A1B",
    darkSurface: "#0E2B2C",
  },
  trustStats: {
    googleRating: 4.9,
    reviewCount: 740,
    yearsExperience: 14,
    patientsTreated: 12500,
    sterilizationRate: "Class-B Autoclave 100%",
  },
  doctors: [
    {
      id: "doc-1",
      slug: "dr-ananya-deshmukh",
      name: "Dr. Ananya Deshmukh",
      role: "Lead Cosmetic Smile Architect & Biomimetic Specialist",
      qualifications: "BDS, MDS (Conservative Dentistry & Endodontics), Fellow AACD (USA)",
      specialty: "Microscopic Veneers & Invisible Aligner Smile Design",
      experienceYears: 14,
      patientsTreated: "6,200+",
      bio: "Trained in Geneva and Mumbai, Dr. Deshmukh champions gentle, ultra-conservative biomimetic dentistry—preserving natural tooth structure while crafting harmonious, light-reflective smiles.",
      imageSlot: "/images/doctor-1.jpg",
      availability: "Mon, Wed, Fri & Sat",
      daysAvailable: ["Monday", "Wednesday", "Friday", "Saturday"],
    },
    {
      id: "doc-2",
      slug: "dr-rohan-kulkarni",
      name: "Dr. Rohan Kulkarni",
      role: "Senior Implantologist & Oral Surgeon",
      qualifications: "BDS, MDS (Oral & Maxillofacial Surgery), Diplomate ICOI (Germany)",
      specialty: "Computer-Guided Dental Implants & Bone Grafting",
      experienceYears: 16,
      patientsTreated: "4,800+",
      bio: "Specializing in zero-pain flapless computer-guided implants. Dr. Kulkarni has placed over 3,000 implants using 3D surgical guides with immediate loading protocols.",
      imageSlot: "/images/doctor-2.jpg",
      availability: "Tue, Thu, Fri & Sat",
      daysAvailable: ["Tuesday", "Thursday", "Friday", "Saturday"],
    },
    {
      id: "doc-3",
      slug: "dr-tanvi-joshi",
      name: "Dr. Tanvi Joshi",
      role: "Specialist Orthodontist & Clear Aligner Expert",
      qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics), Certified Diamond Invisalign® Provider",
      specialty: "Lingual Braces & Clear Aligner Biomechanics",
      experienceYears: 10,
      patientsTreated: "3,100+",
      bio: "Dedicated to non-extraction facial aesthetics and modern digital orthodontics, creating balanced profiles and lasting stability for both teens and adults.",
      imageSlot: "/images/doctor-3.jpg",
      availability: "Mon, Tue, Thu & Sat",
      daysAvailable: ["Monday", "Tuesday", "Thursday", "Saturday"],
    },
    {
      id: "doc-4",
      slug: "dr-aditya-shinde",
      name: "Dr. Aditya Shinde",
      role: "Pediatric Dentist & Preventive Specialist",
      qualifications: "BDS, MDS (Pediatric & Preventive Dentistry)",
      specialty: "Sensory-Gentle Kids Dentistry & Myofunctional Therapy",
      experienceYears: 8,
      patientsTreated: "2,900+",
      bio: "Creates joyful, anxiety-free dental visits for little ones with warm behavioral guidance, painless air-abrasion, and preventive fluoride varnishes.",
      imageSlot: "/images/doctor-4.jpg",
      availability: "Wed, Thu, Fri & Sun",
      daysAvailable: ["Wednesday", "Thursday", "Friday", "Sunday"],
    },
  ],
  services: [
    {
      id: "serv-1",
      slug: "general-dentistry",
      title: "General Dentistry & Diagnostics",
      shortDescription: "3D intraoral scans, ultrasonic spa hygiene cleanings, gentle cavity restorations, and digital exams.",
      category: "General",
      startingPrice: "₹1,200",
      duration: "45 mins",
      icon: "ShieldCheck",
      highlightTag: "Preventive Care",
      benefits: ["Ultrasonic plaque removal", "Airflow stain polishing", "Zero-radiation HD digital scanner"],
    },
    {
      id: "serv-2",
      slug: "teeth-whitening",
      title: "Teeth Whitening & Brightening",
      shortDescription: "In-chair cold light power bleaching and customized take-home enamel-safe brightening kits.",
      category: "Cosmetic",
      startingPrice: "₹6,500",
      duration: "60 mins",
      icon: "Sparkles",
      highlightTag: "Same-Day Glow",
      benefits: ["Up to 8 shades lighter", "Anti-sensitivity remineralizing gel", "Enamel-safe botanical formula"],
    },
    {
      id: "serv-3",
      slug: "dental-implants",
      title: "Dental Implants",
      shortDescription: "Precision Swiss titanium and zirconia implants placed with computer-guided surgical accuracy.",
      category: "Surgical",
      startingPrice: "₹28,000",
      duration: "45–60 mins",
      icon: "Anchor",
      highlightTag: "Lifetime Warranty",
      benefits: ["Flapless keyhole technique", "99.2% osseointegration rate", "Matches natural bite force"],
    },
    {
      id: "serv-4",
      slug: "braces-and-clear-aligners",
      title: "Braces & Clear Aligners",
      shortDescription: "Virtually invisible aligner trays & ceramic aesthetic braces planned with 3D digital simulation.",
      category: "Orthodontics",
      startingPrice: "₹45,000",
      duration: "6–14 months",
      icon: "Layers",
      highlightTag: "Digital Simulation",
      benefits: ["No dietary restrictions", "Discreet clear trays", "Track progress via smartphone"],
    },
    {
      id: "serv-5",
      slug: "root-canal",
      title: "Microscopic Root Canal Therapy",
      shortDescription: "Single-sitting pain-free endodontics performed under high-magnification Carl Zeiss optics.",
      category: "Restorative",
      startingPrice: "₹4,500",
      duration: "60 mins",
      icon: "Microscope",
      highlightTag: "Painless in 1 Visit",
      benefits: ["99% tooth preservation", "Rotary nickel-titanium shaping", "Computerized apex locator precision"],
    },
    {
      id: "serv-6",
      slug: "cosmetic-smile-design",
      title: "Cosmetic Smile Design & Veneers",
      shortDescription: "Ultra-thin, handcrafted porcelain veneers and composite bonding sculpted for your unique facial anatomy.",
      category: "Cosmetic",
      startingPrice: "₹12,000 / tooth",
      duration: "2 visits",
      icon: "Palette",
      highlightTag: "Artisanal Ceramic",
      benefits: ["Minimal to zero prep", "Harmonious shade matching", "Digital preview trial before bonding"],
    },
    {
      id: "serv-7",
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      shortDescription: "Anxiety-free dental adventures for children with cheerful tell-show-do gentle techniques.",
      category: "General",
      startingPrice: "₹1,500",
      duration: "30 mins",
      icon: "Smile",
      highlightTag: "Child-Friendly",
      benefits: ["Painless injection wand", "Fluoride & pit fissure sealants", "Fun graduation certificate & prize"],
    },
    {
      id: "serv-8",
      slug: "gum-care",
      title: "Laser Periodontics & Gum Care",
      shortDescription: "Diode laser bacterial debridement, aesthetic gum contouring for gummy smiles, and deep scaling.",
      category: "Restorative",
      startingPrice: "₹3,500",
      duration: "40 mins",
      icon: "Activity",
      highlightTag: "Laser Precision",
      benefits: ["No scalpels or sutures", "Instant coagulating comfort", "Halts bleeding & bad breath"],
    },
    {
      id: "serv-9",
      slug: "emergency-care",
      title: "Emergency Dental Care",
      shortDescription: "Rapid triage and instant relief for chipped teeth, severe nocturnal toothaches, and sports injuries.",
      category: "Surgical",
      startingPrice: "₹1,800",
      duration: "Immediate",
      icon: "AlertCircle",
      highlightTag: "Same-Day Relief",
      benefits: ["Same-day priority appointments", "Emergency pain management", "Temporary restorative coverage"],
    },
  ],
};
