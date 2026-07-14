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

export default function PaidAdvertisingPricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Growth', 'Pertumbuhan'),
      price: "RM 3,500",
      numericPrice: 3500,
      description: T('For businesses spending up to RM 10,000/mo on ads.', 'Untuk perniagaan yang berbelanja sehingga RM 10,000/bln pada iklan.'),
      features: [
        T('1 Ad Platform (Meta or TikTok)', '1 Platform Iklan (Meta atau TikTok)'),
        T('Campaign Setup & Strategy', 'Persediaan Kempen & Strategi'),
        T('Audience Research & Targeting', 'Penyelidikan & Penyasaran Penonton'),
        T('A/B Testing (Basic)', 'Ujian A/B (Asas)'),
        T('Monthly Performance Report', 'Laporan Prestasi Bulanan'),
        T('Pixel/Tag Installation', 'Pemasangan Piksel/Tag'),
      ],
      isPopular: false
    },
    {
      name: T('Scale', 'Skala'),
      price: "RM 6,000",
      numericPrice: 6000,
      description: T('For businesses spending up to RM 30,000/mo on ads.', 'Untuk perniagaan yang berbelanja sehingga RM 30,000/bln pada iklan.'),
      features: [
        T('2 Ad Platforms (e.g., Meta + TikTok)', '2 Platform Iklan (cth. Meta + TikTok)'),
        T('Advanced Retargeting Funnels', 'Saluran Penyasaran Semula Lanjutan'),
        T('Continuous A/B Testing', 'Ujian A/B Berterusan'),
        T('Custom Audience Creation', 'Penciptaan Penonton Tersuai'),
        T('Bi-weekly Performance Calls', 'Panggilan Prestasi Dua Minggu Sekali'),
        T('Creative Direction Consultation', 'Perundingan Arah Kreatif'),
        T('Conversion Rate Optimization', 'Pengoptimuman Kadar Penukaran'),
      ],
      isPopular: true
    },
    {
      name: T('Enterprise', 'Perusahaan'),
      price: "Custom",
      description: T('For high-volume spenders requiring complex funnels.', 'Untuk pembelanja volum tinggi yang memerlukan saluran kompleks.'),
      features: [
        T('Omnichannel Strategy (Meta, TikTok, Google)', 'Strategi Omnisaluran (Meta, TikTok, Google)'),
        T('Advanced Attribution Modeling', 'Pemodelan Atribusi Lanjutan'),
        T('Dynamic Product Ads', 'Iklan Produk Dinamik'),
        T('Custom Dashboard Access', 'Akses Papan Pemuka Tersuai'),
        T('Weekly Strategy Meetings', 'Mesyuarat Strategi Mingguan'),
        T('Dedicated Media Buyer', 'Pembeli Media Khusus'),
        T('Priority Support', 'Sokongan Keutamaan'),
      ],
      isPopular: false,
      isCustom: true
    }
  ];

  const FAQS = [
    {
      q: T('Is the ad spend included in your fee?', 'Adakah perbelanjaan iklan termasuk dalam yuran anda?'),
      a: T('No, the pricing listed is our management fee. The actual ad spend is paid directly to the platforms (Meta, TikTok, Google) by you.', 'Tidak, harga yang disenaraikan ialah yuran pengurusan kami. Perbelanjaan iklan sebenar dibayar terus kepada platform (Meta, TikTok, Google) oleh anda.')
    },
    {
      q: T('Do you create the ad creatives?', 'Adakah anda mencipta kreatif iklan?'),
      a: T('Basic graphic design is included, but high-end video production or UGC is billed separately or bundled in our comprehensive packages.', 'Reka bentuk grafik asas termasuk, tetapi pengeluaran video mewah atau UGC dicaj berasingan atau digabungkan dalam pakej menyeluruh kami.')
    },
    {
      q: T('How long does it take to see results?', 'Berapa lama untuk melihat hasil?'),
      a: T('While some campaigns see immediate traction, we recommend a 3-month commitment to properly test, learn, and optimize the algorithms for sustainable ROI.', 'Walaupun sesetengah kempen mendapat tarikan segera, kami mengesyorkan komitmen 3 bulan untuk menguji, belajar, dan mengoptimumkan algoritma dengan betul bagi ROI yang mampan.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('Paid Advertising Pricing | BrandKraf', 'Harga Pengiklanan Berbayar | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for Meta, TikTok, and Google Ads management.', 'Harga telus untuk pengurusan Iklan Meta, TikTok, dan Google.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('Paid Advertising', 'Pengiklanan Berbayar')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('Paid Advertising Pricing', 'Harga Pengiklanan Berbayar')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Maximize your return on ad spend with data-driven campaigns across Meta, TikTok, and Google. We focus on conversions, not just clicks.',
                'Maksimumkan pulangan atas perbelanjaan iklan anda dengan kempen dipacu data merentasi Meta, TikTok, dan Google. Kami fokus pada penukaran, bukan sekadar klik.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="Paid Advertising"
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