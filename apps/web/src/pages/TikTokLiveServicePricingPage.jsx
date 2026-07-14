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

export default function TikTokLiveServicePricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Pilot Stream', 'Strim Perintis'),
      price: "RM 2,500",
      numericPrice: 2500,
      description: T('Test the waters with a professionally managed live session.', 'Cuba dahulu dengan sesi langsung yang diurus secara profesional.'),
      features: [
        T('1 Live Session (2 Hours)', '1 Sesi Langsung (2 Jam)'),
        T('Professional Host/Talent', 'Hos/Bakat Profesional'),
        T('Basic Studio Setup', 'Persediaan Studio Asas'),
        T('Script & Run-of-Show Planning', 'Perancangan Skrip & Perjalanan Rancangan'),
        T('Live Moderation & Chat Support', 'Moderasi Langsung & Sokongan Sembang'),
        T('Post-Stream Analytics', 'Analitik Selepas Strim'),
      ],
      isPopular: false
    },
    {
      name: T('Monthly Retainer', 'Pengekalan Bulanan'),
      price: T('RM 8,000/mo', 'RM 8,000/bln'),
      numericPrice: 8000,
      description: T('Consistent live presence to build audience and drive sales.', 'Kehadiran langsung yang konsisten untuk membina penonton dan memacu jualan.'),
      features: [
        T('4 Live Sessions per month', '4 Sesi Langsung sebulan'),
        T('Dedicated Host Rotation', 'Giliran Hos Khusus'),
        T('Premium Studio & Lighting', 'Studio & Pencahayaan Premium'),
        T('Interactive Overlays & Graphics', 'Tindanan & Grafik Interaktif'),
        T('Giveaway & Promo Management', 'Pengurusan Hadiah & Promosi'),
        T('Live Ad Boosting Strategy', 'Strategi Rangsangan Iklan Langsung'),
        T('Weekly Performance Reviews', 'Semakan Prestasi Mingguan'),
      ],
      isPopular: true
    },
    {
      name: T('Mega Event', 'Acara Mega'),
      price: "RM 15,000+",
      numericPrice: 15000,
      description: T('High-production value streams for major launches or sales.', 'Strim bernilai pengeluaran tinggi untuk pelancaran atau jualan besar.'),
      features: [
        T('Multi-camera Production Setup', 'Persediaan Pengeluaran Berbilang Kamera'),
        T('Celebrity/KOL Host Integration', 'Integrasi Hos Selebriti/KOL'),
        T('Custom Set Design', 'Reka Bentuk Set Tersuai'),
        T('Advanced OBS Broadcasting', 'Penyiaran OBS Lanjutan'),
        T('Pre-event Hype Campaign', 'Kempen Pra-acara'),
        T('Real-time Inventory Sync', 'Penyegerakan Inventori Masa Nyata'),
        T('Full Technical Crew On-site', 'Kru Teknikal Penuh Di Lokasi'),
      ],
      isPopular: false
    }
  ];

  const FAQS = [
    {
      q: T('Do you provide the studio and equipment?', 'Adakah anda menyediakan studio dan peralatan?'),
      a: T('Yes, our packages include access to our fully equipped live streaming studios, complete with professional lighting, cameras, and audio gear.', 'Ya, pakej kami termasuk akses ke studio penstriman langsung kami yang lengkap, dengan pencahayaan profesional, kamera, dan peralatan audio.')
    },
    {
      q: T('Who hosts the live streams?', 'Siapa yang menjadi hos strim langsung?'),
      a: T('We have a roster of trained, energetic live stream hosts who are experienced in driving engagement and sales. You can also use your own team members if preferred.', 'Kami mempunyai senarai hos strim langsung yang terlatih dan bertenaga yang berpengalaman memacu penglibatan dan jualan. Anda juga boleh menggunakan ahli pasukan anda sendiri jika mahu.')
    },
    {
      q: T('Do you handle the TikTok Shop backend?', 'Adakah anda menguruskan bahagian belakang TikTok Shop?'),
      a: T('Yes, we assist with pinning products, managing flash sales, and monitoring inventory during the live session.', 'Ya, kami membantu menyematkan produk, menguruskan jualan kilat, dan memantau inventori semasa sesi langsung.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('TikTok Live Service Pricing | BrandKraf', 'Harga Perkhidmatan TikTok Live | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for professional TikTok Live streaming and commerce management.', 'Harga telus untuk penstriman TikTok Live profesional dan pengurusan perdagangan.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('TikTok Live Service', 'Perkhidmatan TikTok Live')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('TikTok Live Service Pricing', 'Harga Perkhidmatan TikTok Live')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Turn viewers into buyers in real-time. We handle the talent, production, and strategy for high-converting TikTok Live sessions.',
                'Tukar penonton menjadi pembeli secara masa nyata. Kami mengendalikan bakat, pengeluaran, dan strategi untuk sesi TikTok Live berpenukaran tinggi.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="TikTok Live Service"
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