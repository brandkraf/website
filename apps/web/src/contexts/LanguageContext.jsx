import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { strings } from '@/i18n/strings.js';

// Language is derived purely from the URL: anything under /ms is Bahasa Melayu,
// everything else is English (the default). This keeps EN and BM at distinct,
// crawlable URLs so both rank — and the toggle simply navigates between them.
const LanguageContext = createContext({ lang: 'en', t: (k) => k, lp: (p) => p });

export function langFromPath(pathname) {
  return pathname === '/ms' || pathname.startsWith('/ms/') ? 'ms' : 'en';
}

export function LanguageProvider({ children }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);

  const value = useMemo(() => {
    const dict = strings[lang] || strings.en;
    // t: translate a UI key (falls back to English, then the key itself).
    const t = (key) => dict[key] ?? strings.en[key] ?? key;
    // lp: localize an internal path — prefixes /ms when in Bahasa Melayu.
    const lp = (path) => {
      if (typeof path !== 'string' || !path.startsWith('/')) return path;
      if (lang !== 'ms') return path;
      return path === '/' ? '/ms' : `/ms${path}`;
    };
    return { lang, t, lp };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
