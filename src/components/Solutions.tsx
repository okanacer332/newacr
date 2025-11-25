"use client";

import { useScroll, motion, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Activity, TrendingUp, Cpu } from "lucide-react";

const SECTIONS = [
  {
    id: 1,
    tag: "ENDÜSTRİYEL IOT",
    title: "Üretimde Kör Nokta Yok.",
    subtitle: "Fabrikanızın nabzını milisaniye hızında tutun.",
    desc: "Bandın başında kimin olduğunu tahmin etmeyin. Real-Time Telemetry ve WebSocket altyapımızla her veriyi, her hareketi anlık olarak işleyin.",
    stats: [
      { label: "Verimlilik Artışı", value: "%30" },
      { label: "Anlık Takip", value: "Real-Time" },
    ],
    video: "/assets/videos/production-loop.mp4",
  },
  {
    id: 2,
    tag: "ENFLASYON MUHASEBESİ",
    title: "Paranızın Gerçek Değeri.",
    subtitle: "Nominal kâr yanılgısına son verin.",
    desc: "Enflasyonist ortamda standart ERP'ler sizi yanıltır. Inflation-Adjusted Costing algoritmamızla hammaddenin yerine koyma maliyetini hesaplayın.",
    stats: [
      { label: "Fiyatlama Hatası", value: "%0" },
      { label: "Sermaye Koruma", value: "Tam" },
    ],
    video: "/assets/videos/stock-loop.mp4",
  },
  {
    id: 3,
    tag: "FINTECH EKOSİSTEMİ",
    title: "Kaosu Yönetin.",
    subtitle: "Binlerce daire, tek bir finansal merkez.",
    desc: "Toplu yaşam alanlarında aidat ve sayaç okuma süreçlerini otonom hale getirin. Asenkron Java mimarisi ile finansal operasyonları %90 hızlandırın.",
    stats: [
      { label: "Operasyon Tasarrufu", value: "%90" },
      { label: "Tahsilat Hızı", value: "2x" },
    ],
    video: "/assets/videos/management-loop.mp4",
  }
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll değişimine göre aktif bölümü belirle
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
        const index = Math.min(
            Math.floor(latest * SECTIONS.length),
            SECTIONS.length - 1
        );
        setActiveSection(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-black">
      
      {/* --- 1. SABİT ARKA PLAN (THEATER MODE) --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          {SECTIONS.map((section, index) => (
            activeSection === index && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 1.1 }} // Hafif zoom ile giriş
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <video
                  className="w-full h-full object-cover opacity-50" // Yazılar okunsun diye opacity düşük
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={section.video}
                />
                {/* Sinematik Gradient: Alttan siyaha doğru kararan geçiş */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* --- 2. SCROLL EDİLEBİLİR İÇERİK --- */}
      {/* İçeriği videonun üzerine bindiriyoruz */}
      <div className="relative z-10 -mt-[100vh]">
        {SECTIONS.map((section, index) => (
          <div key={section.id} className="h-screen w-full flex flex-col justify-end pb-24 md:justify-center md:pb-0 px-6 md:px-24">
            
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto w-full"
            >
                {/* Üst Tag */}
                <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-[#2997ff] text-xs font-bold tracking-widest mb-6 backdrop-blur-md">
                    {section.tag}
                </span>

                {/* Apple Tarzı Dev Başlık */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                    {section.title}
                </h2>
                
                <h3 className="text-2xl md:text-4xl text-gray-400 font-medium mb-8">
                    {section.subtitle}
                </h3>

                {/* BENTO GRID LAYOUT - Detaylar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
                    
                    {/* Açıklama Kutusu */}
                    <div className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-[#111111]/80 backdrop-blur-xl border border-white/5 hover:bg-[#161616] transition-colors">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            {section.desc}
                        </p>
                    </div>

                    {/* İstatistik Kutusu */}
                    <div className="md:col-span-1 p-6 md:p-8 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-between group hover:border-[#2997ff]/30 transition-all">
                        <Activity className="text-[#2997ff] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            {section.stats.map((stat, i) => (
                                <div key={i} className="mb-4 last:mb-0">
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mt-1">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buton */}
                <div className="mt-8">
                     <button className="text-white text-lg font-medium flex items-center gap-2 hover:gap-4 transition-all group">
                        Detayları Keşfet <ArrowRight className="text-[#2997ff] group-hover:text-white transition-colors" />
                     </button>
                </div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}