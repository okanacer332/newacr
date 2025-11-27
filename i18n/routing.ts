import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation'; // createSharedPathnamesNavigation yerine bunu kullanıyoruz
export const routing = defineRouting({
  // DEĞİŞİKLİK 1: Sıralamayı değiştirdik, 'tr' ilk sırada.
  locales: ['tr', 'en'],

  // DEĞİŞİKLİK 2: Varsayılan dili 'tr' yaptık.
  defaultLocale: 'tr'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing); // Fonksiyon adı burada da değişti