import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { clinicFaqs } from "../../data/faqs";
import { siteConfig } from "../../../site.config";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Smilora team, I have a specific question about treatments and appointments."
  )}`;

  return (
    <section
      id="clinic-faqs"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
            <HelpCircle className="w-3.5 h-3.5 text-coral" />
            <span>Questions & Clarity</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Frequently Answered Inquiries
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Honest, clinical answers about comfort, timelines, technology, and transparent fees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {clinicFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-card rounded-2xl border border-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-sand-light/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sand-light text-ink-muted">
                      {faq.category}
                    </span>
                    <h3 className="font-serif-display text-base sm:text-lg font-bold text-ink">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-sand-light text-ink transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-ink text-ivory" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-subtle/50 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-sand-light/60 border border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif-display text-lg font-bold text-ink">
              Have a clinical question not listed here?
            </h4>
            <p className="text-xs text-ink-muted mt-0.5">
              Our clinical concierge responds to all questions directly within 15 minutes.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-4 py-2.5 rounded-xl bg-card border border-subtle text-ink text-xs font-semibold hover:bg-sand transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-coral" />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
