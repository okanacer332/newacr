"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { ViewModeProvider } from "@/app/context/ViewModeContext"; // Yeni import
import "../../globals.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ViewModeProvider> {/* Provider'ı buraya ekledik */}
        <Header />
        <Toaster />
        {children}
        <Footer />
        <ScrollToTop />
      </ViewModeProvider>
    </ThemeProvider>
  );
}