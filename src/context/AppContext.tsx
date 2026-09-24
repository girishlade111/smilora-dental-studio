import React, { createContext, useContext, useEffect, useState } from "react";
import { type Language, translations, type Translations } from "../data/translations";
import { siteConfig } from "../../site.config";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDark: boolean;
  toggleTheme: () => void;
  t: Translations;
  isBookingOpen: boolean;
  openBooking: (preselectedService?: string, preselectedDoctor?: string) => void;
  closeBooking: () => void;
  selectedServiceForBooking?: string;
  selectedDoctorForBooking?: string;
  activeToast: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("smilora_lang");
      if (saved === "mr" || saved === "en") return saved;
    }
    return "en";
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("smilora_theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | undefined>();
  const [activeToast, setActiveToast] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("smilora_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("smilora_theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("smilora_lang", lang);
  };

  const openBooking = (preselectedService?: string, preselectedDoctor?: string) => {
    setSelectedServiceForBooking(preselectedService);
    setSelectedDoctorForBooking(preselectedDoctor);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => {
      setActiveToast((current) => (current === msg ? null : current));
    }, 4000);
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isDark,
        toggleTheme,
        t,
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedServiceForBooking,
        selectedDoctorForBooking,
        activeToast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
