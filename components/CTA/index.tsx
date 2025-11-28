"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Link from "next/link";

const CTA = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  const theme = {
    bgGradient: isDesign ? "from-purple-600 to-pink-600" : "from-blue-600 to-cyan-600",
    buttonText: isDesign ? "text-purple-600" : "text-blue-600",
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className={`relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-2xl md:px-16 md:py-20 bg-gradient-to-r ${theme.bgGradient}`}>
          
          {/* Arkaplan Desenleri */}
          <div className="absolute top-0 left-0 h-full w-full opacity-10 bg-[url('/images/grid.svg')]"></div>
          
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {isDesign ? "Markanızın Hikayesini Birlikte Yazalım" : "Geleceğin Teknolojisini Bugünden Kuralım"}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
              {isDesign 
                ? "Tasarım odaklı düşünce yapımızla projelerinize değer katmaya hazırız. Hemen bir kahve içelim."
                : "Karmaşık yazılım problemlerinize en net çözümleri sunuyoruz. Projenizi teknik ekibimizle değerlendirin."}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={`rounded-full bg-white px-8 py-4 font-bold transition-transform hover:scale-105 shadow-lg ${theme.buttonText}`}
              >
                {isDesign ? "Projeyi Başlat" : "Teklif İste"}
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
              >
                Portfolyoyu İncele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;