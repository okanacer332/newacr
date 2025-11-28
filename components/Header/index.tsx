"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useViewMode } from "@/app/context/ViewModeContext"; // Modu çekiyoruz
import menuData from "./menuData";

const Header = () => {
  const { mode, setMode } = useViewMode(); // Design | Code
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Scroll takibi
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
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* LOGO ALANI */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeGradient} text-white font-bold text-xl shadow-lg`}>
              A
            </div>
            <span className="text-xl font-bold text-black dark:text-white hidden sm:block">
              ACR<span className={`bg-gradient-to-r ${activeGradient} bg-clip-text text-transparent`}>TECH</span>
            </span>
          </Link>
        </div>

        {/* ORTA ALAN: SWITCHER (Toggle) */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${stickyMenu ? "scale-75 origin-center" : "scale-100"}`}>
          <div className="relative flex h-12 w-64 items-center rounded-full bg-gray-100 p-1 shadow-inner dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            {/* Kayan Arka Plan */}
            <div
              className={`absolute h-10 w-1/2 rounded-full bg-gradient-to-r shadow-md transition-all duration-500 ease-out ${
                isDesign ? "left-1 from-purple-600 to-fuchsia-600" : "left-[calc(50%-4px)] translate-x-1 from-blue-600 to-cyan-600"
              }`}
            />
            
            {/* Butonlar */}
            <button
              onClick={() => setMode("design")}
              className={`z-10 w-1/2 text-sm font-bold transition-colors duration-300 ${isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400"}`}
            >
              🎨 DESIGN
            </button>
            <button
              onClick={() => setMode("code")}
              className={`z-10 w-1/2 text-sm font-bold transition-colors duration-300 ${!isDesign ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400"}`}
            >
              👨‍💻 CODE
            </button>
          </div>
        </div>

        {/* SAĞ ALAN: MENU & CTA */}
        <div className="flex items-center gap-4">
          {/* Masaüstü Menü */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {menuData.slice(0, 3).map((item, key) => (
                <li key={key} className="hover:text-primary">
                  <Link href={item.path || "#"} className="text-sm font-medium text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dinamik CTA Butonu */}
          <Link
            href="/contact"
            className={`flex items-center justify-center rounded-full bg-gradient-to-r ${activeGradient} text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              stickyMenu ? "h-10 px-5 text-sm" : "h-12 px-8 text-base"
            }`}
          >
            {stickyMenu ? "Contact" : "Get in Touch"}
          </Link>

          {/* Hamburger (Mobil) */}
          <button
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="block lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-black dark:bg-white mb-1.5"></span>
            <span className="block h-0.5 w-6 bg-black dark:bg-white mb-1.5"></span>
            <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;