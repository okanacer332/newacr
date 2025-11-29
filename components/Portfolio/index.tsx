"use client";
import { useViewMode } from "@/app/context/ViewModeContext";
import Image from "next/image";

const Portfolio = () => {
  const { mode } = useViewMode();
  const isDesign = mode === "design";

  const projects = [
    {
      category: "Product Design",
      title: "E-Commerce Platform",
      result: "Complete UX redesign increasing conversion by 45%",
      image: "/images/portfolio/ecommerce.jpg" // Placeholder path
    },
    {
      category: "Customer Journey",
      title: "Banking App",
      result: "Mapped and optimized 12 key user touchpoints",
      image: "/images/portfolio/banking.jpg"
    },
    {
      category: "UI Design",
      title: "SaaS Dashboard",
      result: "Modern interface with comprehensive design system",
      image: "/images/portfolio/saas.jpg"
    },
    {
      category: "UX Consulting",
      title: "Healthcare Portal",
      result: "Streamlined patient experience and accessibility",
      image: "/images/portfolio/healthcare.jpg"
    }
  ];

  const theme = {
    tag: isDesign ? "text-purple-600 bg-purple-50" : "text-blue-600 bg-blue-50",
  };

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <span className={`font-bold uppercase tracking-wider text-sm ${isDesign ? "text-purple-600" : "text-blue-600"}`}>Our Work</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black dark:text-white">Featured Projects</h2>
             <p className="mt-4 text-gray-600 dark:text-gray-400">Explore our portfolio of successful design projects that transformed user experiences.</p>
          </div>
          <button className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${isDesign ? "border-purple-200 text-purple-700 hover:bg-purple-50" : "border-blue-200 text-blue-700 hover:bg-blue-50"}`}>
             View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
             <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image Placeholder Area */}
                <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                   <span className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">🖼️</span>
                   {/* Gerçek entegrasyonda buraya Image bileşeni gelecek */}
                </div>
                
                <div className="p-8">
                   <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold mb-3 ${theme.tag}`}>
                     {item.category}
                   </span>
                   <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-400">
                     {item.result}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;