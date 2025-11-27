"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing"; // @ alias'ı tsconfig'de tanımlı
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative ml-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary transition-colors duration-300"
      >
        <span className="uppercase">{locale}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-dark-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-50">
          <button
            onClick={() => handleLanguageChange("en")}
            disabled={isPending}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
              locale === "en"
                ? "text-primary font-bold"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("tr")}
            disabled={isPending}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
              locale === "tr"
                ? "text-primary font-bold"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Türkçe
          </button>
        </div>
      )}
    </div>
  );
}