import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation'; 

export const routing = defineRouting({
  // YENİ DİLLER EKLENDİ
  locales: ['tr', 'en', 'ru', 'es', 'ar'],

  // Varsayılan dil Türkçe
  defaultLocale: 'tr'
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);