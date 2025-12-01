import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home", // JSON key: menu.home
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "features", // JSON key: menu.features
    path: "/#features",
    sectionId: "features",
    newTab: false,
  },
  {
    id: 3,
    title: "blog", // JSON key: menu.blog
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "docs", // JSON key: menu.docs
    path: "/docs",
    newTab: false,
  },
  {
    id: 5,
    title: "support", // JSON key: menu.support
    path: "/support",
    newTab: false,
  },
  // Örnek Dropdown (Gerekirse açarsın)
  /*
  {
    id: 33,
    title: "pages",
    newTab: false,
    submenu: [
      { id: 331, title: "about", path: "/about", newTab: false },
      { id: 332, title: "contact", path: "/contact", newTab: false },
    ],
  },
  */
];

export default menuData;