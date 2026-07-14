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
import { Globe, Smartphone, Gauge, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function WebsiteDevelopmentPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('Website Development', 'Pembangunan Laman Web'),
      subtitle: T(
        'Custom, high-performing websites built to convert visitors into customers while perfectly reflecting your brand identity.',
        'Laman web tersuai berprestasi tinggi yang dibina untuk menukar pelawat menjadi pelanggan sambil mencerminkan identiti jenama anda dengan sempurna.',
      ),
      image: "https://images.unsplash.com/photo-1613395752352-292cf623d389"
    },
    overview: {
      description: T(
        "Your website is your digital storefront. We don't just build sites that look good; we build sites engineered for performance. From custom React applications to robust eCommerce platforms, we deliver responsive, lightning-fast digital experiences.",
        'Laman web anda ialah etalase digital anda. Kami bukan sekadar membina laman yang kelihatan cantik; kami membina laman yang direka untuk prestasi. Daripada aplikasi React tersuai kepada platform e-dagang yang teguh, kami menyampaikan pengalaman digital yang responsif dan sepantas kilat.',
      ),
      differentiators: [
        T('Custom UI/UX design focused on conversion rate optimization', 'Reka bentuk UI/UX tersuai berfokuskan pengoptimuman kadar penukaran'),
        T('Modern tech stacks (React, Next.js, Tailwind)', 'Timbunan teknologi moden (React, Next.js, Tailwind)'),
        T('Technical SEO best practices built-in', 'Amalan terbaik SEO teknikal terbina dalam'),
        T('Scalable architectures that grow with your business', 'Seni bina berskala yang berkembang bersama perniagaan anda'),
      ]
    },
    benefits: [
      { icon: Gauge, title: T('Fast Loading', 'Pemuatan Pantas'), description: T('Optimized performance to keep users engaged and reduce bounce rates.', 'Prestasi dioptimumkan untuk mengekalkan pengguna terlibat dan mengurangkan kadar lantunan.') },
      { icon: Smartphone, title: T('Mobile-Friendly', 'Mesra Mudah Alih'), description: T('Flawless responsive design across all devices and screen sizes.', 'Reka bentuk responsif tanpa cacat merentasi semua peranti dan saiz skrin.') },
      { icon: Search, title: T('SEO Optimized', 'Dioptimumkan SEO'), description: T('Built with technical SEO standards to help you rank higher on Google.', 'Dibina dengan piawaian SEO teknikal untuk membantu anda mendapat kedudukan lebih tinggi di Google.') },
      { icon: Globe, title: T('Conversion-Focused', 'Fokus Penukaran'), description: T('Strategic user journeys designed to guide visitors to take action.', 'Perjalanan pengguna strategik yang direka untuk membimbing pelawat mengambil tindakan.') }
    ],
    timeline: {
      duration: T('6-12 weeks depending on complexity', '6-12 minggu bergantung pada kerumitan'),
      phases: [
        { title: T('Discovery & UX', 'Penerokaan & UX'), description: T('Mapping out site architecture, user journeys, and wireframing core pages.', 'Memetakan seni bina laman, perjalanan pengguna, dan rangka wayar halaman teras.') },
        { title: T('UI Design', 'Reka Bentuk UI'), description: T("Creating high-fidelity mockups reflecting your brand's visual identity.", 'Mencipta olok-olok ketepatan tinggi yang mencerminkan identiti visual jenama anda.') },
        { title: T('Development', 'Pembangunan'), description: T('Coding the frontend and backend, integrating CMS, and adding interactions.', 'Mengekod bahagian hadapan dan belakang, mengintegrasikan CMS, dan menambah interaksi.') },
        { title: T('Testing & Launch', 'Pengujian & Pelancaran'), description: T('Rigorous QA testing, performance optimization, and seamless deployment.', 'Pengujian QA yang ketat, pengoptimuman prestasi, dan pelancaran yang lancar.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        clientType: T('Tech SaaS', 'SaaS Teknologi'),
        objective: T('Redesign marketing site for better lead generation', 'Mereka bentuk semula laman pemasaran untuk penjanaan petunjuk lebih baik'),
        category: T('Web Development', 'Pembangunan Web'),
        results: [
          { type: 'leads', value: '145%', label: T('Conversion Lift', 'Peningkatan Penukaran') },
          { type: 'views', value: '0.8s', label: T('Load Time', 'Masa Muat') }
        ]
      }
    ],
    faqs: [
      { question: T('What platforms do you use?', 'Platform apa yang anda gunakan?'), answer: T('We build custom React/Next.js applications, as well as Shopify and WordPress depending on your specific needs.', 'Kami membina aplikasi React/Next.js tersuai, serta Shopify dan WordPress bergantung pada keperluan khusus anda.') },
      { question: T('Will I be able to update the site myself?', 'Bolehkah saya mengemas kini laman sendiri?'), answer: T('Yes, we integrate user-friendly Content Management Systems (CMS) so your team can easily update content.', 'Ya, kami mengintegrasikan Sistem Pengurusan Kandungan (CMS) yang mesra pengguna supaya pasukan anda boleh mengemas kini kandungan dengan mudah.') },
      { question: T('Do you provide hosting and maintenance?', 'Adakah anda menyediakan pengehosan dan penyelenggaraan?'), answer: T('Yes, we offer ongoing maintenance and premium hosting packages to keep your site secure and fast.', 'Ya, kami menawarkan penyelenggaraan berterusan dan pakej pengehosan premium untuk memastikan laman anda selamat dan pantas.') },
      { question: T('Is SEO included?', 'Adakah SEO disertakan?'), answer: T('Technical on-page SEO (meta tags, schema, fast load speeds, semantic HTML) is included in all our builds.', 'SEO teknikal pada halaman (tag meta, skema, kelajuan muat pantas, HTML semantik) disertakan dalam semua binaan kami.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('Website Development - BrandKraf', 'Pembangunan Laman Web - BrandKraf')}</title>
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

export default WebsiteDevelopmentPage;