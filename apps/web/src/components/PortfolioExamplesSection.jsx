import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

function PortfolioExamplesSection({ projects }) {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  if (!projects || projects.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-muted/30">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start"
        >
          <span className="chip-brand mb-4">Portfolio</span>
          <h2 className="mb-4">
            {lang === 'ms' ? (
              <>Kerja <span className="text-gradient">pilihan</span></>
            ) : (
              <>Featured <span className="text-gradient">work</span></>
            )}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {T("See how we've helped other brands achieve their goals.", 'Lihat cara kami membantu jenama lain mencapai matlamat mereka.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioExamplesSection;