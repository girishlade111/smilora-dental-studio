import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Sparkles,
  ShieldCheck,
  Anchor,
  Layers,
  Microscope,
  Palette,
  Smile,
  Activity,
  AlertCircle,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";
import { siteConfig } from "../../../site.config";
import { useApp } from "../../context/AppContext";

// Map service icon names to Lucide icons
const ServiceIcons: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Anchor,
  Layers,
  Microscope,
  Palette,
  Smile,
  Activity,
  AlertCircle,
};

export const Navbar: React.FC = () => {
  const { language, setLanguage, isDark, toggleTheme, t, openBooking } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm shadow-black/5"
          : "bg-ivory/95 dark:bg-ivory/95 backdrop-blur-md py-4.5 border-b border-subtle"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          id="nav-brand-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          {/* Logo Mark: Stylized minimalist tooth / bloom */}
          <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-1.75">
              <path
                d="M12 3C8 3 5 5.5 5 10C5 13.5 6.5 17 8 20.5C9 21.5 10.5 21 11 19C11.5 17 12.5 17 13 19C13.5 21 15 21.5 16 20.5C17.5 17 19 13.5 19 10C19 5.5 16 3 12 3Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9C9.5 7.5 10.5 7 12 7C13.5 7 14.5 7.5 15 9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-display text-xl font-bold tracking-tight text-ink">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-ink-muted -mt-0.5">
              Boutique Dental Clinic · {siteConfig.city.split(",")[0]}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="nav-desktop-links"
          aria-label="Main menu"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink/90"
        >
          {/* Services with Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-dropdown-services-btn"
              onClick={() => scrollToSection("services-bento")}
              aria-expanded={servicesDropdownOpen}
              className="flex items-center gap-1 hover:text-coral transition-colors py-2 group cursor-pointer"
            >
              <span>{t.nav.services}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-coral" : "text-ink/50 group-hover:text-coral"
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                id="mega-services-dropdown"
                role="menu"
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] transition-all"
              >
                <div className="bg-card-solid rounded-2xl shadow-xl shadow-ink/10 border border-subtle p-6 overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-subtle">
                    <div>
                      <h4 className="font-serif-display text-base font-semibold text-ink">
                        Specialized Treatments
                      </h4>
                      <p className="text-xs text-ink-muted">
                        Minimally invasive, biomimetic, and digital restorative procedures.
                      </p>
                    </div>
                    <button
                      onClick={() => scrollToSection("services-bento")}
                      className="text-xs font-semibold text-coral flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>{t.nav.allServices}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {siteConfig.services.map((service) => {
                      const IconComponent = ServiceIcons[service.icon] || Sparkles;
                      return (
                        <div
                          key={service.id}
                          role="menuitem"
                          onClick={() => {
                            scrollToSection("services-bento");
                          }}
                          className="p-3 rounded-xl hover:bg-sand-light/60 transition-colors group cursor-pointer border border-transparent hover:border-subtle"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="p-2 rounded-lg bg-mint-light text-ink group-hover:bg-mint transition-colors">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-ink group-hover:text-coral transition-colors flex items-center gap-1">
                                <span>{service.title.split(" ")[0]}</span>
                                {service.highlightTag && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-sand/60 text-ink-muted font-normal">
                                    {service.highlightTag.split(" ")[0]}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-ink-muted line-clamp-2 mt-0.5 leading-snug">
                                {service.shortDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between bg-sand-light/40 -mx-6 -mb-6 px-6 py-3 text-xs">
                    <span className="text-ink-muted flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-coral" />
                      Complimentary 3D Intraoral Scan included with new patient consultations
                    </span>
                    <button
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        openBooking();
                      }}
                      className="font-semibold text-coral hover:underline"
                    >
                      Book Free Assessment →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            id="nav-link-doctors"
            onClick={() => scrollToSection("meet-doctors")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.doctors}
          </button>

          <button
            id="nav-link-transformations"
            onClick={() => scrollToSection("smile-transformations")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.transformations}
          </button>

          <button
            id="nav-link-technology"
            onClick={() => scrollToSection("technology-hygiene")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.technology}
          </button>

          <button
            id="nav-link-pricing"
            onClick={() => scrollToSection("membership-pricing")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.pricing}
          </button>

          <button
            id="nav-link-reviews"
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.reviews}
          </button>

          <button
            id="nav-link-faqs"
            onClick={() => scrollToSection("clinic-faqs")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.faqs}
          </button>

          <button
            id="nav-link-contact"
            onClick={() => scrollToSection("contact-hours")}
            className="hover:text-coral transition-colors cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right Actions: Lang Toggle, Theme Toggle, Book CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <div
            id="language-toggle-group"
            className="flex items-center p-1 rounded-full bg-sand-light/80 border border-sand text-xs font-semibold text-ink"
          >
            <button
              id="lang-btn-en"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-ink text-ivory shadow-xs"
                  : "hover:text-coral text-ink-muted"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              id="lang-btn-mr"
              onClick={() => setLanguage("mr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "mr"
                  ? "bg-ink text-ivory shadow-xs"
                  : "hover:text-coral text-ink-muted"
              }`}
              aria-label="मराठी मध्ये बदला"
            >
              मराठी
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            id="theme-mode-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full border border-sand bg-sand-light/60 hover:bg-sand text-ink transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-ink-muted" />
            )}
          </button>

          {/* Book Appointment CTA (Desktop) */}
          <button
            id="nav-primary-book-btn"
            onClick={() => openBooking()}
            className="hidden md:flex items-center gap-2 bg-coral hover:bg-coral-hover text-white text-xs sm:text-sm font-semibold px-4.5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookBtn}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-xl border border-subtle bg-card text-ink hover:bg-sand-light transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-[69px] bottom-0 bg-ivory/98 dark:bg-ivory/98 backdrop-blur-xl z-50 p-6 overflow-y-auto border-t border-subtle flex flex-col justify-between"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-ink-muted font-bold">
              Navigation
            </p>
            <div className="flex flex-col gap-3 text-base font-medium">
              <button
                onClick={() => scrollToSection("services-bento")}
                className="text-left py-2 border-b border-subtle flex items-center justify-between text-ink hover:text-coral"
              >
                <span>{t.nav.services}</span>
                <span className="text-xs bg-mint-light px-2 py-0.5 rounded text-ink font-normal">
                  9 disciplines
                </span>
              </button>
              <button
                onClick={() => scrollToSection("meet-doctors")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.doctors}
              </button>
              <button
                onClick={() => scrollToSection("smile-transformations")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.transformations}
              </button>
              <button
                onClick={() => scrollToSection("technology-hygiene")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.technology}
              </button>
              <button
                onClick={() => scrollToSection("treatment-journey")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                Treatment Journey
              </button>
              <button
                onClick={() => scrollToSection("membership-pricing")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.pricing}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.reviews}
              </button>
              <button
                onClick={() => scrollToSection("clinic-faqs")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.faqs}
              </button>
              <button
                onClick={() => scrollToSection("contact-hours")}
                className="text-left py-2 border-b border-subtle text-ink hover:text-coral"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3.5 bg-coral hover:bg-coral-hover text-white font-semibold rounded-xl text-center shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookBtn}</span>
            </button>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full py-3 bg-card border border-subtle text-ink font-semibold rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-coral" />
              <span>Call Reception: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
