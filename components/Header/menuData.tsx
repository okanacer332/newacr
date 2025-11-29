import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home",
    path: "/",
    sectionId: "home", // Hero bölümü için
    newTab: false,
  },
  {
    id: 2,
    title: "services",
    path: "/",
    sectionId: "services", // Services bölümü için
    newTab: false,
  },
  {
    id: 3,
    title: "features",
    path: "/",
    sectionId: "features", // Features bölümü için
    newTab: false,
  },
  {
    id: 4,
    title: "pricing",
    path: "/",
    sectionId: "pricing", // Pricing bölümü için
    newTab: false,
  },
  {
    id: 5,
    title: "testimonials",
    path: "/",
    sectionId: "testimonials", // Testimonial bölümü için
    newTab: false,
  },
  {
    id: 6,
    title: "contact",
    path: "/",
    sectionId: "contact", // CTA/Contact bölümü için
    newTab: false,
  },
];

export default menuData;