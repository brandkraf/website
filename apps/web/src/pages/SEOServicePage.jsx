import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceOverview from '@/components/ServiceOverview.jsx';
import BenefitsSection from '@/components/BenefitsSection.jsx';
import TimelineSection from '@/components/TimelineSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ContactCTASection from '@/components/ContactCTASection.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Search, TrendingUp, MapPin, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function SEOServicePage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('SEO & AEO Services', 'Perkhidmatan SEO & AEO'),
      subtitle: T(
        'Rank on Google, win the local Map Pack, and get cited by AI answer engines. Search-first growth for Malaysian businesses — from Kuala Lumpur to Johor Bahru.',
        'Dapatkan kedudukan di Google, menangi Pek Peta tempatan, dan dipetik oleh enjin jawapan AI. Pertumbuhan mengutamakan carian untuk perniagaan Malaysia — dari Kuala Lumpur ke Johor Bahru.',
      ),
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07"
    },
    overview: {
      description: T(
        "Most buying journeys start with a search — on Google today, and increasingly inside AI assistants like ChatGPT and Google's AI Overviews. Our SEO service covers the full stack: technical SEO, content that ranks, local SEO for the Map Pack, and AEO (Answer Engine Optimization) so your brand is the answer AI engines cite. One team, both futures of search.",
        'Kebanyakan perjalanan pembelian bermula dengan carian — di Google hari ini, dan semakin banyak di dalam pembantu AI seperti ChatGPT dan AI Overviews Google. Perkhidmatan SEO kami meliputi keseluruhannya: SEO teknikal, kandungan yang mendapat kedudukan, SEO tempatan untuk Pek Peta, dan AEO (Answer Engine Optimization) supaya jenama anda menjadi jawapan yang dipetik enjin AI. Satu pasukan, kedua-dua masa depan carian.',
      ),
      differentiators: [
        T('On-page, technical, and content SEO under one roof', 'SEO pada halaman, teknikal, dan kandungan di bawah satu bumbung'),
        T('Local SEO: Google Business Profile + Map Pack rankings', 'SEO tempatan: Profil Perniagaan Google + kedudukan Pek Peta'),
        T('AEO/GEO: structured data and content built for AI answers', 'AEO/GEO: data berstruktur dan kandungan dibina untuk jawapan AI'),
        T('Transparent monthly reporting tied to leads, not just rankings', 'Pelaporan bulanan telus yang diikat kepada petunjuk, bukan sekadar kedudukan'),
      ]
    },
    benefits: [
      { icon: Search, title: T('Found at the Moment of Intent', 'Ditemui pada Saat Niat'), description: T('Appear when customers actively search for what you sell — the highest-converting traffic there is.', 'Muncul apabila pelanggan aktif mencari apa yang anda jual — trafik paling tinggi penukaran yang ada.') },
      { icon: TrendingUp, title: T('Compounding, Owned Traffic', 'Trafik Milik Sendiri yang Berkompaun'), description: T('Unlike ads, rankings keep working after the work is done — a growing asset, not a running cost.', 'Tidak seperti iklan, kedudukan terus berfungsi selepas kerja selesai — aset yang berkembang, bukan kos berterusan.') },
      { icon: MapPin, title: T('Win Local Searches', 'Menangi Carian Tempatan'), description: T('Rank in the Map Pack for "near me" and city searches across KL, Selangor, and Johor Bahru.', 'Dapatkan kedudukan dalam Pek Peta untuk carian "berdekatan saya" dan bandar merentasi KL, Selangor, dan Johor Bahru.') },
      { icon: Bot, title: T('Visible in AI Answers (AEO)', 'Kelihatan dalam Jawapan AI (AEO)'), description: T('Structured content that gets your brand cited by ChatGPT, Gemini, and Google AI Overviews.', 'Kandungan berstruktur yang menjadikan jenama anda dipetik oleh ChatGPT, Gemini, dan AI Overviews Google.') }
    ],
    timeline: {
      duration: T('2-3 weeks setup, compounding monthly', 'Persediaan 2-3 minggu, berkompaun setiap bulan'),
      phases: [
        { title: T('Audit & Keyword Strategy', 'Audit & Strategi Kata Kunci'), description: T('Technical audit, competitor gap analysis, and a keyword map matched to real buyer intent in your market.', 'Audit teknikal, analisis jurang pesaing, dan peta kata kunci yang dipadankan dengan niat pembeli sebenar dalam pasaran anda.') },
        { title: T('Technical & On-Page Fixes', 'Pembetulan Teknikal & Pada Halaman'), description: T('Site speed, indexing, schema markup, and page-level optimization so Google can rank you.', 'Kelajuan laman, pengindeksan, penanda skema, dan pengoptimuman peringkat halaman supaya Google boleh memberi anda kedudukan.') },
        { title: T('Content & Local Signals', 'Kandungan & Isyarat Tempatan'), description: T('Ranking content, Google Business Profile optimization, citations, and review systems.', 'Kandungan yang mendapat kedudukan, pengoptimuman Profil Perniagaan Google, petikan, dan sistem ulasan.') },
        { title: T('Authority & AEO Expansion', 'Kewibawaan & Pengembangan AEO'), description: T('Link building, digital PR, and answer-engine optimization — then double down on what wins.', 'Pembinaan pautan, PR digital, dan pengoptimuman enjin jawapan — kemudian gandakan apa yang menang.') }
      ]
    },
    faqs: [
      { question: T('How much does SEO cost in Malaysia?', 'Berapa kos SEO di Malaysia?'), answer: T('Ongoing SEO typically starts from around RM1,500–RM3,000/month for Malaysian SMEs, scaling with how competitive your industry and locations are. We quote a fixed monthly scope after a free audit — no lock-in surprises.', 'SEO berterusan biasanya bermula sekitar RM1,500–RM3,000/bulan untuk PKS Malaysia, meningkat mengikut tahap persaingan industri dan lokasi anda. Kami memberi sebut harga skop bulanan tetap selepas audit percuma — tiada kejutan terikat.') },
      { question: T('What is AEO and do I really need it?', 'Apa itu AEO dan adakah saya benar-benar memerlukannya?'), answer: T('AEO (Answer Engine Optimization) makes your content the source AI assistants cite when customers ask questions — the same way SEO wins Google rankings. As more Malaysians search inside ChatGPT and AI Overviews, brands optimized for AI answers capture demand competitors never see.', 'AEO (Answer Engine Optimization) menjadikan kandungan anda sumber yang dipetik pembantu AI apabila pelanggan bertanya soalan — sama seperti SEO memenangi kedudukan Google. Apabila semakin ramai rakyat Malaysia mencari di dalam ChatGPT dan AI Overviews, jenama yang dioptimumkan untuk jawapan AI menangkap permintaan yang pesaing tidak pernah nampak.') },
      { question: T('Do you serve businesses in Johor Bahru and outside the Klang Valley?', 'Adakah anda berkhidmat untuk perniagaan di Johor Bahru dan di luar Lembah Klang?'), answer: T('Yes. We run SEO and local SEO campaigns for businesses across Malaysia — including Johor Bahru, Penang, and East Malaysia — working remotely with on-site support when needed. Local SEO is location-specific, so we build city-level strategies for each market you serve.', 'Ya. Kami menjalankan kempen SEO dan SEO tempatan untuk perniagaan di seluruh Malaysia — termasuk Johor Bahru, Pulau Pinang, dan Malaysia Timur — bekerja secara jarak jauh dengan sokongan di lokasi apabila diperlukan. SEO tempatan bersifat khusus lokasi, jadi kami membina strategi peringkat bandar untuk setiap pasaran yang anda layani.') },
      { question: T('How long until SEO shows results?', 'Berapa lama sehingga SEO menunjukkan hasil?'), answer: T('Technical fixes and Map Pack improvements can move within 4–8 weeks; competitive organic rankings typically take 3–6 months to build. SEO compounds — the same work keeps paying back long after ads would have stopped.', 'Pembetulan teknikal dan penambahbaikan Pek Peta boleh bergerak dalam 4–8 minggu; kedudukan organik yang kompetitif biasanya mengambil 3–6 bulan untuk dibina. SEO berkompaun — kerja yang sama terus membayar balik lama selepas iklan akan berhenti.') },
      { question: T('Can you guarantee #1 on Google?', 'Bolehkah anda menjamin #1 di Google?'), answer: T('No honest agency can — and Google itself warns against anyone who promises it. What we do guarantee: a transparent strategy, work delivered every month, and reporting tied to rankings, traffic, and leads so you always see exactly what your investment returns.', 'Tiada agensi jujur yang boleh — dan Google sendiri memberi amaran terhadap sesiapa yang menjanjikannya. Apa yang kami jamin: strategi telus, kerja disampaikan setiap bulan, dan pelaporan yang diikat kepada kedudukan, trafik, dan petunjuk supaya anda sentiasa nampak dengan tepat pulangan pelaburan anda.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('SEO & AEO Agency Malaysia - Rank on Google & AI Search | BrandKraf', 'Agensi SEO & AEO Malaysia - Kedudukan di Google & Carian AI | BrandKraf')}</title>
        <meta name="description" content={T(
          'SEO agency for Malaysian businesses — technical SEO, local Map Pack rankings, and AEO so AI engines cite your brand. Serving KL, Selangor & Johor Bahru. Free audit.',
          'Agensi SEO untuk perniagaan Malaysia — SEO teknikal, kedudukan Pek Peta tempatan, dan AEO supaya enjin AI memetik jenama anda. Berkhidmat di KL, Selangor & Johor Bahru. Audit percuma.',
        )} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero {...serviceData.hero} />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
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

export default SEOServicePage;