import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppInquiryForm from './WhatsAppInquiryForm.jsx';
import { useScrollPosition } from '@/hooks/useScrollPosition.js';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  
  // Use the optimized throttled scroll hook (50px threshold, 100ms delay)
  // This will now ONLY trigger a re-render when crossing the 50px mark, not on every scroll pixel
  const { isScrolled } = useScrollPosition(50, 100);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/70 shadow-[0_8px_30px_-12px_rgba(16,24,40,0.18)]'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <img 
                src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png" 
                alt="BrandKraf logo" 
                className="header-logo"
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-brandkraf-teal'
                        : 'text-gray-600 hover:text-brandkraf-teal hover:bg-brandkraf-teal/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-brandkraf-teal/60 scale-x-0 opacity-0 origin-left transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position,box-shadow,transform] duration-500 rounded-xl shadow-md shadow-brandkraf-teal/20 hover:shadow-lg hover:shadow-brandkraf-purple/25 active:scale-[0.98]"
              >
                Get Free Strategy Call
              </Button>
            </div>

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

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="container-custom py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-brandkraf-teal border-l-2 border-brandkraf-teal pl-3'
                        : 'text-gray-600 hover:text-brandkraf-teal pl-3'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setIsFormOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple text-white transition-all duration-300 rounded-xl h-12 shadow-md shadow-brandkraf-teal/20 active:scale-[0.99]"
                  >
                    Get Free Strategy Call
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