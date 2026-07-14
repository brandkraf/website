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
import { MessageSquare, Clock, Coins, Smile } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function ChatbotDevelopmentPage() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const serviceData = {
    hero: {
      title: T('Chatbot Development', 'Pembangunan Chatbot'),
      subtitle: T(
        'Automate customer support and qualify leads 24/7 with intelligent, natural-language conversational AI agents.',
        'Automasikan sokongan pelanggan dan layakkan petunjuk 24/7 dengan ejen AI perbualan bahasa semula jadi yang pintar.',
      ),
      image: "https://images.unsplash.com/photo-1675023035272-3426884896f8"
    },
    overview: {
      description: T(
        "Don't leave your customers waiting. We build custom AI chatbots trained specifically on your business data. These aren't clunky old menu bots; they are advanced conversational agents capable of answering complex questions, booking appointments, and guiding users through the sales funnel instantly.",
        'Jangan biarkan pelanggan anda menunggu. Kami membina chatbot AI tersuai yang dilatih khusus pada data perniagaan anda. Ini bukan bot menu lama yang kekok; ia ejen perbualan termaju yang mampu menjawab soalan kompleks, menempah temu janji, dan membimbing pengguna melalui saluran jualan serta-merta.',
      ),
      differentiators: [
        T('Powered by advanced LLMs (like GPT-4) for natural conversation', 'Dikuasakan LLM termaju (seperti GPT-4) untuk perbualan semula jadi'),
        T('Custom-trained on your specific FAQs, manuals, and brand voice', 'Dilatih khas pada Soalan Lazim, manual, dan suara jenama khusus anda'),
        T('Seamless integration with WhatsApp, Website, and Messenger', 'Integrasi lancar dengan WhatsApp, Laman Web, dan Messenger'),
        T('Smooth human-handoff protocols for complex issues', 'Protokol penyerahan kepada manusia yang lancar untuk isu kompleks'),
      ]
    },
    benefits: [
      { icon: Clock, title: T('24/7 Support', 'Sokongan 24/7'), description: T('Provide instant answers to customers, even outside business hours.', 'Berikan jawapan segera kepada pelanggan, walaupun di luar waktu perniagaan.') },
      { icon: MessageSquare, title: T('Instant Responses', 'Tindak Balas Segera'), description: T('Zero wait time means higher engagement and lower drop-off rates.', 'Masa menunggu sifar bermakna penglibatan lebih tinggi dan kadar keciciran lebih rendah.') },
      { icon: Coins, title: T('Cost Reduction', 'Pengurangan Kos'), description: T('Dramatically lower support costs by automating up to 80% of routine queries.', 'Turunkan kos sokongan secara mendadak dengan mengautomasi sehingga 80% pertanyaan rutin.') },
      { icon: Smile, title: T('Customer Satisfaction', 'Kepuasan Pelanggan'), description: T('Frictionless, helpful experiences that make customers love your brand.', 'Pengalaman tanpa geseran dan membantu yang membuatkan pelanggan menyukai jenama anda.') }
    ],
    timeline: {
      duration: T('3-6 weeks development', 'Pembangunan 3-6 minggu'),
      phases: [
        { title: T('Knowledge Gathering', 'Pengumpulan Pengetahuan'), description: T('Collecting your FAQs, website content, and past support tickets.', 'Mengumpul Soalan Lazim, kandungan laman web, dan tiket sokongan lepas anda.') },
        { title: T('Bot Training', 'Latihan Bot'), description: T('Feeding the data into the AI model and fine-tuning its personality and responses.', 'Memasukkan data ke dalam model AI dan menala halus personaliti serta responsnya.') },
        { title: T('Integration & Testing', 'Integrasi & Pengujian'), description: T('Connecting the bot to your desired platforms (WhatsApp, Web) and rigorous testing.', 'Menyambungkan bot ke platform pilihan anda (WhatsApp, Web) dan pengujian yang ketat.') },
        { title: T('Launch & Optimization', 'Pelancaran & Pengoptimuman'), description: T('Going live and continuously improving responses based on real user interactions.', 'Bersiaran dan terus menambah baik respons berdasarkan interaksi pengguna sebenar.') }
      ]
    },
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
        clientType: T('Healthcare Clinic', 'Klinik Penjagaan Kesihatan'),
        objective: T('Automate appointment bookings via WhatsApp', 'Mengautomasi tempahan temu janji melalui WhatsApp'),
        category: T('AI Chatbot', 'Chatbot AI'),
        results: [
          { type: 'leads', value: '75%', label: T('Automation Rate', 'Kadar Automasi') },
          { type: 'sales', value: '2.5x', label: T('More Bookings', 'Lebih Banyak Tempahan') }
        ]
      }
    ],
    faqs: [
      { question: T('Will the bot sound like a robot?', 'Adakah bot akan berbunyi seperti robot?'), answer: T('No, we use advanced Large Language Models that understand context and converse in natural, human-like language.', 'Tidak, kami menggunakan Model Bahasa Besar termaju yang memahami konteks dan berbual dalam bahasa semula jadi seperti manusia.') },
      { question: T('Can it integrate with my CRM?', 'Bolehkah ia berintegrasi dengan CRM saya?'), answer: T('Yes, our custom bots can connect with Hubspot, Salesforce, and other major CRMs to log leads and support tickets.', 'Ya, bot tersuai kami boleh bersambung dengan Hubspot, Salesforce, dan CRM utama lain untuk merekod petunjuk dan tiket sokongan.') },
      { question: T("What happens if the bot doesn't know the answer?", 'Apa berlaku jika bot tidak tahu jawapannya?'), answer: T("We program strict 'human handoff' protocols. If the bot is unsure, it elegantly transfers the chat to a live human agent.", "Kami memprogramkan protokol 'penyerahan kepada manusia' yang ketat. Jika bot tidak pasti, ia memindahkan sembang dengan elegan kepada ejen manusia langsung.") },
      { question: T('Can it speak multiple languages?', 'Bolehkah ia bercakap pelbagai bahasa?'), answer: T("Yes, our AI chatbots can automatically detect the user's language and converse fluently in over 50 languages.", 'Ya, chatbot AI kami boleh mengesan bahasa pengguna secara automatik dan berbual dengan fasih dalam lebih 50 bahasa.') }
    ]
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{T('Chatbot Development - BrandKraf', 'Pembangunan Chatbot - BrandKraf')}</title>
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

export default ChatbotDevelopmentPage;