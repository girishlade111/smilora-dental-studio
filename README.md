<div align="center">

# Smilora Dental Studio

### A boutique dental clinic website — gentle, editorial-grade dentistry for the modern smile

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Overview

**Smilora Dental Studio** is a high-craft, single-page marketing website for a boutique dental clinic in Pune, India. It blends European biomimetic dental aesthetics with a calm, editorial design language — soft ivory surfaces, ink-teal accents, film-grain texture, and buttery scroll animations.

The site is built as a modern React SPA and ships with a full set of conversion-focused sections: before/after smile transformations, doctor profiles, service pricing, membership plans, testimonials, FAQs, an interactive booking modal, and direct WhatsApp/call CTAs.

Originally scaffolded from **Google AI Studio** with server-side Gemini API capability enabled.

## ✨ Features

### Page Sections (in render order)
| # | Section | Description |
|---|---------|-------------|
| 1 | **Announcement Bar** | Rotating promotional strip |
| 2 | **Glass Sticky Navbar** | Frosted-glass header with mega-dropdown navigation |
| 3 | **Hero** | Editorial hero with animated tooth SVG and primary CTA |
| 4 | **Stats Counters** | Animated trust counters (rating, patients, years) |
| 5 | **Services Bento Grid** | 9 dental services in a responsive bento layout with pricing |
| 6 | **Why Choose Us** | Differentiators grid |
| 7 | **Smile Transformations** | Interactive drag-to-reveal before/after slider |
| 8 | **Meet the Doctors** | 4 doctor profiles with availability schedules |
| 9 | **Technology & Hygiene** | Clinic technology showcase |
| 10 | **Treatment Journey** | Step-by-step patient journey timeline |
| 11 | **Membership / Pricing** | Membership plan preview cards |
| 12 | **Testimonials** | Carousel with Google rating summary |
| 13 | **FAQ Accordion** | Expandable frequently asked questions |
| 14 | **Blog Preview** | Dental tips / article teasers |
| 15 | **Booking CTA Band** | Full-width conversion band |
| 16 | **Contact & Map** | Embedded Google Map, hours, contact details |

### Global UI
- **Quick Booking Modal** — appointment request form with toast feedback
- **Floating WhatsApp Button** — one-tap WhatsApp chat with pre-filled message
- **Mobile Sticky Bottom Bar** — call / WhatsApp / book actions on small screens
- **Cursor Glow** — soft ambient light that follows the pointer (desktop)
- **Toast Notifications** — accessible (`aria-live`) floating status messages
- **Film-grain overlay** — subtle texture for the editorial aesthetic

### Technical Highlights
- ⚛️ React 19 with TypeScript and strict `tsc --noEmit` linting
- ⚡ Vite 8 dev server (port `3000`, LAN-exposed)
- 🎨 Tailwind CSS 4 via the official `@tailwindcss/vite` plugin
- 🧬 `motion` (Framer Motion successor) for scroll & entrance animations
- 🧩 Centralized `site.config.ts` — clinic info, doctors, services, brand colors in one typed file
- 🌍 Content/data modules separated into `src/data/` (blogs, FAQs, testimonials, pricing, translations, etc.)
- 🔐 `.env` secrets excluded from version control (`.env.example` provided)
- 🤖 Gemini AI integration ready (`@google/genai`, server-side capability)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| UI Library | React 19 |
| Language | TypeScript 7 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Animations | Motion 12 |
| Icons | lucide-react |
| Utilities | clsx, tailwind-merge |
| AI | @google/genai (Gemini) |
| Server | Express (optional prod serve) |
| Package Manager | npm (bun.lock also present) |

## 📁 Project Structure

```
smilora-dental-studio/
├── index.html                 # HTML entry, fonts, meta/OG tags
├── vite.config.ts             # React + Tailwind plugins, @ alias, HMR config
├── tsconfig.json              # TypeScript compiler options
├── site.config.ts             # ★ Single source of truth for clinic data
├── metadata.json              # AI Studio app metadata
├── .env.example               # GEMINI_API_KEY, APP_URL template
├── public/
│   └── images/                # Static image assets
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Section composition & global chrome
    ├── index.css              # Tailwind theme & design tokens
    ├── components/
    │   ├── global/            # Navbar, Footer, BookingModal, WhatsApp, etc.
    │   └── home/              # Hero, Services, Doctors, FAQ, ... (14 sections)
    ├── context/
    │   └── AppContext.tsx     # Global state (toast, modal, UI flags)
    ├── data/                  # Content: blogs, faqs, testimonials, pricing...
    └── lib/
        └── utils.ts           # cn() and shared helpers
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- A **Gemini API key** from [Google AI Studio](https://aistudio.google.com/apikey)

### 1. Clone the repository

```bash
git clone https://github.com/girishlade111/smilora-dental-studio.git
cd smilora-dental-studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example env file and fill in your keys:

```bash
cp .env.example .env.local
```

```env
GEMINI_API_KEY="your_gemini_api_key_here"
APP_URL="http://localhost:3000"
```

> ⚠️ Never commit `.env.local` — it is already ignored via `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

The app starts at **http://localhost:3000** (bound to `0.0.0.0` so it is reachable on your LAN).

### 5. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Vite dev server on port 3000 |
| `build` | `npm run build` | Type-check and bundle for production |
| `preview` | `npm run preview` | Serve the production build locally |
| `lint` | `npm run lint` | Run TypeScript compiler with `--noEmit` |
| `clean` | `npm run clean` | Remove `dist/` and `server.js` build artifacts |

## ⚙️ Configuration

All clinic-facing content lives in **`site.config.ts`** and is fully typed:

- **Branding** — name, tagline, brand color palette
- **Contact** — phone, emergency line, WhatsApp (with pre-filled message), email
- **Address & Maps** — street address, embed URL, directions link
- **Opening hours** — weekday / Saturday / Sunday slots + emergency note
- **Social links** — Instagram, Facebook, LinkedIn, Google Reviews
- **Trust stats** — Google rating, review count, years, patients treated
- **Doctors** — 4 profiles with specialties, availability, bios
- **Services** — 9 services with category, starting price, duration, benefits

Edit this one file to rebrand the entire site.

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes (for AI features) | Google Gemini API key for server-side AI calls |
| `APP_URL` | Optional | Base URL where the app is hosted (OAuth/callbacks/links) |
| `DISABLE_HMR` | Optional | Set to `true` to disable HMR/file-watching (used by AI Studio) |

## 📦 Deployment

The project builds to a static `dist/` folder and can be deployed to:

- **Vercel** — `vercel` (zero config)
- **Netlify** — build: `npm run build`, publish: `dist`
- **Cloudflare Pages** — build command `npm run build`, output `dist`
- Any static host or CDN

For server-side Gemini calls, deploy the Express server (`express` dependency included) behind your preferred Node host.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m "Add amazing feature"`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

Please ensure `npm run lint` passes before submitting.

## 📄 License

This project is open-sourced under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Google AI Studio](https://ai.studio/) — original app scaffold and Gemini capability
- [React](https://react.dev/), [Vite](https://vite.dev/), [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/) — animations
- [lucide-react](https://lucide.dev/) — icon set
- [Google Fonts](https://fonts.google.com/) — Fraunces & Plus Jakarta Sans typefaces

---

<div align="center">
Made with ❤️ for gentle dentistry in Pune
</div>

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
