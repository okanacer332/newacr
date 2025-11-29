import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Yeni
import Features from "@/components/Features"; // Güncellendi
import CTA from "@/components/CTA"; // Güncellendi
import Testimonial from "@/components/Testimonial"; // Mevcut (Varsa)
import Pricing from "@/components/Pricing";

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
      {/* Pricing Bölümünü CTA'dan önceye, Testimonial'dan sonraya ekliyorum */}
      <Pricing />  {/* EKLENDİ: Bileşen */}
      <Testimonial /> 
      <CTA />
    </main>
  );
}