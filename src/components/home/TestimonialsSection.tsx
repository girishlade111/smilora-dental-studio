import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ThumbsUp } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { siteConfig } from "../../../site.config";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 bg-sand-light/40 border-t border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-sand text-xs font-semibold text-ink">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Loved by Pune's Discerning Smiles
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Read unedited stories from professionals, parents, and once-anxious patients who found their dental sanctuary with us.
          </p>
        </div>

        {/* Testimonials Composition Grid: Rating Summary + Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Rating Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-card-solid rounded-3xl p-7 border border-subtle shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral">
                Google Verified Score
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-serif-display text-5xl font-bold text-ink">
                  {siteConfig.trustStats.googleRating}
                </span>
                <span className="text-sm text-ink-muted font-medium">/ 5.0</span>
              </div>

              <div className="flex text-amber-400 gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-xs text-ink-muted">
                Based on {siteConfig.trustStats.reviewCount}+ verified patient reviews on Google Maps & Practo.
              </p>
            </div>

            {/* Rating distribution breakdown bars */}
            <div className="space-y-2 pt-2 border-t border-subtle text-xs">
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted">5 Stars</span>
                <div className="w-full bg-sand-light h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[96%]" />
                </div>
                <span className="text-ink font-semibold">96%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted">4 Stars</span>
                <div className="w-full bg-sand-light h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[4%]" />
                </div>
                <span className="text-ink font-semibold">4%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-ink-muted">3 Stars</span>
                <div className="w-full bg-sand-light h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[0%]" />
                </div>
                <span className="text-ink font-semibold">0%</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-sand-light/60 border border-subtle flex items-center gap-2.5 text-xs text-ink">
              <ThumbsUp className="w-4 h-4 text-coral shrink-0" />
              <span>100% of reviewers reported zero post-treatment waiting time.</span>
            </div>
          </div>

          {/* Right: Testimonial Carousel Card (8 cols) */}
          <div className="lg:col-span-8 relative">
            <div className="bg-card rounded-3xl p-8 sm:p-10 border border-subtle shadow-xl relative">
              <Quote className="w-12 h-12 text-mint/40 absolute top-8 right-8 pointer-events-none" />

              {/* Stars & Category Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sand-light text-ink-muted">
                    {current.treatment}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-mint-light text-mint-dark flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Patient
                  </span>
                </div>
              </div>

              {/* Quote Highlight */}
              <p className="font-serif-display text-xl sm:text-2xl font-bold text-ink italic leading-snug">
                "{current.keyHighlight}"
              </p>

              {/* Full Testimonial Body */}
              <p className="text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
                {current.content}
              </p>

              {/* Author & Doctor Footer */}
              <div className="mt-8 pt-6 border-t border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif-display text-lg font-bold text-ink">
                    {current.author}
                  </h4>
                  <p className="text-xs text-ink-muted">
                    {current.role} · Treated by <span className="font-semibold text-ink">{current.doctor}</span>
                  </p>
                </div>

                {/* Carousel Prev/Next Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ink-muted mr-2">
                    {currentIndex + 1} of {testimonials.length}
                  </span>
                  <button
                    onClick={prevReview}
                    aria-label="Previous patient story"
                    className="p-2.5 rounded-full border border-subtle bg-sand-light hover:bg-sand text-ink transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    aria-label="Next patient story"
                    className="p-2.5 rounded-full border border-subtle bg-sand-light hover:bg-sand text-ink transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
