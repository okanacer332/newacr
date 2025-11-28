"use client";
import { useTranslations } from "next-intl";
import { useViewMode } from "@/app/context/ViewModeContext";
import { motion } from "framer-motion"; // Animasyon için (framer-motion yüklüydü)

const Hero = () => {
  const t = useTranslations("Hero");
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  // Tema Konfigürasyonu
  const theme = {
    gradientText: isDesign ? "from-purple-500 via-fuchsia-500 to-pink-500" : "from-blue-500 via-cyan-500 to-teal-400",
    blobColor: isDesign ? "bg-purple-500" : "bg-blue-500",
    buttonMain: isDesign ? "bg-purple-600 hover:bg-purple-700 shadow-purple-500/30" : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30",
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-36 pb-20 lg:pt-48 flex items-center">
      
      {/* --- ARKA PLAN EFEKTLERİ (Ambient Blobs) --- */}
      <div className={`absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse transition-colors duration-1000 ${theme.blobColor}`} />
      <div className={`absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse delay-700 transition-colors duration-1000 ${isDesign ? "bg-pink-500" : "bg-cyan-500"}`} />
      
      {/* Izgara Deseni */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] dark:opacity-[0.1]" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- SOL TARAFI: TIPOGRAFİ & MESAJ --- */}
          <div className="lg:w-1/2 text-center lg:text-left transition-all duration-500">
            
            {/* Badge */}
            <motion.div 
              key={mode} // Mod değişince animasyonu tetikler
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/50 dark:bg-black/50 backdrop-blur-md text-sm font-semibold mb-8 transition-colors duration-500 ${isDesign ? "border-purple-200 text-purple-700 dark:text-purple-300" : "border-blue-200 text-blue-700 dark:text-blue-300"}`}
            >
              <span className={`flex h-2 w-2 rounded-full ${isDesign ? "bg-purple-500 animate-ping" : "bg-blue-500 animate-ping"}`} />
              {isDesign ? "UI/UX & Creative Studio" : "Full-Stack Engineering Lab"}
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-black dark:text-white tracking-tight">
              {isDesign ? (
                <>
                  Design Beyond <br />
                  <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>Imagination</span>
                </>
              ) : (
                <>
                  Code That <br />
                  <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>Scales</span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isDesign 
                ? "Estetik sadece başlangıç. Markanızın ruhunu yansıtan, kullanıcıyı içine çeken ve akılda kalan dijital deneyimler tasarlıyoruz."
                : "Sağlam temeller üzerine kurulu, milyonlarca isteği yönetebilen, güvenli ve modern yazılım mimarileri inşa ediyoruz."
              }
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className={`w-full sm:w-auto rounded-full px-8 py-4 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${theme.buttonMain}`}>
                {t("getStarted")}
              </button>
              <button className="w-full sm:w-auto rounded-full px-8 py-4 text-black dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all backdrop-blur-sm">
                {isDesign ? "View Projects" : "See Documentation"}
              </button>
            </div>
          </div>

          {/* --- SAĞ TARAFI: INTERAKTIF MOCKUP (CSS ONLY) --- */}
          <div className="lg:w-1/2 w-full perspective-1000">
             <motion.div
                key={mode} // Mod değişince kart döner
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative aspect-[4/3] w-full max-w-2xl mx-auto"
             >
                {/* CARD CONTAINER */}
                <div className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-colors duration-500 ${isDesign ? "shadow-purple-500/20" : "shadow-blue-500/20"}`}>
                    
                    {/* --- WINDOW HEADER (Traffic Lights) --- */}
                    <div className="h-8 bg-black/5 dark:bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <div className="ml-auto text-[10px] font-mono opacity-50">
                            {isDesign ? "Figma - Untitled.fig" : "VS Code - main.tsx"}
                        </div>
                    </div>

                    {/* --- CONTENT AREA --- */}
                    <div className="h-full w-full p-4 flex gap-4">
                        
                        {isDesign ? (
                            // --- DESIGN MODU: FIGMA UI SIMULASYONU ---
                            <>
                                {/* Sidebar (Layers) */}
                                <div className="w-1/4 h-[80%] bg-black/5 dark:bg-white/5 rounded-lg p-3 flex flex-col gap-2">
                                    <div className="h-2 w-1/2 bg-purple-400/30 rounded mb-2"></div>
                                    <div className="h-2 w-3/4 bg-gray-400/20 rounded"></div>
                                    <div className="h-2 w-2/3 bg-gray-400/20 rounded"></div>
                                    <div className="h-2 w-full bg-purple-500/20 rounded border border-purple-500/30 mt-2"></div>
                                </div>
                                {/* Canvas */}
                                <div className="flex-1 h-[80%] bg-white dark:bg-black rounded-lg shadow-inner relative overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-800">
                                    {/* Design Elements */}
                                    <div className="absolute top-4 left-4 w-32 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-sm border border-purple-100 transform -rotate-2"></div>
                                    <div className="absolute bottom-12 right-12 w-24 h-24 bg-gradient-to-tr from-fuchsia-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                                    
                                    {/* Cursor */}
                                    <div className="absolute top-1/2 left-1/2 transform translate-x-4 translate-y-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                                            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="#7C3AED" stroke="white"/>
                                        </svg>
                                        <div className="bg-purple-600 text-white text-[10px] px-1.5 rounded ml-4 mt-1">You</div>
                                    </div>
                                    
                                    <div className="text-center z-10">
                                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                            Hello.
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                             // --- CODE MODU: VS CODE UI SIMULASYONU ---
                            <>
                                {/* Sidebar (Explorer) */}
                                <div className="w-12 h-[80%] bg-black/5 dark:bg-white/5 rounded-lg flex flex-col items-center py-4 gap-4">
                                    <div className="w-6 h-6 rounded bg-blue-500/20"></div>
                                    <div className="w-6 h-6 rounded bg-gray-400/20"></div>
                                    <div className="w-6 h-6 rounded bg-gray-400/20"></div>
                                </div>
                                {/* Editor Area */}
                                <div className="flex-1 h-[80%] bg-[#1e1e1e] rounded-lg shadow-inner p-4 font-mono text-xs overflow-hidden border border-gray-700 relative">
                                    {/* Line Numbers */}
                                    <div className="absolute left-3 top-4 text-gray-600 flex flex-col gap-1 text-right select-none">
                                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                                    </div>
                                    {/* Code */}
                                    <div className="ml-6 flex flex-col gap-1">
                                        <div className="text-pink-400">import <span className="text-blue-300">React</span> from <span className="text-orange-300">'react'</span>;</div>
                                        <div className="h-1"></div>
                                        <div className="text-blue-300">const <span className="text-yellow-300">App</span> = () ={'>'} {'{'}</div>
                                        <div className="pl-4 text-white">
                                            return (
                                        </div>
                                        <div className="pl-8 text-green-300">
                                            {'<div className="magic">'}
                                        </div>
                                        <div className="pl-12 text-white">
                                            Hello World 🚀
                                        </div>
                                        <div className="pl-8 text-green-300">
                                            {'</div>'}
                                        </div>
                                        <div className="pl-4 text-white">);</div>
                                        <div className="text-blue-300">{'}'};</div>
                                    </div>

                                    {/* Cursor Animation */}
                                    <div className="absolute top-[108px] left-[130px] w-0.5 h-4 bg-blue-400 animate-pulse"></div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;