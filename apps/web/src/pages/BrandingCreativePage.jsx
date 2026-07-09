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
import { Palette, Diamond, Layers, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function BrandingCreativePage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('Branding & Creative', 'Penjenamaan & Kreatif'),
      subtitle: T(
        'Craft a memorable brand identity that stands out in the market, builds trust, and perfectly communicates your values.',
        'Bentuk identiti jenama yang mudah diingati yang menonjol di pasaran, membina kepercayaan, dan menyampaikan nilai anda dengan sempurna.',
      ),
      image: "https://images.unsplash.com/photo-1495224814653-94f36c0a31ea"
    },
    overview: {
      description: T(
        "A strong brand is more than just a logo. It's the entire ecosystem of how your business looks, feels, and communicates. We dive deep into your company's DNA to create cohesive, striking visual identities and creative assets that leave a lasting impression on your audience.",
        'Jenama yang kukuh lebih daripada sekadar logo. Ia keseluruhan ekosistem cara perniagaan anda kelihatan, terasa, dan berkomunikasi. Kami menyelami DNA syarikat anda untuk mencipta identiti visual dan aset kreatif yang padu dan menarik yang meninggalkan kesan berkekalan pada penonton anda.',
      ),
      differentiators: [
        T('Comprehensive brand strategy and positioning', 'Strategi jenama dan kedudukan yang menyeluruh'),
        T('Unique, bespoke logo design and typography', 'Reka bentuk logo dan tipografi yang unik dan tersendiri'),
        T('Extensive brand guidelines for consistency', 'Garis panduan jenama yang lengkap untuk kekonsistenan'),
        T('Production of marketing collateral and assets', 'Pengeluaran bahan dan aset pemasaran'),
      ]
    },
    benefits: [
      { icon: Star, title: T('Memorable Brand', 'Jenama Mudah Diingati'), description: T("Create an instantly recognizable identity that sticks in customers' minds.", 'Cipta identiti yang boleh dikenali serta-merta yang melekat dalam fikiran pelanggan.') },
      { icon: Diamond, title: T('Professional Image', 'Imej Profesional'), description: T('Elevate your perceived value and command premium pricing.', 'Tingkatkan nilai tanggapan anda dan kuasai harga premium.') },
      { icon: Layers, title: T('Visual Consistency', 'Kekonsistenan Visual'), description: T('Maintain a unified look across all touchpoints and platforms.', 'Kekalkan rupa bersatu merentasi semua titik sentuh dan platform.') },
      { icon: Palette, title: T('Market Differentiation', 'Pembezaan Pasaran'), description: T('Stand out vividly from competitors in crowded markets.', 'Menonjol dengan ketara daripada pesaing dalam pasaran yang sesak.') }
    ],
    timeline: {
      duration: T('4-8 weeks for complete branding', '4-8 minggu untuk penjenamaan lengkap'),
      phases: [
        { title: T('Discovery Session', 'Sesi Penerokaan'), description: T('In-depth workshop to understand your vision, target audience, and market positioning.', 'Bengkel mendalam untuk memahami visi, penonton sasaran, dan kedudukan pasaran anda.') },
        { title: T('Concepts & Identity', 'Konsep & Identiti'), description: T('Presenting initial mood boards, logo concepts, and color palettes.', 'Membentangkan papan mood awal, konsep logo, dan palet warna.') },
        { title: T('Refinement', 'Penghalusan'), description: T('Iterating on the chosen concept to perfect the primary logo and visual assets.', 'Mengulang konsep yang dipilih untuk menyempurnakan logo utama dan aset visual.') },
        { title: T('Guidelines & Handoff', 'Garis Panduan & Penyerahan'), description: T('Delivering the final brand book and all necessary file formats.', 'Menyerahkan buku jenama akhir dan semua format fail yang diperlukan.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
        clientType: T('Boutique Coffee Roaster', 'Pemanggang Kopi Butik'),
        objective: T('Complete brand refresh and packaging design', 'Penyegaran jenama lengkap dan reka bentuk pembungkusan'),
        category: T('Branding', 'Penjenamaan'),
        results: [
          { type: 'views', value: '100%', label: T('New Identity', 'Identiti Baharu') },
          { type: 'sales', value: '42%', label: T('Retail Growth', 'Pertumbuhan Runcit') }
        ]
      }
    ],
    faqs: [
      { question: T('What is included in a branding package?', 'Apa yang disertakan dalam pakej penjenamaan?'), answer: T('Our standard package includes logo design (primary/secondary), color palette, typography selection, and a comprehensive brand guideline document.', 'Pakej standard kami termasuk reka bentuk logo (utama/sekunder), palet warna, pemilihan tipografi, dan dokumen garis panduan jenama yang menyeluruh.') },
      { question: T('Do you design packaging?', 'Adakah anda mereka bentuk pembungkusan?'), answer: T('Yes, we can extend the brand identity to physical packaging, digital assets, and print collateral.', 'Ya, kami boleh melanjutkan identiti jenama kepada pembungkusan fizikal, aset digital, dan bahan cetakan.') },
      { question: T('How many revisions do we get?', 'Berapa banyak semakan yang kami dapat?'), answer: T('We typically include 2-3 rounds of strategic revisions during the refinement phase to ensure you love the final result.', 'Kami biasanya menyertakan 2-3 pusingan semakan strategik semasa fasa penghalusan untuk memastikan anda menyukai hasil akhirnya.') },
      { question: T('Can we trademark the logo?', 'Bolehkah kami menandakan dagangan logo?'), answer: T('Yes, all original designs we create are unique and transferred fully to you, allowing you to seek trademark protection.', 'Ya, semua reka bentuk asli yang kami cipta adalah unik dan dipindahkan sepenuhnya kepada anda, membolehkan anda memohon perlindungan tanda dagangan.') }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{T('Branding & Creative - BrandKraf', 'Penjenamaan & Kreatif - BrandKraf')}</title>
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

export default BrandingCreativePage;