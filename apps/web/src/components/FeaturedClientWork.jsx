import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUNNY_CDN, portfolioClients } from '@/data/portfolioVideos.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Compact preview of the by-client portfolio, used on the pages people actually land
// on (/portfolio and the UGC service page). Without this the client work was only
// reachable from the industry pages, so most visitors never found it.
//
// Shows one real thumbnail per client (poster image only — no players), so the strip
// stays light while proving the work is real.
export default function FeaturedClientWork({ limit = 8 }) {
  const { lang, lp } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  const clients = useMemo(
    () => (portfolioClients || []).filter((c) => c.videos && c.videos.length > 0),
    []
  );

  const preview = useMemo(() => {
    // Spread the sample evenly across the client list rather than taking the first N,
    // so the strip shows a cross-section of the roster.
    if (!clients.length) return [];
    const step = Math.max(1, Math.floor(clients.length / limit));
    const picked = [];
    for (let i = 0; i < clients.length && picked.length < limit; i += step) {
      picked.push({ client: clients[i], video: clients[i].videos[0] });
    }
    return picked;
  }, [clients, limit]);

  if (!clients.length) return null;

  const totalVideos = clients.reduce((n, c) => n + c.videos.length, 0);

  return (
    <section className="section-padding border-t border-border bg-muted/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <span className="chip-brand mb-4 inline-flex items-center gap-2">
            <Play className="h-4 w-4" /> {T('Our work', 'Kerja kami')}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            {T('Real work for real brands', 'Kerja sebenar untuk jenama sebenar')}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {T(
              `${totalVideos} videos produced for ${clients.length} Malaysian brands — browse the portfolio client by client and see exactly what we delivered for each one.`,
              `${totalVideos} video dihasilkan untuk ${clients.length} jenama Malaysia — layari portfolio pelanggan demi pelanggan dan lihat dengan tepat apa yang kami hasilkan untuk setiap satu.`
            )}
          </p>
        </motion.div>

        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {preview.map(({ client, video }) => (
            <Link
              key={client.slug}
              to={lp(`/portfolio/ugc-videos#${client.slug}`)}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={`https://${BUNNY_CDN}/${video.guid}/thumbnail.jpg`}
                alt={client.client}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute inset-x-2 bottom-2 text-center text-xs font-semibold leading-tight text-white drop-shadow">
                {client.client}
              </span>
            </Link>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="h-13 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple px-7 font-semibold text-white shadow-lg shadow-brandkraf-teal/25 hover:-translate-y-0.5 transition-transform"
        >
          <Link to={lp('/portfolio/ugc-videos')} className="flex items-center gap-2">
            {T(`See all ${clients.length} clients`, `Lihat semua ${clients.length} pelanggan`)}{' '}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
