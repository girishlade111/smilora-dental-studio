import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

export const QuickBookingModal: React.FC = () => {
  const {
    isBookingOpen,
    closeBooking,
    selectedServiceForBooking,
    selectedDoctorForBooking,
    showToast,
  } = useApp();

  const [serviceId, setServiceId] = useState<string>(siteConfig.services[0].id);
  const [doctorId, setDoctorId] = useState<string>("any");
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("11:00 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (selectedServiceForBooking) {
      const match = siteConfig.services.find((s) => s.slug === selectedServiceForBooking || s.id === selectedServiceForBooking);
      if (match) setServiceId(match.id);
    }
    if (selectedDoctorForBooking) {
      const match = siteConfig.doctors.find((d) => d.slug === selectedDoctorForBooking || d.id === selectedDoctorForBooking);
      if (match) setDoctorId(match.id);
    }
  }, [selectedServiceForBooking, selectedDoctorForBooking]);

  // Default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) {
      showToast("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  const selectedServiceObj = siteConfig.services.find((s) => s.id === serviceId);
  const selectedDoctorObj = siteConfig.doctors.find((d) => d.id === doctorId);

  const availableSlots = [
    "10:00 AM",
    "11:00 AM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
  ];

  const whatsappConfirmationUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Smilora Studio! I have requested an appointment.\n• Name: ${patientName}\n• Treatment: ${
      selectedServiceObj?.title || "Consultation"
    }\n• Specialist: ${selectedDoctorObj?.name || "Any Available Senior Specialist"}\n• Requested Date: ${date} at ${timeSlot}`
  )}`;

  return (
    <div
      id="quick-booking-modal-backdrop"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        id="quick-booking-modal-panel"
        className="bg-card-solid w-full max-w-xl rounded-3xl shadow-2xl border border-subtle overflow-hidden relative"
      >
        {/* Modal Header */}
        <div className="bg-sand-light/70 px-6 py-4.5 border-b border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-coral text-white">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-serif-display text-lg font-bold text-ink">
                Reserve Your Appointment
              </h3>
              <p className="text-xs text-ink-muted">
                Strict 1-to-1 patient operatory booking · No waiting delays
              </p>
            </div>
          </div>
          <button
            onClick={closeBooking}
            className="p-1.5 rounded-full hover:bg-sand text-ink-muted hover:text-ink transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif-display text-xl font-bold text-ink">
                  Appointment Request Received!
                </h4>
                <p className="text-sm text-ink-muted max-w-md mx-auto mt-1">
                  Thank you, <span className="font-semibold text-ink">{patientName}</span>. Our concierge team has reserved your preliminary slot on <span className="font-semibold text-ink">{date}</span> at <span className="font-semibold text-ink">{timeSlot}</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-light/80 border border-subtle text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Treatment:</span>
                  <span className="font-semibold text-ink">{selectedServiceObj?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Doctor:</span>
                  <span className="font-semibold text-ink">
                    {selectedDoctorObj ? selectedDoctorObj.name : "First Available Specialist"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Estimated Starting Fee:</span>
                  <span className="font-semibold text-coral">{selectedServiceObj?.startingPrice}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappConfirmationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp for Instant Pass</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    closeBooking();
                  }}
                  className="px-5 py-2.5 bg-sand-light hover:bg-sand text-ink text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service & Doctor select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Select Discipline / Service
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                  >
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Preferred Specialist
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                  >
                    <option value="any">First Available Senior Doctor</option>
                    {siteConfig.doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.specialty.split(" ")[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.2 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Operatory Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`py-1.5 text-[11px] rounded-lg border font-medium transition-all cursor-pointer ${
                          timeSlot === slot
                            ? "bg-ink text-ivory border-ink shadow-xs"
                            : "bg-sand-light/60 border-subtle text-ink-muted hover:border-ink"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-subtle">
                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Patient Full Name
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2.2 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-ink mb-1">
                    Mobile Number (WhatsApp)
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98230 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2.2 rounded-xl border border-subtle bg-sand-light/50 text-ink focus:outline-none focus:ring-2 focus:ring-coral text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-coral hover:bg-coral-hover text-white font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Appointment Reservation</span>
                </button>
                <p className="text-[11px] text-center text-ink-muted mt-2">
                  Zero advance booking deposit required · Free cancellation anytime
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
