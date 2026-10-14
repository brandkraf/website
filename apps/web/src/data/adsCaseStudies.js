// Meta Ads case studies for /portfolio/paid-advertising.
// Source: "BrandKraf Ads Management Portfolio Ver 2.2 2026" (client Meta Ads Manager
// reports + client WhatsApp feedback).
//
// Cost per result is deliberately NOT stored — the page derives it as spend / results,
// exactly as Meta Ads Manager does. The source PDF printed "RM6.48" for BNE's
// "BNE – new – 2" row where its own numbers give RM494.54 / 30 = RM16.48; deriving the
// figure makes that kind of transcription slip impossible here.
//
// Client-level `impressions` equals the sum of its campaign rows. Client-level `reach`
// does NOT — Meta de-duplicates people reached by several campaigns — so it is stored
// as reported in each client's "Total results" row.
//
// NOTE: the meta description in src/pages/PaidAdvertisingPage.jsx quotes the totals
// (1,742 conversations, RM5.44 average) as literal text, because the prerenderer reads it
// from source. Update it there if these case studies change.
//
// Quotes are kept verbatim (as typed on WhatsApp). `quoteEn` is our translation, shown
// on the English page only.

export const adsCaseStudies = [
  {
    slug: 'nachi-toddy',
    client: 'Nachi Toddy',
    initials: 'NT',
    industry: { en: 'F&B / Restaurant', ms: 'F&B / Restoran' },
    results: 391,
    spend: 1800.01,
    impressions: 175599,
    reach: 62257,
    campaigns: [{ name: 'TODDY NACHI', results: 391, spend: 1800.01, impressions: 175599, reach: 62257 }],
    outcome: {
      en: 'Monthly sales grew from RM10–12k to RM18k+, then RM20k+',
      ms: 'Jualan bulanan meningkat daripada RM10–12k kepada RM18k+, kemudian RM20k+',
    },
    next: {
      en: 'Asked to raise the marketing budget to RM2k for the following month',
      ms: 'Meminta untuk menaikkan bajet pemasaran kepada RM2k untuk bulan berikutnya',
    },
    quote:
      'Hi team..FYI my average sales dlm rm10-12k, last month was rm18k+, this month rm20k+...may I ask next month maybe nak try to up my marketing budget to rm2k, what can u provide as I plan nak increase followers.',
    quoteEn:
      'Our average sales used to be RM10–12k. Last month was RM18k+, and this month RM20k+. Next month I would like to raise my marketing budget to RM2k — what can you offer? I also want to grow our followers.',
  },
  {
    slug: 'bne-aircond',
    client: 'BNE Aircond',
    initials: 'BNE',
    industry: { en: 'Aircond Services', ms: 'Perkhidmatan Penghawa Dingin' },
    results: 304,
    spend: 2821.98,
    impressions: 172181,
    reach: 53875,
    campaigns: [
      { name: 'BNE – new – 3', results: 45, spend: 487.53, impressions: 37862, reach: 19600 },
      { name: 'BNE – new – 2', results: 30, spend: 494.54, impressions: 25592, reach: 14207 },
      { name: 'BNE – new', results: 221, spend: 1801.88, impressions: 106806, reach: 39372 },
      { name: 'BNE', results: 8, spend: 38.03, impressions: 1921, reach: 1337 },
    ],
    outcome: {
      en: 'High enquiry volume, with many enquiries closing as jobs',
      ms: 'Jumlah pertanyaan yang tinggi, dengan banyak pertanyaan menjadi tempahan kerja',
    },
    next: {
      en: 'Customers were still messaging on WhatsApp after the campaigns ended',
      ms: 'Pelanggan masih menghubungi melalui WhatsApp selepas kempen tamat',
    },
    quote: 'Terima kasih team brandkraf..admin kata mmg ramai dan yg deal pun ramai.',
    quoteEn: 'Thank you, BrandKraf team — our admin says there are a lot of enquiries, and a lot of them are closing.',
  },
  {
    slug: 'amyra',
    client: 'Amyra',
    initials: 'A',
    industry: { en: 'Bridal / Fashion', ms: 'Pengantin / Fesyen' },
    results: 655,
    spend: 3030.08,
    impressions: 166893,
    reach: 59996,
    campaigns: [
      { name: 'Amyra Aug', results: 49, spend: 222.79, impressions: 13348, reach: 6958 },
      { name: 'Amyra', results: 606, spend: 2807.29, impressions: 153545, reach: 56538 },
    ],
    outcome: {
      en: 'Highest monthly sales so far, according to the client',
      ms: 'Jualan bulanan tertinggi setakat ini, menurut pelanggan',
    },
    next: {
      en: 'Shifted focus to company dinner bookings once wedding customers had done their viewings',
      ms: 'Beralih fokus kepada tempahan majlis makan malam syarikat selepas pelanggan perkahwinan selesai meninjau',
    },
    quote: 'alhamdulillah last month sales tertinggi',
    quoteEn: 'Alhamdulillah — last month our sales were the highest.',
  },
  {
    slug: 'bestskill',
    client: 'BestSkill TVET Training',
    initials: 'BS',
    industry: { en: 'TVET / Education', ms: 'TVET / Pendidikan' },
    results: 392,
    spend: 1818.83,
    impressions: 148241,
    reach: 52855,
    campaigns: [
      { name: 'bestskill elektrik', results: 116, spend: 918.07, impressions: 80258, reach: 35433 },
      { name: 'BestSkill', results: 276, spend: 900.76, impressions: 67983, reach: 22694 },
    ],
    outcome: {
      en: 'Student intake increased after the welding course campaign',
      ms: 'Pengambilan pelajar meningkat selepas kempen kursus kimpalan',
    },
    next: {
      en: 'Moved on to promoting the electrical course — with a bigger ad budget',
      ms: 'Beralih kepada mempromosikan kursus elektrik — dengan bajet iklan yang lebih besar',
    },
    quote:
      'Hi, so far semuanya ok. I sangat happy bos. Sebab Campaign bulan lepas welding, intake student i increase. Bulan ni i nak fokus pada electrical boleh? Tapi ads budget i nak tambah. Sebab intake ni untuk sebulan sahaja.',
    quoteEn:
      'So far everything is good — I am very happy, boss. Last month’s welding campaign increased our student intake. This month, can we focus on electrical? I want to increase the ad budget, because this intake is only open for one month.',
  },
];

export const costPerResult = (spend, results) => spend / results;

// Portfolio-wide totals, derived from the case studies so they can never drift.
export const adsTotals = adsCaseStudies.reduce(
  (t, c) => ({
    clients: t.clients + 1,
    results: t.results + c.results,
    spend: t.spend + c.spend,
    impressions: t.impressions + c.impressions,
  }),
  { clients: 0, results: 0, spend: 0, impressions: 0 }
);
