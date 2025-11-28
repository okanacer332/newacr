"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useViewMode } from "@/app/context/ViewModeContext";

const Hero = () => {
  const t = useTranslations("Hero");
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  // Mod'a göre içerik ve stil ayarları
  const theme = {
    badge: isDesign ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-blue-100 text-blue-700 border-blue-200",
    gradientText: isDesign ? "from-purple-600 to-fuchsia-600" : "from-blue-600 to-cyan-500",
    blobColor: isDesign ? "bg-purple-400" : "bg-blue-400",
    buttonBg: isDesign ? "bg-purple-600 hover:bg-purple-700" : "bg-blue-600 hover:bg-blue-700",
    heroImage: isDesign ? "/images/hero/hero-light.svg" : "/images/hero/hero-dark.svg", // Örnek olarak görsel de değişebilir
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 lg:pt-48">
      {/* Arka Plan Efektleri (Blur Blobs) */}
      <div className={`absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse ${theme.blobColor}`} />
      <div className={`absolute bottom-20 right-1/4 h-[400px] w-[400px] rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse delay-1000 ${isDesign ? "bg-pink-400" : "bg-cyan-400"}`} />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* SOL TARAFI: Metin Alanı */}
          <div className="lg:w-1/2 text-center lg:text-left transition-all duration-500">
            
            {/* Dinamik Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold mb-6 transition-colors duration-500 ${theme.badge}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDesign ? "bg-purple-500" : "bg-blue-500"}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDesign ? "bg-purple-500" : "bg-blue-500"}`}></span>
              </span>
              {isDesign ? "UI/UX & Design Studio" : "Full-Stack Development Lab"}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
              {isDesign ? (
                <>
                  Hayallerinizi <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>Tasarlıyoruz</span>
                </>
              ) : (
                <>
                  Geleceği <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>Kodluyoruz</span>
                </>
              )}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {isDesign 
                ? "Estetik ve fonksiyonelliğin mükemmel uyumu. Kullanıcı deneyimini sanatla buluşturuyor, markanızın dijital yüzünü en modern trendlerle şekillendiriyoruz."
                : "Güçlü algoritmalar, ölçeklenebilir mimari ve kusursuz performans. İşletmenizin dijital ikizini en güncel teknolojilerle inşa ediyoruz."
              }
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className={`rounded-full px-8 py-4 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${theme.buttonBg}`}>
                {t("getStarted")}
              </button>
              <button className="rounded-full px-8 py-4 text-black dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                {isDesign ? "View Portfolio" : "View Documentation"}
              </button>
            </div>
          </div>

          {/* SAĞ TARAFI: Görsel Alanı */}
          <div className="lg:w-1/2 relative">
             <div className="relative aspect-square w-full max-w-lg mx-auto">
                {/* Buraya moduna göre değişen interaktif bir görsel veya Lottie animasyonu gelebilir */}
                {/* Şimdilik mevcut görseli stilize ederek kullanıyoruz */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr opacity-10 rotate-3 ${isDesign ? "from-purple-500 to-pink-500" : "from-blue-500 to-cyan-500"}`}></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-2">
                    {/* Placeholder for Dynamic Content */}
                    <div className="h-full w-full bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center">
                        {isDesign ? (
                             // DESIGN MODU GÖRSELİ (Placeholder)
                            <div className="text-center">
                                <span className="text-6xl">🎨</span>
                                <p className="mt-4 font-semibold text-purple-600">UI/UX Canvas</p>
                            </div>
                        ) : (
                             // CODE MODU GÖRSELİ (Placeholder)
                            <div className="text-center">
                                <span className="text-6xl">⚛️</span>
                                <p className="mt-4 font-mono font-semibold text-blue-600">{'< CodeBase />'}</p>
                            </div>
                        )}
                        {/* Not: Buraya gerçek image component'ini geri koyabiliriz, 
                            ama konsepti göstermek için şimdilik ikon koydum. 
                            Mevcut Image componentini buraya taşıyabilirsin. */}
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;