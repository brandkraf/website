import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceOverview from '@/components/ServiceOverview.jsx';
import BenefitsSection from '@/components/BenefitsSection.jsx';
import TimelineSection from '@/components/TimelineSection.jsx';
import PortfolioExamplesSection from '@/components/PortfolioExamplesSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ContactCTASection from '@/components/ContactCTASection.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Share2, TrendingUp, Users, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function SocialMediaManagementPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('Social Media Management', 'Pengurusan Media Sosial'),
      subtitle: T(
        "Elevate your brand's presence with strategic content, community engagement, and data-driven growth across all major platforms.",
        'Tingkatkan kehadiran jenama anda dengan kandungan strategik, penglibatan komuniti, dan pertumbuhan dipacu data merentasi semua platform utama.',
      ),
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0"
    },
    overview: {
      description: T(
        "We don't just post content; we build communities. Our comprehensive social media management service covers everything from strategy and content creation to daily engagement and performance analytics. We ensure your brand's voice is consistent, engaging, and aligned with your business objectives.",
        'Kami bukan sekadar menyiarkan kandungan; kami membina komuniti. Perkhidmatan pengurusan media sosial menyeluruh kami merangkumi segalanya daripada strategi dan penciptaan kandungan kepada penglibatan harian dan analitik prestasi. Kami memastikan suara jenama anda konsisten, menarik, dan sejajar dengan objektif perniagaan anda.',
      ),
      differentiators: [
        T('Data-driven content strategy tailored to your niche', 'Strategi kandungan dipacu data yang disesuaikan dengan niche anda'),
        T('Proactive community management and engagement', 'Pengurusan komuniti dan penglibatan yang proaktif'),
        T('High-quality visual asset creation', 'Penciptaan aset visual berkualiti tinggi'),
        T('Monthly comprehensive performance reporting', 'Pelaporan prestasi menyeluruh setiap bulan'),
      ]
    },
    benefits: [
      { icon: TrendingUp, title: T('Increased Engagement', 'Penglibatan Meningkat'), description: T('Spark meaningful conversations and build a loyal following.', 'Cetuskan perbualan bermakna dan bina pengikut yang setia.') },
      { icon: Users, title: T('Audience Growth', 'Pertumbuhan Penonton'), description: T('Expand your reach and attract highly targeted potential customers.', 'Kembangkan jangkauan anda dan tarik bakal pelanggan yang sangat disasarkan.') },
      { icon: Share2, title: T('Brand Awareness', 'Kesedaran Jenama'), description: T('Keep your brand top-of-mind with consistent, quality visibility.', 'Kekalkan jenama anda diingati dengan keterlihatan yang konsisten dan berkualiti.') },
      { icon: Calendar, title: T('Consistent Posting', 'Penyiaran Konsisten'), description: T('Never miss a beat with our carefully planned content calendars.', 'Tidak pernah terlepas dengan kalendar kandungan kami yang dirancang teliti.') }
    ],
    timeline: {
      duration: T('4-6 weeks setup, ongoing monthly', 'Persediaan 4-6 minggu, bulanan berterusan'),
      phases: [
        { title: T('Audit & Strategy', 'Audit & Strategi'), description: T('Deep dive into your current presence and competitor analysis to craft a tailored strategy.', 'Penyelaman mendalam ke dalam kehadiran semasa anda dan analisis pesaing untuk membentuk strategi yang disesuaikan.') },
        { title: T('Content Creation', 'Penciptaan Kandungan'), description: T('Developing visual assets, copywriting, and planning the initial content calendar.', 'Membangunkan aset visual, penulisan salinan, dan merancang kalendar kandungan awal.') },
        { title: T('Launch & Management', 'Pelancaran & Pengurusan'), description: T('Executing the strategy, posting content, and actively engaging with your audience.', 'Melaksanakan strategi, menyiarkan kandungan, dan melibatkan diri secara aktif dengan penonton anda.') },
        { title: T('Review & Optimize', 'Semakan & Pengoptimuman'), description: T('Analyzing monthly performance data to refine and improve the ongoing strategy.', 'Menganalisis data prestasi bulanan untuk memperhalus dan menambah baik strategi yang berterusan.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        clientType: T('Retail Brand', 'Jenama Runcit'),
        objective: T('Increase brand awareness and daily engagement', 'Meningkatkan kesedaran jenama dan penglibatan harian'),
        category: T('Social Media', 'Media Sosial'),
        results: [
          { type: 'views', value: '1.2M', label: T('Monthly Reach', 'Jangkauan Bulanan') },
          { type: 'leads', value: '45K', label: T('New Followers', 'Pengikut Baharu') }
        ]
      }
    ],
    faqs: [
      { question: T('Which platforms do you manage?', 'Platform mana yang anda uruskan?'), answer: T('We manage all major platforms including Instagram, TikTok, Facebook, LinkedIn, and X (Twitter), tailored to where your audience lives.', 'Kami menguruskan semua platform utama termasuk Instagram, TikTok, Facebook, LinkedIn, dan X (Twitter), disesuaikan dengan tempat penonton anda berada.') },
      { question: T('Do you create the content?', 'Adakah anda mencipta kandungan?'), answer: T('Yes, our team handles full-service content creation including graphics, short-form video editing, and copywriting.', 'Ya, pasukan kami mengendalikan penciptaan kandungan perkhidmatan penuh termasuk grafik, penyuntingan video bentuk pendek, dan penulisan salinan.') },
      { question: T('How do you measure success?', 'Bagaimana anda mengukur kejayaan?'), answer: T('We track KPIs aligned with your goals, such as engagement rate, follower growth, reach, and website click-throughs.', 'Kami menjejaki KPI yang sejajar dengan matlamat anda, seperti kadar penglibatan, pertumbuhan pengikut, jangkauan, dan klik lalu laman web.') },
      { question: T('Do I have to approve content before it goes live?', 'Adakah saya perlu meluluskan kandungan sebelum ia disiarkan?'), answer: T('Absolutely. We provide a monthly content calendar for your review and approval before anything is published.', 'Sudah tentu. Kami menyediakan kalendar kandungan bulanan untuk semakan dan kelulusan anda sebelum apa-apa diterbitkan.') }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{T('Social Media Management - BrandKraf', 'Pengurusan Media Sosial - BrandKraf')}</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero {...serviceData.hero} />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
        <PortfolioExamplesSection projects={serviceData.projects} />
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

export default SocialMediaManagementPage;