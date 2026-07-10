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

export default function UGCContentCreationPricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Starter Pack', 'Pakej Permulaan'),
      originalPrice: "RM 4,000",
      discountPrice: "RM 2,999",
      numericPrice: 2999,
      savings: T('Save RM1,000', 'Jimat RM1,000'),
      showTimer: true,
      description: T('Test the waters with high-converting UGC for your ads.', 'Cuba dahulu dengan UGC berpenukaran tinggi untuk iklan anda.'),
      features: [
        T('40 simple UGC Videos', '40 Video UGC ringkas'),
        T('1 Professional Creator/Talent', '1 Pencipta/Bakat Profesional'),
        T('Scriptwriting & Storyboarding', 'Penulisan Skrip & Papan Cerita'),
        T('Basic Editing & Captions', 'Penyuntingan Asas & Kapsyen'),
        T('Usage Rights Included', 'Hak Penggunaan Termasuk'),
        T('1 Round of Revisions', '1 Pusingan Semakan'),
      ],
      isPopular: false,
      isCustom: false,
      ctaText: T('Ask a Question', 'Tanya Soalan')
    },
    {
      name: T('Growth Pack', 'Pakej Pertumbuhan'),
      originalPrice: "RM 12,000",
      discountPrice: "RM 7,999",
      numericPrice: 7999,
      savings: T('Save RM4,000', 'Jimat RM4,000'),
      showTimer: true,
      description: T('Scale your ad testing with diverse creator content.', 'Kembangkan ujian iklan anda dengan kandungan pencipta yang pelbagai.'),
      features: [
        T('120 simple UGC Videos', '120 Video UGC ringkas'),
        T('1 Professional Creator/Talent', '1 Pencipta/Bakat Profesional'),
        T('Scriptwriting & Storyboarding', 'Penulisan Skrip & Papan Cerita'),
        T('Basic Editing & Captions', 'Penyuntingan Asas & Kapsyen'),
        T('Usage Rights Included', 'Hak Penggunaan Termasuk'),
        T('2 Rounds of Revisions', '2 Pusingan Semakan'),
      ],
      isPopular: true,
      isCustom: false,
      ctaText: T('Ask a Question', 'Tanya Soalan')
    },
    {
      name: T('Custom Pack', 'Pakej Tersuai'),
      price: "Custom",
      description: T('Tailored solutions for unique business needs.', 'Penyelesaian disesuaikan untuk keperluan perniagaan yang unik.'),
      features: [
        T('Custom Video Volume', 'Volum Video Tersuai'),
        T('Multiple Creator Profiles', 'Pelbagai Profil Pencipta'),
        T('Extensive Hook & CTA Variations', 'Variasi Kail & CTA yang Luas'),
        T('Premium Editing & Motion Graphics', 'Penyuntingan Premium & Grafik Gerakan'),
        T('Perpetual Usage Rights', 'Hak Penggunaan Kekal'),
        T('Unlimited Revisions', 'Semakan Tanpa Had'),
        T('Dedicated Creative Director', 'Pengarah Kreatif Khusus'),
      ],
      isPopular: false,
      isCustom: true,
      ctaText: T('Contact Sales Team', 'Hubungi Pasukan Jualan')
    }
  ];

  const FAQS = [
    {
      q: T('Do I get to choose the creators?', 'Bolehkah saya memilih pencipta?'),
      a: T('Yes, we provide a roster of vetted creators that match your brand demographic for you to approve before shooting begins.', 'Ya, kami menyediakan senarai pencipta yang disaring yang sepadan dengan demografi jenama anda untuk kelulusan anda sebelum penggambaran bermula.')
    },
    {
      q: T('How long does it take to get the videos?', 'Berapa lama untuk mendapat video?'),
      a: T('Typically, the turnaround time is 14-21 days from the moment the creators receive your product.', 'Biasanya, masa penyiapan ialah 14-21 hari dari saat pencipta menerima produk anda.')
    },
    {
      q: T('Do I need to send free products?', 'Adakah saya perlu menghantar produk percuma?'),
      a: T('Yes, you will need to provide the product to the creators. The cost of the product and shipping is not included in the package price.', 'Ya, anda perlu menyediakan produk kepada pencipta. Kos produk dan penghantaran tidak termasuk dalam harga pakej.')
    },
    {
      q: T('Is transport charge included?', 'Adakah caj pengangkutan termasuk?'),
      a: T('No, transport charge is not included.', 'Tidak, caj pengangkutan tidak termasuk.')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('UGC Content Creation Pricing | BrandKraf', 'Harga Penciptaan Kandungan UGC | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for authentic User-Generated Content creation. Limited time offers available.', 'Harga telus untuk penciptaan Kandungan Jana Pengguna yang autentik. Tawaran masa terhad tersedia.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('UGC Content Creation', 'Penciptaan Kandungan UGC')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wide mb-6">
              {T('Limited Time Offer', 'Tawaran Masa Terhad')}
            </div>
            <h1 className="mb-6">{T('UGC Content Creation Pricing', 'Harga Penciptaan Kandungan UGC')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Stop scrolling with authentic, high-converting User-Generated Content. We handle sourcing, scripting, shooting, and editing.',
                'Hentikan susur dengan Kandungan Jana Pengguna yang autentik dan berpenukaran tinggi. Kami mengendalikan pencarian, penulisan skrip, penggambaran, dan penyuntingan.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="UGC Content Creation"
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