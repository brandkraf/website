import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceOverview from '@/components/ServiceOverview.jsx';
import BenefitsSection from '@/components/BenefitsSection.jsx';
import TimelineSection from '@/components/TimelineSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ContactCTASection from '@/components/ContactCTASection.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import GoogleDriveVideoGrid from '@/components/GoogleDriveVideoGrid.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import {
  Video, Users, TrendingUp, Award,
  Coffee, Sprout, Factory, HardHat, Home,
  ShoppingBag, Truck, Plane, Car, Cpu,
  Clapperboard, Wifi, Landmark, Briefcase,
  GraduationCap, Stethoscope, Sparkles, Zap,
  Building2, HeartHandshake
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function UGCContentCreationPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('UGC Content Creation', 'Penciptaan Kandungan UGC'),
      subtitle: T(
        'Professional user-generated content that converts. We create authentic, high-performing videos that showcase your product in real-world scenarios.',
        'Kandungan jana pengguna profesional yang menukar. Kami mencipta video autentik berprestasi tinggi yang mempamerkan produk anda dalam senario dunia sebenar.',
      ),
      image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/3fc717dca84bbc8f0219eabead7cf00f.png",
      altText: "Professional videographer in studio with camera gimbal and professional lighting setup"
    },
    overview: {
      description: T(
        "User-generated content (UGC) is the most trusted form of marketing. Our team creates authentic, relatable videos that feel like they're from real customers—because they are. Each video is optimized for conversion, designed to address customer pain points, and crafted to perform across all platforms.",
        'Kandungan jana pengguna (UGC) ialah bentuk pemasaran yang paling dipercayai. Pasukan kami mencipta video autentik dan relatable yang terasa seperti daripada pelanggan sebenar—kerana memang begitu. Setiap video dioptimumkan untuk penukaran, direka untuk menangani titik kesakitan pelanggan, dan dibentuk untuk berprestasi merentasi semua platform.',
      ),
      differentiators: [
        T('Authentic, relatable storytelling', 'Penceritaan autentik dan relatable'),
        T('Optimized for platform algorithms', 'Dioptimumkan untuk algoritma platform'),
        T('Fast turnaround (5-7 days per video)', 'Penyiapan pantas (5-7 hari sevideo)'),
        T("Unlimited revisions until you're satisfied", 'Semakan tanpa had sehingga anda berpuas hati'),
      ]
    },
    benefits: [
      { icon: Video, title: T('High Conversion Rates', 'Kadar Penukaran Tinggi'), description: T('UGC videos convert 3-5x better than traditional ads because they feel authentic.', 'Video UGC menukar 3-5x lebih baik daripada iklan tradisional kerana ia terasa autentik.') },
      { icon: Users, title: T('Audience Trust', 'Kepercayaan Penonton'), description: T('Viewers trust peer recommendations more than brand messaging.', 'Penonton mempercayai cadangan rakan sebaya lebih daripada mesej jenama.') },
      { icon: TrendingUp, title: T('Cost-Effective', 'Menjimatkan Kos'), description: T('Lower production costs than celebrity endorsements with better ROI.', 'Kos pengeluaran lebih rendah daripada sokongan selebriti dengan ROI lebih baik.') },
      { icon: Award, title: T('Platform Optimized', 'Dioptimumkan Platform'), description: T('Every video is tailored for TikTok, Instagram, YouTube, and Facebook algorithms.', 'Setiap video disesuaikan untuk algoritma TikTok, Instagram, YouTube, dan Facebook.') }
    ],
    timeline: {
      duration: T('5-7 days per video', '5-7 hari sevideo'),
      phases: [
        { title: T('Brief & Strategy', 'Taklimat & Strategi'), description: T('Understanding your product, target audience, and campaign goals.', 'Memahami produk, penonton sasaran, dan matlamat kempen anda.') },
        { title: T('Script Development', 'Pembangunan Skrip'), description: T('Creating authentic scripts that highlight key benefits and pain points.', 'Mencipta skrip autentik yang menyerlahkan manfaat utama dan titik kesakitan.') },
        { title: T('Production', 'Pengeluaran'), description: T('Professional filming with high-quality equipment and lighting.', 'Penggambaran profesional dengan peralatan dan pencahayaan berkualiti tinggi.') },
        { title: T('Editing & Delivery', 'Penyuntingan & Penghantaran'), description: T("Fast-turnaround editing optimized for each platform's specifications.", 'Penyuntingan penyiapan pantas yang dioptimumkan untuk spesifikasi setiap platform.') }
      ]
    },
    faqs: [
      { question: T('What makes UGC different from traditional ads?', 'Apa yang membezakan UGC daripada iklan tradisional?'), answer: T("UGC feels authentic because it's created by real people (or people who look like real customers). Traditional ads feel polished and corporate, which triggers ad-blindness. UGC bypasses that.", 'UGC terasa autentik kerana ia dicipta oleh orang sebenar (atau orang yang kelihatan seperti pelanggan sebenar). Iklan tradisional terasa digilap dan korporat, yang mencetuskan kebutaan iklan. UGC memintasi itu.') },
      { question: T('How many videos do I need?', 'Berapa banyak video saya perlukan?'), answer: T('We recommend starting with 5-10 videos to test messaging and audience response. Most clients then scale to 20-50+ videos for sustained campaigns.', 'Kami mengesyorkan bermula dengan 5-10 video untuk menguji mesej dan respons penonton. Kebanyakan pelanggan kemudian berkembang kepada 20-50+ video untuk kempen berterusan.') },
      { question: T('Can I request revisions?', 'Bolehkah saya meminta semakan?'), answer: T("Yes. We offer unlimited revisions until you're 100% satisfied with the final product.", 'Ya. Kami menawarkan semakan tanpa had sehingga anda 100% berpuas hati dengan produk akhir.') },
      { question: T('What platforms are the videos optimized for?', 'Untuk platform apa video dioptimumkan?'), answer: T('We optimize for TikTok, Instagram Reels, YouTube Shorts, and Facebook. Each platform has different aspect ratios and pacing requirements.', 'Kami mengoptimumkan untuk TikTok, Instagram Reels, YouTube Shorts, dan Facebook. Setiap platform mempunyai nisbah aspek dan keperluan rentak yang berbeza.') }
    ]
  };

  const industries = [
    { title: T('Food & Beverage', 'Makanan & Minuman'), slug: "food-beverage", icon: Coffee, description: T('Mouth-watering content that drives cravings and boosts local or e-commerce sales.', 'Kandungan menyelerakan yang memacu keinginan dan meningkatkan jualan tempatan atau e-dagang.') },
    { title: T('Agriculture', 'Pertanian'), slug: "agriculture-agribusiness", icon: Sprout, description: T('Authentic stories from the field to the table, highlighting sustainability and scale.', 'Kisah autentik dari ladang ke meja, menyerlahkan kemampanan dan skala.') },
    { title: T('Manufacturing', 'Pembuatan'), slug: "manufacturing-industrial", icon: Factory, description: T('Behind-the-scenes content that builds trust, transparency, and B2B leads.', 'Kandungan di sebalik tabir yang membina kepercayaan, ketelusan, dan petunjuk B2B.') },
    { title: T('Construction', 'Pembinaan'), slug: "construction-engineering", icon: HardHat, description: T('Showcase projects, safety standards, and equipment in action.', 'Pamerkan projek, piawaian keselamatan, dan peralatan dalam tindakan.') },
    { title: T('Real Estate', 'Hartanah'), slug: "real-estate-property", icon: Home, description: T('Property tours and lifestyle content that sells homes faster.', 'Lawatan hartanah dan kandungan gaya hidup yang menjual rumah lebih pantas.') },
    { title: T('Retail', 'Runcit'), slug: "retail-ecommerce", icon: ShoppingBag, description: T('Unboxings, hauls, and styling videos that drive direct conversions.', 'Video buka kotak, haul, dan penggayaan yang memacu penukaran langsung.') },
    { title: T('Transportation', 'Pengangkutan'), slug: "transportation-logistics", icon: Truck, description: T('Reliable and engaging content for logistics, transit, and delivery fleets.', 'Kandungan boleh dipercayai dan menarik untuk logistik, transit, dan armada penghantaran.') },
    { title: T('Travel', 'Pelancongan'), slug: "travel-tourism-hospitality", icon: Plane, description: T('Inspiring destination content that drives bookings and wanderlust.', 'Kandungan destinasi yang memberi inspirasi yang memacu tempahan dan keinginan mengembara.') },
    { title: T('Automotive', 'Automotif'), slug: "automotive", icon: Car, description: T('Test drives, hidden features, and passionate owner stories.', 'Pandu uji, ciri tersembunyi, dan kisah pemilik yang bersemangat.') },
    { title: T('Technology', 'Teknologi'), slug: "technology-software", icon: Cpu, description: T('Tech reviews, app tutorials, and software feature highlights.', 'Ulasan teknologi, tutorial aplikasi, dan sorotan ciri perisian.') },
    { title: T('Media', 'Media'), slug: "media-entertainment", icon: Clapperboard, description: T('Engaging promos, event coverage, and behind-the-scenes entertainment.', 'Promosi menarik, liputan acara, dan hiburan di sebalik tabir.') },
    { title: T('Telecommunications', 'Telekomunikasi'), slug: "telecommunications", icon: Wifi, description: T('Connecting people with relatable network stories and device showcases.', 'Menghubungkan orang dengan kisah rangkaian yang relatable dan pameran peranti.') },
    { title: T('Finance', 'Kewangan'), slug: "finance-insurance", icon: Landmark, description: T('Trust-building educational content for banking, crypto, and fintech.', 'Kandungan pendidikan membina kepercayaan untuk perbankan, kripto, dan fintech.') },
    { title: T('Professional Services', 'Perkhidmatan Profesional'), slug: "professional-services", icon: Briefcase, description: T('Expertise-driven content for B2B consulting, legal, and accounting.', 'Kandungan dipacu kepakaran untuk perundingan B2B, guaman, dan perakaunan.') },
    { title: T('Education', 'Pendidikan'), slug: "education-training", icon: GraduationCap, description: T('Student testimonials, course previews, and campus life highlights.', 'Testimoni pelajar, pratonton kursus, dan sorotan kehidupan kampus.') },
    { title: T('Healthcare', 'Penjagaan Kesihatan'), slug: "healthcare-medical", icon: Stethoscope, description: T('Patient success stories and accessible medical professional insights.', 'Kisah kejayaan pesakit dan pandangan profesional perubatan yang mudah difahami.') },
    { title: T('Beauty', 'Kecantikan'), slug: "beauty-personal-care", icon: Sparkles, description: T('Tutorials, skincare routines, and authentic transformative results.', 'Tutorial, rutin penjagaan kulit, dan hasil transformasi yang autentik.') },
    { title: T('Energy', 'Tenaga'), slug: "energy-utilities", icon: Zap, description: T('Highlighting sustainability, renewables, and innovation in the energy sector.', 'Menyerlahkan kemampanan, tenaga boleh diperbaharui, dan inovasi dalam sektor tenaga.') },
    { title: T('Government', 'Kerajaan'), slug: "government-public-sector", icon: Building2, description: T('Public service announcements and effective community engagement.', 'Pengumuman perkhidmatan awam dan penglibatan komuniti yang berkesan.') },
    { title: T('Non-Profit', 'Bukan Untung'), slug: "non-profit-social", icon: HeartHandshake, description: T('Impactful, emotional storytelling that drives awareness and donations.', 'Penceritaan emosi berimpak yang memacu kesedaran dan derma.') }
  ];

  return (
    <>
      <Helmet defer={false}>
        <title>{T('UGC Content Creation - BrandKraf', 'Penciptaan Kandungan UGC - BrandKraf')}</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero
          title={serviceData.hero.title}
          subtitle={serviceData.hero.subtitle}
          image={serviceData.hero.image}
          altText={serviceData.hero.altText}
        />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
        <GoogleDriveVideoGrid />

        {/* Niches / Industries Section */}
        <section className="py-24 bg-muted/30 relative">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {T('UGC Content for Every Industry', 'Kandungan UGC untuk Setiap Industri')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {T(
                  'We tailor our content creation strategies to fit the unique language, audience, and algorithms of your specific niche. Explore our industry-specific solutions below.',
                  'Kami menyesuaikan strategi penciptaan kandungan kami dengan bahasa, penonton, dan algoritma unik niche khusus anda. Terokai penyelesaian khusus industri kami di bawah.',
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard
                  key={industry.slug}
                  {...industry}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={serviceData.faqs} />
        <ContactCTASection />

        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UGCContentCreationPage;