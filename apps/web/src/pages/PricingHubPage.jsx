import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Share2,
  Video,
  Target,
  Globe,
  Palette,
  Users,
  Radio,
  BrainCircuit,
  MessageSquare
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingServiceCard from '@/components/PricingServiceCard.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

export default function PricingHubPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const SERVICES = [
    {
      title: T('Social Media Management', 'Pengurusan Media Sosial'),
      description: T('Comprehensive management of your social channels to build community and drive engagement.', 'Pengurusan menyeluruh saluran sosial anda untuk membina komuniti dan memacu penglibatan.'),
      icon: Share2,
      link: "/pricing/social-media-management"
    },
    {
      title: T('UGC Content Creation', 'Penciptaan Kandungan UGC'),
      description: T('Authentic user-generated content that builds trust and converts viewers into customers.', 'Kandungan jana pengguna autentik yang membina kepercayaan dan menukar penonton menjadi pelanggan.'),
      icon: Video,
      link: "/pricing/ugc-content-creation"
    },
    {
      title: T('Paid Advertising', 'Pengiklanan Berbayar'),
      description: T('Data-driven ad campaigns across Meta, TikTok, and Google to maximize your ROI.', 'Kempen iklan dipacu data merentasi Meta, TikTok, dan Google untuk memaksimumkan ROI anda.'),
      icon: Target,
      link: "/pricing/paid-advertising"
    },
    {
      title: T('Website Development', 'Pembangunan Laman Web'),
      description: T('High-performance, conversion-optimized websites tailored to your brand.', 'Laman web berprestasi tinggi dan dioptimumkan penukaran yang disesuaikan dengan jenama anda.'),
      icon: Globe,
      link: "/pricing/website-development"
    },
    {
      title: T('Branding & Creative', 'Penjenamaan & Kreatif'),
      description: T('Strategic brand identity design and creative assets that make you stand out.', 'Reka bentuk identiti jenama strategik dan aset kreatif yang menjadikan anda menonjol.'),
      icon: Palette,
      link: "/pricing/branding-creative"
    },
    {
      title: T('KOC & KOL Service', 'Perkhidmatan KOC & KOL'),
      description: T("Strategic influencer partnerships to amplify your brand's reach and credibility.", 'Perkongsian pempengaruh strategik untuk menguatkan jangkauan dan kredibiliti jenama anda.'),
      icon: Users,
      link: "/pricing/koc-kol-service"
    },
    {
      title: T('TikTok Live Service', 'Perkhidmatan TikTok Live'),
      description: T('Professional live streaming management to drive real-time sales and engagement.', 'Pengurusan penstriman langsung profesional untuk memacu jualan dan penglibatan masa nyata.'),
      icon: Radio,
      link: "/pricing/tiktok-live-service"
    },
    {
      title: T('AI-Driven Marketing', 'Pemasaran Dipacu AI'),
      description: T('Cutting-edge AI solutions to automate and optimize your marketing efforts.', 'Penyelesaian AI terkini untuk mengautomasi dan mengoptimumkan usaha pemasaran anda.'),
      icon: BrainCircuit,
      link: "/pricing/ai-driven-marketing"
    },
    {
      title: T('Chatbot Development', 'Pembangunan Chatbot'),
      description: T('Intelligent conversational agents to handle customer service and lead generation 24/7.', 'Ejen perbualan pintar untuk mengendalikan perkhidmatan pelanggan dan penjanaan petunjuk 24/7.'),
      icon: MessageSquare,
      link: "/pricing/chatbot-development"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{T('Pricing & Services | BrandKraf', 'Harga & Perkhidmatan | BrandKraf')}</title>
        <meta name="description" content={T(
          'Explore our comprehensive digital marketing services and transparent pricing packages tailored for your business growth.',
          'Terokai perkhidmatan pemasaran digital menyeluruh kami dan pakej harga telus yang disesuaikan untuk pertumbuhan perniagaan anda.',
        )} />
      </Helmet>

      <Header />

      <main className="relative flex-grow overflow-hidden pb-24 pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] gradient-mesh" />
        <div className="blob h-80 w-80 bg-brandkraf-teal/15 -top-10 -left-10" />
        <div className="blob h-96 w-96 bg-brandkraf-purple/15 top-0 right-0" style={{ animationDelay: '-5s' }} />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
          >
            <span className="chip-brand mb-4">{T('Pricing', 'Harga')}</span>
            <h1 className="mb-6">
              {lang === 'ms' ? (
                <>Harga telus untuk setiap peringkat <span className="text-gradient">pertumbuhan</span></>
              ) : (
                <>Transparent pricing for every stage of <span className="text-gradient">growth</span></>
              )}
            </h1>
            <p className="text-xl text-muted-foreground">
              {T(
                'Select a service below to view detailed pricing tiers, features, and deliverables tailored to your specific needs.',
                'Pilih perkhidmatan di bawah untuk melihat peringkat harga terperinci, ciri, dan penyampaian yang disesuaikan dengan keperluan khusus anda.',
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <PricingServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}