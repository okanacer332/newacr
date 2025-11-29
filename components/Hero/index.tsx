"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // EKLENDİ

const Hero = () => {
  const t = useTranslations("Hero"); // EKLENDİ
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  // İçerik Yönetimi (Çeviri Entegrasyonu)
  const content = {
    title: isDesign ? t("design.title") : t("code.title"),
    subtitle: isDesign ? t("design.subtitle") : t("code.subtitle"),
    ctaPrimary: isDesign ? t("design.ctaPrimary") : t("code.ctaPrimary"),
    ctaSecondary: isDesign ? t("design.ctaSecondary") : t("code.ctaSecondary"),
    badge: isDesign ? t("design.badge") : t("code.badge"), // Badge metnini de buraya aldım
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
    blobColor: isDesign 
      ? "from-purple-400/40 to-pink-400/40" 
      : "from-blue-400/40 to-cyan-400/40",
    dotColor: isDesign ? "bg-purple-600" : "bg-blue-600",
    pingColor: isDesign ? "bg-purple-500" : "bg-blue-500"
  };

  return (
    <section className="relative overflow-hidden pt-35 md:pt-40 xl:pt-46 pb-20">
      
      {/* --- BACKGROUND ANIMATED BLOB --- */}
      <div className="absolute inset-0 -z-10 flex justify-center items-start overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-0 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-gradient-to-b blur-[80px] sm:blur-[100px] dark:opacity-20 ${theme.blobColor}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className={`mb-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-bold border backdrop-blur-md transition-colors duration-500 ${
            isDesign 
              ? "border-purple-200 bg-purple-50/80 text-purple-900 dark:border-purple-800 dark:bg-purple-900/40 dark:text-purple-100" 
              : "border-blue-200 bg-blue-50/80 text-blue-900 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-100"
          }`}>
            
            {/* --- CUSTOM PULSING DOT --- */}
            <div className="relative flex h-3 w-3 items-center justify-center">
              {/* 1. Dış Halka (Radar Efekti) */}
              <motion.span
                className={`absolute h-full w-full rounded-full opacity-70 ${theme.pingColor}`}
                animate={{ 
                  scale: [1, 2.5],
                  opacity: [0.7, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              {/* 2. İç Nokta (Sabit) */}
              <span className={`relative h-2.5 w-2.5 rounded-full ${theme.dotColor} shadow-sm`}></span>
            </div>
            {/* -------------------------- */}
            
            {/* Badge Text Güncellendi */}
            {content.badge}
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
              href="/portfolio" // Burası 'ctaSecondary' path'i olabilir, kodda sabit portfolio idi, öyle bıraktım.
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