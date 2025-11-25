'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Section {
  id: string;
  videoSrc: string;
  title: string;
  subtitle: string;
  features: string[];
  theme: 'light' | 'dark';
}

const sections: Section[] = [
  {
    id: 'hero',
    videoSrc: '/assets/videos/hero-video.mp4',
    title: 'ACRTECH',
    subtitle: 'Kod Satmıyoruz, İş Modeli Geliştiriyoruz',
    features: [],
    theme: 'dark'
  },
  {
    id: 'iot',
    videoSrc: '/assets/videos/Fabrika_Videosu_Üretimi.mp4',
    title: 'Endüstriyel IoT',
    subtitle: 'Fabrikanızın Dijital Kalbi',
    features: [
      'Canlı üretim izleme',
      'Performans motivasyon sistemi',
      'Duruş süreleri minimizasyonu'
    ],
    theme: 'light'
  },
  {
    id: 'management',
    videoSrc: '/assets/videos/management-loop.mp4',
    title: 'Tesis Yönetimi',
    subtitle: 'Otonom Tahsilat Sistemi',
    features: [
      'Tek tuşla aidat dağıtımı',
      'Anlık şeffaf bakiye görünümü',
      '%90 iş yükü azalması'
    ],
    theme: 'dark'
  },
  {
    id: 'finance',
    videoSrc: '/assets/videos/stock-loop.mp4',
    title: 'Akıllı Maliyet',
    subtitle: 'Gerçek Kârlılığı Koruyun',
    features: [
      'Yerine koyma maliyeti analizi',
      'Sermaye koruma garantisi',
      'Hatasız finansal rehberlik'
    ],
    theme: 'light'
  },
  {
    id: 'tech',
    videoSrc: '/assets/videos/tech-tunnel.mp4',
    title: 'Teknolojik Güç',
    subtitle: 'Bankaların Kullandığı Güvenlik',
    features: [
      'Java Enterprise altyapısı',
      'React modern arayüzü',
      'Ölçeklenebilir mimari'
    ],
    theme: 'dark'
  }
];

export default function VideoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Sections */}
      {sections.slice(1).map((section, index) => (
        <FeatureSection key={section.id} section={section} index={index} />
      ))}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[150vh] flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <video
          ref={videoRef}
          src="/assets/videos/hero-video.mp4"
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <img
            src="/logo.jpg"
            alt="ACRTECH"
            className="w-40 h-40 mx-auto rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight"
        >
          ACRTECH
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-light mb-12"
        >
          Kod Satmıyoruz,<br />İş Modeli Geliştiriyoruz
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="px-10 py-5 bg-white text-black text-xl font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
        >
          Keşfedin
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function FeatureSection({ section, index }: { section: Section; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [100, 0, 0, 0, -100]);

  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
          setIsInView(true);
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: springOpacity, scale: springScale }}
      >
        <video
          ref={videoRef}
          src={section.videoSrc}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            section.theme === 'dark'
              ? 'bg-gradient-to-b from-black via-black/80 to-black'
              : 'bg-gradient-to-b from-black/90 via-black/70 to-black/90'
          }`}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ y }}
      >
        <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} items-center text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
          {/* Title */}
          <motion.h2
            style={{ opacity: springOpacity }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight max-w-4xl"
          >
            {section.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            style={{ opacity: springOpacity }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-16 max-w-3xl"
          >
            {section.subtitle}
          </motion.p>

          {/* Features */}
          <motion.div
            style={{ opacity: springOpacity }}
            className="space-y-6 max-w-2xl"
          >
            {section.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <p className="text-xl md:text-2xl text-gray-200 font-light">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/assets/videos/contact-data.mp4"
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          Hazır mısınız?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-16"
        >
          Dijital dönüşüm yolculuğunuza<br />bugün başlayın
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="px-12 py-5 bg-white text-black text-xl font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
            İletişime Geçin
          </button>
          <button className="px-12 py-5 border-2 border-white text-white text-xl font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105">
            Demo İsteyin
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
          className="mt-16 text-gray-400 text-lg"
        >
          info@acrtech.com
        </motion.p>
      </motion.div>
    </section>
  );
}
