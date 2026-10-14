import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Wallet, Coins, Eye, Users, TrendingUp, ArrowRight, Quote, ShieldCheck, ChevronDown, BarChart3,
} from 'lucide-react';
import { adsCaseStudies, adsTotals, costPerResult } from '@/data/adsCaseStudies.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

// Real Meta Ads case studies (replaces the old placeholder "e-commerce 4.2x ROAS"
// project). Ad metrics come from each client's Meta Ads Manager report; business
// outcomes and quotes are what clients told us on WhatsApp, and are labelled as such.

const rm = (n) => 'RM' + n.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (n) => n.toLocaleString('en-MY');

function Metric({ icon: Icon, value, label, accent }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <Icon className={`mb-2 h-5 w-5 ${accent ? 'text-brandkraf-purple' : 'text-brandkraf-teal'}`} />
      <div className="text-xl font-extrabold tracking-tight md:text-2xl">{value}</div>
      <div className="text-xs leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}

function CaseStudy({ c, index, T, isMs }) {
  return (
    <motion.article
      id={c.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
    >
      <div className="grid gap-0 lg:grid-cols-5">
        {/* Results */}
        <div className="p-6 md:p-8 lg:col-span-3">
          <div className="mb-6 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-sm font-extrabold tracking-wide text-white shadow-lg shadow-brandkraf-teal/20"
            >
              {c.initials}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brandkraf-teal">
                {T('Case study', 'Kajian kes')} {String(index + 1).padStart(2, '0')} · {isMs ? c.industry.ms : c.industry.en}
              </p>
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{c.client}</h3>
              <p className="text-sm text-muted-foreground">
                {T('Goal: messaging conversations via Meta Ads', 'Matlamat: perbualan mesej melalui Meta Ads')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Metric icon={MessageCircle} value={num(c.results)} label={T('Messaging conversations started', 'Perbualan mesej dimulakan')} />
            <Metric icon={Coins} value={rm(costPerResult(c.spend, c.results))} label={T('Cost per conversation', 'Kos setiap perbualan')} accent />
            <Metric icon={Wallet} value={rm(c.spend)} label={T('Total ad spend', 'Jumlah perbelanjaan iklan')} />
            <Metric icon={Eye} value={num(c.impressions)} label={T('Impressions', 'Tera')} />
            <Metric icon={Users} value={num(c.reach)} label={T('People reached', 'Orang dicapai')} />
            <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal/10 to-brandkraf-purple/10 p-4">
              <TrendingUp className="mb-2 h-5 w-5 text-brandkraf-teal" />
              <div className="text-sm font-semibold leading-snug">{isMs ? c.outcome.ms : c.outcome.en}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">{T('Client-reported', 'Dilaporkan pelanggan')}</div>
            </div>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brandkraf-purple" />
            <span>
              <span className="font-semibold text-foreground">{T('What happened next: ', 'Apa yang berlaku seterusnya: ')}</span>
              {isMs ? c.next.ms : c.next.en}
            </span>
          </p>
        </div>

        {/* Client's own words */}
        <figure className="flex flex-col justify-center border-t border-border bg-gradient-to-br from-brandkraf-teal/5 to-brandkraf-purple/10 p-6 md:p-8 lg:col-span-2 lg:border-l lg:border-t-0">
          <Quote className="mb-3 h-8 w-8 text-brandkraf-purple/60" aria-hidden="true" />
          <blockquote lang="ms" className="text-base font-medium leading-relaxed md:text-lg">
            “{c.quote}”
          </blockquote>
          {!isMs && (
            <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
              <span className="font-semibold not-italic">Translation: </span>
              {c.quoteEn}
            </p>
          )}
          <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            — {c.client}, {T('via WhatsApp', 'melalui WhatsApp')}
          </figcaption>
        </figure>
      </div>

      {/* Campaign-level evidence. Native <details>: accessible, no JS needed. */}
      <details className="group border-t border-border">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 text-sm font-semibold transition-colors hover:bg-muted/40 md:px-8 [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-brandkraf-teal" />
            {T('View the Meta Ads Manager breakdown', 'Lihat pecahan Meta Ads Manager')} ({c.campaigns.length}{' '}
            {c.campaigns.length === 1 ? T('campaign', 'kempen') : T('campaigns', 'kempen')})
          </span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="overflow-x-auto px-6 pb-6 md:px-8">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4 font-semibold">{T('Campaign', 'Kempen')}</th>
                <th className="py-2 pr-4 text-right font-semibold">{T('Conversations', 'Perbualan')}</th>
                <th className="py-2 pr-4 text-right font-semibold">{T('Cost / result', 'Kos / hasil')}</th>
                <th className="py-2 pr-4 text-right font-semibold">{T('Spend', 'Perbelanjaan')}</th>
                <th className="py-2 pr-4 text-right font-semibold">{T('Impressions', 'Tera')}</th>
                <th className="py-2 text-right font-semibold">{T('Reach', 'Capaian')}</th>
              </tr>
            </thead>
            <tbody>
              {c.campaigns.map((r) => (
                <tr key={r.name} className="border-b border-border/60">
                  <td className="py-2.5 pr-4 font-medium text-brandkraf-teal">{r.name}</td>
                  <td className="py-2.5 pr-4 text-right tabular-nums">{num(r.results)}</td>
                  <td className="py-2.5 pr-4 text-right tabular-nums">{rm(costPerResult(r.spend, r.results))}</td>
                  <td className="py-2.5 pr-4 text-right tabular-nums">{rm(r.spend)}</td>
                  <td className="py-2.5 pr-4 text-right tabular-nums">{num(r.impressions)}</td>
                  <td className="py-2.5 text-right tabular-nums">{num(r.reach)}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2.5 pr-4">{T('Total', 'Jumlah')}</td>
                <td className="py-2.5 pr-4 text-right tabular-nums">{num(c.results)}</td>
                <td className="py-2.5 pr-4 text-right tabular-nums">{rm(costPerResult(c.spend, c.results))}</td>
                <td className="py-2.5 pr-4 text-right tabular-nums">{rm(c.spend)}</td>
                <td className="py-2.5 pr-4 text-right tabular-nums">{num(c.impressions)}</td>
                <td className="py-2.5 text-right tabular-nums">{num(c.reach)}</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-muted-foreground">
            {T(
              'Total reach is de-duplicated by Meta, so it is lower than the sum of each campaign’s reach.',
              'Jumlah capaian dinyahduakan oleh Meta, jadi ia lebih rendah daripada jumlah capaian setiap kempen.'
            )}
          </p>
        </div>
      </details>
    </motion.article>
  );
}

export default function AdsCaseStudies() {
  const { lang } = useLanguage();
  const isMs = lang === 'ms';
  const T = (en, ms) => (isMs ? ms : en);
  const industries = new Set(adsCaseStudies.map((c) => c.industry.en)).size;

  const summary = [
    { icon: MessageCircle, value: num(adsTotals.results), label: T('Messaging conversations started', 'Perbualan mesej dimulakan') },
    { icon: Wallet, value: rm(adsTotals.spend), label: T('Total ad spend', 'Jumlah perbelanjaan iklan') },
    { icon: Coins, value: rm(adsTotals.spend / adsTotals.results), label: T('Average cost per conversation', 'Purata kos setiap perbualan') },
    { icon: Eye, value: num(adsTotals.impressions), label: T('Impressions', 'Tera') },
  ];

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden border-t border-border">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="chip-brand mb-4 inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> {T('Verified Meta Ads results', 'Hasil Meta Ads disahkan')}
          </span>
          <h2 className="mb-4">
            {isMs ? (
              <>Hasil sebenar untuk <span className="text-gradient">pelanggan sebenar</span></>
            ) : (
              <>Real results for <span className="text-gradient">real clients</span></>
            )}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {T(
              `${adsTotals.clients} Malaysian businesses, ${industries} industries. Every ad figure below comes from the client’s own Meta Ads Manager report, and every quote is what the client told us on WhatsApp, in their own words.`,
              `${adsTotals.clients} perniagaan Malaysia, ${industries} industri. Setiap angka iklan di bawah datang daripada laporan Meta Ads Manager pelanggan sendiri, dan setiap petikan ialah apa yang pelanggan beritahu kami di WhatsApp, dalam kata-kata mereka sendiri.`
            )}
          </p>
        </motion.div>

        {/* Portfolio-wide totals */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl md:p-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {T(`Combined results · ${adsTotals.clients} clients`, `Hasil gabungan · ${adsTotals.clients} pelanggan`)}
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {summary.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-2 h-6 w-6 text-brandkraf-teal" />
                <div className="text-2xl font-extrabold tracking-tight md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-white/70 md:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {adsCaseStudies.map((c, i) => (
            <CaseStudy key={c.slug} c={c} index={i} T={T} isMs={isMs} />
          ))}
        </div>

        <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brandkraf-teal" />
          {T(
            'Ad metrics are taken from Meta Ads Manager reports provided by each client. Sales and enrolment outcomes are client-reported via WhatsApp and are not independently audited.',
            'Metrik iklan diambil daripada laporan Meta Ads Manager yang diberikan oleh setiap pelanggan. Hasil jualan dan pendaftaran dilaporkan oleh pelanggan melalui WhatsApp dan tidak diaudit secara bebas.'
          )}
        </p>
      </div>
    </section>
  );
}
