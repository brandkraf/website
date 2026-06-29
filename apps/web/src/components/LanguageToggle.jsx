import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Toggles between the EN and BM versions of the CURRENT page by navigating
// to the same path with/without the /ms prefix.
export default function LanguageToggle({ className = '' }) {
  const { pathname, search, hash } = useLocation();
  const { lang } = useLanguage();

  const base = pathname === '/ms' ? '/' : pathname.startsWith('/ms/') ? pathname.slice(3) : pathname;
  const enTo = `${base}${search}${hash}`;
  const msTo = `${base === '/' ? '/ms' : `/ms${base}`}${search}${hash}`;

  const item = (active) =>
    `px-2.5 py-1 transition-colors ${active ? 'bg-brandkraf-teal text-white' : 'text-gray-600 hover:text-brandkraf-teal'}`;

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-lg border border-border text-xs font-bold ${className}`}
      role="group"
      aria-label="Language"
    >
      <Link to={enTo} className={item(lang === 'en')} aria-current={lang === 'en' ? 'true' : undefined}>EN</Link>
      <Link to={msTo} className={item(lang === 'ms')} aria-current={lang === 'ms' ? 'true' : undefined}>BM</Link>
    </div>
  );
}
