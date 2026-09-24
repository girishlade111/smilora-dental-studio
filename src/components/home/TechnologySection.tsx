import React from "react";
import { Scan, Radiation, Zap, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { clinicTechnologies } from "../../data/technologies";

const TechIcons: Record<string, React.ElementType> = {
  Scan,
  Radiation,
  Zap,
  ShieldCheck,
};

export const TechnologySection: React.FC = () => {
  return (
    <section
      id="technology-hygiene"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
            <Zap className="w-3.5 h-3.5 text-coral" />
            <span>Modern Diagnostic Precision</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Technology Designed to Protect You
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            By eliminating outdated, uncomfortable tools and embracing hospital-level sterilization, your treatment is faster, gentler, and far more accurate.
          </p>
        </div>

        {/* 4 Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicTechnologies.map((tech) => {
            const Icon = TechIcons[tech.icon] || ShieldCheck;

            return (
              <div
                key={tech.id}
                className="bg-card rounded-3xl p-8 border border-subtle hover:border-sand hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-mint-light text-ink flex items-center justify-center">
                      <Icon className="w-6 h-6 text-mint-dark dark:text-mint" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sand-light border border-subtle text-ink">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-ink">
                    {tech.title}
                  </h3>

                  <p className="text-xs font-semibold text-coral mt-1">
                    {tech.subhead}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-subtle">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70 block mb-2">
                    Verified Performance Metrics:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {tech.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 p-2 rounded-xl bg-sand-light/50 border border-subtle text-[11px] font-medium text-ink"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-dark shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hospital Sterilization Protocol Spotlight Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-sand-light/60 border border-sand flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-ink text-ivory shrink-0">
              <ShieldCheck className="w-8 h-8 text-mint" />
            </div>
            <div>
              <h4 className="font-serif-display text-xl font-bold text-ink">
                Class-B 6-Stage Hospital Autoclave Standard
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed max-w-2xl">
                Every dental mirror, probe, and handpiece is cleaned enzymatically, heat-sealed into sterile single-use pouches, vacuum-autoclaved at 134°C, and tracked via chemical and biological indicators.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs font-bold text-ink block">Zero Cross-Infection</span>
              <span className="text-[11px] text-ink-muted">European EN 13060 Protocol</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center text-mint-dark font-bold text-xs border border-mint">
              100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
