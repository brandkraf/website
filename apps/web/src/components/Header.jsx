import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, ChevronDown, Share2, Video, Target, Globe, Palette, Users, Radio, Sparkles, MessageSquareCode, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';
import { useScrollPosition } from '@/hooks/useScrollPosition.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

const services = [
  { icon: Share2,           name: 'Social Media Management', path: '/portfolio/social-media-management',  desc: 'Content strategy & community growth' },
  { icon: Video,            name: 'UGC Content Creation',    path: '/portfolio/ugc-content-creation',     desc: 'Authentic video & photo content' },
  { icon: Target,           name: 'Paid Advertising',        path: '/portfolio/paid-advertising',         desc: 'Meta, TikTok & Google campaigns' },
  { icon: Globe,            name: 'Website Development',     path: '/portfolio/website-development',      desc: 'High-converting websites' },
  { icon: Palette,          name: 'Branding & Creative',     path: '/portfolio/branding-creative',        desc: 'Identity, logo & brand guidelines' },
  { icon: Users,            name: 'KOC / KOL Service',       path: '/portfolio/koc-kol-service',          desc: 'Influencer matching & campaigns' },
  { icon: Radio,            name: 'TikTok Live Service',     path: '/portfolio/tiktok-live-service',      desc: 'Live streaming strategy & hosting' },
  { icon: Sparkles,         name: 'AI-Driven Marketing',     path: '/portfolio/ai-driven-marketing',      desc: 'Predictive analytics & automation' },
  { icon: MessageSquareCode,name: 'Chatbot Development',     path: '/portfolio/chatbot-development',      desc: 'Smart conversational AI bots' },
];

function ServicesDropdown({ onClose }) {
  const { t, lp } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_24px_60px_-12px_rgba(16,24,40,0.22)] border border-gray-100 overflow-hidden z-50"
    >
      <div className="p-2">
        <div className="grid grid-cols-3 gap-1">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.path}
                to={lp(svc.path)}
                onClick={onClose}
                className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-br hover:from-brandkraf-teal/5 hover:to-brandkraf-purple/5"
              >
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brandkraf-teal/10 to-brandkraf-purple/10 text-brandkraf-teal transition-all duration-200 group-hover:from-brandkraf-teal group-hover:to-brandkraf-purple group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-foreground leading-tight group-hover:text-brandkraf-teal transition-colors duration-200">{svc.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{svc.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-1 border-t border-gray-100 pt-2 px-2 pb-1 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{services.length} {t('nav.servicesAvailable')}</span>
          <Link
            to={lp('/pricing')}
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brandkraf-teal hover:text-brandkraf-purple transition-colors duration-200"
          >
            {t('nav.viewAllPricing')} <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);
  const { isScrolled } = useScrollPosition(50, 100);
  const { t, lp } = useLanguage();

  // Active-state checks work in EN path-space, so strip the /ms prefix first.
  const basePath =
    location.pathname === '/ms' ? '/' : location.pathname.startsWith('/ms/') ? location.pathname.slice(3) : location.pathname;

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { key: 'nav.home',      path: '/' },
    { key: 'nav.about',     path: '/about-us' },
    { key: 'nav.portfolio', path: '/portfolio' },
    { key: 'nav.pricing',   path: '/pricing' },
    { key: 'nav.blog',      path: '/blog' },
    { key: 'nav.contact',   path: '/contact' },
  ];

  const isServiceActive = services.some(s => basePath.startsWith(s.path));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 [backdrop-filter:blur(16px)_saturate(160%)] ${
          isScrolled
            ? 'bg-white/70 border-b border-white/40 shadow-[0_8px_30px_-12px_rgba(16,24,40,0.18)]'
            : 'bg-white/40 border-b border-transparent'
        }`}
      >
        {isScrolled && (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brandkraf-teal/40 to-transparent" />
        )}
        <nav className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[5.5rem]' : 'h-24'}`}>
            {/* Logo */}
            <Link to={lp('/')} className="flex items-center flex-shrink-0">
              <img
                src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png"
                alt="BrandKraf logo"
                className="header-logo"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {/* Services dropdown trigger */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen(v => !v)}
                  className={`group relative flex items-center gap-1 px-4 py-2.5 text-[15px] font-semibold rounded-xl transition-all duration-200 ${
                    isServiceActive || isServicesOpen
                      ? 'text-brandkraf-teal'
                      : 'text-gray-600 hover:text-brandkraf-teal hover:bg-brandkraf-teal/5'
                  }`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  {(isServiceActive || isServicesOpen) && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brandkraf-teal/10 to-brandkraf-purple/10 ring-1 ring-brandkraf-teal/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t('nav.services')}</span>
                  <ChevronDown className={`relative z-10 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  {(isServiceActive || isServicesOpen) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isServicesOpen && <ServicesDropdown onClose={() => setIsServicesOpen(false)} />}
                </AnimatePresence>
              </div>

              {/* Regular nav links */}
              {navLinks.map((link) => {
                const isActive = basePath === link.path;
                return (
                  <Link
                    key={link.path}
                    to={lp(link.path)}
                    className={`group relative px-4 py-2.5 text-[15px] font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-brandkraf-teal'
                        : 'text-gray-600 hover:text-brandkraf-teal hover:bg-brandkraf-teal/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-brandkraf-teal/10 to-brandkraf-purple/10 ring-1 ring-brandkraf-teal/15"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{t(link.key)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-brandkraf-teal/60 scale-x-0 opacity-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + language */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageToggle />
              <Button
                onClick={() => setIsFormOpen(true)}
                className="h-11 px-6 text-[15px] font-semibold bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position,box-shadow,transform] duration-500 rounded-xl shadow-md shadow-brandkraf-teal/20 hover:shadow-lg hover:shadow-brandkraf-purple/25 active:scale-[0.98]"
              >
                {t('cta.strategyCall')}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl text-brandkraf-teal transition-colors hover:bg-brandkraf-teal/5 hover:text-brandkraf-purple"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="container-custom py-6 space-y-1">
                {/* Services accordion */}
                <button
                  onClick={() => setIsMobileServicesOpen(v => !v)}
                  className={`w-full flex items-center justify-between py-2.5 px-3 text-base font-medium rounded-xl transition-colors ${
                    isServiceActive ? 'text-brandkraf-teal bg-brandkraf-teal/5' : 'text-gray-600 hover:text-brandkraf-teal hover:bg-brandkraf-teal/5'
                  }`}
                  aria-expanded={isMobileServicesOpen}
                >
                  {t('nav.services')}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-1 pb-2 space-y-1">
                        {services.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.path}
                              to={lp(svc.path)}
                              className="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-600 hover:text-brandkraf-teal rounded-lg hover:bg-brandkraf-teal/5 transition-colors"
                            >
                              <Icon className="h-4 w-4 flex-shrink-0 text-brandkraf-teal" />
                              {svc.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={lp(link.path)}
                    className={`block py-2.5 px-3 text-base font-medium rounded-xl transition-colors ${
                      basePath === link.path
                        ? 'text-brandkraf-teal bg-brandkraf-teal/5'
                        : 'text-gray-600 hover:text-brandkraf-teal hover:bg-brandkraf-teal/5'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                ))}

                <div className="flex items-center justify-between pt-3">
                  <LanguageToggle />
                </div>
                <div className="pt-3">
                  <Button
                    onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }}
                    className="w-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white transition-all duration-300 rounded-xl h-12 shadow-md shadow-brandkraf-teal/20 active:scale-[0.99]"
                  >
                    {t('cta.strategyCall')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <WhatsAppInquiryForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
}

export default Header;
