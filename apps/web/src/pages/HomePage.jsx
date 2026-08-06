import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ClientLogosSlider from '@/components/ClientLogosSlider.jsx';
import TrustSection from '@/components/TrustSection.jsx';
import CaseStudySection from '@/components/CaseStudySection.jsx';
import ProcessSection from '@/components/ProcessSection.jsx';
import ClosingCTASection from '@/components/ClosingCTASection.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { motion } from 'framer-motion';
import { Share2, Video, Target, Globe, Palette, Zap, Shield, TrendingUp, Users, Radio, Sparkles, Search, MessageSquare as MessageSquareCode } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function HomePage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const services = [
    {
      icon: Share2,
      title: T('Social Media Management', 'Pengurusan Media Sosial'),
      path: '/portfolio/social-media-management',
      description: T(
        'Strategic content planning and community management across all platforms',
        'Perancangan kandungan strategik dan pengurusan komuniti merentasi semua platform',
      ),
      features: [
        T('Content calendar planning', 'Perancangan kalendar kandungan'),
        T('Daily posting and engagement', 'Penyiaran dan penglibatan harian'),
        T('Analytics and reporting', 'Analitik dan pelaporan'),
        T('Community management', 'Pengurusan komuniti'),
      ],
    },
    {
      icon: Video,
      title: T('UGC Content Creation', 'Penciptaan Kandungan UGC'),
      path: '/portfolio/ugc-content-creation',
      description: T(
        'Authentic user-generated content that drives engagement and conversions',
        'Kandungan jana pengguna yang autentik yang memacu penglibatan dan penukaran',
      ),
      features: [
        T('Professional UGC videos', 'Video UGC profesional'),
        T('Product photography', 'Fotografi produk'),
        T('Testimonial content', 'Kandungan testimoni'),
        T('Influencer collaborations', 'Kerjasama pempengaruh'),
      ],
    },
    {
      icon: Target,
      title: T('Paid Advertising', 'Pengiklanan Berbayar'),
      path: '/portfolio/paid-advertising',
      description: T(
        'Data-driven ad campaigns on Meta, TikTok, and Google',
        'Kempen iklan dipacu data di Meta, TikTok, dan Google',
      ),
      features: [
        T('Campaign strategy and setup', 'Strategi dan persediaan kempen'),
        T('A/B testing and optimization', 'Ujian A/B dan pengoptimuman'),
        T('Audience targeting', 'Penyasaran penonton'),
        T('Performance tracking', 'Penjejakan prestasi'),
      ],
    },
    {
      icon: Globe,
      title: T('Website Development', 'Pembangunan Laman Web'),
      path: '/portfolio/website-development',
      description: T(
        'High-converting websites built for performance and user experience',
        'Laman web berpenukaran tinggi yang dibina untuk prestasi dan pengalaman pengguna',
      ),
      features: [
        T('Custom website design', 'Reka bentuk laman web tersuai'),
        T('E-commerce integration', 'Integrasi e-dagang'),
        T('Mobile optimization', 'Pengoptimuman mudah alih'),
        T('SEO foundation', 'Asas SEO'),
      ],
    },
    {
      icon: Palette,
      title: T('Branding & Creative', 'Penjenamaan & Kreatif'),
      path: '/portfolio/branding-creative',
      description: T(
        'Complete brand identity and creative design services',
        'Perkhidmatan identiti jenama dan reka bentuk kreatif yang lengkap',
      ),
      features: [
        T('Logo and brand identity', 'Logo dan identiti jenama'),
        T('Marketing collateral', 'Bahan pemasaran'),
        T('Social media graphics', 'Grafik media sosial'),
        T('Brand guidelines', 'Garis panduan jenama'),
      ],
    },
    {
      icon: Users,
      title: T('KOC/KOL Service', 'Perkhidmatan KOC/KOL'),
      path: '/portfolio/koc-kol-service',
      description: T(
        'Strategic collaborations with Key Opinion Creators and Leaders to amplify your brand reach and credibility.',
        'Kerjasama strategik dengan Key Opinion Creators dan Leaders untuk menguatkan jangkauan dan kredibiliti jenama anda.',
      ),
      features: [
        T('Influencer matching & outreach', 'Padanan & jangkauan pempengaruh'),
        T('Campaign strategy & management', 'Strategi & pengurusan kempen'),
        T('Content rights negotiation', 'Rundingan hak kandungan'),
        T('Performance & ROI tracking', 'Penjejakan prestasi & ROI'),
      ],
    },
    {
      icon: Radio,
      title: T('TikTok Live Service', 'Perkhidmatan TikTok Live'),
      path: '/portfolio/tiktok-live-service',
      description: T(
        'Engaging live streaming sessions designed to boost real-time sales, launch products, and build community.',
        'Sesi penstriman langsung yang menarik, direka untuk meningkatkan jualan masa nyata, melancarkan produk, dan membina komuniti.',
      ),
      features: [
        T('Live stream strategy & planning', 'Strategi & perancangan strim langsung'),
        T('Host & talent management', 'Pengurusan hos & bakat'),
        T('Technical setup & broadcasting', 'Persediaan teknikal & penyiaran'),
        T('Real-time audience engagement', 'Penglibatan penonton masa nyata'),
      ],
    },
    {
      icon: Sparkles,
      title: T('AI Driven Marketing Solution', 'Penyelesaian Pemasaran Dipacu AI'),
      path: '/portfolio/ai-driven-marketing',
      description: T(
        'Leverage advanced artificial intelligence to optimize your marketing strategies, predict trends, and maximize ROI.',
        'Manfaatkan kecerdasan buatan termaju untuk mengoptimumkan strategi pemasaran anda, meramal trend, dan memaksimumkan ROI.',
      ),
      features: [
        T('Predictive analytics & modeling', 'Analitik & pemodelan ramalan'),
        T('Automated campaign optimization', 'Pengoptimuman kempen automatik'),
        T('AI-generated content strategy', 'Strategi kandungan jana AI'),
        T('Personalized customer journeys', 'Perjalanan pelanggan diperibadikan'),
      ],
    },
    {
      icon: Search,
      title: T('SEO & AEO Services', 'Perkhidmatan SEO & AEO'),
      path: '/portfolio/seo-services',
      description: T(
        'Rank on Google, win the local Map Pack, and get cited by AI answer engines like ChatGPT.',
        'Dapatkan kedudukan di Google, menangi Pek Peta tempatan, dan dipetik oleh enjin jawapan AI seperti ChatGPT.',
      ),
      features: [
        T('Technical & on-page SEO', 'SEO teknikal & pada halaman'),
        T('Local SEO & Google Business Profile', 'SEO tempatan & Profil Perniagaan Google'),
        T('AEO for AI search visibility', 'AEO untuk keterlihatan carian AI'),
        T('Link building & digital PR', 'Pembinaan pautan & PR digital'),
      ],
    },
    {
      icon: MessageSquareCode,
      title: T('Chatbot Development', 'Pembangunan Chatbot'),
      path: '/portfolio/chatbot-development',
      description: T(
        'Intelligent conversational agents designed to qualify leads, automate support, and engage customers 24/7.',
        'Ejen perbualan pintar yang direka untuk melayakkan petunjuk, mengautomasi sokongan, dan melibatkan pelanggan 24/7.',
      ),
      features: [
        T('Custom AI chatbot architecture', 'Seni bina chatbot AI tersuai'),
        T('WhatsApp & Meta integration', 'Integrasi WhatsApp & Meta'),
        T('Automated lead qualification', 'Pelayakan petunjuk automatik'),
        T('Seamless human handoff', 'Penyerahan kepada manusia yang lancar'),
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: T('Data-driven approach', 'Pendekatan dipacu data'),
      description: T(
        'Every decision backed by analytics and performance metrics',
        'Setiap keputusan disokong analitik dan metrik prestasi',
      ),
    },
    {
      icon: Target,
      title: T('Content that converts', 'Kandungan yang menukar'),
      description: T(
        'We create content designed to drive leads and sales, not just likes',
        'Kami mencipta kandungan yang direka untuk memacu petunjuk dan jualan, bukan sekadar suka',
      ),
    },
    {
      icon: Shield,
      title: T('In-house team', 'Pasukan dalaman'),
      description: T(
        'No outsourcing - your project is handled by our experienced team',
        'Tiada penyumberan luar - projek anda dikendalikan oleh pasukan berpengalaman kami',
      ),
    },
    {
      icon: TrendingUp,
      title: T('Performance-focused', 'Fokus pada prestasi'),
      description: T(
        'We optimize for ROI, not vanity metrics',
        'Kami mengoptimumkan untuk ROI, bukan metrik kesombongan',
      ),
    },
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T(
          'BrandKraf - Scale Your Brand with Content, Ads & AI Marketing',
          'BrandKraf - Kembangkan Jenama Anda dengan Kandungan, Iklan & Pemasaran AI',
        )}</title>
        <meta
          name="description"
          content={T(
            'We help businesses grow with social media management, UGC content, paid ads, and AI-driven marketing. Based in Malaysia, trusted by 200+ brands.',
            'Kami membantu perniagaan berkembang dengan pengurusan media sosial, kandungan UGC, iklan berbayar, dan pemasaran dipacu AI. Berpangkalan di Malaysia, dipercayai 200+ jenama.',
          )}
        />
        <meta property="og:locale" content={lang === 'ms' ? 'ms_MY' : 'en_MY'} />
      </Helmet>

      <Header />

      <main className="relative">
        <HeroSection
          headline={T("We don't just market. We scale brands.", 'Kami bukan sekadar memasarkan. Kami mengembangkan jenama.')}
          subheadline={T(
            'Helping businesses grow with content, ads, and AI-driven marketing',
            'Membantu perniagaan berkembang dengan kandungan, iklan, dan pemasaran dipacu AI',
          )}
          ctaText={T('Get Free Strategy Call', 'Dapatkan Sesi Strategi Percuma')}
        />

        <ClientLogosSlider />

        <TrustSection />

        {/* Services */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
          <div className="blob bg-brandkraf-teal/10 h-72 w-72 top-20 -left-20" />
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="chip-brand mb-4">
                <Sparkles className="h-4 w-4" /> {T('What we do', 'Apa yang kami buat')}
              </span>
              <h2 className="mb-4">
                {lang === 'ms' ? (
                  <>Semua yang anda perlukan untuk <span className="text-gradient">berkembang</span></>
                ) : (
                  <>Everything you need to <span className="text-gradient">scale</span></>
                )}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {T(
                  'Full-service marketing solutions to help your brand grow and scale',
                  'Penyelesaian pemasaran perkhidmatan penuh untuk membantu jenama anda berkembang',
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-muted/30">
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 flex flex-col items-center"
            >
              <span className="chip-brand mb-4">{T('Why BrandKraf', 'Mengapa BrandKraf')}</span>
              <h2 className="mb-4">
                {lang === 'ms' ? (
                  <>Dibina untuk menjadi <span className="text-gradient">rakan pertumbuhan</span> anda</>
                ) : (
                  <>Built to be your <span className="text-gradient">growth partner</span></>
                )}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {T(
                  "We're not just another marketing agency - we're invested in your results",
                  'Kami bukan sekadar agensi pemasaran biasa - kami melabur dalam hasil anda',
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-brandkraf-teal/25 via-gray-200/60 to-brandkraf-purple/25 transition-all duration-500 hover:from-brandkraf-teal hover:via-brandkraf-teal/40 hover:to-brandkraf-purple hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(20,184,166,0.45)]"
                  >
                    <div className="relative h-full rounded-2xl glass-card p-7 overflow-hidden">
                      <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-brandkraf-teal/5 group-hover:text-brandkraf-teal/10 transition-colors">
                        0{index + 1}
                      </span>
                      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="relative text-lg font-bold mb-2">{item.title}</h3>
                      <p className="relative text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CaseStudySection />

        <ProcessSection />

        <ClosingCTASection />

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
