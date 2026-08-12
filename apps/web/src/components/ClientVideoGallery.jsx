import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import { BUNNY_CDN, BUNNY_LIBRARY_ID, portfolioClients } from '@/data/portfolioVideos.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Portfolio organised BY CLIENT (replaces the old per-industry Google Drive grids).
//
// Performance: only poster images load up front — one <img> per video, lazily. The
// Bunny player iframe is mounted ONLY for the tile the visitor clicks, so a page
// with 597 videos still costs a handful of thumbnails on load instead of hundreds
// of embedded players.
const thumbUrl = (guid) => `https://${BUNNY_CDN}/${guid}/thumbnail.jpg`;
const embedUrl = (guid) =>
  `https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${guid}?autoplay=true&preload=false`;

// Plain div, not motion.div: with ~600 tiles a per-tile whileInView animation would
// spin up ~600 IntersectionObservers and jank on low-end phones. The section fades in
// as a whole instead, so there is one observer per client rather than one per video.
function VideoTile({ video, clientName }) {
  const [playing, setPlaying] = useState(false);
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);

  return (
    <div
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
    >
      {playing ? (
        <iframe
          src={embedUrl(video.guid)}
          title={`${clientName} — ${video.title}`}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={T(`Play ${clientName} video: ${video.title}`, `Mainkan video ${clientName}: ${video.title}`)}
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={thumbUrl(video.guid)}
            alt={`${clientName} — ${video.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brandkraf-teal shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function ClientVideoGallery() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  const [active, setActive] = useState('all');
  const sectionRefs = useRef({});

  const clients = useMemo(
    () => (portfolioClients || []).filter((c) => c.videos && c.videos.length > 0),
    []
  );

  const totalVideos = useMemo(() => clients.reduce((n, c) => n + c.videos.length, 0), [clients]);

  const shown = active === 'all' ? clients : clients.filter((c) => c.slug === active);

  const jumpTo = (slug) => {
    setActive(slug);
    if (slug !== 'all') {
      // Let the filtered list render before scrolling to it.
      requestAnimationFrame(() => {
        const el = sectionRefs.current[slug];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  if (!clients.length) return null;

  return (
    <div className="w-full">
      {/* Client filter / quick-jump bar — how the sales team finds one brand fast. */}
      <div className="sticky top-16 z-30 -mx-4 mb-12 border-y border-border bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-brandkraf-teal" />
          {T(
            `${clients.length} clients · ${totalVideos} videos`,
            `${clients.length} pelanggan · ${totalVideos} video`
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => jumpTo('all')}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === 'all'
                ? 'border-brandkraf-teal bg-brandkraf-teal text-white'
                : 'border-border bg-card hover:border-brandkraf-teal/50 hover:text-brandkraf-teal'
            }`}
          >
            {T('All clients', 'Semua pelanggan')}
          </button>
          {clients.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => jumpTo(c.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c.slug
                  ? 'border-brandkraf-teal bg-brandkraf-teal text-white'
                  : 'border-border bg-card hover:border-brandkraf-teal/50 hover:text-brandkraf-teal'
              }`}
            >
              {c.client}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {shown.map((c) => (
          <motion.section
            key={c.slug}
            id={c.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            ref={(el) => {
              sectionRefs.current[c.slug] = el;
            }}
            className="scroll-mt-40"
          >
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{c.client}</h2>
              <span className="text-sm text-muted-foreground">
                {c.videos.length} {T(c.videos.length === 1 ? 'video' : 'videos', 'video')}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {c.videos.map((v) => (
                <VideoTile key={v.guid} video={v} clientName={c.client} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
