import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function FAQSection({ faqs }) {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  // FAQPage structured data → eligible for expandable FAQ rich results in Google.
  const faqSchema =
    faqs && faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  return (
    <section className="section-padding relative overflow-hidden bg-background border-t border-border">
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      )}
      <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
      <div className="container-custom relative max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="chip-brand mb-4">{T('FAQ', 'Soalan Lazim')}</span>
          <h2 className="mb-4">
            {lang === 'ms' ? (
              <>Soalan <span className="text-gradient">lazim</span></>
            ) : (
              <>Frequently asked <span className="text-gradient">questions</span></>
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {T("Got questions? We've got answers.", 'Ada soalan? Kami ada jawapannya.')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="glass-card rounded-2xl border-transparent px-6 transition-colors duration-300 data-[state=open]:ring-1 data-[state=open]:ring-brandkraf-teal/30"
              >
                <AccordionTrigger className="py-5 text-left font-semibold hover:text-brandkraf-teal hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;
