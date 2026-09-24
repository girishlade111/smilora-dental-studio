import React, { useState, useRef, useCallback } from "react";
import { Sparkles, Calendar, ArrowLeftRight, Clock, User, CheckCircle2 } from "lucide-react";
import { transformations, type TransformationCase } from "../../data/transformations";
import { useApp } from "../../context/AppContext";

export const TransformationsSection: React.FC = () => {
  const { openBooking } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = ["All", "Smile Makeover", "Aligners", "Implants", "Whitening"];

  const filteredCases =
    selectedCategory === "All"
      ? transformations
      : transformations.filter((c) => c.category === selectedCategory);

  const activeCase: TransformationCase =
    filteredCases[activeCaseIndex] || filteredCases[0] || transformations[0];

  const handleMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section
      id="smile-transformations"
      className="py-20 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light border border-sand text-xs font-semibold text-ink">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>Biomimetic Smile Gallery</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
              Real Clinical Transformations
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Slide to compare baseline clinical presentations with our finished porcelain, aligner, and implant restorations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-sand-light/70 rounded-full border border-sand w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveCaseIndex(0);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-ink text-ivory shadow-xs"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {filteredCases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all border cursor-pointer ${
                activeCaseIndex === idx
                  ? "bg-card-solid border-ink text-ink shadow-sm"
                  : "bg-sand-light/50 border-subtle text-ink-muted hover:border-sand"
              }`}
            >
              Case #{idx + 1}: {c.title.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Drag Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-subtle select-none cursor-ew-resize bg-neutral-900"
            >
              {/* "AFTER" Layer (Full width background) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0F3D3E] via-[#144748] to-[#0A2627] text-ivory">
                {/* Stylized Smile Graphic: After Result */}
                <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
                  <svg viewBox="0 0 300 120" className="w-full h-full drop-shadow-lg">
                    {/* Upper Lip Contour */}
                    <path
                      d="M 20 60 Q 75 40 150 55 Q 225 40 280 60"
                      fill="none"
                      stroke="#FF9E87"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Aligned, White, Radiant Teeth Row */}
                    <g fill="#FAF9F5" stroke="#D1C7B7" strokeWidth="1.5">
                      <rect x="75" y="48" width="22" height="34" rx="4" />
                      <rect x="100" y="47" width="24" height="37" rx="5" />
                      <rect x="127" y="46" width="26" height="39" rx="5" />
                      <rect x="156" y="46" width="26" height="39" rx="5" />
                      <rect x="185" y="47" width="24" height="37" rx="5" />
                      <rect x="212" y="48" width="22" height="34" rx="4" />
                    </g>
                    {/* Lower Lip Smile Arc */}
                    <path
                      d="M 25 60 Q 150 115 275 60"
                      fill="none"
                      stroke="#FF7A59"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute top-2 right-2 text-coral flex items-center gap-1 text-xs">
                    <Sparkles className="w-3.5 h-3.5" /> High Translucency
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-mint-light">
                  AFTER: {activeCase.afterTheme.label}
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped to slider percentage) */}
              <div
                className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#2D2821] via-[#3D352C] to-[#241F1A] text-sand"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-sand"
                  style={{ width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : "100%" }}
                >
                  {/* Stylized Smile Graphic: Before with spacing / uneven edges */}
                  <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
                    <svg viewBox="0 0 300 120" className="w-full h-full opacity-90">
                      <path
                        d="M 20 60 Q 75 42 150 55 Q 225 42 280 60"
                        fill="none"
                        stroke="#B88B7D"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      {/* Irregular / spaced teeth */}
                      <g fill="#D4C8AE" stroke="#9E927A" strokeWidth="1.5">
                        <rect x="73" y="52" width="20" height="30" rx="3" transform="rotate(-3 83 67)" />
                        <rect x="97" y="49" width="22" height="34" rx="3" transform="rotate(2 108 66)" />
                        {/* 4mm gap space between centrals */}
                        <rect x="123" y="48" width="23" height="35" rx="3" transform="rotate(-2 134 65)" />
                        <rect x="160" y="48" width="23" height="35" rx="3" transform="rotate(3 171 65)" />
                        <rect x="187" y="50" width="21" height="32" rx="3" />
                        <rect x="212" y="53" width="19" height="29" rx="3" />
                      </g>
                      <path
                        d="M 25 60 Q 150 110 275 60"
                        fill="none"
                        stroke="#9C6B5E"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-sand">
                    BEFORE: {activeCase.beforeTheme.label}
                  </div>
                </div>
              </div>

              {/* Vertical Drag Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-white text-ink shadow-2xl flex items-center justify-center border-2 border-ink">
                  <ArrowLeftRight className="w-4 h-4 text-coral" />
                </div>
              </div>

              {/* Instruction pill at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90 pointer-events-none flex items-center gap-1.5">
                <ArrowLeftRight className="w-3 h-3" />
                <span>Drag left / right to compare</span>
              </div>
            </div>
          </div>

          {/* Right: Clinical Case Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card-solid rounded-3xl p-7 border border-subtle shadow-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-coral">
                  {activeCase.category}
                </span>
                <span className="text-xs text-ink-muted flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeCase.duration}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-ink">
                {activeCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {activeCase.patientNote}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-sand-light/60 border border-subtle">
                  <span className="text-[11px] font-bold text-ink block">Before Presentation:</span>
                  <p className="text-xs text-ink-muted mt-0.5">{activeCase.beforeDescription}</p>
                </div>

                <div className="p-3 rounded-xl bg-mint-light/60 border border-mint/40">
                  <span className="text-[11px] font-bold text-ink block">Completed Outcome:</span>
                  <p className="text-xs text-ink-muted mt-0.5">{activeCase.afterDescription}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ink text-ivory flex items-center justify-center text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink block">
                      {activeCase.doctorInCharge}
                    </span>
                    <span className="text-[10px] text-ink-muted">Lead Clinician</span>
                  </div>
                </div>

                <button
                  onClick={() => openBooking("cosmetic-smile-design")}
                  className="px-4 py-2 bg-coral hover:bg-coral-hover text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Consult on Similar Case
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
