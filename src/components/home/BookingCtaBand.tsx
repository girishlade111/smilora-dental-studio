import React from "react";
import { Calendar, Phone, MessageCircle, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const BookingCtaBand: React.FC = () => {
  const { t, openBooking } = useApp();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section
      id="booking-cta-band"
      className="py-20 bg-ink text-ivory relative overflow-hidden"
    >
      {/* Background soft gradient mesh accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-mint/15 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-coral/15 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-mint-light">
          <Sparkles className="w-3.5 h-3.5 text-coral" />
          <span>{t.ctaBand.badge}</span>
        </div>

        {/* Big Serif Headline */}
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ivory leading-tight max-w-3xl mx-auto">
          {t.ctaBand.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-ivory/80 leading-relaxed max-w-2xl mx-auto">
          {t.ctaBand.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            id="cta-band-primary-book-btn"
            onClick={() => openBooking()}
            className="px-8 py-4 bg-coral hover:bg-coral-hover text-white text-sm sm:text-base font-semibold rounded-full shadow-xl shadow-coral/30 hover:shadow-coral/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.ctaBand.primaryBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="cta-band-call-btn"
            href={`tel:${siteConfig.contact.phone}`}
            className="px-6 py-4 bg-white/10 hover:bg-white/20 text-ivory text-sm sm:text-base font-semibold rounded-full border border-white/20 transition-all duration-200 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-mint" />
            <span>{t.ctaBand.callBtn}</span>
          </a>

          <a
            id="cta-band-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-emerald-600/90 hover:bg-emerald-600 text-white text-sm sm:text-base font-semibold rounded-full border border-emerald-500/40 transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.ctaBand.whatsappBtn}</span>
          </a>
        </div>

        {/* Guarantee Banner */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-ivory/70">
          <ShieldCheck className="w-4 h-4 text-mint" />
          <span>{t.ctaBand.guarantee}</span>
        </div>
      </div>
    </section>
  );
};
