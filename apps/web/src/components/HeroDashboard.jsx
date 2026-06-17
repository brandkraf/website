import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, MousePointerClick, Eye } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter.jsx';

const EASE = [0.22, 1, 0.36, 1];

function MiniBars({ values }) {
  return (
    <div className="flex h-6 items-end gap-0.5">
      {values.map((v, i) => (
        <motion.span
          key={i}
          className="w-1 origin-bottom rounded-full bg-gradient-to-t from-brandkraf-teal to-brandkraf-purple"
          style={{ height: `${v}%` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.7 + i * 0.05, ease: EASE }}
        />
      ))}
    </div>
  );
}

function HeroDashboard() {
  const kpis = [
    { icon: Eye, label: 'Impressions', value: 847, decimals: 0, suffix: 'K', bars: [30, 45, 40, 60, 72] },
    { icon: Users, label: 'New Followers', value: 12.4, decimals: 1, suffix: 'K', bars: [40, 55, 50, 68, 88] },
    { icon: MousePointerClick, label: 'Conversions', value: 3.5, decimals: 1, suffix: 'x', bars: [35, 42, 58, 64, 80] },
  ];

  return (
    <div className="w-full text-left">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Campaign Performance</p>
          <h3 className="text-base font-bold text-foreground sm:text-lg">Audience Growth</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      {/* Main chart card */}
      <div className="mb-3 rounded-2xl border border-border/60 bg-white/60 p-4 backdrop-blur-sm">
        <div className="mb-2 flex items-end justify-between">
          <div>
            <div className="text-2xl font-extrabold text-foreground sm:text-3xl">
              <AnimatedCounter value={1.24} decimals={2} suffix="M" />
            </div>
            <p className="text-xs text-muted-foreground">Total reach this quarter</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brandkraf-teal/10 px-2 py-1 text-xs font-bold text-brandkraf-teal">
            <ArrowUpRight className="h-3.5 w-3.5" /> +24.8%
          </span>
        </div>

        <svg viewBox="0 0 600 180" className="h-28 w-full sm:h-32" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hdArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hdLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
          {[40, 90, 140].map((y) => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="currentColor" className="text-border" strokeOpacity="0.5" strokeDasharray="4 7" />
          ))}
          <motion.path
            d="M0,150 C70,140 110,120 170,110 C240,98 280,70 350,72 C420,74 470,40 540,30 L600,22 L600,180 L0,180 Z"
            fill="url(#hdArea)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          />
          <motion.path
            d="M0,150 C70,140 110,120 170,110 C240,98 280,70 350,72 C420,74 470,40 540,30 L600,22"
            fill="none"
            stroke="url(#hdLine)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
          <motion.circle cx="600" cy="22" r="5" fill="#9333EA" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: 'spring', stiffness: 260 }} />
        </svg>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-3 gap-2.5">
        {kpis.map((k, i) => {
          const Icon = k.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 + i * 0.1, ease: EASE }}
              className="rounded-xl border border-border/60 bg-white/60 p-3 backdrop-blur-sm"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 text-brandkraf-teal">
                  <Icon className="h-4 w-4" />
                </span>
                <MiniBars values={k.bars} />
              </div>
              <div className="text-base font-extrabold text-foreground">
                <AnimatedCounter value={k.value} decimals={k.decimals} suffix={k.suffix} />
              </div>
              <p className="text-[0.7rem] leading-tight text-muted-foreground">{k.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroDashboard;
