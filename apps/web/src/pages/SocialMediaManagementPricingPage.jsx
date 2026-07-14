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

export default function SocialMediaManagementPricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Starter', 'Permulaan'),
      price: "RM 2,500",
      numericPrice: 2500,
      description: T('Perfect for small businesses establishing their social presence.', 'Sesuai untuk perniagaan kecil yang membina kehadiran sosial mereka.'),
      features: [
        T('2 Social Media Platforms (e.g., IG & FB)', '2 Platform Media Sosial (cth. IG & FB)'),
        T('12 Posts per month', '12 Siaran sebulan'),
        T('Basic Community Management', 'Pengurusan Komuniti Asas'),
        T('Monthly Content Calendar', 'Kalendar Kandungan Bulanan'),
        T('Standard Monthly Reporting', 'Pelaporan Bulanan Standard'),
        T('Email Support', 'Sokongan E-mel'),
      ],
      isPopular: false
    },
    {
      name: T('Professional', 'Profesional'),
      price: "RM 4,800",
      numericPrice: 4800,
      description: T('Ideal for growing brands needing consistent, high-quality engagement.', 'Ideal untuk jenama berkembang yang memerlukan penglibatan konsisten dan berkualiti tinggi.'),
      features: [
        T('3 Social Media Platforms', '3 Platform Media Sosial'),
        T('20 Posts per month', '20 Siaran sebulan'),
        T('4 Short-form Videos (Reels/TikToks)', '4 Video Bentuk Pendek (Reels/TikTok)'),
        T('Proactive Community Management', 'Pengurusan Komuniti Proaktif'),
        T('Competitor Analysis', 'Analisis Pesaing'),
        T('Bi-weekly Strategy Calls', 'Panggilan Strategi Dua Minggu Sekali'),
        T('Priority Support', 'Sokongan Keutamaan'),
      ],
      isPopular: true
    },
    {
      name: T('Enterprise', 'Perusahaan'),
      price: "Custom",
      description: T('Full-scale social media dominance for established brands.', 'Penguasaan media sosial berskala penuh untuk jenama yang mantap.'),
      features: [
        T('Unlimited Platforms', 'Platform Tanpa Had'),
        T('Daily Posting Schedule', 'Jadual Penyiaran Harian'),
        T('Custom Video Production', 'Pengeluaran Video Tersuai'),
        T('Influencer Outreach Management', 'Pengurusan Jangkauan Pempengaruh'),
        T('Crisis Management Protocol', 'Protokol Pengurusan Krisis'),
        T('Dedicated Account Manager', 'Pengurus Akaun Khusus'),
        T('24/7 Priority Support', 'Sokongan Keutamaan 24/7'),
      ],
      isPopular: false,
      isCustom: true
    }
  ];

  const FAQS = [
    {
      q: T('Do I need to provide the content?', 'Adakah saya perlu menyediakan kandungan?'),
      a: T('We handle the content creation! While we welcome any assets you have, our team will design graphics, write copy, and plan the strategy.', 'Kami mengendalikan penciptaan kandungan! Walaupun kami mengalu-alukan sebarang aset yang anda ada, pasukan kami akan mereka bentuk grafik, menulis salinan, dan merancang strategi.')
    },
    {
      q: T('Can I review posts before they go live?', 'Bolehkah saya menyemak siaran sebelum ia disiarkan?'),
      a: T('Absolutely. We provide a monthly content calendar for your approval before anything is published.', 'Sudah tentu. Kami menyediakan kalendar kandungan bulanan untuk kelulusan anda sebelum apa-apa diterbitkan.')
    },
    {
      q: T('Is ad spend included in these packages?', 'Adakah perbelanjaan iklan termasuk dalam pakej ini?'),
      a: T('No, these packages cover organic social media management. Paid advertising is a separate service with its own dedicated budget.', 'Tidak, pakej ini meliputi pengurusan media sosial organik. Pengiklanan berbayar ialah perkhidmatan berasingan dengan bajet khususnya sendiri.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('Social Media Management Pricing | BrandKraf', 'Harga Pengurusan Media Sosial | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for professional social media management services.', 'Harga telus untuk perkhidmatan pengurusan media sosial profesional.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('Social Media Management', 'Pengurusan Media Sosial')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('Social Media Management Pricing', 'Harga Pengurusan Media Sosial')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Build a loyal community and drive organic growth with our strategic social media management packages. We handle everything from content creation to community engagement.',
                'Bina komuniti setia dan pacu pertumbuhan organik dengan pakej pengurusan media sosial strategik kami. Kami mengendalikan segalanya daripada penciptaan kandungan kepada penglibatan komuniti.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="Social Media Management"
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