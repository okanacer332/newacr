import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "AcrTech | SaaS Boilerplate",
  description: "Next.js tabanlı modern SaaS başlangıç kiti.",
  // diğer metadata ayarları...
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero Bölümü (En Tepe) */}
      <Hero />

      {/* 2. Özellikler */}
      <Feature />
      
      {/* 3. Hakkında */}
      <About />
      
      {/* 4. Tablı Özellikler */}
      <FeaturesTab />
      
      {/* 5. İstatistikler */}
      <FunFact />
      
      {/* 6. Entegrasyonlar */}
      <Integration />
      
      {/* 7. CTA (Harekete Geçirici Mesaj) */}
      <CTA />
      
      {/* 8. SSS */}
      <FAQ />
      
      {/* 9. Müşteri Yorumları */}
      <Testimonials />
      
      {/* 10. Fiyatlandırma */}
      <Pricing />
      
      {/* 11. İletişim */}
      <Contact />
      
      {/* 12. Blog */}
      <Blog />

      {/* 13. MARKALAR (Buraya taşındı - Footer'ın hemen üstü) */}
      <Brands />
    </main>
  );
}