import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const MobileBottomBar: React.FC = () => {
  const { t, openBooking } = useApp();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <aside
      id="mobile-bottom-action-bar"
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-card-solid/95 backdrop-blur-xl border-t border-subtle px-3 py-2 shadow-2xl shadow-black/20"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-sand-light text-ink hover:bg-sand transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-ink mb-1" />
          <span className="text-[11px] font-semibold">{t.mobileBar.call}</span>
        </a>

        {/* WhatsApp Action */}
        <a
          id="mobile-bottom-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-1" />
          <span className="text-[11px] font-semibold">{t.mobileBar.whatsapp}</span>
        </a>

        {/* Book Action */}
        <button
          id="mobile-bottom-book-btn"
          onClick={() => openBooking()}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-coral text-white hover:bg-coral-hover transition-colors shadow-sm active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-semibold">{t.mobileBar.book}</span>
        </button>
      </div>
    </aside>
  );
};
