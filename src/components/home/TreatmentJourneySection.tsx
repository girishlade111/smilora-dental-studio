import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Sparkles, HeartHandshake } from "lucide-react";
import { treatmentJourney } from "../../data/journey";

export const TreatmentJourneySection: React.FC = () => {
  return (
    <section
      id="treatment-journey"
      className="py-20 bg-sand-light/30 border-t border-subtle relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-sand text-xs font-semibold text-ink">
            <HeartHandshake className="w-3.5 h-3.5 text-coral" />
            <span>The Patient Experience</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Your Calming 5-Step Treatment Pathway
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            From the moment you step through our doors to post-appointment check-ins, here is the transparent cadence of your care.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-mint via-sand to-coral"
          />

          <div className="space-y-12">
            {treatmentJourney.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card Content (half width) */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`bg-card rounded-3xl p-7 border border-subtle hover:border-sand hover:shadow-lg transition-all duration-300 ${
                        isEven ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif-display text-2xl font-bold text-coral">
                          Step {step.step}
                        </span>
                        <span className="text-xs text-ink-muted flex items-center gap-1 bg-sand-light/60 px-2.5 py-1 rounded-full">
                          <Clock className="w-3.5 h-3.5 text-ink-muted" />
                          {step.durationEstimate}
                        </span>
                      </div>

                      <h3 className="font-serif-display text-xl font-bold text-ink">
                        {step.title}
                      </h3>

                      <p className="text-xs font-semibold text-ink-muted mt-1">
                        {step.shortDesc}
                      </p>

                      <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                        {step.detail}
                      </p>

                      <div className="mt-5 pt-4 border-t border-subtle space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70 block">
                          What to expect:
                        </span>
                        {step.whatToExpect.map((exp, eIdx) => (
                          <div key={eIdx} className="flex items-center gap-2 text-xs text-ink/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-mint-dark shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-card-solid border-2 border-ink text-ink font-serif-display font-bold text-lg items-center justify-center shadow-lg shrink-0 z-10">
                    {step.step}
                  </div>

                  {/* Empty counterpart space for alternating balance */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
