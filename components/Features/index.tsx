"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import { useTranslations } from "next-intl"; // EKLENDİ

const Features = () => {
  const t = useTranslations("Features"); // Hook Eklendi
  const { mode } = useViewMode();
  const isDesign = mode === "design";
  
  // JSON anahtarına ulaşmak için yardımcı değişken (design veya code)
  const modeKey = isDesign ? "design" : "code";

  const theme = {
    badge: isDesign ? "bg-pink-100 text-pink-700" : "bg-cyan-100 text-cyan-700",
    titleColor: isDesign ? "text-purple-900 dark:text-purple-100" : "text-blue-900 dark:text-blue-100",
    gradient: isDesign ? "from-fuchsia-600 to-purple-600" : "from-cyan-600 to-blue-600",
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 lg:mb-32">
          {/* Sol: İçerik */}
          <div className="lg:w-1/2 order-2 lg:order-1">
             <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full ${theme.badge}`}>
               {/* Çeviri: f1.[design/code].badge */}
               {t(`f1.${modeKey}.badge`)}
             </span>
             <h3 className="text-3xl font-bold mb-6 text-black dark:text-white sm:text-4xl">
               {t(`f1.${modeKey}.title`)}
             </h3>
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
               {t(`f1.${modeKey}.description`)}
             </p>
             
             <ul className="space-y-4">
               {/* Liste elemanlarını dinamik çekiyoruz */}
               {[
                 t(`f1.${modeKey}.list1`),
                 t(`f1.${modeKey}.list2`),
                 t(`f1.${modeKey}.list3`)
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <span className={`flex h-6 w-6 items-center justify-center rounded-full text-white text-xs bg-gradient-to-r ${theme.gradient}`}>✓</span>
                   <span className="text-gray-700 dark:text-gray-200">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          {/* Sağ: Görsel (ikon ve text değişimi) */}
          <div className="lg:w-1/2 order-1 lg:order-2">
             <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center`}>
                <div className="text-center">
                  <span className="text-6xl block mb-2">{isDesign ? "🧭" : "🏗️"}</span>
                  <span className="font-mono text-sm opacity-50">
                    {t(`f1.${modeKey}.imgAlt`)}
                  </span>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 2 (Ters Yerleşim) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
           {/* Sol: Görsel */}
           <div className="lg:w-1/2 order-1">
             <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center`}>
                 <div className="text-center">
                  <span className="text-6xl block mb-2">{isDesign ? "💅" : "🔐"}</span>
                  <span className="font-mono text-sm opacity-50">
                    {t(`f2.${modeKey}.imgAlt`)}
                  </span>
                </div>
             </div>
           </div>

           {/* Sağ: İçerik */}
           <div className="lg:w-1/2 order-2">
             <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full ${theme.badge}`}>
               {t(`f2.${modeKey}.badge`)}
             </span>
             <h3 className="text-3xl font-bold mb-6 text-black dark:text-white sm:text-4xl">
               {t(`f2.${modeKey}.title`)}
             </h3>
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
               {t(`f2.${modeKey}.description`)}
             </p>
             <button className={`font-semibold transition-colors hover:underline ${theme.titleColor}`}>
                {t("cta")} &rarr;
             </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;