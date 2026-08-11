import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Replaces the old per-industry Google Drive iframe galleries. The portfolio is now
// organised by client, so every industry page points at that single showcase rather
// than embedding its own video grid (which loaded ~18 Drive players per page).
export default function PortfolioTeaser({ industry }) {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/5 p-8 text-center md:p-12"
    >
      <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brandkraf-teal/10 text-brandkraf-teal">
        <PlayCircle className="h-7 w-7" />
      </span>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
        {T('See the work we have made for real brands', 'Lihat kerja yang kami hasilkan untuk jenama sebenar')}
      </h2>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        {industry
          ? T(
              `Our full video portfolio — including ${industry} work — is organised by client, so you can see exactly what we delivered for each brand.`,
              `Portfolio video penuh kami — termasuk kerja ${industry} — disusun mengikut pelanggan, jadi anda boleh lihat dengan tepat apa yang kami hasilkan untuk setiap jenama.`
            )
          : T(
              'Our full video portfolio is organised by client, so you can see exactly what we delivered for each brand.',
              'Portfolio video penuh kami disusun mengikut pelanggan, jadi anda boleh lihat dengan tepat apa yang kami hasilkan untuk setiap jenama.'
            )}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform"
        >
          <Link to={lp('/portfolio/ugc-videos')} className="flex items-center gap-2">
            {T('View our portfolio', 'Lihat portfolio kami')} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-13 rounded-xl px-7 font-semibold">
          <Link to={lp('/contact')}>{T('Get a free quote', 'Dapatkan sebut harga percuma')}</Link>
        </Button>
      </div>
    </motion.div>
  );
}
