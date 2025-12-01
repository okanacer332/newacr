import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ 
  featureTab, 
  onNext 
}: { 
  featureTab: FeatureTab; 
  onNext: (nextId: string) => void;
}) => {
  const { title, desc1, desc2, image, imageDark, buttonLabel, nextTabId } = featureTab;

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12 p-4 lg:p-6">
      
      {/* --- GÖRSEL ALANI (Yükseklik sınırlandırıldı) --- */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {/* max-h-[350px] ekleyerek görselin devasa olmasını engelledik */}
        <div className="relative w-full aspect-[4/3] max-h-[300px] lg:max-h-[350px]">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="dark:hidden object-contain" 
            priority // Hızlı yüklenmesi için
          />
          <Image 
            src={imageDark} 
            alt={title} 
            fill 
            className="hidden dark:block object-contain" 
            priority
          />
        </div>
      </div>

      {/* --- METİN ALANI (Daha sıkı yerleşim) --- */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="mb-4 text-2xl font-bold text-black dark:text-white xl:text-3xl">
          {title}
        </h2>
        <p className="mb-3 text-sm lg:text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {desc1}
        </p>
        <p className="mb-6 text-sm lg:text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {desc2}
        </p>
        
        <button
           onClick={() => onNext(nextTabId)}
           className="group inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white"
        >
           {buttonLabel}
           <svg
              className="fill-current transition-transform duration-300 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
           >
              <path d="M8.28667 1.28667C8.03334 1.54 8.03334 1.94667 8.28667 2.2L12.58 6.5H1.33334C0.966675 6.5 0.666675 6.8 0.666675 7.16667V8.83333C0.666675 9.2 0.966675 9.5 1.33334 9.5H12.58L8.28667 13.8C8.03334 14.0533 8.03334 14.46 8.28667 14.7133C8.54 14.9667 8.94667 14.9667 9.2 14.7133L14.6667 9.24667C14.92 8.99333 14.92 8.58667 14.6667 8.33333L9.2 2.86667C8.95334 2.62 8.53334 2.62 8.28667 1.28667Z" />
           </svg>
        </button>
      </div>
    </div>
  );
};

export default FeaturesTabItem;