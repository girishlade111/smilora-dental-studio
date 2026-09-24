import React from "react";
import { Award, Calendar, CheckCircle2, Clock, Sparkles, UserCheck } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const DoctorsSection: React.FC = () => {
  const { openBooking } = useApp();

  return (
    <section
      id="meet-doctors"
      className="py-20 bg-sand-light/40 border-t border-subtle relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-sand text-xs font-semibold text-ink">
            <UserCheck className="w-3.5 h-3.5 text-coral" />
            <span>Dedicated Clinicians</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
            Meet the Specialists Behind Your Care
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Every procedure at Smilora is personally executed by postgraduate master clinicians with international fellowships in biomimetic and digital dentistry.
          </p>
        </div>

        {/* 4 Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.doctors.map((doctor, index) => {
            const initials = doctor.name
              .replace("Dr. ", "")
              .split(" ")
              .map((n) => n[0])
              .join("");

            // Stylized soft gradient tones for each doctor
            const cardAccents = [
              "from-mint/20 to-sand/40",
              "from-sand/30 to-mint/20",
              "from-coral/15 to-sand/30",
              "from-mint/25 to-coral/10",
            ];

            return (
              <div
                key={doctor.id}
                className="bg-card rounded-3xl p-6 border border-subtle hover:border-sand hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Doctor Portrait / Artistic Avatar Slot */}
                  <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-sand to-sand-light border border-subtle flex flex-col items-center justify-center p-4">
                    {/* Background artistic pattern */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${
                        cardAccents[index % cardAccents.length]
                      }`}
                    />

                    {/* Stylized Doctor Icon & Initials */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-card-solid border-2 border-ink text-ink shadow-md flex items-center justify-center font-serif-display text-2xl font-bold mb-2">
                        {initials}
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-coral">
                        {doctor.experienceYears} Years Clinical Exp
                      </span>
                      <span className="text-[10px] text-ink-muted mt-0.5">
                        {doctor.patientsTreated} Patients Treated
                      </span>
                    </div>

                    {/* Image slot notice */}
                    <span className="absolute bottom-2 text-[9px] text-ink/40 tracking-wider font-mono">
                      slot: {doctor.imageSlot}
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-2">
                    <h3 className="font-serif-display text-xl font-bold text-ink group-hover:text-coral transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-coral leading-snug">
                      {doctor.role}
                    </p>
                    <p className="text-[11px] text-ink/80 font-medium leading-relaxed bg-sand-light/50 p-2 rounded-xl border border-subtle">
                      {doctor.qualifications}
                    </p>
                    <p className="text-xs text-ink-muted leading-relaxed pt-1">
                      {doctor.bio}
                    </p>
                  </div>
                </div>

                {/* Bottom Availability & Action */}
                <div className="mt-6 pt-4 border-t border-subtle space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-ink-muted">
                    <Clock className="w-3.5 h-3.5 text-mint-dark" />
                    <span>In Studio: {doctor.availability}</span>
                  </div>

                  <button
                    onClick={() => openBooking(undefined, doctor.id)}
                    className="w-full py-2.5 bg-ink hover:bg-coral text-ivory text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {doctor.name.split(" ")[1]}</span>
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
