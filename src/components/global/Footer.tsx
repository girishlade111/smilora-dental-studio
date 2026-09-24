import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Star,
  ExternalLink,
  CheckCircle2,
  Send,
} from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const Footer: React.FC = () => {
  const { t, openBooking } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      className="bg-ink text-ivory pt-16 pb-24 md:pb-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ivory text-ink flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-1.75">
                  <path
                    d="M12 3C8 3 5 5.5 5 10C5 13.5 6.5 17 8 20.5C9 21.5 10.5 21 11 19C11.5 17 12.5 17 13 19C13.5 21 15 21.5 16 20.5C17.5 17 19 13.5 19 10C19 5.5 16 3 12 3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-ivory">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm text-ivory/80 leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-ivory">
                {siteConfig.trustStats.googleRating}
              </span>
              <span className="text-ivory/60">
                ({siteConfig.trustStats.reviewCount}+ Google Reviews)
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral hover:text-white flex items-center justify-center transition-colors text-ivory/80"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral hover:text-white flex items-center justify-center transition-colors text-ivory/80"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-coral hover:text-white flex items-center justify-center transition-colors text-ivory/80"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-mint font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li>
                <button
                  onClick={() => scrollToSection("services-bento")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("meet-doctors")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.doctors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("smile-transformations")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.transformations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("technology-hygiene")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.technology}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("membership-pricing")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clinic-faqs")}
                  className="hover:text-coral transition-colors cursor-pointer"
                >
                  {t.nav.faqs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openBooking()}
                  className="text-coral font-medium hover:underline cursor-pointer"
                >
                  {t.nav.bookBtn} →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Address (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-mint font-semibold">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-2 text-xs text-ivory/80 leading-relaxed">
              <div>
                <p className="font-semibold text-ivory">Mon – Fri:</p>
                <p>{siteConfig.openingHours.weekdays}</p>
              </div>
              <div>
                <p className="font-semibold text-ivory">Saturday:</p>
                <p>{siteConfig.openingHours.saturday}</p>
              </div>
              <div>
                <p className="font-semibold text-ivory">Sunday:</p>
                <p>{siteConfig.openingHours.sunday}</p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint hover:text-white flex items-center gap-1 font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-mint font-semibold">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed">
              {t.footer.newsletterSubtext}
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-mint/15 border border-mint/30 text-mint text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-mint" />
                <span>Thank you. You are subscribed to our monthly wellness note.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-white/20 focus-within:border-mint bg-white/5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    className="w-full px-3 py-2.5 bg-transparent text-xs text-ivory placeholder:text-ivory/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 bg-coral hover:bg-coral-hover text-white text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 border-t border-white/10 text-xs space-y-1 text-ivory/70">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-mint" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-mint" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>{t.footer.copyright}</p>
          <div className="max-w-xl text-center md:text-right bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            <span className="font-semibold text-coral uppercase tracking-wider text-[10px] mr-1.5">
              DEMO NOTICE:
            </span>
            <span>{t.footer.disclaimer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
