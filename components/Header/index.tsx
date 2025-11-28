"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useViewMode } from "@/app/context/ViewModeContext";
import menuData from "./menuData";

const Header = () => {
  const { mode, setMode } = useViewMode();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Scroll Takibi
  const handleStickyMenu = () => {
    if (window.scrollY >= 50) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Mod Renkleri
  const isDesign = mode === "design";
  const activeGradient = isDesign
    ? "from-purple-600 to-fuchsia-600"
    : "from-blue-600 to-cyan-600";

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-white/80 py-4 shadow-md backdrop-blur-md dark:bg-black/80"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 2xl:px-0">
        
        {/* --- SOL: LOGO ALANI --- */}
        <div className="flex items-center gap-4 shrink-0 z-50">
          <Link href="/" className="flex items-center gap-2" onClick={() => setNavigationOpen(false)}>
            <div className={`relative flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeGradient} text-white font-bold text-lg lg:text-xl shadow-lg transition-colors duration-500`}>
              A
            </div>
            <span className="text-xl font-bold text-black dark:text-white hidden sm:block">
              ACR<span className={`bg-gradient-to-r ${activeGradient} bg-clip-text text-transparent transition-all duration-500`}>TECH</span>
            </span>
          </Link>
        </div>

        {/* --- ORTA: SWITCH BUTONU (YAZILAR DÜZELTİLDİ) --- */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-40
          ${stickyMenu ? "scale-90 lg:scale-75 origin-center" : "scale-100"}`}
        >
          {/* Mobil için w-48 (küçük), Masaüstü için w-64 (büyük) */}
          <div className="relative flex h-10 w-48 lg:h-12 lg:w-64 items-center rounded-full bg-gray-100 p-1 shadow-inner dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            
            {/* Kayan Arka Plan */}
            <div
              className={`absolute h-8 lg:h-10 w-1/2 rounded-full bg-gradient-to-r shadow-md transition-all duration-500 ease-out ${
                isDesign 
                  ? "left-1 from-purple-600 to-fuchsia-600" 
                  : "left-[calc(50%-4px)] translate-x-1 from-blue-600 to-cyan-600"
              }`}
            />
            
            {/* Butonlar: DÜZELTME BURADA YAPILDI */}
            <button
              onClick={() => setMode("design")}
              className={`z-10 w-1/2 flex items-center justify-center gap-1 text-[10px] sm:text-xs lg:text-sm font-bold transition-colors duration-300 ${
                isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400"
              }`}
            >
              <span className="text-base lg:text-lg">🎨</span>
              <span>DESIGN</span>
            </button>
            <button
              onClick={() => setMode("code")}
              className={`z-10 w-1/2 flex items-center justify-center gap-1 text-[10px] sm:text-xs lg:text-sm font-bold transition-colors duration-300 ${
                !isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400"
              }`}
            >
              <span className="text-base lg:text-lg">👨‍💻</span>
              <span>CODE</span>
            </button>
          </div>
        </div>

        {/* --- SAĞ: MENU & HAMBURGER --- */}
        <div className="flex items-center gap-4 shrink-0 z-50">
          
          {/* Masaüstü Menü (Mobilde Gizli) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {menuData.slice(0, 4).map((item, key) => (
                <li key={key} className="hover:text-primary">
                  <Link href={item.path || "#"} className="text-sm font-medium text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Masaüstü CTA Butonu (Mobilde Gizli) */}
          <Link
            href="/contact"
            className={`hidden md:flex items-center justify-center rounded-full bg-gradient-to-r ${activeGradient} text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              stickyMenu ? "h-10 px-5 text-sm" : "h-12 px-8 text-base"
            }`}
          >
            {stickyMenu ? "Contact" : "Get in Touch"}
          </Link>

          {/* Hamburger Butonu (Sadece Mobilde) */}
          <button
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="block lg:hidden relative z-50 p-2"
            aria-label="Toggle Menu"
          >
            <span className={`block h-0.5 w-6 bg-black dark:bg-white mb-1.5 transition-all duration-300 ${navigationOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black dark:bg-white mb-1.5 transition-all duration-300 ${navigationOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${navigationOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* --- MOBİL MENÜ (OVERLAY) --- */}
      <div className={`fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-all duration-300 flex flex-col justify-center items-center lg:hidden ${
        navigationOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <nav className="flex flex-col items-center gap-8">
          {menuData.map((item, key) => (
            <Link
              key={key}
              href={item.path || "#"}
              onClick={() => setNavigationOpen(false)}
              className="text-2xl font-bold text-black dark:text-white hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
          
          {/* Mobilde Gizlenen Contact Butonu Burada */}
          <Link
            href="/contact"
            onClick={() => setNavigationOpen(false)}
            className={`mt-4 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg bg-gradient-to-r ${activeGradient}`}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;