import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Yeni
import Features from "@/components/Features"; // Güncellendi
import CTA from "@/components/CTA"; // Güncellendi
import Testimonial from "@/components/Testimonial"; // Mevcut (Varsa)
// Diğer importlar...

export const metadata: Metadata = {
  title: "AcrTech - Geleceği Bugünden Kodluyoruz",
  description: "ACRTECH olarak işletmenizin dijital ikizini oluşturuyoruz.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      {/* İstersen araya FunFact, Brands gibi küçük componentleri de ekleyebilirsin */}
      <Testimonial /> 
      <CTA />
      {/* <Contact /> Contact'ı CTA içinde linkledik ama form olarak sayfa sonunda da durabilir */}
    </main>
  );
}