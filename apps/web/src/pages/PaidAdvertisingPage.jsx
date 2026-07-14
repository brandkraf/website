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
import { Target, BarChart2, Zap, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function PaidAdvertisingPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('Paid Advertising', 'Pengiklanan Berbayar'),
      subtitle: T(
        'Maximize your ROI with precision-targeted, multi-platform ad campaigns designed to scale your revenue predictably.',
        'Maksimumkan ROI anda dengan kempen iklan berbilang platform yang disasarkan tepat, direka untuk mengembangkan hasil anda secara boleh diramal.',
      ),
      image: "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5"
    },
    overview: {
      description: T(
        'Stop guessing with your ad spend. We create data-driven paid advertising campaigns across Meta, Google, and TikTok. By combining compelling ad creatives with rigorous media buying strategies, we ensure every dollar spent works hard to acquire new customers and generate profitable returns.',
        'Berhenti meneka dengan perbelanjaan iklan anda. Kami mencipta kempen pengiklanan berbayar dipacu data merentasi Meta, Google, dan TikTok. Dengan menggabungkan kreatif iklan yang menarik dengan strategi pembelian media yang ketat, kami memastikan setiap ringgit yang dibelanjakan bekerja keras untuk memperoleh pelanggan baharu dan menjana pulangan yang menguntungkan.',
      ),
      differentiators: [
        T('Focus on measurable ROI and ROAS', 'Fokus pada ROI dan ROAS yang boleh diukur'),
        T('Continuous A/B testing of creatives and audiences', 'Ujian A/B berterusan pada kreatif dan penonton'),
        T('Expertise across Meta, Google Ads, and TikTok', 'Kepakaran merentasi Meta, Google Ads, dan TikTok'),
        T('Transparent, real-time reporting dashboards', 'Papan pemuka pelaporan telus, masa nyata'),
      ]
    },
    benefits: [
      { icon: Target, title: T('Targeted Reach', 'Jangkauan Disasarkan'), description: T('Get your brand in front of high-intent users ready to buy.', 'Letakkan jenama anda di hadapan pengguna berniat tinggi yang bersedia membeli.') },
      { icon: BarChart2, title: T('Measurable ROI', 'ROI Boleh Diukur'), description: T('Track every conversion to ensure your campaigns are profitable.', 'Jejaki setiap penukaran untuk memastikan kempen anda menguntungkan.') },
      { icon: Zap, title: T('Quick Results', 'Hasil Pantas'), description: T('Drive immediate traffic and sales unlike slow organic methods.', 'Pacu trafik dan jualan segera tidak seperti kaedah organik yang perlahan.') },
      { icon: Settings, title: T('Budget Control', 'Kawalan Bajet'), description: T('Scale up winners and cut losers efficiently to optimize spend.', 'Kembangkan pemenang dan potong yang kalah dengan cekap untuk mengoptimumkan perbelanjaan.') }
    ],
    timeline: {
      duration: T('1-2 weeks setup, ongoing optimization', 'Persediaan 1-2 minggu, pengoptimuman berterusan'),
      phases: [
        { title: T('Account Audit & Strategy', 'Audit Akaun & Strategi'), description: T('Reviewing past data, setting up tracking pixels, and planning campaign structures.', 'Menyemak data lepas, menyediakan piksel penjejakan, dan merancang struktur kempen.') },
        { title: T('Creative & Copy', 'Kreatif & Salinan'), description: T('Developing ad creatives, writing copy, and setting up landing pages if needed.', 'Membangunkan kreatif iklan, menulis salinan, dan menyediakan halaman pendaratan jika perlu.') },
        { title: T('Campaign Launch', 'Pelancaran Kempen'), description: T('Deploying initial campaigns with broad and targeted testing structures.', 'Melancarkan kempen awal dengan struktur ujian luas dan disasarkan.') },
        { title: T('Scale & Optimize', 'Kembang & Optimumkan'), description: T('Daily monitoring, killing underperforming ads, and scaling profitable ad sets.', 'Pemantauan harian, menghentikan iklan berprestasi rendah, dan mengembangkan set iklan yang menguntungkan.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        clientType: T('E-Commerce Store', 'Kedai E-Dagang'),
        objective: T('Scale daily sales while maintaining 3x ROAS', 'Mengembangkan jualan harian sambil mengekalkan ROAS 3x'),
        category: T('Paid Ads', 'Iklan Berbayar'),
        results: [
          { type: 'sales', value: '4.2x', label: T('Average ROAS', 'ROAS Purata') },
          { type: 'leads', value: '215%', label: T('Revenue Increase', 'Peningkatan Hasil') }
        ]
      }
    ],
    faqs: [
      { question: T('What is the minimum ad budget?', 'Apa bajet iklan minimum?'), answer: T('We recommend a minimum starting ad spend of $1,500/month to allow sufficient data collection for optimization.', 'Kami mengesyorkan perbelanjaan iklan permulaan minimum sekitar RM1,500/bulan untuk membolehkan pengumpulan data yang mencukupi bagi pengoptimuman.') },
      { question: T('Do you design the ad creatives?', 'Adakah anda mereka bentuk kreatif iklan?'), answer: T('Yes, our team designs image and video creatives tailored for performance marketing.', 'Ya, pasukan kami mereka bentuk kreatif imej dan video yang disesuaikan untuk pemasaran prestasi.') },
      { question: T('How long until we see results?', 'Berapa lama sehingga kami nampak hasil?'), answer: T('While initial data comes in immediately, it typically takes 2-4 weeks to optimize the campaigns and stabilize CPA.', 'Walaupun data awal masuk serta-merta, biasanya mengambil masa 2-4 minggu untuk mengoptimumkan kempen dan menstabilkan CPA.') },
      { question: T('What platforms do you advertise on?', 'Platform apa yang anda iklankan?'), answer: T('We specialize in Meta (Facebook/Instagram), Google Search/Max, and TikTok Ads.', 'Kami pakar dalam Meta (Facebook/Instagram), Google Search/Max, dan Iklan TikTok.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('Paid Advertising - BrandKraf', 'Pengiklanan Berbayar - BrandKraf')}</title>
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

export default PaidAdvertisingPage;