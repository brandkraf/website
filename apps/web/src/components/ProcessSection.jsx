import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Rocket, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function ProcessSection() {
  const isMobile = useIsMobile();
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: T('Strategy', 'Strategi'),
      description: T(
        'We analyze your brand, audience, and competitors to create a data-driven marketing strategy.',
        'Kami menganalisis jenama, penonton, dan pesaing anda untuk mencipta strategi pemasaran dipacu data.',
      )
    },
    {
      icon: FileText,
      number: '02',
      title: T('Content', 'Kandungan'),
      description: T(
        'Our team produces high-quality UGC content, ad creatives, and copy that resonates with your audience.',
        'Pasukan kami menghasilkan kandungan UGC berkualiti tinggi, kreatif iklan, dan salinan yang beresonansi dengan penonton anda.',
      )
    },
    {
      icon: Rocket,
      number: '03',
      title: T('Execution', 'Pelaksanaan'),
      description: T(
        'We launch campaigns across TikTok, Meta, and Google with precise targeting and optimization.',
        'Kami melancarkan kempen merentasi TikTok, Meta, dan Google dengan penyasaran dan pengoptimuman yang tepat.',
      )
    },
    {
      icon: TrendingUp,
      number: '04',
      title: T('Scaling', 'Penskalaan'),
      description: T(
        'We continuously test, optimize, and scale what works to maximize your ROI.',
        'Kami sentiasa menguji, mengoptimumkan, dan mengembangkan apa yang berkesan untuk memaksimumkan ROI anda.',
      )
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="blob h-72 w-72 bg-brandkraf-purple/10 top-10 right-0" />
      <div className="container-custom relative">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="chip-brand mb-4">{T('How we work', 'Cara kami bekerja')}</span>
          <h2 className="mb-4 text-foreground">
            {lang === 'ms' ? (
              <><span className="text-gradient">Proses</span> terbukti kami</>
            ) : (
              <>Our proven <span className="text-gradient">process</span></>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {T(
              'From strategy to scaling, we handle every step of your marketing journey',
              'Daripada strategi ke penskalaan, kami mengendalikan setiap langkah perjalanan pemasaran anda',
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Animated gradient connector (desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 gradient-animated opacity-30 rounded-full" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.12 }}
                className="group relative rounded-2xl glass-card p-7 hover-lift overflow-hidden text-center lg:text-left"
              >
                <span className="pointer-events-none absolute -top-3 right-3 text-7xl font-black text-brandkraf-teal/5 group-hover:text-brandkraf-purple/10 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="relative z-10 mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 mx-auto lg:mx-0">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative z-10 text-xl font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
