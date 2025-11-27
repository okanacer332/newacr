import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation'; // createSharedPathnamesNavigation yerine bunu kullanıyoruz

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing); // Fonksiyon adı burada da değişti