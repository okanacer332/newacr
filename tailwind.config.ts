import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acr: {
          blue: "#007BFF", // Logondaki maviye yakın parlak bir ton (Değiştirebiliriz)
          dark: "#0a0a0a", // Tam siyah değil, çok koyu gri (Premium his için)
          gray: "#1F2937", // Panel arka planları için
          text: "#E5E7EB", // Okunabilir açık gri metin
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;