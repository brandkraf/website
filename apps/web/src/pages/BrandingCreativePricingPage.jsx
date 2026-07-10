import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BreadcrumbNav from '@/components/BreadcrumbNav.jsx';
import PricingTierCard from '@/components/PricingTierCard.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

export default function BrandingCreativePricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Brand Refresh', 'Penyegaran Jenama'),
      price: "RM 3,500",
      numericPrice: 3500,
      description: T('Modernize your existing brand identity.', 'Modenkan identiti jenama sedia ada anda.'),
      features: [
        T('Logo Modernization', 'Pemodenan Logo'),
        T('Color Palette Update', 'Kemas Kini Palet Warna'),
        T('Typography Selection', 'Pemilihan Tipografi'),
        T('Basic Brand Guidelines (PDF)', 'Garis Panduan Jenama Asas (PDF)'),
        T('Social Media Profile Assets', 'Aset Profil Media Sosial'),
        T('2 Rounds of Revisions', '2 Pusingan Semakan'),
      ],
      isPopular: false
    },
    {
      name: T('Full Identity', 'Identiti Penuh'),
      price: "RM 8,000",
      numericPrice: 8000,
      description: T('Complete brand creation from scratch.', 'Penciptaan jenama lengkap dari awal.'),
      features: [
        T('Primary & Secondary Logos', 'Logo Utama & Sekunder'),
        T('Comprehensive Color System', 'Sistem Warna Menyeluruh'),
        T('Typography Hierarchy', 'Hierarki Tipografi'),
        T('Extensive Brand Book', 'Buku Jenama yang Lengkap'),
        T('Business Card & Letterhead Design', 'Reka Bentuk Kad Nama & Kepala Surat'),
        T('Social Media Templates (5)', 'Templat Media Sosial (5)'),
        T('3 Rounds of Revisions', '3 Pusingan Semakan'),
      ],
      isPopular: true
    },
    {
      name: T('Creative Retainer', 'Pengekalan Kreatif'),
      price: T('RM 4,000/mo', 'RM 4,000/bln'),
      numericPrice: 4000,
      description: T('Ongoing design support for your marketing needs.', 'Sokongan reka bentuk berterusan untuk keperluan pemasaran anda.'),
      features: [
        T('Dedicated Graphic Designer', 'Pereka Grafik Khusus'),
        T('Up to 20 Design Requests/mo', 'Sehingga 20 Permintaan Reka Bentuk/bln'),
        T('Social Media Graphics', 'Grafik Media Sosial'),
        T('Ad Creatives & Banners', 'Kreatif Iklan & Sepanduk'),
        T('Email Newsletter Designs', 'Reka Bentuk Surat Berita E-mel'),
        T('Presentation Decks', 'Dek Pembentangan'),
        T('Priority Turnaround (48hrs)', 'Penyiapan Keutamaan (48 jam)'),
      ],
      isPopular: false
    }
  ];

  const FAQS = [
    {
      q: T('Do I get the source files?', 'Adakah saya mendapat fail sumber?'),
      a: T('Yes, upon final payment, you receive full ownership and all source files (AI, PSD, EPS) along with standard export formats (PNG, JPG, SVG).', 'Ya, selepas pembayaran akhir, anda menerima pemilikan penuh dan semua fail sumber (AI, PSD, EPS) bersama format eksport standard (PNG, JPG, SVG).')
    },
    {
      q: T('How does the creative retainer work?', 'Bagaimana pengekalan kreatif berfungsi?'),
      a: T('The retainer gives you a set amount of design bandwidth per month. You submit requests via our portal, and we deliver them within 48 hours.', 'Pengekalan memberi anda jumlah kapasiti reka bentuk yang ditetapkan sebulan. Anda menghantar permintaan melalui portal kami, dan kami menyampaikannya dalam masa 48 jam.')
    },
    {
      q: T('Can you help with naming my company?', 'Bolehkah anda membantu menamakan syarikat saya?'),
      a: T('Yes, brand naming and strategy workshops can be added to the Full Identity package for an additional fee.', 'Ya, penamaan jenama dan bengkel strategi boleh ditambah pada pakej Identiti Penuh dengan yuran tambahan.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('Branding & Creative Pricing | BrandKraf', 'Harga Penjenamaan & Kreatif | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for brand identity design and creative retainers.', 'Harga telus untuk reka bentuk identiti jenama dan pengekalan kreatif.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('Branding & Creative', 'Penjenamaan & Kreatif')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('Branding & Creative Pricing', 'Harga Penjenamaan & Kreatif')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Stand out in a crowded market with a cohesive, memorable brand identity that resonates with your target audience.',
                'Menonjol dalam pasaran yang sesak dengan identiti jenama yang padu dan mudah diingati yang beresonansi dengan penonton sasaran anda.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="Branding & Creative"
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-center mb-12">{T('Frequently Asked Questions', 'Soalan Lazim')}</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to={lp('/pricing')}><ArrowLeft className="mr-2 w-4 h-4" /> {T('Back to All Services', 'Kembali ke Semua Perkhidmatan')}</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}