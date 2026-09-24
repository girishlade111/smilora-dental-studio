import React, { useEffect, useState, useRef } from "react";
import { ShieldCheck, Heart, Clock, Award, Star, Sparkles } from "lucide-react";
import { siteConfig } from "../../../site.config";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, suffix = "", label, sublabel }) => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-subtle hover:border-sand hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-sand-light text-ink">
          <Icon className="w-5 h-5 text-ink" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-mint-light text-ink">
          Verified
        </span>
      </div>

      <div>
        <div className="flex items-baseline gap-1">
          <span className="font-serif-display text-3xl sm:text-4xl font-bold text-ink">
            {value}
          </span>
          {suffix && <span className="text-xl font-bold text-coral">{suffix}</span>}
        </div>
        <h4 className="text-xs sm:text-sm font-bold text-ink mt-1">{label}</h4>
        <p className="text-[11px] text-ink-muted mt-0.5 leading-snug">{sublabel}</p>
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section
      id="stats-section"
      className="py-12 bg-sand-light/40 border-y border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-coral">
            Clinical Accountability
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-ink mt-1">
            Care Measured in Comfort, Precision & Trust
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            icon={Award}
            value="14"
            suffix="+"
            label="Years Experience"
            sublabel="European & AACD fellowship trained"
          />
          <StatCard
            icon={Heart}
            value="12.5k"
            suffix="+"
            label="Patients Treated"
            sublabel="In Pune and Western Maharashtra"
          />
          <StatCard
            icon={Star}
            value="4.9"
            suffix="★"
            label="Google Score"
            sublabel="Across 740+ authentic reviews"
          />
          <StatCard
            icon={Clock}
            value="0"
            suffix=" Min"
            label="Waiting Delays"
            sublabel="Strict 1-to-1 operatory block bookings"
          />
        </div>
      </div>
    </section>
  );
};
