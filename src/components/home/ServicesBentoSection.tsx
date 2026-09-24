import React, { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  Anchor,
  Layers,
  Microscope,
  Palette,
  Smile,
  Activity,
  AlertCircle,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { siteConfig, type ServiceItem } from "../../../site.config";
import { useApp } from "../../context/AppContext";

const ServiceIconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Anchor,
  Layers,
  Microscope,
  Palette,
  Smile,
  Activity,
  AlertCircle,
};

export const ServicesBentoSection: React.FC = () => {
  const { t, openBooking } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Cosmetic", "Restorative", "Orthodontics", "General", "Surgical"];

  const filteredServices =
    activeFilter === "All"
      ? siteConfig.services
      : siteConfig.services.filter((s) => s.category === activeFilter);

  return (
    <section
      id="services-bento"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>{t.bento.tag}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
              {t.bento.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              {t.bento.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-sand-light/70 rounded-full border border-sand w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-ink text-ivory shadow-xs"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = ServiceIconMap[service.icon] || Sparkles;
            // Let's feature certain key treatments with larger bento spans when showing "All"
            const isFeatured =
              activeFilter === "All" && (index === 1 || index === 2 || index === 5);

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl bg-card border border-subtle hover:border-sand p-7 transition-all duration-300 hover:shadow-xl hover:shadow-ink/5 flex flex-col justify-between overflow-hidden ${
                  isFeatured ? "md:col-span-1 lg:col-span-1 ring-1 ring-mint/40" : ""
                }`}
              >
                {/* Background decorative corner gradient on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 w-36 h-36 bg-mint/15 rounded-full blur-2xl group-hover:bg-coral/15 transition-colors duration-500 pointer-events-none"
                />

                {/* Top bar of card */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-sand-light group-hover:bg-ink group-hover:text-ivory transition-all duration-300 text-ink">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sand-light text-ink-muted">
                        {service.category}
                      </span>
                      {service.highlightTag && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-mint-light text-ink">
                          {service.highlightTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-ink group-hover:text-coral transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-muted mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Benefits checklist (Hover reveal depth) */}
                  <div className="mt-5 pt-4 border-t border-subtle space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                      Clinical Highlights:
                    </p>
                    {service.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2 text-xs text-ink/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-dark shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & Action */}
                <div className="mt-6 pt-5 border-t border-subtle flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ink-muted block">
                      Starting From
                    </span>
                    <span className="font-serif-display text-base sm:text-lg font-bold text-ink">
                      {service.startingPrice}
                    </span>
                    <span className="text-[11px] text-ink-muted block flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-ink-muted" />
                      {service.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => openBooking(service.slug)}
                    className="px-4 py-2 rounded-xl bg-ink hover:bg-coral text-ivory text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 transform group-hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>{t.bento.bookThis}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
