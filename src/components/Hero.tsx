"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* 1. VİDEO KATMANI */}
      <div className="absolute inset-0 z-0">
        <video
  className="absolute top-0 left-0 w-full h-full object-cover scale-110" // scale-110 yaptık, css ile yavaşça zoom in/out yapabiliriz
  autoPlay
  loop
  muted
  playsInline
  src="/assets/videos/hero-video.mp4"
/>
        {/* Sinematik Overlay: Siyah perde ama gradientli */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
      </div>

      {/* 2. NAVBAR - Minimalist */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
           <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-blue-900/20">
                <Image 
                    src="/logo.jpg" 
                    alt="ACRTech" 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-white">
                ACR<span className="text-blue-500">Tech</span>
            </span>
        </div>
        
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all text-white group">
          İletişime Geç
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </nav>

      {/* 3. ANA METİN (Typography Odaklı) */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* Üst Başlık */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 md:w-12 bg-blue-500/80"></span>
            <span className="text-blue-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
              Future of Business
            </span>
          </div>

          {/* Ana Slogan - Daha sıkı (tight) ve devasa */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            Kod Satmıyoruz,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              İş Modeli
            </span> <br />
            Geliştiriyoruz.
          </h1>

          {/* Açıklama */}
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light border-l-2 border-white/10 pl-6">
            Klasik yazılım süreçlerini unutun. Biz operasyonel maliyetlerinizi düşüren ve gelirinizi artıran dijital kaldıraçlar tasarlıyoruz.
          </p>

          {/* Aksiyon Butonu */}
          <div className="pt-4">
             <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Çözümleri Keşfet <ArrowRight className="w-4 h-4" />
                </span>
                {/* Buton içi parlama efekti */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
             </button>
          </div>
        </motion.div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-20 z-20 flex items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <span className="text-xs text-gray-500 uppercase tracking-widest writing-vertical-lr rotate-180">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
}