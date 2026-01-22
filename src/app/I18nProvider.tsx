// src/app/I18nProvider.tsx
'use client';

import { I18nProviderClient } from '@/src/locales/client';
import Loading from "./loading";

interface ProviderProps {
  locale: string | undefined;
  children: React.ReactNode;
}

export function Provider({ locale, children }: ProviderProps) {
  // Fallback to 'en' if locale is undefined
  const validLocale = locale && ['en', 'tr'].includes(locale) ? locale : 'en';
  
  return (
    <I18nProviderClient locale={validLocale} fallback={<Loading />}>
      {children}
    </I18nProviderClient>
  );
}