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
import { Sparkles, LineChart, Brain, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function AIDrivenMarketingPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('AI Driven Marketing', 'Pemasaran Dipacu AI'),
      subtitle: T(
        'Leverage cutting-edge artificial intelligence to predict trends, automate tasks, and optimize campaigns with superhuman precision.',
        'Manfaatkan kecerdasan buatan terkini untuk meramal trend, mengautomasi tugas, dan mengoptimumkan kempen dengan ketepatan luar biasa.',
      ),
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    overview: {
      description: T(
        "Step into the future of digital marketing. We integrate advanced AI tools into your marketing stack to uncover hidden audience insights, generate dynamic personalized content at scale, and automate repetitive tasks. This isn't just a buzzword—it's a massive competitive advantage.",
        'Melangkah ke masa depan pemasaran digital. Kami mengintegrasikan alat AI termaju ke dalam timbunan pemasaran anda untuk mendedahkan pandangan penonton tersembunyi, menjana kandungan diperibadikan dinamik pada skala, dan mengautomasi tugas berulang. Ini bukan sekadar kata kunci popular—ia kelebihan daya saing yang besar.',
      ),
      differentiators: [
        T('Predictive analytics for customer behavior', 'Analitik ramalan untuk tingkah laku pelanggan'),
        T('AI-generated dynamic creative optimization', 'Pengoptimuman kreatif dinamik jana AI'),
        T('Automated bidding and budget allocation', 'Pembidaan dan peruntukan bajet automatik'),
        T('Hyper-personalized email and SMS sequencing', 'Penjujukan e-mel dan SMS hiper-peribadi'),
      ]
    },
    benefits: [
      { icon: LineChart, title: T('Data-Driven Decisions', 'Keputusan Dipacu Data'), description: T('Eliminate guesswork with AI algorithms that analyze millions of data points.', 'Hapuskan tekaan dengan algoritma AI yang menganalisis berjuta-juta titik data.') },
      { icon: Brain, title: T('Predictive Analytics', 'Analitik Ramalan'), description: T('Anticipate customer needs and trends before your competitors do.', 'Jangka keperluan pelanggan dan trend sebelum pesaing anda.') },
      { icon: Sparkles, title: T('Automation', 'Automasi'), description: T('Streamline workflows by letting AI handle repetitive marketing tasks.', 'Lancarkan aliran kerja dengan membiarkan AI mengendalikan tugas pemasaran berulang.') },
      { icon: Clock, title: T('Cost Savings', 'Penjimatan Kos'), description: T('Reduce manual labor hours and significantly improve ad spend efficiency.', 'Kurangkan jam kerja manual dan tingkatkan kecekapan perbelanjaan iklan dengan ketara.') }
    ],
    timeline: {
      duration: T('2-3 weeks implementation', 'Pelaksanaan 2-3 minggu'),
      phases: [
        { title: T('Infrastructure Audit', 'Audit Infrastruktur'), description: T('Assessing your current data flow and identifying AI integration opportunities.', 'Menilai aliran data semasa anda dan mengenal pasti peluang integrasi AI.') },
        { title: T('Model Setup', 'Persediaan Model'), description: T('Configuring predictive models and connecting AI tools to your ad accounts/CRM.', 'Mengkonfigurasi model ramalan dan menyambungkan alat AI ke akaun iklan/CRM anda.') },
        { title: T('Pilot Campaigns', 'Kempen Perintis'), description: T('Running controlled AI-driven campaigns against traditional baselines.', 'Menjalankan kempen dipacu AI terkawal berbanding garis dasar tradisional.') },
        { title: T('Full Deployment', 'Pelancaran Penuh'), description: T('Scaling the successful AI workflows across your entire marketing ecosystem.', 'Mengembangkan aliran kerja AI yang berjaya merentasi keseluruhan ekosistem pemasaran anda.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        clientType: T('Online Retailer', 'Peruncit Dalam Talian'),
        objective: T('Optimize ad spend using predictive AI models', 'Mengoptimumkan perbelanjaan iklan menggunakan model AI ramalan'),
        category: T('AI Marketing', 'Pemasaran AI'),
        results: [
          { type: 'sales', value: '-40%', label: T('CPA Reduction', 'Pengurangan CPA') },
          { type: 'leads', value: '3.5x', label: T('LTV Increase', 'Peningkatan LTV') }
        ]
      }
    ],
    faqs: [
      { question: T('Is AI going to replace my marketing team?', 'Adakah AI akan menggantikan pasukan pemasaran saya?'), answer: T('No, AI acts as a powerful co-pilot. It handles data processing and automation, freeing your team to focus on high-level strategy and creativity.', 'Tidak, AI bertindak sebagai pembantu juruterbang yang berkuasa. Ia mengendalikan pemprosesan data dan automasi, membebaskan pasukan anda untuk fokus pada strategi peringkat tinggi dan kreativiti.') },
      { question: T('What tools do you use?', 'Alat apa yang anda gunakan?'), answer: T('We utilize a proprietary stack involving advanced LLMs, machine learning bidding algorithms, and specialized predictive analytics software.', 'Kami menggunakan timbunan proprietari yang melibatkan LLM termaju, algoritma pembidaan pembelajaran mesin, dan perisian analitik ramalan khusus.') },
      { question: T('Is my customer data safe?', 'Adakah data pelanggan saya selamat?'), answer: T('Absolutely. All AI integrations strictly comply with GDPR and local data protection regulations, keeping your proprietary data secure.', 'Sudah tentu. Semua integrasi AI mematuhi GDPR dan peraturan perlindungan data tempatan dengan ketat, memastikan data proprietari anda selamat.') },
      { question: T('How fast will we see a difference?', 'Berapa pantas kami akan nampak perbezaan?'), answer: T('While automation saves time immediately, predictive models typically take a few weeks to learn your audience before delivering optimal ROI.', 'Walaupun automasi menjimatkan masa serta-merta, model ramalan biasanya mengambil beberapa minggu untuk mempelajari penonton anda sebelum menyampaikan ROI optimum.') }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{T('AI Driven Marketing - BrandKraf', 'Pemasaran Dipacu AI - BrandKraf')}</title>
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

export default AIDrivenMarketingPage;