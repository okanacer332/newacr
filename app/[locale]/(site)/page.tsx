import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services"; // Services componentini import ettiğinden emin ol
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AcrTech - Software & Design",
  description: "Next.js Starter Template",
};

export default function Home() {
  return (
    <main>
      {/* Home / Hero Bölümü */}
      <section id="home">
        <Hero />
      </section>

      <Brands />

      {/* Services Bölümü */}
      <section id="services">
        <Services />
      </section>

      {/* Features Bölümü */}
      <section id="features">
        <Features />
      </section>

      {/* Pricing Bölümü */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Testimonials Bölümü */}
      <section id="testimonials">
        <Testimonial />
      </section>

      {/* Contact / CTA Bölümü */}
      <section id="contact">
        <CTA />
      </section>
    </main>
  );
}