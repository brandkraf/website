import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { publicRoutes } from '@/routes.jsx';

// Global SEO head tags: <html lang>, the canonical, hreflang alternates, and the
// noindex gate for pages that have no Bahasa Melayu translation yet.
//
// This component is the SINGLE source of canonicals for the whole app. Page
// components must NOT emit their own — the canonical is always derivable from the
// current route, and having two sources produced pages with conflicting or (on
// /ms, which is served by the canonical-less spa.html shell) zero canonical tags.
// Google reported those as "Duplicate without user-selected canonical".

const SITE = 'https://www.brandkraf.com';
const PRIVATE = ['/admin', '/checkout', '/payment', '/media-upload'];

// Bahasa Melayu is live: blog (100/100), guides (13/13), locations (13/13) and every
// main page are translated, so /ms is indexable by default. Only these are still
// English-only — their /ms URLs would show English content, so they stay noindexed.
// Remove a path from this list as soon as its BM translation ships.
const UNTRANSLATED_PREFIXES = ['/portfolio/ugc-content-creation/'];
const UNTRANSLATED_EXACT = [
  '/terms-and-conditions',
  '/privacy-policy',
  '/refund-policy',
  '/payment-success',
  '/payment-failure',
];

// Sections whose pages set their own per-item noindex + hreflang (they know which
// individual posts/guides/cities are translated). This component still owns their
// canonical and <html lang>.
const SELF_MANAGED = ['/blog', '/guides', '/digital-marketing-agency'];

// Every static route the app actually serves. A path outside this set (and outside
// SELF_MANAGED, whose items are data-driven) renders the 404 page — such a URL must
// never advertise hreflang alternates to pages that do not exist.
const KNOWN_PATHS = new Set(publicRoutes.map((r) => r.path).filter((p) => !p.includes(':')));

export default function Hreflang() {
  const { pathname } = useLocation();
  const isMs = pathname === '/ms' || pathname.startsWith('/ms/');
  const base = pathname === '/ms' ? '/' : isMs ? pathname.slice(3) : pathname;
  const lang = isMs ? 'ms' : 'en';

  // The prerendered EN files carry a static canonical for crawlers that do not run
  // JS. Once Helmet mounts, drop that non-Helmet copy so the rendered DOM has
  // exactly one canonical rather than two.
  useEffect(() => {
    document
      .querySelectorAll('link[rel="canonical"]:not([data-rh])')
      .forEach((el) => el.parentNode && el.parentNode.removeChild(el));
  }, [pathname]);

  const canonical = SITE + (pathname === '/' ? '' : pathname.replace(/\/+$/, ''));

  const isPrivate = PRIVATE.some((p) => base === p || base.startsWith(p));
  const selfManaged = SELF_MANAGED.some((p) => base === p || base.startsWith(`${p}/`));
  const untranslated =
    UNTRANSLATED_EXACT.includes(base) || UNTRANSLATED_PREFIXES.some((p) => base.startsWith(p));

  // Private/admin routes: keep them out of the index entirely.
  if (isPrivate) {
    return (
      <Helmet defer={false}>
        <html lang={lang} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
    );
  }

  // Sections that manage their own robots/hreflang per item — canonical + lang only.
  if (selfManaged) {
    return (
      <Helmet defer={false}>
        <html lang={lang} />
        <link rel="canonical" href={canonical} />
      </Helmet>
    );
  }

  // Unknown path → the 404 page renders. Canonical to itself, noindex, no hreflang.
  if (!KNOWN_PATHS.has(base)) {
    return (
      <Helmet defer={false}>
        <html lang={lang} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
    );
  }

  // English-only pages: the EN URL is indexable, its /ms twin is not.
  if (untranslated) {
    return (
      <Helmet defer={false}>
        <html lang={lang} />
        <link rel="canonical" href={canonical} />
        {isMs && <meta name="robots" content="noindex,follow" />}
      </Helmet>
    );
  }

  const enUrl = SITE + (base === '/' ? '' : base);
  const msUrl = SITE + (base === '/' ? '/ms' : `/ms${base}`);
  return (
    <Helmet defer={false}>
      <html lang={lang} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ms" href={msUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Helmet>
  );
}
