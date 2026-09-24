import React from "react";
import { CheckCircle2, Sparkles, Tag, ShieldCheck, ArrowRight } from "lucide-react";
import { membershipPlans } from "../../data/pricingPlans";
import { useApp } from "../../context/AppContext";

export const MembershipPreviewSection: React.FC = () => {
  const { openBooking } = useApp();

  return (
    <section
      id="membership-pricing"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
            <Tag className="w-3.5 h-3.5 text-coral" />
            <span>Preventative Peace of Mind</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Transparent Care Memberships
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            No dental insurance complexities. Simple annual memberships designed to keep your natural teeth healthy, luminous, and pain-free year-round.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? "bg-card-solid border-2 border-coral shadow-2xl shadow-coral/10 -translate-y-2 lg:-translate-y-3"
                    : "bg-card border border-subtle hover:border-sand hover:shadow-lg"
                }`}
              >
                {/* Popular / Highlight Badge */}
                {plan.highlightBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm ${
                        isPopular
                          ? "bg-coral text-white"
                          : "bg-sand text-ink"
                      }`}
                    >
                      {plan.highlightBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="pt-2">
                    <h3 className="font-serif-display text-2xl font-bold text-ink">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="my-6 pb-6 border-b border-subtle">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif-display text-4xl font-bold text-ink">
                        {plan.pricePerYear}
                      </span>
                      <span className="text-xs text-ink-muted font-medium">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-coral font-semibold mt-1">
                      {plan.savingsNote}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                      Included Privileges:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-ink/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-mint-dark shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-8 pt-6 border-t border-subtle">
                  <button
                    onClick={() => openBooking("general-dentistry")}
                    className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isPopular
                        ? "bg-coral hover:bg-coral-hover text-white shadow-md shadow-coral/20 hover:shadow-coral/30"
                        : "bg-ink hover:bg-coral text-ivory"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-ink-muted mt-2">
                    0% Interest Monthly EMI Available at Checkout
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
