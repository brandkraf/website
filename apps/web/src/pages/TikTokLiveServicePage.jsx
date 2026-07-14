import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import { Radio, Flame, MessageCircle, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function TikTokLiveServicePage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('TikTok Live Service', 'Perkhidmatan TikTok Live'),
      subtitle: T(
        'Capitalize on real-time engagement to drive instant sales and massive brand visibility through strategic live streaming.',
        'Manfaatkan penglibatan masa nyata untuk memacu jualan segera dan keterlihatan jenama yang besar melalui penstriman langsung strategik.',
      ),
      image: "https://images.unsplash.com/photo-1603962099857-f9319d3a8478"
    },
    overview: {
      description: T(
        'TikTok Live is revolutionizing eCommerce. We provide end-to-end live streaming solutions, from professional studio setups and trained hosts to run-of-show scripting and real-time moderation. We turn your TikTok channel into a highly profitable 24/7 shopping network.',
        'TikTok Live sedang merevolusikan e-dagang. Kami menyediakan penyelesaian penstriman langsung dari hujung ke hujung, daripada persediaan studio profesional dan hos terlatih kepada skrip perjalanan rancangan dan moderasi masa nyata. Kami menukar saluran TikTok anda menjadi rangkaian beli-belah 24/7 yang sangat menguntungkan.',
      ),
      differentiators: [
        T('Professional live stream hosts trained for sales', 'Hos strim langsung profesional yang dilatih untuk jualan'),
        T('High-quality studio equipment and lighting', 'Peralatan studio dan pencahayaan berkualiti tinggi'),
        T('Strategic live-exclusive promotions', 'Promosi eksklusif-langsung yang strategik'),
        T('Real-time technical support and chat moderation', 'Sokongan teknikal masa nyata dan moderasi sembang'),
      ]
    },
    benefits: [
      { icon: MessageCircle, title: T('Real-time Interaction', 'Interaksi Masa Nyata'), description: T('Answer customer questions instantly to overcome buying objections.', 'Jawab soalan pelanggan serta-merta untuk mengatasi bantahan pembelian.') },
      { icon: Flame, title: T('Viral Reach', 'Jangkauan Viral'), description: T('TikTok heavily pushes live streams to the For You page.', 'TikTok menolak strim langsung dengan kuat ke halaman For You.') },
      { icon: Radio, title: T('Authentic Engagement', 'Penglibatan Autentik'), description: T('Showcase your products unedited and unfiltered.', 'Pamerkan produk anda tanpa suntingan dan tanpa tapisan.') },
      { icon: ShoppingBag, title: T('Instant Sales', 'Jualan Segera'), description: T('Drive massive conversion spikes with time-sensitive live offers.', 'Pacu lonjakan penukaran besar dengan tawaran langsung yang sensitif masa.') }
    ],
    timeline: {
      duration: T('1-2 weeks planning, ongoing sessions', 'Perancangan 1-2 minggu, sesi berterusan'),
      phases: [
        { title: T('Strategy & Setup', 'Strategi & Persediaan'), description: T('Defining the live schedule, offers, and setting up the TikTok Shop integration.', 'Menentukan jadual langsung, tawaran, dan menyediakan integrasi TikTok Shop.') },
        { title: T('Host Training', 'Latihan Hos'), description: T('Training our professional hosts on your brand voice and product details.', 'Melatih hos profesional kami tentang suara jenama dan butiran produk anda.') },
        { title: T('Tech Rehearsal', 'Raptai Teknikal'), description: T('Testing lighting, audio, connection, and product display angles.', 'Menguji pencahayaan, audio, sambungan, dan sudut paparan produk.') },
        { title: T('Going Live', 'Bersiaran Langsung'), description: T('Executing the scheduled live sessions with real-time moderation and analytics tracking.', 'Melaksanakan sesi langsung berjadual dengan moderasi masa nyata dan penjejakan analitik.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162618758-2a29a995354b',
        clientType: T('Apparel Brand', 'Jenama Pakaian'),
        objective: T('Clearance sale via 4-hour live stream event', 'Jualan pelupusan melalui acara strim langsung 4 jam'),
        category: 'TikTok Live',
        results: [
          { type: 'sales', value: '$45K', label: T('Live Revenue', 'Hasil Langsung') },
          { type: 'views', value: '120K', label: T('Concurrent Viewers', 'Penonton Serentak') }
        ]
      }
    ],
    faqs: [
      { question: T('Do you provide the hosts?', 'Adakah anda menyediakan hos?'), answer: T('Yes, we have a roster of energetic, sales-driven hosts experienced in TikTok live selling.', 'Ya, kami mempunyai senarai hos yang bertenaga dan dipacu jualan yang berpengalaman dalam jualan langsung TikTok.') },
      { question: T('Do we need TikTok Shop set up?', 'Adakah kami perlu TikTok Shop disediakan?'), answer: T('Yes, having TikTok Shop enabled is required for seamless in-app purchasing during the live stream.', 'Ya, TikTok Shop yang diaktifkan diperlukan untuk pembelian dalam aplikasi yang lancar semasa strim langsung.') },
      { question: T('How long should a live stream be?', 'Berapa lama strim langsung patut?'), answer: T('We recommend a minimum of 2 hours per session to give the algorithm time to push your stream to a wider audience.', 'Kami mengesyorkan minimum 2 jam setiap sesi untuk memberi algoritma masa menolak strim anda kepada penonton yang lebih luas.') },
      { question: T('Can we stream from our own office?', 'Bolehkah kami menstrim dari pejabat kami sendiri?'), answer: T('We can set up a professional streaming environment at your location, or we can broadcast from our dedicated studios.', 'Kami boleh menyediakan persekitaran penstriman profesional di lokasi anda, atau kami boleh bersiaran dari studio khusus kami.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('TikTok Live Service - BrandKraf', 'Perkhidmatan TikTok Live - BrandKraf')}</title>
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

export default TikTokLiveServicePage;