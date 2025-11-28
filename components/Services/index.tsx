"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import { motion } from "framer-motion";

const Services = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  // İçerik Verisi: Design vs Code
  const services = isDesign
    ? [
        { title: "UX Consultant", desc: "Kullanıcı davranışlarını analiz ederek stratejik yol haritaları oluşturuyoruz.", icon: "🎨" },
        { title: "Product Design", desc: "Estetik ve işlevselliği birleştiren, ölçeklenebilir ürün tasarımları.", icon: "✨" },
        { title: "Customer Journey Mapping", desc: "Müşterinizin markanızla temas ettiği her noktayı kusursuzlaştırıyoruz.", icon: "🗺️" },
        { title: "CRM Marketing", desc: "Veriye dayalı pazarlama kurgularıyla müşteri sadakatini artırın.", icon: "📊" },
        { title: "New Business Development", desc: "Tasarım odaklı düşünceyle yeni gelir kanalları yaratın.", icon: "🚀" },
        { title: "User Experience Research", desc: "Gerçek kullanıcı verileriyle varsayımları ortadan kaldırın.", icon: "🔍" },
      ]
    : [
        { title: "ERP System Integration", desc: "Karmaşık iş süreçlerinizi tek bir merkezden yönetin.", icon: "⚙️" },
        { title: "B2B Platform Development", desc: "İşletmeler arası ticareti hızlandıran güvenli platformlar.", icon: "💼" },
        { title: "SaaS Architecture", desc: "Bulut tabanlı, çok kiracılı (multi-tenant) ölçeklenebilir yazılımlar.", icon: "☁️" },
        { title: "Corporate Software", desc: "Kurumunuza özel, sektörel ihtiyaçlarınıza tam uyumlu çözümler.", icon: "🏢" },
        { title: "API Development", desc: "Sistemlerinizi birbirine bağlayan güçlü ve güvenli API altyapıları.", icon: "🔗" },
        { title: "Cloud DevOps", desc: "Sürekli entegrasyon ve dağıtım ile kesintisiz operasyon.", icon: "🛡️" },
      ];

  // Tema Renkleri
  const theme = {
    bg: isDesign ? "bg-purple-50/50 dark:bg-purple-900/10" : "bg-blue-50/50 dark:bg-blue-900/10",
    cardBorder: isDesign ? "hover:border-purple-300 dark:hover:border-purple-700" : "hover:border-blue-300 dark:hover:border-blue-700",
    iconBg: isDesign ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600",
    title: isDesign ? "text-purple-900 dark:text-purple-100" : "text-blue-900 dark:text-blue-100",
    sectionTitleGradient: isDesign ? "from-purple-600 to-pink-600" : "from-blue-600 to-cyan-600",
  };

  return (
    <section className={`py-20 lg:py-32 transition-colors duration-500 ${theme.bg}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Başlık Alanı */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className={`inline-block mb-4 text-sm font-bold tracking-wider uppercase ${isDesign ? "text-purple-600" : "text-blue-600"}`}>
            {isDesign ? "Human-Centric Design" : "High-Performance Engineering"}
          </span>
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
             <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.sectionTitleGradient}`}>
               {isDesign ? "Design Services" : "Tech Solutions"}
             </span>
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg">
            {isDesign 
              ? "Kullanıcı deneyimini merkeze alan, duygusal bağ kuran ve dönüşüm odaklı tasarım çözümleri."
              : "İşletmenizin dijital altyapısını güçlendiren, güvenli ve ölçeklenebilir mühendislik hizmetleri."}
          </p>
        </div>

        {/* Grid Kartlar - Responsive: Mobilde 1, Tablette 2, Masaüstünde 3 sütun */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900 border border-transparent transition-all duration-300 hover:-translate-y-1 ${theme.cardBorder}`}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110 ${theme.iconBg}`}>
                {service.icon}
              </div>
              <h3 className={`mb-3 text-xl font-semibold ${theme.title}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>
              
              {/* Hover Efekti için Alt Çizgi */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${isDesign ? "bg-purple-500" : "bg-blue-500"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;