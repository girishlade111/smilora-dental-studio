export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "Oral Wellness" | "Cosmetic Dentistry" | "Aligner Care" | "Preventive Habits";
  readingTime: string;
  date: string;
  author: string;
  authorRole: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "gentle-habits-enamel-longevity",
    title: "The Architecture of Enamel: 5 Subtle Everyday Habits Silently Eroding Your Teeth",
    summary: "From morning lemon-water sips to aggressive toothbrush bristle selection, understand how microscopic acid wear occurs and how to fortify your natural tooth structure.",
    category: "Oral Wellness",
    readingTime: "5 min read",
    date: "September 12, 2024",
    author: "Dr. Ananya Deshmukh",
    authorRole: "Biomimetic Specialist",
    tags: ["Enamel Health", "Daily Routine", "Biomimetic Care"],
  },
  {
    id: "post-2",
    slug: "invisible-aligners-what-to-expect",
    title: "A Designer's Guide to Clear Aligners: What Your First 30 Days Truly Feel Like",
    summary: "An honest, candid walk-through of the transition period: speech adaptation, tray hygiene habits, attachment care, and tracking your millimeter smile movements.",
    category: "Aligner Care",
    readingTime: "7 min read",
    date: "August 28, 2024",
    author: "Dr. Tanvi Joshi",
    authorRole: "Specialist Orthodontist",
    tags: ["Aligners", "Orthodontics", "Patient Journey"],
  },
  {
    id: "post-3",
    slug: "truth-about-teeth-whitening",
    title: "Power Whitening vs. Charcoal Pastes: Separating Clinical Truth from Social Media Hype",
    summary: "Why abrasive charcoal scrubs can permanently thin your enamel, and how in-chair cold-light therapy achieves 8 shades of brightness without nerve sensitivity.",
    category: "Cosmetic Dentistry",
    readingTime: "6 min read",
    date: "August 14, 2024",
    author: "Dr. Rohan Kulkarni",
    authorRole: "Oral Surgeon",
    tags: ["Teeth Whitening", "Aesthetic Care", "Enamel Safety"],
  },
];
