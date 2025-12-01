"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  const handleNextStep = (nextId: string) => {
    if (nextId === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setCurrentTab(nextId);
    }
  };

  return (
    <>
      {/* Padding'ler ciddi oranda azaltıldı (pt-10 pb-10) */}
      <section className="relative pt-10 pb-10 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* Arka Plan Şekli (Yüksekliği azaltıldı) */}
          <div className="absolute -top-16 -z-1 mx-auto h-[250px] w-[90%] left-0 right-0">
            <Image
              fill
              className="dark:hidden opacity-60"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block opacity-60"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* --- TAB MENU (Daha Kompakt) --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            // Margin-bottom azaltıldı (mb-8)
            className="animate_top mb-8 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-5 xl:mb-10 xl:gap-8"
          >
            {featuresTabData.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                // Paddingler azaltıldı (py-3 px-4)
                className={`relative flex w-full cursor-pointer items-center gap-3 border-b border-stroke px-4 py-3 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-8 xl:py-4 ${
                  currentTab === tab.id
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                {/* Numara Yuvarlağı (Küçültüldü: w-10 h-10) */}
                <div className="flex h-10 w-10 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection transition-colors duration-300">
                  <p className={`text-sm font-bold ${currentTab === tab.id ? "text-primary" : "text-black dark:text-white"}`}>
                    0{index + 1}
                  </p>
                </div>
                {/* Başlık */}
                <div className="md:w-3/5 lg:w-auto">
                  <button className={`text-sm font-medium transition-colors ${currentTab === tab.id ? "text-primary" : "text-black dark:text-white"}`}>
                    {tab.title}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* --- İÇERİK ALANI --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }} // Delay azaltıldı
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154 bg-white/50 dark:bg-black/20 rounded-xl"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} onNext={handleNextStep} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesTab;