'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';

interface VideoSection {
  id: string;
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string[];
  accentColor: string;
}

const videoSections: VideoSection[] = [
  {
    id: 'hero',
    videoSrc: '/assets/videos/hero-video.mp4',
    title: 'ACRTECH',
    subtitle: 'Kod Satmıyoruz, İş Modeli Geliştiriyoruz',
    description: [
      'Teknoloji ile geleceği tasarlıyoruz',
      'İşletmenizi dijital dönüşümle güçlendirin'
    ],
    accentColor: '#2997ff'
  },
  {
    id: 'factory',
    videoSrc: '/assets/videos/Fabrika_Videosu_Üretimi.mp4',
    title: 'ENDÜSTRİYEL IOT',
    subtitle: 'Saha Operasyonları',
    description: [
      '📊 Canlı İzleme: Hangi personel, hangi makinede, ne kadar üretiyor?',
      '🎯 Motivasyon Sistemi: Performansı dijital ekranlara yansıtıyoruz',
      '⚡ Sonuç: Duruş süreleri azalır, üretim hızı artar'
    ],
    accentColor: '#0ea5e9'
  },
  {
    id: 'management',
    videoSrc: '/assets/videos/management-loop.mp4',
    title: 'TESİS YÖNETİMİ',
    subtitle: 'Otonom Tahsilat',
    description: [
      '🏢 Otomatik İşleyiş: Aidat dağıtımı tek tuşla',
      '💎 Şeffaflık: Tüm bakiyeler anlık görülebilir',
      '📈 Sonuç: Tahsilat oranlarında artış, iş yükünde %90 azalma'
    ],
    accentColor: '#8b5cf6'
  },
  {
    id: 'finance',
    videoSrc: '/assets/videos/stock-loop.mp4',
    title: 'AKILLI MALİYET',
    subtitle: 'Finansal Yönetim',
    description: [
      '💰 Gerçek Kârlılık: Yerine koyma maliyeti ile doğru hesaplama',
      '🛡️ Sermaye Koruma: Şirketinizin alım gücünü koruyoruz',
      '✅ Sonuç: Hatasız finansal rehberlik'
    ],
    accentColor: '#10b981'
  },
  {
    id: 'tech',
    videoSrc: '/assets/videos/tech-tunnel.mp4',
    title: 'TEKNOLOJİK GÜÇ',
    subtitle: 'Modern Altyapı',
    description: [
      '🔒 Güven: Banka standartlarında güvenlik (Java)',
      '⚡ Hız: Modern web teknolojileri (React)',
      '🌐 Esneklik: İşletmeniz büyüdükçe ayak uyduran sistem'
    ],
    accentColor: '#f59e0b'
  },
  {
    id: 'contact',
    videoSrc: '/assets/videos/contact-data.mp4',
    title: 'İLETİŞİME GEÇİN',
    subtitle: 'Projenizi Konuşalım',
    description: [
      '📧 Email: info@acrtech.com',
      '📱 Ücretsiz danışmanlık için hemen iletişime geçin',
      '🚀 Dijital dönüşüm yolculuğunuza bugün başlayın'
    ],
    accentColor: '#ec4899'
  }
];

export default function VideoScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(index);

            // Auto-play video when in view
            const video = videoRefs.current[index];
            if (video && video.paused) {
              video.play().catch(() => {
                // Autoplay might be blocked
              });
              setIsVideoPlaying(prev => ({ ...prev, [index]: true }));
            }
          } else {
            // Pause video when out of view
            const video = videoRefs.current[index];
            if (video && !video.paused) {
              video.pause();
              setIsVideoPlaying(prev => ({ ...prev, [index]: false }));
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideoPlayback = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(prev => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setIsVideoPlaying(prev => ({ ...prev, [index]: false }));
      }
    }
  };

  const scrollToNextSection = () => {
    if (currentSection < videoSections.length - 1) {
      sectionRefs.current[currentSection + 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {videoSections.map((section, index) => (
        <section
          key={section.id}
          ref={el => { sectionRefs.current[index] = el; }}
          className="relative h-screen w-full snap-start snap-always overflow-hidden"
        >
          {/* Background Video */}
          <video
            ref={el => { videoRefs.current[index] = el; }}
            src={section.videoSrc}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              className="max-w-4xl"
            >
              {/* Logo for hero section */}
              {index === 0 && (
                <motion.img
                  src="/logo.jpg"
                  alt="ACRTECH Logo"
                  className="w-32 h-32 md:w-40 md:h-40 mb-8 rounded-2xl shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                style={{ color: section.accentColor }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {section.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.h3
                className="text-2xl md:text-4xl font-semibold text-white mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {section.subtitle}
              </motion.h3>

              {/* Description */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {section.description.map((desc, i) => (
                  <motion.p
                    key={i}
                    className="text-lg md:text-xl text-gray-200 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    {desc}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Video Control Button */}
          <motion.button
            onClick={() => toggleVideoPlayback(index)}
            className="absolute top-8 right-8 z-20 p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isVideoPlaying[index] ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </motion.button>

          {/* Scroll Indicator */}
          {index < videoSections.length - 1 && (
            <motion.button
              onClick={scrollToNextSection}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.button>
          )}

          {/* Progress Indicator */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {videoSections.map((_, i) => (
              <button
                key={i}
                onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSection
                    ? 'bg-white scale-150'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
