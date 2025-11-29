"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; 
    const newPath = segments.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  const languages = [
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        // GÜNCELLEME: padding ve gap değerleri mobilde küçültüldü
        className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium text-black transition-colors hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      >
        <span className="text-base sm:text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline uppercase">{currentLang.code}</span>
        <svg
          className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 sm:w-40 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg dark:border-gray-800 dark:bg-black z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-xs sm:text-sm transition-colors hover:bg-gray-50 dark:hover:bg-white/5 ${
                locale === lang.code ? "font-bold text-primary" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <span className="text-base sm:text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;