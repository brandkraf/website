import React from 'react';
import { Helmet } from 'react-helmet-async';
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

export default function WebsiteDevelopmentPricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Landing Page', 'Halaman Pendaratan'),
      price: "RM 4,500",
      numericPrice: 4500,
      description: T('High-converting single page for campaigns or lead gen.', 'Halaman tunggal berpenukaran tinggi untuk kempen atau penjanaan petunjuk.'),
      features: [
        T('Custom Single Page Design', 'Reka Bentuk Halaman Tunggal Tersuai'),
        T('Mobile Responsive', 'Responsif Mudah Alih'),
        T('Lead Capture Form Integration', 'Integrasi Borang Penangkapan Petunjuk'),
        T('Basic SEO Setup', 'Persediaan SEO Asas'),
        T('Fast Loading Speed', 'Kelajuan Pemuatan Pantas'),
        T('1 Month Post-Launch Support', 'Sokongan 1 Bulan Selepas Pelancaran'),
      ],
      isPopular: false
    },
    {
      name: T('Corporate Site', 'Laman Korporat'),
      price: "RM 8,500",
      numericPrice: 8500,
      description: T('Professional multi-page website for established businesses.', 'Laman web berbilang halaman profesional untuk perniagaan yang mantap.'),
      features: [
        T('Up to 8 Custom Pages', 'Sehingga 8 Halaman Tersuai'),
        T('CMS Integration (WordPress/Webflow)', 'Integrasi CMS (WordPress/Webflow)'),
        T('Advanced SEO Optimization', 'Pengoptimuman SEO Lanjutan'),
        T('Blog/News Section Setup', 'Persediaan Bahagian Blog/Berita'),
        T('Analytics & Tracking Integration', 'Integrasi Analitik & Penjejakan'),
        T('Custom Animations & Interactions', 'Animasi & Interaksi Tersuai'),
        T('3 Months Post-Launch Support', 'Sokongan 3 Bulan Selepas Pelancaran'),
      ],
      isPopular: true
    },
    {
      name: T('E-Commerce', 'E-Dagang'),
      price: "RM 15,000+",
      numericPrice: 15000,
      description: T('Full-scale online store optimized for sales.', 'Kedai dalam talian berskala penuh yang dioptimumkan untuk jualan.'),
      features: [
        T('Shopify or WooCommerce Setup', 'Persediaan Shopify atau WooCommerce'),
        T('Custom Theme Development', 'Pembangunan Tema Tersuai'),
        T('Payment Gateway Integration', 'Integrasi Gerbang Pembayaran'),
        T('Up to 50 Initial Products Uploaded', 'Sehingga 50 Produk Awal Dimuat Naik'),
        T('Abandoned Cart Recovery Setup', 'Persediaan Pemulihan Troli Ditinggalkan'),
        T('Inventory Management Training', 'Latihan Pengurusan Inventori'),
        T('6 Months Post-Launch Support', 'Sokongan 6 Bulan Selepas Pelancaran'),
      ],
      isPopular: false
    }
  ];

  const FAQS = [
    {
      q: T('Do you provide hosting and domain registration?', 'Adakah anda menyediakan pengehosan dan pendaftaran domain?'),
      a: T('We can assist with the setup, but the costs for hosting and domain registration are billed directly to you by the providers to ensure you retain full ownership.', 'Kami boleh membantu dengan persediaan, tetapi kos pengehosan dan pendaftaran domain dicaj terus kepada anda oleh penyedia untuk memastikan anda mengekalkan pemilikan penuh.')
    },
    {
      q: T('Will I be able to update the website myself?', 'Bolehkah saya mengemas kini laman web sendiri?'),
      a: T('Yes, we build on user-friendly Content Management Systems (CMS) and provide training so your team can easily update text, images, and products.', 'Ya, kami membina atas Sistem Pengurusan Kandungan (CMS) yang mesra pengguna dan menyediakan latihan supaya pasukan anda boleh mengemas kini teks, imej, dan produk dengan mudah.')
    },
    {
      q: T('How long does it take to build a website?', 'Berapa lama untuk membina laman web?'),
      a: T('A landing page typically takes 2-3 weeks, a corporate site 4-6 weeks, and an e-commerce store 6-8 weeks, depending on the complexity and how quickly feedback is provided.', 'Halaman pendaratan biasanya mengambil 2-3 minggu, laman korporat 4-6 minggu, dan kedai e-dagang 6-8 minggu, bergantung pada kerumitan dan kepantasan maklum balas diberikan.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('Website Development Pricing | BrandKraf', 'Harga Pembangunan Laman Web | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for custom website and e-commerce development.', 'Harga telus untuk pembangunan laman web tersuai dan e-dagang.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('Website Development', 'Pembangunan Laman Web')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('Website Development Pricing', 'Harga Pembangunan Laman Web')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Your website is your digital storefront. We build fast, secure, and conversion-optimized websites that turn visitors into customers.',
                'Laman web anda ialah etalase digital anda. Kami membina laman web yang pantas, selamat, dan dioptimumkan penukaran yang menukar pelawat menjadi pelanggan.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="Website Development"
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