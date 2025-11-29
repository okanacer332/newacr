"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl"; // EKLENDİ

const Services = () => {
  const t = useTranslations("Services"); // EKLENDİ
  const { mode } = useViewMode();
  const isDesign = mode === "design";
  
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // --- DESIGN DATA CONFIG ---
  const designKeys = ["ux", "product", "newBusiness", "journey", "crm"];
  const designIcons: Record<string, string> = {
    ux: "💡",
    product: "✨",
    newBusiness: "🚀",
    journey: "🗺️",
    crm: "📊"
  };

  // --- CODE DATA CONFIG ---
  const codeKeys = ["architect", "fullStack", "database", "devops", "api"];
  const codeIcons: Record<string, string> = {
    architect: "🏗️",
    fullStack: "💻",
    database: "🗄️",
    devops: "☁️",
    api: "🔌"
  };

  // Dinamik Veri Oluşturma (Çeviri + Config)
  const currentKeys = isDesign ? designKeys : codeKeys;
  const currentIcons = isDesign ? designIcons : codeIcons;
  const modeKey = isDesign ? "design" : "code";

  // Veri listesini oluşturuyoruz
  const services = currentKeys.map((key, index) => ({
    id: index + 1,
    // Örnek: t('design.items.ux.title')
    title: t(`${modeKey}.items.${key}.title`),
    desc: t(`${modeKey}.items.${key}.desc`),
    icon: currentIcons[key]
  }));

  // İlk 4 tanesini göster, showAll true ise hepsini göster
  const displayedServices = showAll ? services : services.slice(0, 4);
  const remainingCount = services.length - 4;

  const theme = {
    bg: isDesign ? "bg-purple-50/30" : "bg-blue-50/30",
    cardBorder: isDesign ? "hover:border-purple-300 focus:ring-purple-400" : "hover:border-blue-300 focus:ring-blue-400",
    iconBg: isDesign ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600",
    title: isDesign ? "text-purple-900 dark:text-purple-100" : "text-blue-900 dark:text-blue-100",
    button: isDesign ? "bg-purple-600 hover:bg-purple-700" : "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <section className={`py-20 ${theme.bg} dark:bg-transparent transition-colors duration-500`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <span className={`text-sm font-bold uppercase tracking-wider ${isDesign ? "text-purple-600" : "text-blue-600"}`}>
            {t("sectionSubtitle")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-black dark:text-white sm:text-4xl">
             {t(`${modeKey}.title`)}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t(`${modeKey}.description`)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className={`group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 transition-all hover:shadow-md ${theme.cardBorder} ring-offset-2 focus:outline-none focus:ring-2`}
              >
                <div className="flex items-start gap-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${theme.iconBg}`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-bold ${theme.title}`}>{service.title}</h3>
                      <motion.div 
                        animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                        className="text-gray-400"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                    <div className="relative mt-2">
                       {/* Collapsed View (Truncated) */}
                       <motion.p 
                         animate={{ opacity: expandedId === service.id ? 0 : 1, height: expandedId === service.id ? 0 : "auto" }}
                         className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1"
                       >
                         {service.desc}
                       </motion.p>

                       {/* Expanded View (Full) */}
                       <motion.div
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: expandedId === service.id ? 1 : 0, height: expandedId === service.id ? "auto" : 0 }}
                         className="overflow-hidden"
                       >
                         <p className="pt-2 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                           {service.desc}
                         </p>
                         <div className={`mt-4 inline-flex items-center text-sm font-bold ${isDesign ? "text-purple-600" : "text-blue-600"}`}>
                           {t("viewDetails")}
                         </div>
                       </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Logic */}
        {remainingCount > 0 || showAll ? (
           <div className="mt-12 text-center">
             <button
               onClick={() => setShowAll(!showAll)}
               className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold transition-all hover:-translate-y-1 hover:shadow-lg ${theme.button}`}
             >
               {showAll ? t("showLess") : `${t("loadMore")} (${remainingCount})`}
             </button>
           </div>
        ) : null}

      </div>
    </section>
  );
};

export default Services;