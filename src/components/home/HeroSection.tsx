import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  MessageCircle,
  Star,
  Award,
  Users,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";
import { AnimatedToothSvg } from "./AnimatedToothSvg";

export const HeroSection: React.FC = () => {
  const { t, openBooking } = useApp();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section
      id="hero-section"
      className="relative pt-6 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
    >
      {/* Background soft gradient mesh blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-mint/30 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-sand/40 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 bg-coral/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content: 7 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Top Boutique Clinic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span>{t.hero.badge}</span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-muted flex items-center gap-1 font-normal">
                <Sparkles className="w-3 h-3 text-coral" />
                Biomimetic & Painless
              </span>
            </div>

            {/* Oversized Fraunces Headline with mixed italic emphasis */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-normal leading-[1.08] text-ink tracking-tight">
              {t.hero.headlinePart1}{" "}
              <span className="italic font-light text-coral underline decoration-mint decoration-wavy decoration-2">
                {t.hero.headlineEmphasized}
              </span>{" "}
              {t.hero.headlinePart2}
            </h1>

            {/* Editorial Subtext */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-book-cta-btn"
                onClick={() => openBooking()}
                className="px-7 py-3.5 bg-coral hover:bg-coral-hover text-white text-sm sm:text-base font-semibold rounded-full shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.bookCta}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </button>

              <a
                id="hero-whatsapp-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-card border border-subtle hover:border-ink/40 text-ink text-sm sm:text-base font-semibold rounded-full transition-all duration-200 hover:bg-sand-light flex items-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.whatsappCta}</span>
              </a>
            </div>

            {/* Trust Chips (Google Rating, Years Exp, Patients) */}
            <div className="pt-4 border-t border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Chip 1: Google Rating */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-ink">4.9 / 5</span>
                    <span className="text-[11px] text-ink-muted">(740+ reviews)</span>
                  </div>
                  <p className="text-xs text-ink-muted">Verified Google Patient Score</p>
                </div>
              </div>

              {/* Chip 2: Experience */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mint-light border border-mint flex items-center justify-center text-ink shrink-0">
                  <Award className="w-5 h-5 text-mint-dark dark:text-mint" />
                </div>
                <div>
                  <span className="text-sm font-bold text-ink">14+ Years</span>
                  <p className="text-xs text-ink-muted">European & AACD Trained</p>
                </div>
              </div>

              {/* Chip 3: Patients Treated */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sand-light border border-sand flex items-center justify-center text-ink shrink-0">
                  <Users className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <span className="text-sm font-bold text-ink">12,500+</span>
                  <p className="text-xs text-ink-muted">Smiles Transformed in Pune</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: 5 Columns (Editorial Bento Composition + Animated Tooth SVG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Asymmetrical Frame with organic mask */}
            <div className="relative bg-card-solid rounded-3xl p-7 border border-subtle shadow-xl shadow-ink/5">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-subtle">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-ink">
                    Operatories Open · Clean Air HEPA 14 Active
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-sand-light text-ink-muted">
                  Pune Clinic
                </span>
              </div>

              {/* Centered Tooth Artistic Drawing Component */}
              <div className="py-6 flex flex-col items-center justify-center">
                <AnimatedToothSvg className="w-52 h-56" />
                <span className="text-[11px] tracking-wider uppercase text-ink-muted font-medium mt-3">
                  Biomimetic Precision Sculpture
                </span>
              </div>

              {/* Floating Operatory Comfort Pill */}
              <div className="mt-2 p-3.5 rounded-2xl bg-sand-light/70 border border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-mint-light text-ink">
                    <ShieldCheck className="w-4 h-4 text-mint-dark dark:text-mint" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">Strict 1-to-1 Booking</p>
                    <p className="text-[11px] text-ink-muted">
                      No waiting room delays. Operatory sterilized specifically for you.
                    </p>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
              </div>

              {/* Bottom Quick Feature Tag strip */}
              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[11px] text-ink-muted">
                <span>Carl Zeiss Micro-Optics</span>
                <span>•</span>
                <span>Biolase® Painless Laser</span>
                <span>•</span>
                <span>Zero-Putty 3D Scans</span>
              </div>
            </div>

            {/* Floating Doctor Quick Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-card-solid border border-subtle rounded-2xl p-3.5 shadow-lg shadow-black/10 flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center font-serif-display font-bold text-base">
                AD
              </div>
              <div>
                <p className="text-xs font-bold text-ink">Dr. Ananya Deshmukh</p>
                <p className="text-[10px] text-ink-muted">MDS, Fellow AACD (USA)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee Strip of Clinic Services */}
        <div className="mt-16 pt-6 border-t border-subtle overflow-hidden">
          <p className="text-[11px] uppercase tracking-widest text-ink-muted font-semibold mb-3 text-center">
            Specialized Disciplines Practiced at Smilora
          </p>
          <div className="relative w-full overflow-hidden mask-fade-edges">
            <div className="animate-marquee flex items-center gap-8 text-xs font-semibold text-ink/80">
              {siteConfig.services.concat(siteConfig.services).map((srv, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  <span>{srv.title}</span>
                  <span className="text-ink-muted font-normal">({srv.startingPrice})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
