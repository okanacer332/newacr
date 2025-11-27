"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../../globals.css"; // KESİN YOL: app/[locale]/(site) -> app/globals.css
import ToasterContext from "../../context/ToastContext"; // KESİN YOL: app/[locale]/(site) -> app/context

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <ToasterContext />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}