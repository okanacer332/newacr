"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useViewMode } from "@/app/context/ViewModeContext";
import menuData from "./menuData";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    if (item.path === "/" && item.sectionId) {
      const isHomePage = ["/", "/tr", "/en", "/ar", "/es", "/ru"].includes(pathname);
      if (isHomePage) {
         e.preventDefault();
         const element = document.getElementById(item.sectionId);
         if (element) {
           const headerOffset = 100;
           const elementPosition = element.getBoundingClientRect().top;
           const offsetPosition = elementPosition + window.scrollY - headerOffset;
           window.scrollTo({ top: offsetPosition, behavior: "smooth" });
           setNavigationOpen(false);
         }
      }
    } else {
      setNavigationOpen(false); 
    }
  };

  const isDesign = mode === "design";
  const glowColor = isDesign ? "shadow-purple-500/50" : "shadow-blue-500/50";
  const activeGradient = isDesign
    ? "from-purple-600 via-fuchsia-600 to-pink-600"
    : "from-blue-600 via-cyan-600 to-teal-400";

  return (
    <>
      {/* --- HEADER --- */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          stickyMenu
            ? "bg-white/70 py-4 shadow-lg backdrop-blur-xl dark:bg-black/70 border-b border-white/20"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 md:px-8">
          
          {/* 1. LOGO ALANI (Sol) */}
          <div className="flex items-center gap-3 relative z-50 shrink-0">
            <Link href="/" onClick={() => setNavigationOpen(false)} className="group flex items-center gap-3">
              {/* Logo İkonu */}
              <div className={`relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeGradient} text-white font-bold text-lg sm:text-xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                A
              </div>
              {/* Logo Yazısı (Mobilde GİZLİ - Yer tasarrufu için şart) */}
              <span className="text-xl font-bold tracking-tight text-black dark:text-white hidden sm:block">
                ACR<span className={`bg-gradient-to-r ${activeGradient} bg-clip-text text-transparent transition-all duration-500`}>TECH</span>
              </span>
            </Link>
          </div>

          {/* 2. MODE SWITCHER (ORTA - YAZILI VERSİYON) */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 
            ${stickyMenu ? "scale-90" : "scale-100"}`}
          >
            {/* Genişliği w-[180px] yaptık. Bu sayede yazılar sığacak. */}
            <div className="relative flex h-9 sm:h-12 w-[180px] sm:w-[280px] items-center rounded-full bg-white/10 p-1 sm:p-1.5 shadow-inner backdrop-blur-2xl border border-white/20 dark:bg-black/20 dark:border-white/10">
              <div
                className={`absolute h-[calc(100%-8px)] sm:h-9 w-[calc(50%-4px)] sm:w-[calc(50%-6px)] rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] top-1 sm:top-1.5 ${glowColor} ${
                  isDesign 
                    ? "left-1 sm:left-1.5 bg-gradient-to-r from-purple-600 to-pink-600" 
                    : "left-[calc(50%+2px)] sm:left-[calc(50%+1.5px)] bg-gradient-to-r from-blue-600 to-cyan-500"
                }`}
              />
              
              {/* Design Button */}
              <button
                onClick={() => setMode("design")}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-1 sm:gap-2 rounded-full transition-colors duration-300 ${
                  isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <span className={`text-sm sm:text-lg transition-transform duration-500 ${isDesign ? "scale-110 rotate-0" : "scale-100 rotate-12 opacity-50"}`}>🎨</span>
                {/* Yazıyı Geri Getirdik - Mobilde text-[10px] ile sığdırıyoruz */}
                <span className="text-[10px] sm:text-sm font-bold tracking-wide leading-none whitespace-nowrap">{t('designMode')}</span>
              </button>

              {/* Code Button */}
              <button
                onClick={() => setMode("code")}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-1 sm:gap-2 rounded-full transition-colors duration-300 ${
                  !isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <span className={`text-sm sm:text-lg transition-transform duration-500 ${!isDesign ? "scale-110 rotate-0" : "scale-100 -rotate-12 opacity-50"}`}>👨‍💻</span>
                {/* Yazıyı Geri Getirdik */}
                <span className="text-[10px] sm:text-sm font-bold tracking-wide leading-none whitespace-nowrap">{t('codeMode')}</span>
              </button>
            </div>
          </div>

          {/* 3. SAĞ TARAF (Hamburger + Dil - Sağda sabit) */}
          <div className="flex items-center gap-1 sm:gap-4 relative z-50 shrink-0">
            
            {/* Dil Değiştirici - Biraz küçülttük (scale-90) */}
            <div className="scale-90 sm:scale-100 origin-right">
               <LanguageSwitcher />
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="block p-1.5 sm:p-2 text-black dark:text-white hover:scale-110 transition-transform"
            >
               <div className="flex flex-col gap-[5px] items-end">
                 <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${navigationOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                 <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${navigationOpen ? "opacity-0 w-0" : "w-4"}`}></span>
                 <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${navigationOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}></span>
               </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- MENU OVERLAY (Değişiklik Yok) --- */}
      <div className={`fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center ${
        navigationOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <button 
          onClick={() => setNavigationOpen(false)} 
          className="absolute top-8 right-8 text-black dark:text-white p-2 hover:rotate-90 transition-transform duration-300"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <nav className="flex flex-col items-center gap-8">
          {menuData.map((item, key) => (
            <Link 
              key={key} 
              href={item.path || "#"} 
              onClick={(e) => handleLinkClick(e, item)}
              className="group relative text-3xl md:text-5xl font-bold text-black dark:text-white overflow-hidden"
            >
               <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600">
                 {t(`menu.${item.title}`)}
               </span>
               <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            onClick={() => setNavigationOpen(false)} 
            className={`mt-4 px-10 py-4 rounded-full text-white font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r ${activeGradient}`}
          >
            {t('getInTouch')}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;