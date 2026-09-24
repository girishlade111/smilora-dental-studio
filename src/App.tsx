import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { AnnouncementBar } from "./components/global/AnnouncementBar";
import { Navbar } from "./components/global/Navbar";
import { MobileBottomBar } from "./components/global/MobileBottomBar";
import { FloatingWhatsApp } from "./components/global/FloatingWhatsApp";
import { CursorGlow } from "./components/global/CursorGlow";
import { Footer } from "./components/global/Footer";
import { QuickBookingModal } from "./components/global/QuickBookingModal";

// Home Page Sections in exact requested order:
import { HeroSection } from "./components/home/HeroSection";
import { StatsSection } from "./components/home/StatsSection";
import { ServicesBentoSection } from "./components/home/ServicesBentoSection";
import { WhyChooseUsSection } from "./components/home/WhyChooseUsSection";
import { TransformationsSection } from "./components/home/TransformationsSection";
import { DoctorsSection } from "./components/home/DoctorsSection";
import { TechnologySection } from "./components/home/TechnologySection";
import { TreatmentJourneySection } from "./components/home/TreatmentJourneySection";
import { MembershipPreviewSection } from "./components/home/MembershipPreviewSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { FaqSection } from "./components/home/FaqSection";
import { BlogPreviewSection } from "./components/home/BlogPreviewSection";
import { BookingCtaBand } from "./components/home/BookingCtaBand";
import { ContactSection } from "./components/home/ContactSection";

const AppContent: React.FC = () => {
  const { activeToast } = useApp();

  return (
    <div className="min-h-screen flex flex-col film-grain bg-ivory text-ink relative">
      {/* Soft desktop cursor glow */}
      <CursorGlow />

      {/* 1. Global Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Glass Sticky Navigation with Mega-Dropdown */}
      <Navbar />

      {/* Main Home Page Sections */}
      <main id="main-content" className="flex-1">
        {/* a. Hero */}
        <HeroSection />

        {/* b. Stats Counters */}
        <StatsSection />

        {/* c. Services Bento Grid */}
        <ServicesBentoSection />

        {/* d. Why Choose Us */}
        <WhyChooseUsSection />

        {/* e. Smile Transformations: Before/After Drag Slider */}
        <TransformationsSection />

        {/* f. Meet the Doctors */}
        <DoctorsSection />

        {/* g. Technology & Hygiene */}
        <TechnologySection />

        {/* h. Treatment Journey Timeline */}
        <TreatmentJourneySection />

        {/* i. Membership / Pricing Preview */}
        <MembershipPreviewSection />

        {/* j. Testimonials Carousel with Rating Summary */}
        <TestimonialsSection />

        {/* k. FAQ Accordion */}
        <FaqSection />

        {/* l. Dental Tips Blog Preview */}
        <BlogPreviewSection />

        {/* m. Big Booking CTA Band */}
        <BookingCtaBand />

        {/* n. Contact Section with Map & Hours */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* 3. Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />

      {/* 4. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Quick Booking Modal */}
      <QuickBookingModal />

      {/* Floating Toast Notification */}
      {activeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-ink text-ivory text-xs px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 animate-fade-in"
        >
          {activeToast}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
