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

export default function KOCKOLServicePricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: "REACH MAX",
      price: "RM 4,000",
      numericPrice: 4000,
      description: T('High engagement rates from niche community leaders.', 'Kadar penglibatan tinggi daripada pemimpin komuniti niche.'),
      features: [
        T('20 KOC (Key Opinion Consumers)', '20 KOC (Key Opinion Consumers)'),
        T('Follower 5K and below', 'Pengikut 5K dan ke bawah'),
        T('Creator Sourcing & Vetting', 'Pencarian & Penyaringan Pencipta'),
        T('Brief Development', 'Pembangunan Taklimat'),
        T('Product Seeding Management', 'Pengurusan Pengedaran Produk'),
        T('Content Review & Approval', 'Semakan & Kelulusan Kandungan'),
        T('Campaign Performance Report', 'Laporan Prestasi Kempen'),
      ],
      isPopular: false
    },
    {
      name: "AWARENESS MAX",
      price: "RM 10,000",
      numericPrice: 10000,
      description: T('Mix of micro and macro influencers for broad reach.', 'Campuran pempengaruh mikro dan makro untuk jangkauan luas.'),
      features: [
        T('20 KOC less than 5K follower + 10 KOC more than 10K follower', '20 KOC kurang 5K pengikut + 10 KOC lebih 10K pengikut'),
        T('Comprehensive Campaign Strategy', 'Strategi Kempen Menyeluruh'),
        T('Creator Sourcing & Vetting', 'Pencarian & Penyaringan Pencipta'),
        T('Brief Development', 'Pembangunan Taklimat'),
        T('Product Seeding Management', 'Pengurusan Pengedaran Produk'),
        T('Content Review & Approval', 'Semakan & Kelulusan Kandungan'),
        T('Detailed ROI Reporting', 'Pelaporan ROI Terperinci'),
      ],
      isPopular: true
    },
    {
      name: T('MEGA CAMPAIGN', 'KEMPEN MEGA'),
      price: "Custom",
      description: T('High-impact campaigns with top-tier celebrities.', 'Kempen berimpak tinggi dengan selebriti peringkat teratas.'),
      features: [
        T('Top-tier KOLs / Celebrities', 'KOL / Selebriti Peringkat Teratas'),
        T('Custom Event/Activation Integration', 'Integrasi Acara/Pengaktifan Tersuai'),
        T('Long-term Ambassador Contracts', 'Kontrak Duta Jangka Panjang'),
        T('Cross-platform Syndication', 'Sindikasi Rentas Platform'),
        T('PR & Media Outreach', 'Jangkauan PR & Media'),
        T('Full Legal & Compliance Handling', 'Pengendalian Undang-undang & Pematuhan Penuh'),
        T('Real-time Dashboard Access', 'Akses Papan Pemuka Masa Nyata'),
      ],
      isPopular: false,
      isCustom: true
    }
  ];

  const FAQS = [
    {
      q: T('Are the influencer fees included in these prices?', 'Adakah yuran pempengaruh termasuk dalam harga ini?'),
      a: T('The pricing covers our agency management fee. The actual payout to the influencers (if required beyond product seeding) is a separate budget.', 'Harga ini meliputi yuran pengurusan agensi kami. Bayaran sebenar kepada pempengaruh (jika diperlukan melebihi pengedaran produk) ialah bajet berasingan.')
    },
    {
      q: T('What is the difference between KOC and KOL?', 'Apa beza KOC dan KOL?'),
      a: T('KOCs (Key Opinion Consumers) are everyday consumers with smaller but highly engaged followings. KOLs (Key Opinion Leaders) are established influencers or celebrities with massive reach.', 'KOC (Key Opinion Consumers) ialah pengguna harian dengan pengikut lebih kecil tetapi sangat terlibat. KOL (Key Opinion Leaders) ialah pempengaruh mapan atau selebriti dengan jangkauan besar.')
    },
    {
      q: T('Do we own the content they create?', 'Adakah kami memiliki kandungan yang mereka cipta?'),
      a: T('We negotiate standard usage rights (usually 3-6 months for digital ads). Perpetual or broadcast rights require additional negotiation and fees.', 'Kami merundingkan hak penggunaan standard (biasanya 3-6 bulan untuk iklan digital). Hak kekal atau penyiaran memerlukan rundingan dan yuran tambahan.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet defer={false}>
        <title>{T('KOC & KOL Service Pricing | BrandKraf', 'Harga Perkhidmatan KOC & KOL | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for influencer marketing and KOC/KOL campaigns.', 'Harga telus untuk pemasaran pempengaruh dan kempen KOC/KOL.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('KOC & KOL Service', 'Perkhidmatan KOC & KOL')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('KOC & KOL Service Pricing', 'Harga Perkhidmatan KOC & KOL')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                "Amplify your brand's reach and credibility through strategic partnerships with Key Opinion Consumers and Leaders.",
                'Kuatkan jangkauan dan kredibiliti jenama anda melalui perkongsian strategik dengan Key Opinion Consumers dan Leaders.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="KOC & KOL Service"
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