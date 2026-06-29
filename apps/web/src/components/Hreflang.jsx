import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Bilingual search signals. While BM content is still being translated, /ms pages
// exist for users (via the toggle) but are NOT advertised to search engines — they
// carry noindex so Google never indexes English content under a Malay URL.
// Flip BM_LIVE to true once BM content is in place; it then emits proper hreflang
// alternates linking the EN and BM versions so both rank.
const BM_LIVE = false;

const SITE = 'https://www.brandkraf.com';
const PRIVATE = ['/admin', '/checkout', '/payment', '/media-upload'];
// Sections whose pages manage their own per-page hreflang/canonical/robots (they know
// which items are translated), so this global component only sets <html lang> for them.
const SELF_MANAGED = ['/blog'];

export default function Hreflang() {
  const { pathname } = useLocation();
  const isMs = pathname === '/ms' || pathname.startsWith('/ms/');
  const base = pathname === '/ms' ? '/' : isMs ? pathname.slice(3) : pathname;
  const lang = isMs ? 'ms' : 'en';

  if (
    PRIVATE.some((p) => base === p || base.startsWith(p)) ||
    SELF_MANAGED.some((p) => base === p || base.startsWith(`${p}/`))
  ) {
    return (
      <Helmet>
        <html lang={lang} />
      </Helmet>
    );
  }

  if (!BM_LIVE) {
    return (
      <Helmet>
        <html lang={lang} />
        {isMs && <meta name="robots" content="noindex,follow" />}
      </Helmet>
    );
  }

  const enUrl = SITE + (base === '/' ? '' : base);
  const msUrl = SITE + (base === '/' ? '/ms' : `/ms${base}`);
  return (
    <Helmet>
      <html lang={lang} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ms" href={msUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Helmet>
  );
}
