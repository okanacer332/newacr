"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Image from "next/image";

const Features = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

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
               {isDesign ? "STRATEGY" : "ARCHITECTURE"}
             </span>
             <h3 className="text-3xl font-bold mb-6 text-black dark:text-white sm:text-4xl">
               {isDesign ? "Kullanıcı Yolculuğu Haritalama" : "Mikroservis Mimarisi & Ölçeklenebilirlik"}
             </h3>
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
               {isDesign 
                 ? "Müşterilerinizin markanızla etkileşime girdiği her anı analiz ediyoruz. Acı noktalarını tespit edip, onları memnuniyet anlarına dönüştüren stratejik haritalar çıkarıyoruz."
                 : "Yüksek trafikli sistemler için monolitik yapıları modern mikroservis mimarisine dönüştürüyoruz. Konteynerizasyon (Docker/K8s) ile sisteminiz her yüke hazır."}
             </p>
             
             <ul className="space-y-4">
               {[
                 isDesign ? "Persona Analizi" : "Load Balancing",
                 isDesign ? "Touchpoint Optimizasyonu" : "Database Sharding",
                 isDesign ? "Dönüşüm Hunisi Tasarımı" : "High Availability"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <span className={`flex h-6 w-6 items-center justify-center rounded-full text-white text-xs bg-gradient-to-r ${theme.gradient}`}>✓</span>
                   <span className="text-gray-700 dark:text-gray-200">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          {/* Sağ: Görsel */}
          <div className="lg:w-1/2 order-1 lg:order-2">
             <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center`}>
                {/* Placeholder Image or Icon */}
                <div className="text-center">
                  <span className="text-6xl block mb-2">{isDesign ? "🧭" : "🏗️"}</span>
                  <span className="font-mono text-sm opacity-50">{isDesign ? "Journey Map" : "System Diagram"}</span>
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
                  <span className="font-mono text-sm opacity-50">{isDesign ? "UI Kit" : "Security Layer"}</span>
                </div>
             </div>
           </div>

           {/* Sağ: İçerik */}
           <div className="lg:w-1/2 order-2">
             <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full ${theme.badge}`}>
               {isDesign ? "AESTHETICS" : "SECURITY"}
             </span>
             <h3 className="text-3xl font-bold mb-6 text-black dark:text-white sm:text-4xl">
               {isDesign ? "Modern & Trend UI Tasarımı" : "Kurumsal Veri Güvenliği (B2B)"}
             </h3>
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
               {isDesign 
                 ? "Sadece güzel görünen değil, hissettiren tasarımlar. Glassmorphism, 3D elementler ve mikro-animasyonlarla kullanıcı arayüzünüzü modern sanat eserine çeviriyoruz."
                 : "B2B platformlarınızda uçtan uca şifreleme, rol tabanlı erişim kontrolü (RBAC) ve düzenli penetrasyon testleri ile verileriniz her zaman güvende."}
             </p>
             <button className={`font-semibold transition-colors hover:underline ${theme.titleColor}`}>
                Daha fazlasını keşfet &rarr;
             </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;