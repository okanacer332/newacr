"use client";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { useViewMode } from "@/app/context/ViewModeContext";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("Pricing");
  const { mode } = useViewMode();
  const isDesign = mode === "design";
  const modeKey = isDesign ? "design" : "code";

  const [isMonthly, setIsMonthly] = useState(true);

  // Tema Renkleri
  const theme = {
    activeBtn: isDesign ? "bg-purple-600 text-white" : "bg-blue-600 text-white",
    inactiveBtn: "text-black dark:text-white",
    cardBorder: isDesign 
      ? "border-purple-100 dark:border-strokedark hover:border-purple-400 dark:hover:border-purple-400" 
      : "border-stroke dark:border-strokedark hover:border-primary dark:hover:border-primary",
    badge: isDesign ? "text-purple-600 bg-purple-100" : "text-primary bg-primary/10",
    btn: isDesign 
      ? "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white" 
      : "border-primary text-primary hover:bg-primary hover:text-white",
    // SVG Shape Rengi (Opsiyonel)
    shape: isDesign ? "/images/shape/shape-dotted-light.svg" : "/images/shape/shape-dotted-light.svg"
  };

  // Plan Verileri (Statik özellikler + Dinamik Metinler)
  const plans = [
    {
      id: "basic",
      icon: isDesign ? "🎨" : "⚡",
      features: isDesign 
        ? ["UI Kit Access", "5 Projects", "Basic Assets", "Community Support"] 
        : ["Next.js Starter", "1 Domain", "Basic DB", "Community Support"],
    },
    {
      id: "pro",
      icon: isDesign ? "💎" : "🚀",
      popular: true,
      features: isDesign 
        ? ["Full Design System", "Unlimited Projects", "Premium Assets", "Priority Support"] 
        : ["SaaS Template", "Unlimited Domains", "Advanced DB", "Priority Support"],
    },
    {
      id: "enterprise",
      icon: isDesign ? "👑" : "🏢",
      features: isDesign 
        ? ["Custom Components", "Team Collaboration", "Asset Management", "24/7 Support"] 
        : ["White Label", "Self-Hosted", "Audit Logs", "Dedicated Support"],
    }
  ];

  return (
    <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        
        {/* Başlık */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: t("title"),
              subtitle: t("subtitle"),
              description: t("description"),
            }}
          />
        </div>

        {/* Aylık/Yıllık Switch */}
        <div className="animate_top mt-15 flex justify-center space-x-4">
          <span className="font-medium text-black dark:text-white">{t("monthly")}</span>
          <button
            aria-label="toggle pricing"
            onClick={() => setIsMonthly(!isMonthly)}
            className={`relative h-8 w-14 rounded-full bg-gray-200 duration-200 dark:bg-[#3d4257]`}
          >
            <div
              className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-all duration-300 ${
                !isMonthly ? "translate-x-6" : ""
              } ${isDesign ? "shadow-purple-400" : "shadow-blue-400"} shadow-sm`}
            ></div>
          </button>
          <span className="font-medium text-black dark:text-white">{t("yearly")}</span>
        </div>
      </div>

      {/* Fiyat Kartları */}
      <div className="mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`animate_top group relative rounded-lg border bg-white p-7.5 shadow-solid-10 transition-all hover:shadow-solid-4 dark:bg-blacksection dark:shadow-none xl:p-12.5 ${theme.cardBorder}`}
            >
              {plan.popular && (
                <div className={`absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full px-4.5 py-1.5 text-metatitle font-medium uppercase text-white ${isDesign ? "bg-purple-600" : "bg-primary"}`}>
                  Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl bg-gray-50 dark:bg-black`}>
                  {plan.icon}
                </div>
                <h3 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  {t(`plans.${modeKey}.${plan.id}.title`)}
                </h3>
                <p>{t(`plans.${modeKey}.${plan.id}.desc`)}</p>
              </div>

              <div className="mb-9 flex justify-center text-center">
                <span className="text-metatitle2 font-bold text-black dark:text-white">
                  $
                </span>
                <span className="text-5xl font-bold text-black dark:text-white pl-1">
                  {t(`plans.${modeKey}.${plan.id}.price`)}
                </span>
                <span className="text-regular font-medium self-end pb-2 opacity-60">
                  {isMonthly ? t("perMonth") : t("perYear")}
                </span>
              </div>

              <div className="mb-9 border-b border-stroke pb-9 dark:border-strokedark">
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-regular font-medium text-black dark:text-manatee">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs text-white ${isDesign ? "bg-purple-500" : "bg-primary"}`}>
                        ✓
                      </span>
                      {feature} 
                      {/* İstersen özellikleri de çeviriye ekleyebilirsin, şimdilik statik bıraktım */}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`flex w-full items-center justify-center rounded-md border-2 px-4 py-3 text-regular font-medium transition-all duration-300 ${theme.btn}`}
              >
                {t("getStarted")}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;