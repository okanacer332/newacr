import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home", // messages/*.json dosyasındaki "Header.menu.home" anahtarına karşılık gelir
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "about",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "support",
    path: "/contact", // İletişim/Destek sayfasına yönlendirir
    newTab: false,
  },
  {
    id: 4,
    title: "docs",
    path: "/docs",
    newTab: false,
  },
  /* Eğer dropdown menü (Pages) kullanıyorsan bu yapıyı açabilirsin:
  {
    id: 5,
    title: "pages",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "about", // Alt menüde de aynı mantık
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "contact",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  */
];

export default menuData;