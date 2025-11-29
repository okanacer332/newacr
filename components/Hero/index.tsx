"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Link from "next/link";

const Hero = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  // İçerik Yönetimi
  const content = {
    title: isDesign ? "Modern Design Solutions" : "Next-Gen Engineering",
    subtitle: isDesign 
      ? "We craft exceptional user experiences through customer journey mapping, product UI design, and strategic UX consulting."
      : "We build scalable, high-performance systems with cutting-edge code quality and architectural excellence.",
    ctaPrimary: isDesign ? "Start Your Project" : "Start Coding",
    ctaSecondary: isDesign ? "View Our Work" : "View GitHub",
  };

  const theme = {
    gradientText: isDesign 
      ? "from-purple-600 via-fuchsia-500 to-pink-600" 
      : "from-blue-600 via-cyan-500 to-teal-400",
    buttonPrimary: isDesign
      ? "bg-purple-600 hover:bg-purple-700 shadow-purple-500/30"
      : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30",
    buttonSecondary: isDesign
      ? "text-purple-600 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-900/30"
      : "text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30",
  };

  return (
    <section className="relative overflow-hidden pt-35 md:pt-40 xl:pt-46 pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold border backdrop-blur-md transition-colors duration-500 ${
            isDesign 
              ? "border-purple-200 bg-purple-50/50 text-purple-700 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-300" 
              : "border-blue-200 bg-blue-50/50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
          }`}>
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isDesign ? "bg-purple-400" : "bg-blue-400"}`}></span>
              <span className={`relative inline-flex h-2 w-2 rounded-full ${isDesign ? "bg-purple-500" : "bg-blue-500"}`}></span>
            </span>
            {isDesign ? "✨ UX-UI Design Agency" : "🚀 Full-Stack Development"}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>
              {content.title}
            </span>
          </h1>

          <p className="mb-9 max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className={`w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${theme.buttonPrimary}`}
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href="/portfolio"
              className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 ${theme.buttonSecondary}`}
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;