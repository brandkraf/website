import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Share2,
  Video,
  Target,
  Globe,
  Palette,
  Users,
  Radio,
  Sparkles,
  MessageSquare,
  Search,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function PortfolioPage() {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const services = [
    {
      icon: Share2,
      title: T('Social Media Management', 'Pengurusan Media Sosial'),
      description: T('Strategic content planning and community management across all platforms.', 'Perancangan kandungan strategik dan pengurusan komuniti merentasi semua platform.'),
      slug: 'social-media-management'
    },
    {
      icon: Video,
      title: T('UGC Content Creation', 'Penciptaan Kandungan UGC'),
      description: T('Authentic user-generated content that drives engagement and conversions.', 'Kandungan jana pengguna autentik yang memacu penglibatan dan penukaran.'),
      slug: 'ugc-content-creation'
    },
    {
      icon: Target,
      title: T('Paid Advertising', 'Pengiklanan Berbayar'),
      description: T('Data-driven ad campaigns on Meta, TikTok, and Google maximizing ROI.', 'Kempen iklan dipacu data di Meta, TikTok, dan Google yang memaksimumkan ROI.'),
      slug: 'paid-advertising'
    },
    {
      icon: Globe,
      title: T('Website Development', 'Pembangunan Laman Web'),
      description: T('High-converting websites built for performance and user experience.', 'Laman web berpenukaran tinggi yang dibina untuk prestasi dan pengalaman pengguna.'),
      slug: 'website-development'
    },
    {
      icon: Palette,
      title: T('Branding & Creative', 'Penjenamaan & Kreatif'),
      description: T('Complete brand identity, logo design, and creative marketing collateral.', 'Identiti jenama lengkap, reka bentuk logo, dan bahan pemasaran kreatif.'),
      slug: 'branding-creative'
    },
    {
      icon: Users,
      title: T('KOC/KOL Service', 'Perkhidmatan KOC/KOL'),
      description: T('Strategic collaborations with Key Opinion Creators to amplify brand reach.', 'Kerjasama strategik dengan Key Opinion Creators untuk menguatkan jangkauan jenama.'),
      slug: 'koc-kol-service'
    },
    {
      icon: Radio,
      title: T('TikTok Live Service', 'Perkhidmatan TikTok Live'),
      description: T('Engaging live streaming sessions designed to boost real-time sales.', 'Sesi penstriman langsung menarik yang direka untuk meningkatkan jualan masa nyata.'),
      slug: 'tiktok-live-service'
    },
    {
      icon: Sparkles,
      title: T('AI Driven Marketing', 'Pemasaran Dipacu AI'),
      description: T('Leverage artificial intelligence to predict trends and optimize campaigns.', 'Manfaatkan kecerdasan buatan untuk meramal trend dan mengoptimumkan kempen.'),
      slug: 'ai-driven-marketing'
    },
    {
      icon: MessageSquare,
      title: T('Chatbot Development', 'Pembangunan Chatbot'),
      description: T('Intelligent conversational agents to automate support and qualify leads.', 'Ejen perbualan pintar untuk mengautomasi sokongan dan melayakkan petunjuk.'),
      slug: 'chatbot-development'
    },
    {
      icon: Search,
      title: T('SEO & AEO Services', 'Perkhidmatan SEO & AEO'),
      description: T('Rank on Google, win the local Map Pack, and get cited by AI answer engines.', 'Dapatkan kedudukan di Google, menangi Pek Peta tempatan, dan dipetik oleh enjin jawapan AI.'),
      slug: 'seo-services'
    }
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T("Portfolio - Explore BrandKraf's Work", 'Portfolio - Terokai Kerja BrandKraf')}</title>
        <meta
          name="description"
          content={T(
            "Explore BrandKraf's portfolio. Discover our expertise in UGC, TikTok campaigns, Paid Ads, Branding, and AI marketing.",
            'Terokai portfolio BrandKraf. Temui kepakaran kami dalam UGC, kempen TikTok, Iklan Berbayar, Penjenamaan, dan pemasaran AI.',
          )}
        />
      </Helmet>

      <Header />

      <main className="relative min-h-screen overflow-hidden bg-background pb-24 pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] gradient-mesh" />
        <div className="blob h-80 w-80 bg-brandkraf-teal/15 -top-10 -left-10" />
        <div className="blob h-96 w-96 bg-brandkraf-purple/15 top-0 right-0" style={{ animationDelay: '-5s' }} />
        <div className="container-custom relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center"
          >
            <span className="chip-brand mb-4">Portfolio</span>
            <h1 className="mb-6">
              {lang === 'ms' ? (
                <>Terokai <span className="text-gradient">kerja</span> kami</>
              ) : (
                <>Explore our <span className="text-gradient">work</span></>
              )}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              {T(
                "BrandKraf's expertise lies in creating high-quality digital content and data-driven campaigns. We build solutions that scale brands and deliver measurable growth.",
                'Kepakaran BrandKraf terletak pada mencipta kandungan digital berkualiti tinggi dan kempen dipacu data. Kami membina penyelesaian yang mengembangkan jenama dan menyampaikan pertumbuhan boleh diukur.',
              )}
            </p>
            <p className="text-lg font-medium text-foreground">
              {T('Select a service below to view details and case studies', 'Pilih perkhidmatan di bawah untuk melihat butiran dan kajian kes')}
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    to={lp(`/portfolio/${service.slug}`)}
                    className="portfolio-card flex flex-col h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brandkraf-teal">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                      {T('View Service', 'Lihat Perkhidmatan')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PortfolioPage;