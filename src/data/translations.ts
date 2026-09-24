export type Language = "en" | "mr";

export interface Translations {
  announcement: {
    emergency: string;
    hours: string;
    bookConsult: string;
  };
  nav: {
    services: string;
    doctors: string;
    technology: string;
    transformations: string;
    pricing: string;
    reviews: string;
    faqs: string;
    contact: string;
    bookBtn: string;
    allServices: string;
    viewDoctorTeam: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineEmphasized: string;
    headlinePart2: string;
    subheadline: string;
    bookCta: string;
    whatsappCta: string;
    ratingText: string;
    experienceText: string;
    patientsText: string;
    scrollIndicator: string;
  };
  bento: {
    tag: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    bookThis: string;
    exploreAll: string;
  };
  ctaBand: {
    badge: string;
    title: string;
    subtitle: string;
    primaryBtn: string;
    callBtn: string;
    whatsappBtn: string;
    guarantee: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    hoursTitle: string;
    contactTitle: string;
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    newsletterSubtext: string;
    disclaimer: string;
    copyright: string;
  };
  mobileBar: {
    call: string;
    whatsapp: string;
    book: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    announcement: {
      emergency: "24/7 Dental Emergency Triage:",
      hours: "Today: 9:00 AM – 8:30 PM (Pune, S.B. Road)",
      bookConsult: "Complimentary Digital Scan with First Visit",
    },
    nav: {
      services: "Services",
      doctors: "Specialists",
      technology: "Technology",
      transformations: "Smiles",
      pricing: "Memberships",
      reviews: "Testimonials",
      faqs: "FAQs",
      contact: "Contact",
      bookBtn: "Book Appointment",
      allServices: "View All 9 Treatments",
      viewDoctorTeam: "Meet Our Specialists",
    },
    hero: {
      badge: "Boutique Dental Sanctuary · Pune",
      headlinePart1: "Gentle, editorial dentistry crafted for your",
      headlineEmphasized: "authentic, radiant",
      headlinePart2: "smile.",
      subheadline: "Where European biomimetic craftsmanship meets calm, sensory luxury. Experience zero-pain digital dental care designed around your comfort.",
      bookCta: "Book Your Visit",
      whatsappCta: "Chat on WhatsApp",
      ratingText: "4.9 / 5 (740+ Verified Reviews)",
      experienceText: "14+ Years Clinical Excellence",
      patientsText: "12,500+ Confident Smiles",
      scrollIndicator: "Discover our serene clinic",
    },
    bento: {
      tag: "Curated Dental Artistry",
      title: "Comprehensive Care, Uncompromising Gentleness",
      subtitle: "From preventative hygiene rituals to 3D guided implants and invisible aligners, explore our modern dental disciplines.",
      viewDetails: "Explore Treatment",
      bookThis: "Book This Care",
      exploreAll: "View All Treatments",
    },
    ctaBand: {
      badge: "Reserve Your Sanctuary Experience",
      title: "Your Journey to a Calm, Pain-Free Smile Begins Here",
      subtitle: "Step into an unhurried, gentle clinic where your comfort comes first. No waiting queues, no pressure, only transparent and kind dentistry.",
      primaryBtn: "Book an Appointment",
      callBtn: "Call Reception",
      whatsappBtn: "WhatsApp Direct",
      guarantee: "Strict single-patient operatory appointments · Zero waiting room delays",
    },
    footer: {
      tagline: "A serene, boutique dental sanctuary in Pune combining European biomimetic dental art, painless German laser technology, and calming bespoke care.",
      quickLinks: "Navigation",
      hoursTitle: "Studio Hours",
      contactTitle: "Studio Address",
      newsletterTitle: "The Gentle Smile Journal",
      newsletterPlaceholder: "Enter your email address...",
      newsletterBtn: "Subscribe",
      newsletterSubtext: "Monthly bite-sized oral wellness insights and preventative dental advice. No spam.",
      disclaimer: "Demo Dental Clinic Website. Doctor names, patient testimonials, and pricing figures are realistic mock representations created for design preview purposes.",
      copyright: "All rights reserved. Smilora Dental Studio.",
    },
    mobileBar: {
      call: "Call Us",
      whatsapp: "WhatsApp",
      book: "Book Visit",
    },
  },
  mr: {
    announcement: {
      emergency: "२४/७ आपत्कालीन दंत सेवा:",
      hours: "आज: सकाळी ९:०० – रात्री ८:३० (पुणे, एस.बी. रोड)",
      bookConsult: "पहिल्या भेटीसोबत मोफत डिजिटल ३D स्कॅन",
    },
    nav: {
      services: "उपचार सेवा",
      doctors: "तज्ज्ञ डॉक्टर",
      technology: "तंत्रज्ञान",
      transformations: "हास्य बदल",
      pricing: "मेंबरशिप प्लॅन",
      reviews: "अनुभव",
      faqs: "प्रश्नोत्तरे",
      contact: "संपर्क",
      bookBtn: "अपॉइंटमेंट बुक करा",
      allServices: "सर्व ९ उपचार पहा",
      viewDoctorTeam: "आमच्या डॉक्टरांना भेटा",
    },
    hero: {
      badge: "पुण्यातील बुटीक डेंटल क्लिनिक",
      headlinePart1: "तुमच्या सुंदर आणि अस्सल हास्यासाठी",
      headlineEmphasized: "वेदनामुक्त, आधुनिक",
      headlinePart2: "दंत उपचार.",
      subheadline: "आधुनिक युरोपियन तंत्रज्ञान आणि शांत, आरामदायी वातावरण. तुमच्या सोयीनुसार डिझाइन केलेली सुरक्षित व वेदनाविरहित दंत काळजी.",
      bookCta: "अपॉइंटमेंट बुक करा",
      whatsappCta: "व्हॉट्सॲपवर संपर्क",
      ratingText: "४.९ / ५ (७४०+ रुग्णांचे पुनरावलोकन)",
      experienceText: "१४+ वर्षे अनुभव",
      patientsText: "१२,५००+ समाधानी रुग्ण",
      scrollIndicator: "क्लिनिकबद्दल अधिक जाणून घ्या",
    },
    bento: {
      tag: "अत्याधुनिक दंतकला",
      title: "संपूर्ण दंत काळजी, अत्यंत सौम्य उपचार",
      subtitle: "दातांची स्वच्छता, ३D डेंटल इम्प्लांट्स आणि अदृश्य अलाइनर्स—सर्व एकाच छताखाली.",
      viewDetails: "सविस्तर माहिती",
      bookThis: "हा उपचार बुक करा",
      exploreAll: "सर्व उपचार पहा",
    },
    ctaBand: {
      badge: "तुमची वेळ राखून ठेवा",
      title: "वेदनामुक्त, तेजस्वी हास्याचा सुखद प्रवास सुरू करा",
      subtitle: "शांत आणि आरामदायी क्लिनिकमध्ये या. कोणतीही प्रतीक्षा नाही, कोणताही ताण नाही—फक्त प्रामाणिक आणि काळजीपूर्वक उपचार.",
      primaryBtn: "आत्ताच अपॉइंटमेंट घ्या",
      callBtn: "फोन करा",
      whatsappBtn: "व्हॉट्सॲप मेसेज",
      guarantee: "एका वेळी एकाच रुग्णाला प्राधान्य · वेळेची १००% खात्री",
    },
    footer: {
      tagline: "पुण्यातील प्रीमियम बुटीक दंत चिकित्सालय—युरोपियन बायोमिमेटिक कला, जर्मन लेझर तंत्रज्ञान आणि सौम्य वैयक्तिक काळजीचा संगम.",
      quickLinks: "नेव्हिगेशन",
      hoursTitle: "क्लिनिकची वेळ",
      contactTitle: "पत्ता आणि संपर्क",
      newsletterTitle: "दंत आरोग्य पत्रिका",
      newsletterPlaceholder: "तुमचा ईमेल पत्ता टाका...",
      newsletterBtn: "सदस्य व्हा",
      newsletterSubtext: "महिन्याला उपयुक्त दंतआरोग्य टिप्स. कोणतीही अनावश्यक जाहिरात नाही.",
      disclaimer: "डेमो वेबसाइट. डॉक्टरांची नावे, दर आणि परीक्षणे ही केवळ सादरीकरणासाठी तयार केलेली काल्पनिक उदाहरणे आहेत.",
      copyright: "सर्व हक्क राखीव. स्मिलोरा डेंटल स्टुडिओ.",
    },
    mobileBar: {
      call: "कॉल करा",
      whatsapp: "व्हॉट्सॲप",
      book: "अपॉइंटमेंट",
    },
  },
};
