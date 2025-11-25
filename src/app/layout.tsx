import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACRTECH | Kod Satmıyoruz, İş Modeli Geliştiriyoruz",
  description: "Endüstriyel IoT, Akıllı Maliyet Yönetimi, Tesis Yönetimi ve Modern Teknoloji Altyapısı. ACRTECH ile işletmenizi dijital dönüşümle güçlendirin.",
  keywords: ["ACRTECH", "Endüstriyel IoT", "Saha Operasyonları", "Finansal Yönetim", "Tesis Yönetimi", "Dijital Dönüşüm", "Java", "React", "Teknoloji"],
  authors: [{ name: "ACRTECH" }],
  openGraph: {
    title: "ACRTECH | Kod Satmıyoruz, İş Modeli Geliştiriyoruz",
    description: "Endüstriyel IoT, Akıllı Maliyet Yönetimi ve Modern Teknoloji Altyapısı",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
