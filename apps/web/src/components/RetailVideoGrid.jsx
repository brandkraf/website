import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "12RfiUUBRY4GZHxHukB6BCkwY9CJ9DBxG",
  "14LfEVQNlQIVQFXu4TmoJU37N5j1Dqc4c",
  "1EGRRMptwqzNS7VguA_h50K2G6DPdnoB9",
  "1HYhxfHYAV9GHR50RgN3nx28iplsekeBq",
  "1HuWS_qDi2w_IzdelVCHEVgN3KirHoFdA",
  "1MwiunvancQLt17FQBis4MmVDYRkSXvAp",
  "1Og8gNdcGjpxpWs6WZsFFysQnSIuzGmNT",
  "1P0w4GJdjo3nI1yyJ5rLiwX-XJAjXjNsY",
  "1RPwaqv83J14c2pjJFPUeiFlIJLV6-geH",
  "1XfE1d-_Is533KCC-kzI3Z4ksAkMocEMA",
  "1YoDOzIL8F8XTIVXPE5ghX_6MJw2Q-N1D",
  "1aYKD1oKIuEGH5grlI_ixC3KsDWpZB5_v",
  "1dlywt-tzq0F3FgOC7791cLwxrhaXa5oB",
  "1eM87eFXzywwBiCffPG6hSyaIUYXTGvOP",
  "1kTTgV8tyEEoPCgW5rCvlg_DB9J_S9xpJ",
  "1o75PtN0f-PMxbfRpukbKHpUuDIxsvmcK",
  "1spgFz76xiJY04VWZvCMTmxzKSaiVG-za",
  "1yrVw525cK8gKhfCdKg8D7r9SUxKKz97F"
];

export default function RetailVideoGrid() {
  return (
    <div className="w-full py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured UGC Content</h2>
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {VIDEO_IDS.map((id, index) => (
          <LazyVideoIframe
            key={`${id}-${index}`}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Retail UGC Video ${index + 1}`}
            index={index}
            className="border-[10px] border-[#14B8A6] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-black overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 w-full mx-auto max-w-[350px] aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}