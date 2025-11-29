"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useViewMode } from "@/app/context/ViewModeContext";
import menuData from "./menuData";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl"; // EKLENDİ

const Header = () => {
  // EKLENDİ: Çeviri kancası
  const t = useTranslations("Header");
  
  const { mode, setMode } = useViewMode();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 20) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const isDesign = mode === "design";
  const glowColor = isDesign ? "shadow-purple-500/50" : "shadow-blue-500/50";
  const activeGradient = isDesign
    ? "from-purple-600 via-fuchsia-600 to-pink-600"
    : "from-blue-600 via-cyan-600 to-teal-400";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        stickyMenu
          ? "bg-white/70 py-4 shadow-lg backdrop-blur-xl dark:bg-black/70 border-b border-white/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 relative z-50 shrink-0">
          <Link href="/" onClick={() => setNavigationOpen(false)} className="group flex items-center gap-3">
            <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeGradient} text-white font-bold text-xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-black dark:text-white hidden lg:block">
              ACR<span className={`bg-gradient-to-r ${activeGradient} bg-clip-text text-transparent transition-all duration-500`}>TECH</span>
            </span>
          </Link>
        </div>

        {/* MODE SWITCHER */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 
          ${stickyMenu ? "scale-90" : "scale-100"}`}
        >
          <div className="relative flex h-10 w-[210px] sm:h-12 sm:w-[280px] items-center rounded-full bg-white/10 p-1 sm:p-1.5 shadow-inner backdrop-blur-2xl border border-white/20 dark:bg-black/20 dark:border-white/10">
            <div
              className={`absolute h-8 sm:h-9 w-[calc(50%-4px)] sm:w-[calc(50%-6px)] rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${glowColor} ${
                isDesign 
                  ? "left-1 sm:left-1.5 bg-gradient-to-r from-purple-600 to-pink-600" 
                  : "left-[calc(50%+2px)] sm:left-[calc(50%+1.5px)] bg-gradient-to-r from-blue-600 to-cyan-500"
              }`}
            />
            <button
              onClick={() => setMode("design")}
              className={`relative z-10 w-1/2 flex items-center justify-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              <span className={`text-base sm:text-lg transition-transform duration-500 ${isDesign ? "scale-125 rotate-0" : "scale-100 rotate-12 opacity-50"}`}>🎨</span>
              {/* GÜNCELLENDİ: Çeviri kullanıldı */}
              <span className="tracking-wide">{t('designMode')}</span>
            </button>
            <button
              onClick={() => setMode("code")}
              className={`relative z-10 w-1/2 flex items-center justify-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                !isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              <span className={`text-base sm:text-lg transition-transform duration-500 ${!isDesign ? "scale-125 rotate-0" : "scale-100 -rotate-12 opacity-50"}`}>👨‍💻</span>
              {/* GÜNCELLENDİ: Çeviri kullanıldı */}
              <span className="tracking-wide">{t('codeMode')}</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-50 shrink-0">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {menuData.map((item, key) => (
                <li key={key}>
                  <Link href={item.path || "#"} className="text-sm font-medium text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors">
                    {/* GÜNCELLENDİ: Dinamik çeviri */}
                    {t(`menu.${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden sm:block">
             <LanguageSwitcher />
          </div>

          <Link
            href="/contact"
            className={`hidden lg:flex items-center justify-center rounded-full bg-black dark:bg-white px-5 py-2 text-sm font-bold text-white dark:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            {/* GÜNCELLENDİ: Çeviri kullanıldı */}
            {t('letsTalk')}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="block lg:hidden p-2 text-black dark:text-white"
          >
             <span className={`block h-0.5 w-6 bg-current mb-1.5 transition-transform ${navigationOpen ? "rotate-45 translate-y-2" : ""}`}></span>
             <span className={`block h-0.5 w-6 bg-current mb-1.5 transition-opacity ${navigationOpen ? "opacity-0" : ""}`}></span>
             <span className={`block h-0.5 w-6 bg-current transition-transform ${navigationOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

       {/* Mobile Menu Overlay */}
       <div className={`fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-all duration-300 flex flex-col justify-center items-center lg:hidden ${
        navigationOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <button onClick={() => setNavigationOpen(false)} className="absolute top-6 right-6 text-2xl p-2">✕</button>
        
        <div className="mb-8 block sm:hidden">
          <LanguageSwitcher />
        </div>

        <nav className="flex flex-col items-center gap-6">
          {menuData.map((item, key) => (
            <Link key={key} href={item.path || "#"} onClick={() => setNavigationOpen(false)} className="text-xl font-bold text-black dark:text-white">
               {/* GÜNCELLENDİ: Dinamik çeviri */}
               {t(`menu.${item.title}`)}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setNavigationOpen(false)} className={`mt-4 px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg bg-gradient-to-r ${activeGradient}`}>
            {/* GÜNCELLENDİ: Çeviri kullanıldı */}
            {t('getInTouch')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;