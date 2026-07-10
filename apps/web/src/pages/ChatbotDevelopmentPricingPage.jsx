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

export default function ChatbotDevelopmentPricingPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const TIERS = [
    {
      name: T('Lead Gen Bot', 'Bot Penjanaan Petunjuk'),
      price: "RM 3,500",
      numericPrice: 3500,
      description: T('Rule-based chatbot to capture leads and answer basic FAQs.', 'Chatbot berasaskan peraturan untuk menangkap petunjuk dan menjawab soalan lazim asas.'),
      features: [
        T('Website or WhatsApp Integration', 'Integrasi Laman Web atau WhatsApp'),
        T('Up to 5 Conversational Flows', 'Sehingga 5 Aliran Perbualan'),
        T('Basic FAQ Training (Up to 20 Q&As)', 'Latihan Soalan Lazim Asas (Sehingga 20 S&J)'),
        T('Lead Capture & Email Notification', 'Penangkapan Petunjuk & Pemberitahuan E-mel'),
        T('Human Handoff Protocol', 'Protokol Penyerahan kepada Manusia'),
        T('1 Month Maintenance', 'Penyelenggaraan 1 Bulan'),
      ],
      isPopular: false
    },
    {
      name: T('AI Assistant', 'Pembantu AI'),
      price: "RM 8,000",
      numericPrice: 8000,
      description: T('NLP-powered bot trained on your company data.', 'Bot berkuasa NLP yang dilatih pada data syarikat anda.'),
      features: [
        T('Multi-channel (Web, WA, FB Messenger)', 'Berbilang saluran (Web, WA, FB Messenger)'),
        T('Trained on your Website/PDFs', 'Dilatih pada Laman Web/PDF anda'),
        T('Natural Language Processing (NLP)', 'Pemprosesan Bahasa Semula Jadi (NLP)'),
        T('CRM Integration (HubSpot/Salesforce)', 'Integrasi CRM (HubSpot/Salesforce)'),
        T('Appointment Booking Integration', 'Integrasi Tempahan Temu Janji'),
        T('Sentiment Analysis', 'Analisis Sentimen'),
        T('3 Months Maintenance & Retraining', 'Penyelenggaraan & Latihan Semula 3 Bulan'),
      ],
      isPopular: true
    },
    {
      name: T('E-Commerce Bot', 'Bot E-Dagang'),
      price: "RM 15,000+",
      numericPrice: 15000,
      description: T('Advanced bot capable of handling transactions and support.', 'Bot lanjutan yang mampu mengendalikan transaksi dan sokongan.'),
      features: [
        T('Shopify/WooCommerce Deep Integration', 'Integrasi Mendalam Shopify/WooCommerce'),
        T('Product Recommendations via AI', 'Cadangan Produk melalui AI'),
        T('Order Tracking & Status Updates', 'Penjejakan Pesanan & Kemas Kini Status'),
        T('Abandoned Cart Recovery Flows', 'Aliran Pemulihan Troli Ditinggalkan'),
        T('Payment Gateway Integration', 'Integrasi Gerbang Pembayaran'),
        T('Custom API Connections', 'Sambungan API Tersuai'),
        T('Dedicated Support SLA', 'SLA Sokongan Khusus'),
      ],
      isPopular: false
    }
  ];

  const FAQS = [
    {
      q: T('Are there ongoing monthly fees?', 'Adakah yuran bulanan berterusan?'),
      a: T('Yes, depending on the platform used (e.g., ManyChat, Voiceflow, custom LLM hosting), there will be software subscription costs and API usage fees billed separately.', 'Ya, bergantung pada platform yang digunakan (cth. ManyChat, Voiceflow, pengehosan LLM tersuai), akan ada kos langganan perisian dan yuran penggunaan API yang dicaj berasingan.')
    },
    {
      q: T('Can the bot speak multiple languages?', 'Bolehkah bot bercakap pelbagai bahasa?'),
      a: T('Yes, our AI-powered bots can automatically detect and respond in multiple languages, including English, Malay, and Mandarin.', 'Ya, bot berkuasa AI kami boleh mengesan dan membalas secara automatik dalam pelbagai bahasa, termasuk Inggeris, Melayu, dan Mandarin.')
    },
    {
      q: T("What happens if the bot doesn't know the answer?", 'Apa berlaku jika bot tidak tahu jawapannya?'),
      a: T("We always implement a 'Human Handoff' protocol. If the bot is confused or the user requests a human, the chat is seamlessly routed to your live support team.", "Kami sentiasa melaksanakan protokol 'Penyerahan kepada Manusia'. Jika bot keliru atau pengguna meminta manusia, sembang dihalakan dengan lancar kepada pasukan sokongan langsung anda.")
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('Chatbot Development Pricing | BrandKraf', 'Harga Pembangunan Chatbot | BrandKraf')}</title>
        <meta name="description" content={T('Transparent pricing for custom AI chatbots and conversational marketing.', 'Harga telus untuk chatbot AI tersuai dan pemasaran perbualan.')} />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          <BreadcrumbNav currentService={T('Chatbot Development', 'Pembangunan Chatbot')} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="mb-6">{T('Chatbot Development Pricing', 'Harga Pembangunan Chatbot')}</h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Provide 24/7 customer support and automate lead generation with intelligent, conversational chatbots tailored to your business.',
                'Sediakan sokongan pelanggan 24/7 dan automasikan penjanaan petunjuk dengan chatbot perbualan pintar yang disesuaikan dengan perniagaan anda.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {TIERS.map((tier, idx) => (
              <PricingTierCard
                key={idx}
                {...tier}
                delay={idx * 0.1}
                serviceCategory="Chatbot Development"
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