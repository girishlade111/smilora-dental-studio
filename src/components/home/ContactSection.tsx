import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const ContactSection: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(siteConfig.services[0].title);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      showToast("Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section
      id="contact-hours"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
            <MapPin className="w-3.5 h-3.5 text-coral" />
            <span>Studio Location & Inquiries</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Visit Our Serene Pune Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Conveniently located on Senapati Bapat Road with valet parking and dedicated elevator access.
          </p>
        </div>

        {/* 2-Column Grid: Left (Map + Hours Table) & Right (Quick Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Map Embed & Hours Table (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Map Card */}
            <div className="bg-card-solid rounded-3xl p-6 border border-subtle shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-ink">
                    Studio Address
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {siteConfig.address.line1}, {siteConfig.address.locality}, {siteConfig.address.cityStateZip}
                  </p>
                  <p className="text-[11px] text-coral font-medium mt-0.5">
                    Landmark: {siteConfig.address.landmark}
                  </p>
                </div>

                <a
                  href={siteConfig.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-sand-light hover:bg-sand text-ink text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-subtle relative bg-sand-light">
                <iframe
                  title="Smilora Dental Studio Location Map"
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-card-solid rounded-3xl p-6 border border-subtle shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-coral" />
                <h3 className="font-serif-display text-lg font-bold text-ink">
                  Studio Consultation Hours
                </h3>
              </div>

              <div className="divide-y divide-subtle text-xs sm:text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-ink">Monday – Friday</span>
                  <span className="text-ink-muted font-semibold">
                    {siteConfig.openingHours.weekdays}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-ink">Saturday</span>
                  <span className="text-ink-muted font-semibold">
                    {siteConfig.openingHours.saturday}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-ink">Sunday</span>
                  <span className="text-ink-muted font-semibold">
                    {siteConfig.openingHours.sunday}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-subtle flex items-center gap-2 text-xs text-ink/80 bg-sand-light/50 p-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                <span>{siteConfig.openingHours.emergencyNote}</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-3xl p-7 sm:p-8 border border-subtle shadow-lg space-y-6">
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-ink">
                  Ask a Question or Request a Callback
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Have a specific question about treatment costs, insurance, or appointment slots? Leave your note below.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-display text-xl font-bold text-ink">
                    Message Sent to Concierge
                  </h4>
                  <p className="text-xs text-ink-muted max-w-sm mx-auto">
                    Thank you, {name}. Our front desk doctor will review your message and reach out via phone/WhatsApp shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 rounded-xl bg-sand-light hover:bg-sand text-ink text-xs font-semibold transition-colors mt-2 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98230 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Primary Dental Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                    >
                      {siteConfig.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Message or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your dental goals, previous anxieties, or specific treatment questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-ink hover:bg-coral text-ivory font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Clinic Team</span>
                  </button>

                  <p className="text-[11px] text-center text-ink-muted">
                    We value your privacy. No promotional spam ever.
                  </p>
                </form>
              )}

              {/* Direct WhatsApp Quick Alternative */}
              <div className="pt-4 border-t border-subtle flex items-center justify-between text-xs">
                <span className="text-ink-muted">Prefer instant messaging?</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
