"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { ViewModeProvider } from "@/app/context/ViewModeContext";
import "../../globals.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // DEĞİŞİKLİK BURADA: defaultTheme="dark" yaptık.
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ViewModeProvider>
        <Header />
        <Toaster />
        {children}
        <Footer />
        <ScrollToTop />
      </ViewModeProvider>
    </ThemeProvider>
  );
}