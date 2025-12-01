"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
// DİKKAT: Artık default import değil, süslü parantez ile parçalı import yapıyoruz
import { designBrands, codeBrands } from "./brandData"; 
import { useViewMode } from "@/app/context/ViewModeContext";

const Brands = () => {
  const { mode } = useViewMode();
  
  // Mod "design" ise 2'li listeyi, "code" ise 6'lı listeyi kullan
  const brandsData = mode === "design" ? designBrands : codeBrands;

  return (
    <>
      {/* */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandsData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* */}
    </>
  );
};

export default Brands;