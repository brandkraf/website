import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

export default function BreadcrumbNav({ currentService }) {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
      <Link to={lp('/')} className="hover:text-primary transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
        {T('Home', 'Utama')}
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <Link to={lp('/pricing')} className="hover:text-primary transition-colors">
        {T('Pricing', 'Harga')}
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span className="text-foreground font-medium" aria-current="page">
        {currentService}
      </span>
    </nav>
  );
}