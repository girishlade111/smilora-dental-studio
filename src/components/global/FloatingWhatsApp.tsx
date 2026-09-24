import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "../../../site.config";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  // Gently shake the WhatsApp icon every 10 seconds to draw subtle attention once tooltip is dismissed
  useEffect(() => {
    if (showTooltip) {
      setIsShaking(false);
      return;
    }

    const intervalId = setInterval(() => {
      setIsShaking(true);
      const resetTimer = setTimeout(() => {
        setIsShaking(false);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [showTooltip]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: 25, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="hidden md:block fixed bottom-8 right-8 z-40"
    >
      <div
        id="floating-whatsapp-container"
        className="flex flex-col items-end gap-2"
      >
        {/* Soft dismissible tooltip prompt */}
        {showTooltip && (
          <div className="bg-card-solid border border-subtle text-ink px-3.5 py-2 rounded-2xl shadow-xl shadow-black/10 text-xs max-w-[210px] relative animate-fade-in">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-ink-muted hover:text-ink p-0.5 rounded-full cursor-pointer transition-colors"
              aria-label="Dismiss chat prompt"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-semibold text-ink pr-3">Need quick dental advice?</p>
            <p className="text-[11px] text-ink-muted mt-0.5">
              Chat directly with our clinic concierge on WhatsApp.
            </p>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Smilora Dental on WhatsApp"
          onAnimationEnd={() => setIsShaking(false)}
          className={`w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer ${
            isShaking ? "animate-subtle-shake" : ""
          }`}
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>
    </motion.div>
  );
};
