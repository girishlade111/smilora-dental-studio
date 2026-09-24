import React, { useState } from "react";
import { BookOpen, Clock, ArrowRight, User, Sparkles, X } from "lucide-react";
import { blogPosts, type BlogPost } from "../../data/blogs";

export const BlogPreviewSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section
      id="dental-journal"
      className="py-20 bg-sand-light/30 border-t border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-sand text-xs font-semibold text-ink">
              <BookOpen className="w-3.5 h-3.5 text-coral" />
              <span>The Gentle Smile Journal</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
              Evidence-Based Oral Longevity
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Clinical knowledge translated into practical daily habits. Authored by our lead specialists.
            </p>
          </div>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-3xl p-7 border border-subtle hover:border-sand hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sand-light text-ink-muted text-[10px]">
                    {post.category}
                  </span>
                  <span className="text-ink-muted flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl font-bold text-ink group-hover:text-coral transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Author & Action */}
              <div className="mt-6 pt-5 border-t border-subtle flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-ink block">
                    {post.author}
                  </span>
                  <span className="text-[10px] text-ink-muted">
                    {post.authorRole} · {post.date}
                  </span>
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="p-2.5 rounded-full bg-sand-light hover:bg-ink hover:text-ivory text-ink transition-colors cursor-pointer"
                  aria-label={`Read article: ${post.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal reader preview for article */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-card-solid w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-subtle shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-sand text-ink-muted hover:text-ink cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-coral">
              {activeArticle.category} · {activeArticle.readingTime}
            </span>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-ink mt-2">
              {activeArticle.title}
            </h3>

            <div className="flex items-center gap-2 py-4 border-y border-subtle my-4 text-xs text-ink-muted">
              <span className="font-semibold text-ink">{activeArticle.author}</span>
              <span>•</span>
              <span>{activeArticle.authorRole}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-ink/90 leading-relaxed">
              <p className="font-medium text-ink text-sm sm:text-base">
                {activeArticle.summary}
              </p>
              <p>
                In our Pune clinic operatory, we frequently observe that patients who brush with excessive vigor or consume acidic beverages throughout their workday experience premature thinning of their outer enamel shell. This leads directly to dentinal hypersensitivity and micro-chipping.
              </p>
              <p>
                Key clinical takeaways to protect your teeth today:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-muted">
                <li>Never brush immediately after citrus, vinegar, or black coffee—wait 30 minutes for saliva to remineralize enamel.</li>
                <li>Switch exclusively to ultra-soft rounded filament toothbrushes.</li>
                <li>Incorporate hydroxyapatite or fluoride remineralizing pastes into your evening routine.</li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-subtle flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 bg-ink hover:bg-coral text-ivory text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Close Journal Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
