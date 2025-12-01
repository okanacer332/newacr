"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("CTA");
  const { mode } = useViewMode();
  const isDesign = mode === "design";
  const modeKey = isDesign ? "design" : "code";

  const theme = {
    bgGradient: isDesign ? "from-purple-600 to-pink-600" : "from-blue-600 to-cyan-600",
    buttonText: isDesign ? "text-purple-600" : "text-blue-600",
  };

  return (
    // Section Padding azaltıldı: py-20 -> py-10
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        {/* Banner İç Padding azaltıldı: py-16 -> py-8 ve md:py-20 -> md:py-10 */}
        <div className={`relative overflow-hidden rounded-3xl px-6 py-8 text-center shadow-2xl md:px-12 md:py-10 bg-gradient-to-r ${theme.bgGradient}`}>
          
          {/* Arkaplan Desenleri */}
          <div className="absolute top-0 left-0 h-full w-full opacity-10 bg-[url('/images/grid.svg')]"></div>
          
          <div className="relative z-10">
            {/* Başlık boyutu ve alt boşluk (mb) optimize edildi */}
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {t(`${modeKey}.title`)}
            </h2>
            
            {/* Açıklama boşluğu azaltıldı: mb-10 -> mb-6 */}
            <p className="mx-auto mb-6 max-w-2xl text-base text-white/90 md:text-lg">
              {t(`${modeKey}.description`)}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                // Buton yüksekliği azaltıldı: py-4 -> py-3
                className={`rounded-full bg-white px-8 py-3 font-bold transition-transform hover:scale-105 shadow-lg ${theme.buttonText}`}
              >
                {t(`${modeKey}.button`)}
              </Link>
              <Link
                href="/portfolio"
                // Buton yüksekliği azaltıldı: py-4 -> py-3
                className="rounded-full border border-white px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                {t("viewPortfolio")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;