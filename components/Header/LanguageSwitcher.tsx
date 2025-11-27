"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing"; // routing'i buradan çekiyoruz
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const locale = useLocale(); // Şu anki aktif dil
  const router = useRouter();
  const pathname = usePathname();
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // Dil verileri: Bayraklar ve etiketler
  const languages = {
    tr: { label: "TR", flag: "🇹🇷", longName: "Turkish" },
    en: { label: "EN", flag: "🇺🇸", longName: "English" },
  };

  // Dropdown dışına tıklanırsa kapat
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 font-medium text-black dark:text-white hover:text-primary transition-colors duration-300"
      >
        {/* Aktif dilin bayrağı ve kısaltması */}
        <span className="text-xl">{languages[locale as keyof typeof languages].flag}</span>
        <span>{languages[locale as keyof typeof languages].label}</span>
        
        {/* Aşağı ok ikonu */}
        <svg
          className={`h-4 w-4 fill-current transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Açılır Menü */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-2 w-32 rounded-md border border-stroke bg-white p-2 shadow-solid-12 dark:border-strokedark dark:bg-black ${
          dropdownOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        } transition-all duration-300 z-50`}
      >
        <div className="flex flex-col gap-1">
          {/* routing.locales üzerinden dönerek listeyi oluşturuyoruz (tr önce gelir) */}
          {routing.locales.map((cur) => (
            <button
              key={cur}
              onClick={() => handleLanguageChange(cur)}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-hoverdark ${
                locale === cur
                  ? "bg-gray-100 dark:bg-hoverdark text-primary font-semibold"
                  : "text-black dark:text-white"
              }`}
            >
              <span className="text-xl">{languages[cur as keyof typeof languages].flag}</span>
              <span>{languages[cur as keyof typeof languages].longName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;