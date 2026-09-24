import React from "react";
import { PhoneCall, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const AnnouncementBar: React.FC = () => {
  const { t, openBooking } = useApp();

  return (
    <aside
      id="announcement-bar"
      aria-label="Clinic announcement and emergency contacts"
      className="bg-ink text-ivory text-xs py-2 px-4 border-b border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Emergency Contact */}
          <div className="flex items-center gap-1.5 text-mint-light">
            <span className="inline-block w-2 h-2 rounded-full bg-coral animate-ping" />
            <span className="font-semibold">{t.announcement.emergency}</span>
            <a
              id="announcement-emergency-call"
              href={`tel:${siteConfig.contact.emergencyPhone}`}
              className="font-medium underline hover:text-white transition-colors"
            >
              {siteConfig.contact.emergencyPhoneDisplay}
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-ivory/80">
            <Clock className="w-3.5 h-3.5 text-mint" />
            <span>{t.announcement.hours}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="announcement-free-scan-cta"
            onClick={() => openBooking("general-dentistry")}
            className="hidden md:flex items-center gap-1.5 text-xs text-mint hover:text-white transition-colors font-medium cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-coral" />
            <span>{t.announcement.bookConsult}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
