import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/brandkrafdigitalmarketing', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/brandkraf', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/brandkraf', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Gradient top accent + soft brand glows */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brandkraf-teal via-brandkraf-purple to-brandkraf-teal" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brandkraf-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brandkraf-purple/10 blur-3xl" />

      <div className="container-custom py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6 group">
              <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <img
                  src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/45f4e79912ee94c15363cebd3219075f.png"
                  alt="BrandKraf logo"
                  className="h-20 w-auto object-contain opacity-100 group-hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              We help businesses grow with content, ads, and AI-driven marketing strategies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-brandkraf-teal hover:to-brandkraf-purple hover:ring-transparent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase mb-4 block text-slate-400">
              Quick Links
            </span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="h-px w-3 bg-brandkraf-teal/0 group-hover:bg-brandkraf-teal transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase mb-4 block text-slate-400">
              Contact Info
            </span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brandkraf-teal" />
                <span className="leading-snug">28-02-02, Jalan 2/101c, Cheras Business Centre,<br/>56100 Cheras, Wilayah Persekutuan Kuala Lumpur</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400 pt-1">
                <Phone className="h-4 w-4 flex-shrink-0 text-brandkraf-teal" />
                <a href="tel:+60391343603" className="hover:text-white transition-colors duration-200">
                  +60391343603
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-brandkraf-teal" />
                <a href="mailto:admin@brandkraf.com" className="hover:text-white transition-colors duration-200">
                  admin@brandkraf.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase mb-4 block text-slate-400">
              Business Hours
            </span>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} BrandKraf. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/privacy-policy"
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;