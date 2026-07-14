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
import KOCKOLVideoGrid from '@/components/KOCKOLVideoGrid.jsx';
import { Users, Mic, Rocket, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function KOCKOLServicePage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('KOC/KOL Service', 'Perkhidmatan KOC/KOL'),
      subtitle: T(
        'Amplify your brand reach with strategic partnerships using Key Opinion Consumers and Key Opinion Leaders.',
        'Kuatkan jangkauan jenama anda dengan perkongsian strategik menggunakan Key Opinion Consumers dan Key Opinion Leaders.',
      ),
      image: "https://images.unsplash.com/photo-1677695960480-5a3ff97a13b1"
    },
    overview: {
      description: T(
        'Leverage the influence of established creators to supercharge your brand awareness. We manage end-to-end influencer campaigns, matching your brand with the perfect KOLs (Key Opinion Leaders) for massive reach and KOCs (Key Opinion Consumers) for hyper-authentic, localized engagement.',
        'Manfaatkan pengaruh pencipta mapan untuk melonjakkan kesedaran jenama anda. Kami menguruskan kempen pempengaruh dari hujung ke hujung, memadankan jenama anda dengan KOL (Key Opinion Leaders) yang sempurna untuk jangkauan besar dan KOC (Key Opinion Consumers) untuk penglibatan tempatan yang sangat autentik.',
      ),
      differentiators: [
        T('Curated database of vetted influencers', 'Pangkalan data pempengaruh yang disaring dan dikurasi'),
        T('Negotiation and contract management', 'Rundingan dan pengurusan kontrak'),
        T('Performance tracking and affiliate structures', 'Penjejakan prestasi dan struktur ahli gabungan'),
        T('Mix of macro-reach and micro-authenticity', 'Campuran jangkauan makro dan keaslian mikro'),
      ]
    },
    benefits: [
      { icon: Mic, title: T('Authentic Promotion', 'Promosi Autentik'), description: T('Endorsements from voices your target audience already trusts.', 'Sokongan daripada suara yang sudah dipercayai penonton sasaran anda.') },
      { icon: Users, title: T('Targeted Audience', 'Penonton Disasarkan'), description: T('Reach specific demographics precisely aligned with your buyer persona.', 'Capai demografi khusus yang sejajar tepat dengan persona pembeli anda.') },
      { icon: ShieldCheck, title: T('Credibility Boost', 'Rangsangan Kredibiliti'), description: T("Transfer the influencer's authority directly to your brand.", 'Pindahkan kewibawaan pempengaruh terus kepada jenama anda.') },
      { icon: Rocket, title: T('Viral Potential', 'Potensi Viral'), description: T('High chance of organic algorithm pushes through established creator accounts.', 'Peluang tinggi tolakan algoritma organik melalui akaun pencipta yang mapan.') }
    ],
    timeline: {
      duration: T('2-4 weeks per campaign', '2-4 minggu setiap kempen'),
      phases: [
        { title: T('Strategy & Scouting', 'Strategi & Pencarian'), description: T('Defining campaign goals and identifying the ideal influencers for your brand.', 'Menentukan matlamat kempen dan mengenal pasti pempengaruh ideal untuk jenama anda.') },
        { title: T('Outreach & Negotiation', 'Jangkauan & Rundingan'), description: T('Contacting creators, negotiating deliverables, and handling contracts.', 'Menghubungi pencipta, merundingkan penyampaian, dan menguruskan kontrak.') },
        { title: T('Content Briefing', 'Taklimat Kandungan'), description: T('Providing clear creative guidelines while allowing creators creative freedom.', 'Menyediakan garis panduan kreatif yang jelas sambil memberi pencipta kebebasan kreatif.') },
        { title: T('Go-Live & Reporting', 'Siaran & Pelaporan'), description: T('Monitoring the posts going live and compiling comprehensive performance reports.', 'Memantau siaran yang diterbitkan dan menyusun laporan prestasi yang menyeluruh.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868',
        clientType: T('F&B Franchise', 'Francais F&B'),
        objective: T('Launch awareness campaign via local food reviewers', 'Melancarkan kempen kesedaran melalui pengulas makanan tempatan'),
        category: T('KOL Campaign', 'Kempen KOL'),
        results: [
          { type: 'views', value: '3.8M', label: T('Total Reach', 'Jumlah Jangkauan') },
          { type: 'sales', value: '85+', label: T('Creators Activated', 'Pencipta Diaktifkan') }
        ]
      }
    ],
    faqs: [
      { question: T('What is the difference between KOC and KOL?', 'Apa beza KOC dan KOL?'), answer: T('KOLs (Leaders) have large followings and provide massive reach. KOCs (Consumers) are everyday users with smaller, highly engaged, and highly trusting audiences.', 'KOL (Leaders) mempunyai pengikut yang besar dan memberikan jangkauan besar. KOC (Consumers) ialah pengguna harian dengan penonton yang lebih kecil, sangat terlibat, dan sangat mempercayai.') },
      { question: T('How do you track sales from influencers?', 'Bagaimana anda menjejaki jualan daripada pempengaruh?'), answer: T('We use a combination of unique promo codes, custom tracking links, and affiliate platforms to attribute sales accurately.', 'Kami menggunakan gabungan kod promo unik, pautan penjejakan tersuai, dan platform ahli gabungan untuk mengaitkan jualan dengan tepat.') },
      { question: T('Do we have to pay the influencers separately?', 'Adakah kami perlu membayar pempengaruh secara berasingan?'), answer: T('We can handle all creator payouts through our agency, providing you with a single, simple invoice.', 'Kami boleh menguruskan semua pembayaran pencipta melalui agensi kami, memberikan anda satu invois yang mudah.') },
      { question: T('Can we approve the influencers first?', 'Bolehkah kami meluluskan pempengaruh dahulu?'), answer: T('Always. We provide a roster of proposed creators for you to approve before any outreach begins.', 'Sentiasa. Kami menyediakan senarai pencipta yang dicadangkan untuk kelulusan anda sebelum sebarang jangkauan bermula.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('KOC/KOL Service - BrandKraf', 'Perkhidmatan KOC/KOL - BrandKraf')}</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero {...serviceData.hero} />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />

        {/* New 18-video Featured Work Grid */}
        <KOCKOLVideoGrid />

        {/* Existing Portfolio Examples Section */}
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

export default KOCKOLServicePage;