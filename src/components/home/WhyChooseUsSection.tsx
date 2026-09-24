import React from "react";
import { Clock, Sparkles, Cpu, ShieldCheck, HeartHandshake, Coffee, CheckCircle2 } from "lucide-react";
import { differentiators } from "../../data/differentiators";

const DiffIcons: Record<string, React.ElementType> = {
  Clock,
  Sparkles,
  Cpu,
  ShieldCheck,
  HeartHandshake,
  Coffee,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-sand-light/50 border-y border-subtle relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-sand text-xs font-semibold text-ink">
            <ShieldCheck className="w-3.5 h-3.5 text-coral" />
            <span>The Smilora Standard</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Designed for Comfort, Driven by Science
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            We reimagined what going to the dentist should feel like: peaceful, unhurried, transparent, and completely free from shame or sensory dread.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => {
            const Icon = DiffIcons[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-card rounded-3xl p-7 border border-subtle hover:border-sand hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sand-light group-hover:bg-coral group-hover:text-white text-ink transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-mint-light text-ink">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-ink mt-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-muted mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-subtle flex items-center gap-2 text-xs font-medium text-ink/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral" />
                  <span>Clinical Gold Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
